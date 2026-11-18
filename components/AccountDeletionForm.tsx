"use client";

import React, { useState } from "react";
import {
  EmailIcon,
  TrashIcon,
  ClockTimeIcon,
  CheckmarkIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  InfoIcon,
} from "@/components/Icons";

export default function AccountDeletionForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [reason, setReason] = useState("No longer using PanelDays");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  // Email format validation
  const isEmailValid =
    email.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const showEmailError = emailTouched && !isEmailValid;
  const isFormValid = isEmailValid && confirmed;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      setEmailTouched(true);
      return;
    }

    const emailSubject = encodeURIComponent(
      "PanelDays — Permanent Account Deletion Request"
    );

    const emailBody = encodeURIComponent(
      `PANELDAYS — PERMANENT ACCOUNT DELETION REQUEST\n` +
      `===============================================\n\n` +
      `Registered Email Address: ${email.trim()}\n` +
      `Full Name: ${fullName.trim() || "Not provided"}\n` +
      `Reason for Deletion: ${reason}\n` +
      `Application: PanelDays (com.paneldays.app)\n` +
      `Platform: Android / Google Play Store\n` +
      `Date of Request: ${new Date().toISOString().split("T")[0]}\n\n` +
      `EXPLICIT DELETION DECLARATION:\n` +
      `I formally request the permanent deletion of my registered PanelDays user account and associated identity records from Clerk authentication directories.\n\n` +
      `I understand that this request applies to my remote account record and that active Google Play recurring subscriptions must be cancelled separately through Google Play Store.\n`
    );

    const mailtoUrl = `mailto:paneldays@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Safely open the user's default email client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8DFD8] shadow-sm">
      {/* Header */}
      <div className="border-b border-[#E8DFD8] pb-6 mb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#9E1B22] border border-[#F8D7DA] mb-3">
          <TrashIcon className="w-3.5 h-3.5 text-[#9E1B22]" />
          <span>Support Assisted Deletion</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816]">
          Request Account Deletion
        </h2>
        <p className="text-sm text-[#4A453F] mt-2 leading-relaxed">
          Unable to access the PanelDays application? You can still request permanent deletion of your registered account and associated data through our support team.
        </p>
      </div>

      {/* A. HOW IT WORKS */}
      <div className="mb-8 p-5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8]">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#1A1816] mb-3">
          <InfoIcon className="w-4 h-4 text-[#9E1B22]" />
          <span>How It Works</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#4A453F]">
          <div className="flex items-start space-x-2.5">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-[#E8DFD8] text-[#9E1B22] font-mono font-bold flex items-center justify-center text-xs shadow-2xs">
              1
            </span>
            <span className="leading-snug pt-0.5">
              Enter your registered PanelDays email address below.
            </span>
          </div>
          <div className="flex items-start space-x-2.5">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-[#E8DFD8] text-[#9E1B22] font-mono font-bold flex items-center justify-center text-xs shadow-2xs">
              2
            </span>
            <span className="leading-snug pt-0.5">
              Click &ldquo;Prepare Deletion Request Email&rdquo; to generate your request.
            </span>
          </div>
          <div className="flex items-start space-x-2.5">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-[#E8DFD8] text-[#9E1B22] font-mono font-bold flex items-center justify-center text-xs shadow-2xs">
              3
            </span>
            <span className="leading-snug pt-0.5">
              Open your email application, review the generated request, and press <strong>Send</strong>.
            </span>
          </div>
        </div>
        <p className="text-[11px] text-[#6B635B] mt-3.5 mb-0 pt-3 border-t border-[#E8DFD8]/80 leading-relaxed">
          <strong>Please Note:</strong> Clicking the button opens your device&rsquo;s email client with your prefilled details. Opening the email application does not submit the request automatically; you must press <strong>Send</strong> in your mail application to deliver your request to us.
        </p>
      </div>

      {/* Post-submission Notification */}
      {submitted && (
        <div className="mb-6 p-4 rounded-xl bg-[#FDF2F2] border border-[#F8D7DA] text-sm text-[#4A453F]">
          <div className="flex items-center text-[#9E1B22] font-bold text-sm mb-1.5">
            <CheckCircleIcon className="w-5 h-5 mr-2 text-[#9E1B22] flex-shrink-0" />
            <span>Email Client Opened with Your Request</span>
          </div>
          <p className="m-0 leading-relaxed text-xs sm:text-sm">
            Your email application has been opened with your deletion request. Please review and send the email to{" "}
            <a href="mailto:paneldays@gmail.com" className="font-semibold text-[#9E1B22] underline">
              paneldays@gmail.com
            </a>{" "}
            to submit your request.
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Email Field */}
        <div>
          <label htmlFor="delEmail" className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5">
            Registered Email Address <span className="text-[#9E1B22]">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="delEmail"
              required
              value={email}
              onBlur={() => setEmailTouched(true)}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="The email you used to register on PanelDays"
              aria-invalid={showEmailError}
              aria-describedby={showEmailError ? "email-error" : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-[#1A1816] text-sm placeholder:text-[#A89F95] transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                showEmailError
                  ? "border-red-400 bg-red-50/40 focus:ring-red-400/30 focus:border-red-500"
                  : "border-[#E8DFD8] bg-[#FAF7F2] focus:ring-[#9E1B22]/30 focus:border-[#9E1B22]"
              }`}
            />
          </div>
          {showEmailError && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center">
              <AlertTriangleIcon className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
              Please enter a valid email address (e.g., name@example.com).
            </p>
          )}
        </div>

        {/* Full Name Field */}
        <div>
          <label htmlFor="delName" className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5">
            Full Name (Optional)
          </label>
          <input
            type="text"
            id="delName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Account display name, if applicable"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm placeholder:text-[#A89F95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22]"
          />
        </div>

        {/* Reason for Deletion */}
        <div>
          <label htmlFor="delReason" className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5">
            Reason for Deletion (Optional)
          </label>
          <select
            id="delReason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22]"
          >
            <option value="No longer using PanelDays">No longer using PanelDays</option>
            <option value="Privacy concerns">Privacy concerns</option>
            <option value="Switching devices">Switching devices</option>
            <option value="Temporary account cleanup">Temporary account cleanup</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Required Confirmation Checkbox */}
        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8]">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              id="confirmCheckbox"
              required
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-[#D9CEC5] text-[#9E1B22] focus:ring-[#9E1B22] cursor-pointer"
            />
            <span className="text-xs text-[#4A453F] leading-relaxed select-none">
              I understand that account deletion is permanent and irreversible. I understand that submitting this email request does not immediately delete my account, and that active Google Play subscriptions must be cancelled separately. <span className="text-[#9E1B22] font-semibold">*</span>
            </span>
          </label>
        </div>

        {/* 3. VISUALLY PROMINENT PROCESSING COMMITMENT */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-[#FAF4E8] to-[#FAF7F2] border border-[#E8DFD8] flex items-start space-x-3">
          <ClockTimeIcon className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#4A453F] leading-relaxed">
            <strong className="text-[#1A1816] font-semibold block mb-0.5 font-serif">
              Our Processing Commitment
            </strong>
            &ldquo;Our team commits to verifying account ownership and completing eligible account deletion requests within 30 calendar days of receiving the request.&rdquo;
          </div>
        </div>

        {/* Submit Button (disabled until email and confirmation are valid) */}
        <div>
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#9E1B22] hover:bg-[#8B1E22] shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#9E1B22] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#9E1B22] disabled:shadow-none"
          >
            <EmailIcon className="w-4 h-4 mr-2 text-white" />
            Prepare Deletion Request Email &rarr;
          </button>
          {!isFormValid && (
            <p className="text-[11px] text-[#8C827A] mt-2">
              Please enter a valid registered email address and check the confirmation box above to enable this button.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
