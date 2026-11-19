import crypto from "crypto";

// In-memory sliding-window / token-bucket store for serverless lambdas
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Clean up stale entries every 10 minutes to avoid memory accumulation
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupStaleEntries() {
  const now = Date.now();
  if (now - lastCleanup > CLEANUP_INTERVAL_MS) {
    lastCleanup = now;
    for (const [key, record] of rateLimitStore.entries()) {
      if (record.resetAt < now) {
        rateLimitStore.delete(key);
      }
    }
  }
}

/**
 * Basic in-memory rate limiter for serverless endpoints.
 * @param identifier Client IP or composite key
 * @param maxRequests Maximum requests allowed within windowMs
 * @param windowMs Time window in milliseconds (default: 15 minutes)
 */
export function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 15 * 60 * 1000
): { allowed: boolean; remaining: number; resetAt: number } {
  cleanupStaleEntries();

  const now = Date.now();
  const existing = rateLimitStore.get(identifier);

  if (!existing || existing.resetAt < now) {
    const record: RateLimitRecord = {
      count: 1,
      resetAt: now + windowMs,
    };
    rateLimitStore.set(identifier, record);
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetAt: record.resetAt,
    };
  }

  if (existing.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: existing.resetAt,
    };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: maxRequests - existing.count,
    resetAt: existing.resetAt,
  };
}

/**
 * Extract client IP from standard request headers.
 */
export function getClientIp(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  const cfConnectingIp = headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  return "anonymous-client";
}

/**
 * Validate email address format.
 */
export function isValidEmail(email: unknown): boolean {
  if (typeof email !== "string") return false;
  const trimmed = email.trim();
  if (trimmed.length === 0 || trimmed.length > 254) return false;
  // Strict standard regex without dangerous backtracking
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(trimmed);
}

/**
 * Sanitize text to remove newlines for header injection protection and limit length.
 */
export function sanitizeHeader(value: unknown, maxLength: number = 100): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\r\n\t]/g, " ")
    .trim()
    .slice(0, maxLength);
}

/**
 * Sanitize multiline text (e.g. message bodies).
 */
export function sanitizeBody(value: unknown, maxLength: number = 5000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

/**
 * Escape HTML special characters to prevent HTML/XSS injection in emails.
 */
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Generate human-readable, unique reference ID for tickets and requests.
 * Format: PREFIX-XXXXXX (e.g., DEL-8A3F19, CNT-2F9B4D)
 */
export function generateReferenceId(prefix: "DEL" | "CNT"): string {
  const bytes = crypto.randomBytes(3).toString("hex").toUpperCase();
  return `${prefix}-${bytes}`;
}
