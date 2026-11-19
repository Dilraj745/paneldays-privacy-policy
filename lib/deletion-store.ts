/**
 * deletion-store.ts
 * In-memory verification and audit store for external account deletion.
 * Validates ownership with time-limited OTPs and maintains a record of completed deletions.
 */

import crypto from "crypto";

export interface PendingVerification {
  email: string;
  userId: string;
  codeHash: string;
  expiresAt: number;
  attempts: number;
  createdAt: number;
}

export interface CompletedDeletionRecord {
  referenceId: string;
  maskedEmail: string;
  deletedAt: string;
  status: "DELETED_FROM_CLERK";
}

// Stores
const pendingVerifications = new Map<string, PendingVerification>();
const completedDeletions = new Map<string, CompletedDeletionRecord>();
const emailRequestTimestamps = new Map<string, number[]>();

const CODE_EXPIRATION_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 3;
const MAX_REQUESTS_PER_HOUR = 3;

/**
 * Periodically purge expired records to avoid memory leaks.
 */
function cleanupExpired() {
  const now = Date.now();
  for (const [key, item] of pendingVerifications.entries()) {
    if (item.expiresAt < now || item.attempts >= MAX_ATTEMPTS) {
      pendingVerifications.delete(key);
    }
  }

  // Purge rate-limit entries older than 1 hour
  const oneHourAgo = now - 60 * 60 * 1000;
  for (const [email, timestamps] of emailRequestTimestamps.entries()) {
    const valid = timestamps.filter((t) => t > oneHourAgo);
    if (valid.length === 0) {
      emailRequestTimestamps.delete(email);
    } else {
      emailRequestTimestamps.set(email, valid);
    }
  }
}

/**
 * Hash an OTP code for storage so plain-text codes aren't kept in memory.
 */
function hashCode(code: string, email: string): string {
  return crypto
    .createHash("sha256")
    .update(`${email.toLowerCase()}:${code.trim()}`)
    .digest("hex");
}

/**
 * Masks an email for privacy in audit logs (e.g. j***e@example.com).
 */
export function maskEmail(email: string): string {
  const parts = email.split("@");
  if (parts.length !== 2) return "***@***";
  const [local, domain] = parts;
  if (local.length <= 2) {
    return `${local[0]}*@${domain}`;
  }
  return `${local[0]}***${local[local.length - 1]}@${domain}`;
}

/**
 * Checks email-level rate limiting (max requests per hour).
 */
export function checkEmailRateLimit(email: string): boolean {
  cleanupExpired();
  const cleanEmail = email.toLowerCase().trim();
  const now = Date.now();
  const timestamps = emailRequestTimestamps.get(cleanEmail) || [];
  const oneHourAgo = now - 60 * 60 * 1000;
  const recent = timestamps.filter((t) => t > oneHourAgo);

  if (recent.length >= MAX_REQUESTS_PER_HOUR) {
    return false;
  }

  recent.push(now);
  emailRequestTimestamps.set(cleanEmail, recent);
  return true;
}

/**
 * Generates a secure 6-digit OTP code and registers a pending verification.
 */
export function createVerificationRecord(
  email: string,
  userId: string
): { code: string; expiresMinutes: number } {
  cleanupExpired();
  const cleanEmail = email.toLowerCase().trim();

  // Generate cryptographically secure 6-digit number
  const rawCode = crypto.randomInt(100000, 1000000).toString();
  const codeHash = hashCode(rawCode, cleanEmail);

  pendingVerifications.set(cleanEmail, {
    email: cleanEmail,
    userId,
    codeHash,
    expiresAt: Date.now() + CODE_EXPIRATION_MS,
    attempts: 0,
    createdAt: Date.now(),
  });

  return {
    code: rawCode,
    expiresMinutes: Math.round(CODE_EXPIRATION_MS / 60000),
  };
}

/**
 * Validates a submitted verification code for an email.
 */
export function verifyDeletionCode(
  email: string,
  submittedCode: string
): { valid: boolean; userId?: string; error?: string } {
  cleanupExpired();
  const cleanEmail = email.toLowerCase().trim();
  const pending = pendingVerifications.get(cleanEmail);

  if (!pending) {
    return {
      valid: false,
      error:
        "No active deletion verification found for this email. Please request a new verification code.",
    };
  }

  if (Date.now() > pending.expiresAt) {
    pendingVerifications.delete(cleanEmail);
    return {
      valid: false,
      error: "Verification code has expired. Please request a new code.",
    };
  }

  if (pending.attempts >= MAX_ATTEMPTS) {
    pendingVerifications.delete(cleanEmail);
    return {
      valid: false,
      error: "Too many failed attempts. Please request a new verification code.",
    };
  }

  const expectedHash = hashCode(submittedCode, cleanEmail);
  if (crypto.timingSafeEqual(Buffer.from(pending.codeHash), Buffer.from(expectedHash))) {
    // Valid! Return userId and clear pending entry
    const userId = pending.userId;
    pendingVerifications.delete(cleanEmail);
    return { valid: true, userId };
  }

  pending.attempts += 1;
  if (pending.attempts >= MAX_ATTEMPTS) {
    pendingVerifications.delete(cleanEmail);
    return {
      valid: false,
      error: "Too many failed attempts. Please request a new verification code.",
    };
  }
  const remaining = MAX_ATTEMPTS - pending.attempts;
  return {
    valid: false,
    error: `Incorrect verification code. ${remaining} attempt(s) remaining.`,
  };
}

/**
 * Records a completed deletion in the in-memory audit log.
 */
export function recordCompletedDeletion(
  email: string,
  referenceId: string
): CompletedDeletionRecord {
  const masked = maskEmail(email);
  const record: CompletedDeletionRecord = {
    referenceId,
    maskedEmail: masked,
    deletedAt: new Date().toISOString(),
    status: "DELETED_FROM_CLERK",
  };
  completedDeletions.set(referenceId, record);
  return record;
}

/**
 * Looks up a completed deletion record by reference ID.
 */
export function getCompletedDeletionRecord(
  referenceId: string
): CompletedDeletionRecord | null {
  return completedDeletions.get(referenceId) || null;
}
