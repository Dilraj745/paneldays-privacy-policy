"use client";

import React, { useState } from "react";
import {
  CheckCircleIcon,
  EmailIcon,
  AlertTriangleIcon,
  CheckmarkIcon,
} from "@/components/Icons";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("General Support");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot field for bot protection

  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fallbackMailto, setFallbackMailto] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!message.trim() || message.trim().length < 5) {
      setErrorMessage("Please enter your message (at least 5 characters).");
      return;
    }

    setErrorMessage(null);
    setFallbackMailto(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          category,
          subject,
          message,
          website, // honeypot
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessData({
          referenceId: data.referenceId,
          message:
            data.message ||
            `Your message has been successfully submitted to the PanelDays support team. Your reference number is ${data.referenceId}. We will review your inquiry and respond using the email address you provided.`,
        });
        // Clear fields on success
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        // Build fallback mailto in case server email transport is unconfigured or failed
        const emailSubject = encodeURIComponent(
          `[PanelDays ${category}] ${subject.trim() || "User Inquiry"}`
        );
        const emailBody = encodeURIComponent(
          `Full Name: ${fullName.trim() || "Not provided"}\n` +
          `Email: ${email.trim()}\n` +
          `Category: ${category}\n` +
          `Application: PanelDays (com.paneldays.app)\n\n` +
          `Message:\n${message.trim()}\n`
        );
        setFallbackMailto(
          `mailto:paneldays@gmail.com?subject=${emailSubject}&body=${emailBody}`
        );

        setErrorMessage(
          data.error ||
          "Unable to submit message automatically. You can send your inquiry directly via your email client."
        );
      }
    } catch {
      const emailSubject = encodeURIComponent(
        `[PanelDays ${category}] ${subject.trim() || "User Inquiry"}`
      );
      const emailBody = encodeURIComponent(
        `Full Name: ${fullName.trim() || "Not provided"}\n` +
        `Email: ${email.trim()}\n` +
        `Category: ${category}\n\n` +
        `Message:\n${message.trim()}\n`
      );
      setFallbackMailto(
        `mailto:paneldays@gmail.com?subject=${emailSubject}&body=${emailBody}`
      );
      setErrorMessage(
        "A network error occurred. You can click below to send your message directly via email."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const copyReferenceId = () => {
    if (successData?.referenceId) {
      navigator.clipboard.writeText(successData.referenceId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8DFD8] shadow-sm">
      <div className="border-b border-[#E8DFD8] pb-5 mb-6">
        <h2 className="font-serif text-2xl font-bold text-[#1A1816]">
          Send a Message to Our Team
        </h2>
        <p className="text-sm text-[#6B635B] mt-1.5 leading-relaxed">
          Submit your question or support request directly through this form. Our team receives your message immediately and will follow up to your provided email.
        </p>
      </div>

      {/* Success Confirmation Card */}
      {successData && (
        <div className="mb-8 p-6 rounded-2xl bg-[#FAF7F2] border-2 border-[#9E1B22]/30 shadow-xs">
          <div className="flex items-center space-x-2 text-[#9E1B22] font-bold text-base mb-2">
            <CheckCircleIcon className="w-6 h-6 text-[#9E1B22] flex-shrink-0" />
            <span>Message Successfully Received</span>
          </div>
          <p className="text-sm text-[#4A453F] leading-relaxed mb-4">
            {successData.message}
          </p>

          <div className="p-3.5 bg-white rounded-xl border border-[#E8DFD8] flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="block text-[11px] uppercase tracking-wider font-bold text-[#6B635B]">
                Your Reference Number
              </span>
              <span className="font-mono text-base font-bold text-[#9E1B22]">
                {successData.referenceId}
              </span>
            </div>
            <button
              type="button"
              onClick={copyReferenceId}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAF7F2] hover:bg-[#F0EAE1] text-[#1A1816] border border-[#E8DFD8] transition-colors"
            >
              {copiedRef ? (
                <>
                  <CheckmarkIcon className="w-3.5 h-3.5 text-[#0E7036] mr-1" />
                  Copied!
                </>
              ) : (
                "Copy Reference"
              )}
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E8DFD8] flex items-center justify-between">
            <span className="text-xs text-[#6B635B]">
              Keep this reference for any follow-up communications.
            </span>
            <button
              type="button"
              onClick={() => setSuccessData(null)}
              className="text-xs font-semibold text-[#9E1B22] hover:underline"
            >
              Send another message &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Error / Fallback Notification */}
      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700">
          <div className="flex items-start">
            <AlertTriangleIcon className="w-5 h-5 mr-2 flex-shrink-0 text-red-600 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold mb-1">{errorMessage}</p>
              {fallbackMailto && (
                <div className="mt-2.5 pt-2 border-t border-red-200/80">
                  <a
                    href={fallbackMailto}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#9E1B22] hover:bg-[#8B1E22] transition-colors shadow-2xs"
                  >
                    <EmailIcon className="w-3.5 h-3.5 mr-1.5 text-white" />
                    Open in Your Email Client Instead &rarr;
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot field (hidden from real users, caught by bots) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5"
            >
              Full Name (Optional)
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              disabled={isLoading}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Alex Morgan"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm placeholder:text-[#A89F95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22] disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5"
            >
              Your Email Address <span className="text-[#9E1B22]">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. user@example.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm placeholder:text-[#A89F95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22] disabled:opacity-60"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="category"
              className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5"
            >
              Inquiry Category
            </label>
            <select
              id="category"
              value={category}
              disabled={isLoading}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22] disabled:opacity-60"
            >
              <option value="General Support">General Support &amp; Questions</option>
              <option value="Privacy Inquiry">Privacy &amp; Data Rights</option>
              <option value="Subscription & Billing">Subscription &amp; Google Play Billing</option>
              <option value="Bug Report">Bug Report or Feedback</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5"
            >
              Subject Line
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              disabled={isLoading}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Brief summary of your question"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm placeholder:text-[#A89F95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22] disabled:opacity-60"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5"
          >
            Your Message <span className="text-[#9E1B22]">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            disabled={isLoading}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please detail your question or issue with as much detail as possible..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm placeholder:text-[#A89F95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22] disabled:opacity-60"
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-white bg-[#9E1B22] hover:bg-[#8B1E22] shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#9E1B22] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Sending Inquiry...
              </>
            ) : (
              <>
                <EmailIcon className="w-4 h-4 mr-2 text-white" />
                Submit Message Directly &rarr;
              </>
            )}
          </button>
          <span className="text-xs text-[#6B635B]">
            Replies will be sent to the email address you provide.
          </span>
        </div>
      </form>
    </div>
  );
}
