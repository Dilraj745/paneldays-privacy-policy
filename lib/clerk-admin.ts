/**
 * clerk-admin.ts
 * Server-side administrative Clerk integration for PanelDays.
 * Executes authoritative remote account deletion against the Clerk Backend REST API.
 * 
 * NEVER expose CLERK_SECRET_KEY to client-side code.
 */

export interface ClerkUserRecord {
  id: string;
  emailAddress: string;
  firstName?: string;
  lastName?: string;
  createdAt: number;
}

export interface ClerkDeletionResult {
  success: boolean;
  deleted?: boolean;
  error?: string;
  status?: number;
}

const CLERK_API_BASE = "https://api.clerk.com/v1";

/**
 * Checks whether the Clerk Secret Key is configured in the environment.
 */
export function isClerkConfigured(): boolean {
  const key = process.env.CLERK_SECRET_KEY;
  return typeof key === "string" && key.trim().startsWith("sk_");
}

/**
 * Retrieves the configured Clerk Secret Key or throws if unconfigured.
 */
function getClerkSecretKey(): string {
  const key = process.env.CLERK_SECRET_KEY;
  if (!key || !key.trim().startsWith("sk_")) {
    throw new Error(
      "CLERK_SECRET_KEY is not configured on this server. External account deletion cannot be executed."
    );
  }
  return key.trim();
}

/**
 * Queries Clerk Backend API to locate a registered user by email address.
 * Returns the matching user record or null if not found.
 */
export async function findClerkUserByEmail(
  email: string
): Promise<{ user: ClerkUserRecord | null; error?: string }> {
  try {
    const secretKey = getClerkSecretKey();
    const cleanEmail = email.trim().toLowerCase();

    const url = `${CLERK_API_BASE}/users?email_address=${encodeURIComponent(cleanEmail)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorJson = await response.json().catch(() => ({}));
      const errorMsg =
        errorJson?.errors?.[0]?.message ||
        `Clerk API returned HTTP ${response.status}`;
      return { user: null, error: errorMsg };
    }

    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) {
      return { user: null };
    }

    const rawUser = data[0];
    const userEmail =
      rawUser?.email_addresses?.[0]?.email_address || cleanEmail;

    return {
      user: {
        id: rawUser.id,
        emailAddress: userEmail,
        firstName: rawUser.first_name || undefined,
        lastName: rawUser.last_name || undefined,
        createdAt: rawUser.created_at || Date.now(),
      },
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown Clerk lookup error";
    return { user: null, error: message };
  }
}

/**
 * Permanently deletes a user from the Clerk authentication directory by User ID.
 * This completely invalidates all user sessions, OAuth tokens, and authentication records.
 */
export async function deleteClerkUser(userId: string): Promise<ClerkDeletionResult> {
  try {
    const secretKey = getClerkSecretKey();

    if (!userId || !userId.trim()) {
      return { success: false, error: "Missing or invalid Clerk User ID." };
    }

    const url = `${CLERK_API_BASE}/users/${encodeURIComponent(userId.trim())}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorJson = await response.json().catch(() => ({}));
      const errorMsg =
        errorJson?.errors?.[0]?.message ||
        `Clerk deletion rejected with HTTP ${response.status}`;
      return {
        success: false,
        error: errorMsg,
        status: response.status,
      };
    }

    const data = await response.json().catch(() => ({}));
    return {
      success: true,
      deleted: data.deleted !== false,
      status: response.status,
    };
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Network failure communicating with Clerk.";
    return {
      success: false,
      error: message,
    };
  }
}
