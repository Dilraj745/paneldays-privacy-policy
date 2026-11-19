import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  checkRateLimit,
  getClientIp,
  isValidEmail,
  sanitizeHeader,
  generateReferenceId,
} from "@/lib/security";
import {
  isClerkConfigured,
  findClerkUserByEmail,
  deleteClerkUser,
} from "@/lib/clerk-admin";
import {
  checkEmailRateLimit,
  createVerificationRecord,
  verifyDeletionCode,
  recordCompletedDeletion,
} from "@/lib/deletion-store";
import {
  buildDeletionVerificationEmail,
  buildDeletionConfirmationEmail,
} from "@/lib/email-templates";

/**
 * GET: Reports the backend configuration status of the deletion subsystem.
 */
export async function GET() {
  const clerkOk = isClerkConfigured();
  const resendOk = Boolean(process.env.RESEND_API_KEY);

  return NextResponse.json({
    status: "ok",
    backendConfigured: clerkOk && resendOk,
    clerkConfigured: clerkOk,
    emailConfigured: resendOk,
    supportEmail: "paneldays@gmail.com",
    packageId: "com.paneldays.app",
  });
}

/**
 * POST: Handles the 2-step verified external account deletion flow.
 */
export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers);

    // 1. IP-level rate limiting (10 requests per 15 minutes)
    const rateLimit = checkRateLimit(`deletion_api:${ip}`, 10, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many requests from this connection. Please wait a few minutes before trying again or email paneldays@gmail.com directly.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(
              (rateLimit.resetAt - Date.now()) / 1000
            ).toString(),
          },
        }
      );
    }

    // 2. Parse request body
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    const action = String(body.action || "").trim();

    // =========================================================================
    // ACTION 1: REQUEST VERIFICATION CODE
    // =========================================================================
    if (action === "request_code") {
      const rawEmail = body.email;
      if (!isValidEmail(rawEmail)) {
        return NextResponse.json(
          {
            success: false,
            error: "Please provide a valid registered email address.",
          },
          { status: 400 }
        );
      }
      const email = (rawEmail as string).trim().toLowerCase();

      // Check email-level rate limit
      if (!checkEmailRateLimit(email)) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Too many verification code requests for this email address. Please check your inbox or wait 1 hour.",
          },
          { status: 429 }
        );
      }

      // Check if Clerk Backend is configured
      if (!isClerkConfigured()) {
        return NextResponse.json(
          {
            success: false,
            unconfigured: true,
            error:
              "Automated remote deletion requires backend configuration (CLERK_SECRET_KEY). Please contact paneldays@gmail.com for assisted account deletion.",
          },
          { status: 503 }
        );
      }

      // Query Clerk to locate user
      const clerkLookup = await findClerkUserByEmail(email);
      if (clerkLookup.error) {
        console.error(
          "[Account Deletion] Clerk user lookup error:",
          clerkLookup.error
        );
        return NextResponse.json(
          {
            success: false,
            error:
              "Unable to verify account with the authentication server. Please try again later.",
          },
          { status: 502 }
        );
      }

      if (!clerkLookup.user) {
        return NextResponse.json(
          {
            success: false,
            notFound: true,
            error:
              "No registered PanelDays account found with this email address. Please make sure you are entering the email address you signed in with.",
          },
          { status: 404 }
        );
      }

      // Generate 6-digit OTP code and register pending verification
      const { code, expiresMinutes } = createVerificationRecord(
        email,
        clerkLookup.user.id
      );

      // Check Resend email provider configuration
      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        return NextResponse.json(
          {
            success: false,
            unconfigured: true,
            error:
              "Email dispatch service is currently not configured on this deployment. Please contact paneldays@gmail.com for assisted deletion.",
          },
          { status: 503 }
        );
      }

      // Send verification code email via Resend
      const resend = new Resend(resendApiKey);
      const emailContent = buildDeletionVerificationEmail({
        email,
        code,
        expiresMinutes,
      });

      const fromAddress =
        process.env.DELETION_FROM_EMAIL ||
        process.env.CONTACT_FROM_EMAIL ||
        "PanelDays Support <onboarding@resend.dev>";

      const sendResult = await resend.emails.send({
        from: fromAddress,
        to: [email],
        subject: emailContent.subject,
        html: emailContent.html,
        text: emailContent.text,
      });

      if (sendResult.error) {
        console.error(
          "[Account Deletion] Failed to send verification email:",
          sendResult.error
        );
        return NextResponse.json(
          {
            success: false,
            error:
              "Failed to dispatch verification code to your email. Please try again or contact support at paneldays@gmail.com.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        action: "code_sent",
        message:
          "A 6-digit verification code has been dispatched to your email address. Please check your inbox and enter it below.",
      });
    }

    // =========================================================================
    // ACTION 2: VERIFY CODE AND DELETE ACCOUNT FROM CLERK
    // =========================================================================
    if (action === "verify_and_delete") {
      const rawEmail = body.email;
      if (!isValidEmail(rawEmail)) {
        return NextResponse.json(
          { success: false, error: "Invalid email address format." },
          { status: 400 }
        );
      }
      const email = (rawEmail as string).trim().toLowerCase();

      const rawCode = String(body.code || "").trim();
      if (!/^\d{6}$/.test(rawCode)) {
        return NextResponse.json(
          {
            success: false,
            error: "Please enter the valid 6-digit verification code.",
          },
          { status: 400 }
        );
      }

      const confirmationKeyword = sanitizeHeader(body.confirmationKeyword, 20);
      if (confirmationKeyword !== "DELETE") {
        return NextResponse.json(
          {
            success: false,
            error: "Please type DELETE exactly to confirm permanent account deletion.",
          },
          { status: 400 }
        );
      }

      // Verify the OTP code
      const verifyResult = verifyDeletionCode(email, rawCode);
      if (!verifyResult.valid || !verifyResult.userId) {
        return NextResponse.json(
          {
            success: false,
            error: verifyResult.error || "Invalid verification code.",
          },
          { status: 400 }
        );
      }

      // Check Clerk backend configuration
      if (!isClerkConfigured()) {
        return NextResponse.json(
          {
            success: false,
            unconfigured: true,
            error:
              "Automated deletion backend is unconfigured. Please contact paneldays@gmail.com.",
          },
          { status: 503 }
        );
      }

      // Execute authoritative deletion on Clerk
      const clerkDeletion = await deleteClerkUser(verifyResult.userId);
      if (!clerkDeletion.success) {
        console.error(
          `[Account Deletion] Clerk deletion failed for user ${verifyResult.userId}:`,
          clerkDeletion.error
        );
        return NextResponse.json(
          {
            success: false,
            error:
              clerkDeletion.error ||
              "The authentication server rejected the deletion request. Please try again or contact support.",
          },
          { status: 502 }
        );
      }

      // Deletion succeeded on Clerk!
      const referenceId = generateReferenceId("DEL");
      const record = recordCompletedDeletion(email, referenceId);

      // Attempt to send confirmation email (non-blocking)
      const resendApiKey = process.env.RESEND_API_KEY;
      if (resendApiKey) {
        try {
          const resend = new Resend(resendApiKey);
          const confirmContent = buildDeletionConfirmationEmail({
            email,
            referenceId,
            deletedAt: record.deletedAt,
          });
          const fromAddress =
            process.env.DELETION_FROM_EMAIL ||
            process.env.CONTACT_FROM_EMAIL ||
            "PanelDays Support <onboarding@resend.dev>";

          await resend.emails.send({
            from: fromAddress,
            to: [email],
            subject: confirmContent.subject,
            html: confirmContent.html,
            text: confirmContent.text,
          });
        } catch (mailErr) {
          console.warn(
            "[Account Deletion] Confirmation email dispatch failed:",
            mailErr
          );
        }
      }

      return NextResponse.json({
        success: true,
        referenceId,
        message:
          "Your PanelDays account and associated authentication credentials have been permanently deleted from Clerk.",
      });
    }

    return NextResponse.json(
      {
        success: false,
        error:
          "Invalid action specified. Supported actions: 'request_code', 'verify_and_delete'.",
      },
      { status: 400 }
    );
  } catch (error: unknown) {
    console.error("[Account Deletion API] Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An internal server error occurred while processing your request. Please try again or contact paneldays@gmail.com.",
      },
      { status: 500 }
    );
  }
}
