"use client";

import React, { useState } from "react";

export default function AccountDeletionForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [reason, setReason] = useState("No longer using the app");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter the valid email address registered with PanelDays.");
      return;
    }

    if (!confirmed) {
      setError("Please confirm your understanding by checking the confirmation box.");
      return;
    }

    setError(null);

    const emailSubject = encodeURIComponent(
      `[Account Deletion Request] PanelDays com.paneldays.app - ${email.trim()}`
    );

    const emailBody = encodeURIComponent(
      `PANELDAYS ACCOUNT DELETION REQUEST\n` +
      `----------------------------------------\n` +
      `Registered Email: ${email.trim()}\n` +
      `Full Name: ${fullName.trim() || "Not provided"}\n` +
      `Reason for Deletion: ${reason}\n` +
      `Application: PanelDays (com.paneldays.app)\n` +
      `Platform: Android / Google Play Store\n` +
      `Submission Date: ${new Date().toISOString().split("T")[0]}\n\n` +
      `DECLARATION:\n` +
      `I formally request the manual deletion of my registered PanelDays user account and associated identity records from Clerk authentication directories.\n`
    );

    const mailtoUrl = `mailto:paneldays@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open user's email client with prefilled deletion request
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8DFD8] shadow-sm">
      <div className="border-b border-[#E8DFD8] pb-5 mb-6">
        <div className="flex items-center space-x-2 text-[#9E1B22] font-semibold text-xs uppercase tracking-wider mb-1">
          <span className="w-2 h-2 rounded-full bg-[#9E1B22]" />
          <span>Manual Email-Based Request</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1A1816]">
          Request Account Deletion via Email
        </h3>
        <p className="text-sm text-[#6B635B] mt-1.5 leading-relaxed">
          If you have uninstalled the application or cannot access your mobile device, use this form to prepare a formal deletion request. Because this website operates without an automated backend deletion API, all web-initiated deletion requests are reviewed and fulfilled manually by our support team.
        </p>
      </div>

      {submitted && (
        <div className="mb-6 p-4 rounded-xl bg-[#FDF2F2] border border-[#F8D7DA] text-sm text-[#4A453F]">
          <div className="flex items-center text-[#9E1B22] font-bold mb-1">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Email Client Opened with Your Request
          </div>
          <p className="m-0 leading-relaxed text-xs sm:text-sm">
            Your default email client has been opened with your formal account deletion request. Please review and click <strong>Send</strong> in your mail application to deliver it to <strong>paneldays@gmail.com</strong>.
          </p>
          <div className="mt-3 p-3 rounded-lg bg-white border border-[#E8DFD8] text-xs text-[#554F49] space-y-1">
            <div><strong>Processing Notice:</strong> Drafting or opening this email does not automatically delete your account online.</div>
            <div><strong>Our Fulfillment Commitment:</strong> Our team commits to verifying account ownership and manually completing deletion of your registered Clerk user record within <strong>30 calendar days</strong> of receiving your email request.</div>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="delEmail" className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5">
            Registered Email Address <span className="text-[#9E1B22]">*</span>
          </label>
          <input
            type="email"
            id="delEmail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="The email you used to register on PanelDays"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm placeholder:text-[#A89F95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22]"
          />
        </div>

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
            <option value="No longer using the app">No longer using the app</option>
            <option value="Privacy concern">Privacy concern</option>
            <option value="Switching devices">Switching devices</option>
            <option value="Temporary account cleanup">Temporary account cleanup</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8]">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-[#D9CEC5] text-[#9E1B22] focus:ring-[#9E1B22]"
            />
            <span className="text-xs text-[#4A453F] leading-relaxed">
              I understand that account deletion is <strong>permanent and irreversible</strong>. I acknowledge that submitting this form creates an email request to be processed manually by the PanelDays team, and that deleting my account does not cancel active recurring subscriptions managed separately by Google Play.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-white bg-[#9E1B22] hover:bg-[#8B1E22] shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#9E1B22] focus:ring-offset-2"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Prepare Deletion Request Email &rarr;
        </button>
      </form>
    </div>
  );
}
