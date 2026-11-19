import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  checkRateLimit,
  getClientIp,
  isValidEmail,
  sanitizeHeader,
  sanitizeBody,
  generateReferenceId,
} from "@/lib/security";
import { buildContactNotificationEmail } from "@/lib/email-templates";

const ALLOWED_CATEGORIES = [
  "General Support",
  "Privacy Inquiry",
  "Account Deletion",
  "Subscription & Billing",
  "Bug Report",
  "Other",
];

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers);

    // 1. Rate Limiting Check (5 submissions per 15 minutes per IP)
    const rateLimit = checkRateLimit(`contact:${ip}`, 5, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many contact requests from this connection. Please wait a few minutes before trying again or email paneldays@gmail.com directly.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((rateLimit.resetAt - Date.now()) / 1000).toString(),
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

    // 3. Honeypot Bot Detection
    // Bots usually fill hidden fields (e.g. 'website', 'hp', 'company')
    if (body.website || body.hp || body.company) {
      // Silently return success to bot without sending email
      return NextResponse.json({
        success: true,
        referenceId: generateReferenceId("CNT"),
        message: "Your message has been successfully submitted.",
      });
    }

    // 4. Validate & Sanitize Input
    const rawEmail = body.email;
    if (!isValidEmail(rawEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    const email = (rawEmail as string).trim().toLowerCase();

    const rawMessage = body.message;
    if (typeof rawMessage !== "string" || rawMessage.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please enter a message with at least 5 characters." },
        { status: 400 }
      );
    }
    if (rawMessage.length > 4000) {
      return NextResponse.json(
        { success: false, error: "Message exceeds maximum allowed length of 4000 characters." },
        { status: 400 }
      );
    }
    const message = sanitizeBody(rawMessage, 4000);

    const fullName = sanitizeHeader(body.fullName, 100);
    const subject = sanitizeHeader(body.subject, 150) || "General User Inquiry";

    let category = "General Support";
    if (typeof body.category === "string" && ALLOWED_CATEGORIES.includes(body.category)) {
      category = body.category;
    }

    // 5. Generate Reference ID
    const referenceId = generateReferenceId("CNT");
    const receivedAt = new Date().toUTCString();

    // 6. Build Branded Email
    const emailContent = buildContactNotificationEmail({
      referenceId,
      fullName,
      email,
      category,
      subject,
      message,
      receivedAt,
    });

    // 7. Check Resend API Key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // In development or when unconfigured, be honest
      return NextResponse.json(
        {
          success: false,
          unconfigured: true,
          error:
            "The email delivery service is currently not configured on this deployment. Please send your message directly to paneldays@gmail.com.",
        },
        { status: 503 }
      );
    }

    // 8. Send Email via Resend
    const resend = new Resend(apiKey);
    const fromAddress =
      process.env.CONTACT_FROM_EMAIL || "PanelDays Support <onboarding@resend.dev>";
    const toAddress =
      process.env.SUPPORT_RECIPIENT_EMAIL || "paneldays@gmail.com";

    const sendResult = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    });

    if (sendResult.error) {
      console.error("[PanelDays Contact API] Resend error:", sendResult.error);
      return NextResponse.json(
        {
          success: false,
          error:
            "Failed to dispatch email through service provider. Please reach out to paneldays@gmail.com directly.",
          details: sendResult.error.message,
        },
        { status: 502 }
      );
    }

    // 9. Success Response
    return NextResponse.json({
      success: true,
      referenceId,
      message: `Your message has been successfully submitted to the PanelDays support team. Your reference number is ${referenceId}. We will review your inquiry and respond using the email address you provided.`,
    });
  } catch (error: unknown) {
    console.error("[PanelDays Contact API] Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please email paneldays@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
