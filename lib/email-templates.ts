import { escapeHtml } from "./security";

export interface ContactEmailPayload {
  referenceId: string;
  fullName: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  receivedAt: string;
}

export interface DeletionEmailPayload {
  referenceId: string;
  email: string;
  fullName: string;
  reason: string;
  confirmed: boolean;
  receivedAt: string;
}

/**
 * Builds the branded HTML and plain-text email for Contact Us inquiries.
 */
export function buildContactNotificationEmail(payload: ContactEmailPayload) {
  const safeRef = escapeHtml(payload.referenceId);
  const safeName = escapeHtml(payload.fullName || "Not provided");
  const safeEmail = escapeHtml(payload.email);
  const safeCategory = escapeHtml(payload.category);
  const safeSubject = escapeHtml(payload.subject || "General User Inquiry");
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br/>");
  const safeDate = escapeHtml(payload.receivedAt);

  const emailSubject = `[PanelDays ${payload.category}] Ref: ${payload.referenceId} — ${payload.subject || "Inquiry"}`;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF7F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1A1816;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #FAF7F2; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E8DFD8; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
          <!-- Header -->
          <tr>
            <td style="background-color: #9E1B22; padding: 24px 32px; border-bottom: 3px solid #C5A059;">
              <table role="presentation" width="100%">
                <tr>
                  <td>
                    <span style="display: inline-block; color: #FFFFFF; font-size: 20px; font-weight: bold; letter-spacing: -0.5px;">PanelDays</span>
                    <span style="display: block; color: rgba(255,255,255,0.8); font-size: 12px; margin-top: 2px;">Official Website Inquiry System</span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(255,255,255,0.18); color: #FFFFFF; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 9999px; font-family: monospace;">
                      ${safeRef}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #1A1816;">New Contact Form Submission</h2>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #6B635B; line-height: 1.5;">
                A user has submitted an inquiry through the PanelDays official website contact portal.
              </p>

              <!-- Metadata Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #FAF7F2; border: 1px solid #E8DFD8; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 12px; font-weight: 600; color: #6B635B; width: 140px;">Reference ID:</td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 13px; font-weight: bold; font-family: monospace; color: #9E1B22;">${safeRef}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 12px; font-weight: 600; color: #6B635B;">Sender Name:</td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 13px; color: #1A1816;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 12px; font-weight: 600; color: #6B635B;">Sender Email:</td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 13px; color: #9E1B22; font-weight: 500;">
                    <a href="mailto:${safeEmail}" style="color: #9E1B22; text-decoration: underline;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 12px; font-weight: 600; color: #6B635B;">Category:</td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 13px; color: #1A1816;">${safeCategory}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 12px; font-weight: 600; color: #6B635B;">Subject:</td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 13px; font-weight: 600; color: #1A1816;">${safeSubject}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; font-weight: 600; color: #6B635B;">Received At:</td>
                  <td style="padding: 10px 14px; font-size: 12px; color: #6B635B;">${safeDate}</td>
                </tr>
              </table>

              <!-- User Message -->
              <div style="margin-bottom: 24px;">
                <span style="display: block; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #4A453F; margin-bottom: 8px;">
                  User Message:
                </span>
                <div style="background-color: #FFFFFF; border: 1px solid #E8DFD8; border-left: 4px solid #9E1B22; border-radius: 4px; padding: 16px; font-size: 14px; line-height: 1.6; color: #1A1816;">
                  ${safeMessage}
                </div>
              </div>

              <!-- Footer Tip -->
              <div style="background-color: #FDF2F2; border: 1px solid #F8D7DA; border-radius: 8px; padding: 12px 16px; font-size: 12px; color: #4A453F; line-height: 1.5;">
                <strong style="color: #9E1B22;">Support Action:</strong> You can respond directly to this email. Your email client will reply to <strong>${safeEmail}</strong>.
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #FAF7F2; padding: 16px 32px; border-top: 1px solid #E8DFD8; font-size: 11px; color: #8C827A; text-align: center;">
              PanelDays (com.paneldays.app) &bull; Official Support Notification Service &bull; <a href="https://paneldays-privacy-policy.vercel.app" style="color: #9E1B22; text-decoration: none;">paneldays-privacy-policy.vercel.app</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `PANELDAYS — NEW CONTACT INQUIRY
===============================================
Reference ID: ${payload.referenceId}
Received At:  ${payload.receivedAt}

Sender Name:     ${payload.fullName || "Not provided"}
Sender Email:    ${payload.email}
Inquiry Category: ${payload.category}
Subject:         ${payload.subject || "User Inquiry"}

Message:
-----------------------------------------------
${payload.message}
-----------------------------------------------

Reply directly to this email to contact the user.
Application: PanelDays (com.paneldays.app)
`;

  return { subject: emailSubject, html, text };
}

/**
 * Builds the branded HTML and plain-text email for Account Deletion requests.
 */
export function buildDeletionNotificationEmail(payload: DeletionEmailPayload) {
  const safeRef = escapeHtml(payload.referenceId);
  const safeEmail = escapeHtml(payload.email);
  const safeName = escapeHtml(payload.fullName || "Not provided");
  const safeReason = escapeHtml(payload.reason || "Not specified");
  const safeDate = escapeHtml(payload.receivedAt);

  const emailSubject = `[PanelDays Account Deletion] Ref: ${payload.referenceId} — ${payload.email}`;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF7F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1A1816;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #FAF7F2; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E8DFD8; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
          <!-- Header -->
          <tr>
            <td style="background-color: #9E1B22; padding: 24px 32px; border-bottom: 3px solid #C5A059;">
              <table role="presentation" width="100%">
                <tr>
                  <td>
                    <span style="display: inline-block; color: #FFFFFF; font-size: 20px; font-weight: bold; letter-spacing: -0.5px;">PanelDays</span>
                    <span style="display: block; color: rgba(255,255,255,0.85); font-size: 12px; margin-top: 2px;">Account Deletion Request System</span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(255,255,255,0.18); color: #FFFFFF; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 9999px; font-family: monospace;">
                      ${safeRef}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background-color: #FDF2F2; padding: 14px 32px; border-bottom: 1px solid #F8D7DA;">
              <span style="color: #9E1B22; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                Action Required: Formal Account Deletion Request
              </span>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #1A1816;">Permanent Account Deletion Notice</h2>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #6B635B; line-height: 1.5;">
                A user has formally requested permanent deletion of their registered PanelDays account and associated Clerk authentication records through the official website.
              </p>

              <!-- Request Details Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #FAF7F2; border: 1px solid #E8DFD8; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 12px; font-weight: 600; color: #6B635B; width: 160px;">Reference ID:</td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 13px; font-weight: bold; font-family: monospace; color: #9E1B22;">${safeRef}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 12px; font-weight: 600; color: #6B635B;">Registered Email:</td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 13px; color: #9E1B22; font-weight: bold;">
                    <a href="mailto:${safeEmail}" style="color: #9E1B22; text-decoration: underline;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 12px; font-weight: 600; color: #6B635B;">Full Name / Display:</td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 13px; color: #1A1816;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 12px; font-weight: 600; color: #6B635B;">Reason Provided:</td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 13px; color: #1A1816;">${safeReason}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 12px; font-weight: 600; color: #6B635B;">Declaration Acknowledged:</td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 13px; color: #0E7036; font-weight: 600;">Yes (Confirmed by user)</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 12px; font-weight: 600; color: #6B635B;">Application / Package:</td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #E8DFD8; font-size: 13px; color: #1A1816;">PanelDays (com.paneldays.app)</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; font-weight: 600; color: #6B635B;">Submitted At:</td>
                  <td style="padding: 10px 14px; font-size: 12px; color: #6B635B;">${safeDate}</td>
                </tr>
              </table>

              <!-- Administrator Action Guide -->
              <div style="background-color: #FAF4E8; border: 1px solid #E8DFD8; border-left: 4px solid #C5A059; border-radius: 4px; padding: 16px; margin-bottom: 24px;">
                <span style="display: block; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #7A5B15; margin-bottom: 8px;">
                  Administrator Fulfillment Procedure:
                </span>
                <ol style="margin: 0; padding-left: 18px; font-size: 13px; color: #4A453F; line-height: 1.6;">
                  <li>Verify account ownership by sending a quick confirmation email to <strong>${safeEmail}</strong>.</li>
                  <li>Log in to the <strong>Clerk Dashboard</strong> (Authentication directory) and search for the user record matching <strong>${safeEmail}</strong>.</li>
                  <li>Execute account deletion in Clerk to permanently erase authentication credentials, sessions, and associated identity data.</li>
                  <li>Notify the user that deletion has been fulfilled (within our <strong>30-day</strong> published commitment).</li>
                  <li>If user has an active Google Play subscription, remind them to cancel it via the Google Play Store app under Subscriptions.</li>
                </ol>
              </div>

              <!-- Footer Tip -->
              <div style="font-size: 12px; color: #6B635B; line-height: 1.5;">
                <strong>Note:</strong> Guest-created local scrapbook items on the user's Android device remain on device storage until the user uninstalls the app or clears app data through Android device settings.
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #FAF7F2; padding: 16px 32px; border-top: 1px solid #E8DFD8; font-size: 11px; color: #8C827A; text-align: center;">
              PanelDays (com.paneldays.app) &bull; Official Account Deletion Processing Service &bull; Target SLA: 30 Calendar Days
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `PANELDAYS — PERMANENT ACCOUNT DELETION REQUEST
===================================================
Reference ID:  ${payload.referenceId}
Submitted At:  ${payload.receivedAt}

Registered Email: ${payload.email}
Full Name:        ${payload.fullName || "Not provided"}
Reason:           ${payload.reason || "Not specified"}
Declaration:      User confirmed permanent deletion checkbox
Application:      PanelDays (com.paneldays.app)

ADMINISTRATOR PROCEDURE:
1. Verify account ownership via confirmation email to ${payload.email}.
2. Locate user in Clerk dashboard and delete account record.
3. Confirm completion to user within 30 calendar days.
4. Active Google Play subscriptions must be cancelled by the user in Google Play Store.

Guest local scrapbook items remain stored locally on device until the app is uninstalled.
`;

  return { subject: emailSubject, html, text };
}

export interface VerificationCodeEmailPayload {
  email: string;
  code: string;
  expiresMinutes: number;
}

/**
 * Builds the verification email containing the 6-digit deletion confirmation code.
 */
export function buildDeletionVerificationEmail(payload: VerificationCodeEmailPayload) {
  const safeCode = escapeHtml(payload.code);
  const safeMinutes = escapeHtml(payload.expiresMinutes.toString());
  const emailSubject = `[PanelDays] Your Account Deletion Verification Code: ${payload.code}`;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF7F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1A1816;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #FAF7F2; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 580px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E8DFD8; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="background-color: #9E1B22; padding: 24px 32px; border-bottom: 3px solid #C5A059;">
              <span style="display: inline-block; color: #FFFFFF; font-size: 20px; font-weight: bold;">PanelDays</span>
              <span style="display: block; color: rgba(255,255,255,0.85); font-size: 12px; margin-top: 2px;">Account Security &amp; Ownership Verification</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              <div style="background-color: #FDF2F2; border: 1px solid #F8D7DA; border-radius: 12px; padding: 14px 16px; margin-bottom: 24px; color: #9E1B22; font-size: 13px; font-weight: 500;">
                &#9888; Action Required: Permanent Account Deletion Request
              </div>

              <p style="font-size: 14px; line-height: 1.6; color: #4A453F; margin-bottom: 20px;">
                We received a request to permanently delete the PanelDays account associated with <strong>${escapeHtml(payload.email)}</strong>.
              </p>

              <p style="font-size: 13px; color: #6B635B; margin-bottom: 12px;">
                Enter this 6-digit verification code on the account deletion page to verify ownership and execute permanent deletion:
              </p>

              <div style="text-align: center; margin: 28px 0; padding: 20px; background-color: #FAF7F2; border: 1px dashed #E8DFD8; border-radius: 12px;">
                <span style="font-family: monospace; font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #9E1B22;">
                  ${safeCode}
                </span>
                <span style="display: block; font-size: 11px; color: #8C827A; margin-top: 8px;">
                  Valid for ${safeMinutes} minutes &bull; Single-use verification code
                </span>
              </div>

              <p style="font-size: 12px; line-height: 1.5; color: #6B635B; margin-top: 24px; border-top: 1px solid #E8DFD8; pt-4;">
                <strong>Didn&rsquo;t request this?</strong> If you did not request deletion of your PanelDays account, please ignore this email. Your account and personal memories remain completely safe.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #FAF7F2; padding: 16px 32px; border-top: 1px solid #E8DFD8; font-size: 11px; color: #8C827A; text-align: center;">
              PanelDays (com.paneldays.app) &bull; Official Account Security Service
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `PANELDAYS — ACCOUNT DELETION VERIFICATION CODE
=================================================
Verification Code: ${payload.code}
Expires in:       ${payload.expiresMinutes} minutes

A request was initiated to permanently delete the PanelDays account associated with ${payload.email}.
Enter the 6-digit code above on the external deletion page to confirm ownership.

If you did not make this request, you can safely ignore this email.
`;

  return { subject: emailSubject, html, text };
}

export interface DeletionConfirmationEmailPayload {
  email: string;
  referenceId: string;
  deletedAt: string;
}

/**
 * Builds the post-deletion confirmation email sent after Clerk account deletion succeeds.
 */
export function buildDeletionConfirmationEmail(payload: DeletionConfirmationEmailPayload) {
  const safeRef = escapeHtml(payload.referenceId);
  const safeDate = escapeHtml(payload.deletedAt);
  const emailSubject = `[PanelDays] Account Deletion Completed — Ref: ${payload.referenceId}`;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF7F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1A1816;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #FAF7F2; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 580px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E8DFD8; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="background-color: #1A1816; padding: 24px 32px; border-bottom: 3px solid #9E1B22;">
              <span style="display: inline-block; color: #FFFFFF; font-size: 20px; font-weight: bold;">PanelDays</span>
              <span style="display: block; color: rgba(255,255,255,0.7); font-size: 12px; margin-top: 2px;">Account Deletion Confirmation</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              <h2 style="font-size: 18px; color: #1A1816; margin-top: 0; margin-bottom: 12px;">Account Permanently Deleted</h2>
              <p style="font-size: 14px; line-height: 1.6; color: #4A453F; margin-bottom: 20px;">
                This notice confirms that your PanelDays account associated with <strong>${escapeHtml(payload.email)}</strong> and all remote authentication credentials have been permanently removed from our Clerk directories.
              </p>

              <div style="background-color: #FAF7F2; border: 1px solid #E8DFD8; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
                <table style="width: 100%; font-size: 12px; color: #4A453F;">
                  <tr>
                    <td style="padding: 4px 0; color: #8C827A;">Reference ID:</td>
                    <td style="padding: 4px 0; font-family: monospace; font-weight: bold; text-align: right;">${safeRef}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #8C827A;">Timestamp:</td>
                    <td style="padding: 4px 0; text-align: right;">${safeDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #8C827A;">Status:</td>
                    <td style="padding: 4px 0; color: #065F46; font-weight: bold; text-align: right;">Permanently Removed from Clerk</td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #FFF8E7; border: 1px solid #FFE082; border-radius: 12px; padding: 14px 16px; margin-bottom: 20px; font-size: 12px; line-height: 1.5; color: #8A5D00;">
                <strong>Google Play Subscriptions Reminder:</strong>
                Account deletion does not cancel recurring Google Play subscriptions. If you had an active subscription, please manage or cancel it directly in the Google Play Store under <em>Payments &amp; subscriptions</em>.
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #FAF7F2; padding: 16px 32px; border-top: 1px solid #E8DFD8; font-size: 11px; color: #8C827A; text-align: center;">
              PanelDays (com.paneldays.app) &bull; Official Account Security Service
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `PANELDAYS — ACCOUNT DELETION CONFIRMATION
==========================================
Reference ID: ${payload.referenceId}
Completed At: ${payload.deletedAt}

Your PanelDays account (${payload.email}) and associated authentication credentials have been permanently deleted from Clerk.

REMINDER: Recurring Google Play subscriptions must be cancelled separately in Google Play Store.
`;

  return { subject: emailSubject, html, text };
}
