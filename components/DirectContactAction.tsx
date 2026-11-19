"use client";

import React, { useState } from "react";
import {
  EmailIcon,
  CheckmarkIcon,
  ExternalLinkIcon,
  InfoIcon,
} from "@/components/Icons";

export default function DirectContactAction() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const emailAddress = "paneldays@gmail.com";
  const mailtoUrl = "mailto:paneldays@gmail.com?subject=PanelDays%20Support";
  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=paneldays@gmail.com&su=PanelDays%20Support";

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setCopyError(false);
        setTimeout(() => setCopied(false), 2500);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = emailAddress;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setCopyError(false);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8DFD8] shadow-sm space-y-6">
      {/* Card Header */}
      <div className="border-b border-[#E8DFD8] pb-5">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#9E1B22] border border-[#F8D7DA] mb-3">
          <EmailIcon className="w-3.5 h-3.5 text-[#9E1B22]" />
          <span>Direct Email Support</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816]">
          Send Us an Email
        </h2>
        <p className="text-sm text-[#6B635B] mt-2 leading-relaxed">
          The fastest and most reliable way to reach our support and privacy team. Every inquiry is received directly by our team and responded to within 48 business hours.
        </p>
      </div>

      {/* Main Email Action Box */}
      <div className="p-5 sm:p-6 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] space-y-5">
        {/* Address Display & Copy */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-[#E8DFD8]">
          <div>
            <span className="block text-[11px] uppercase tracking-wider font-bold text-[#8C827A] mb-1">
              Official Contact Address
            </span>
            <span className="font-mono text-base sm:text-lg font-bold text-[#1A1816] select-all">
              {emailAddress}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#4A453F] bg-white border border-[#E8DFD8] hover:bg-[#F5EFEB] hover:text-[#1A1816] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E1B22] transition-colors shadow-xs active:scale-95"
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <CheckmarkIcon className="w-3.5 h-3.5 text-[#16A34A]" />
                <span className="text-[#16A34A] font-bold">Copied!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-3.5 h-3.5 text-[#6B635B]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>{copyError ? "Select text to copy" : "Copy email"}</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {/* Primary Mailto Action */}
          <a
            href={mailtoUrl}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#9E1B22] hover:bg-[#8B1E22] shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E1B22] focus-visible:ring-offset-2 min-h-[44px] min-w-[130px] active:scale-98"
          >
            <EmailIcon className="w-4 h-4 text-white" />
            <span>Email us</span>
          </a>

          {/* Secondary Webmail Link (Gmail) */}
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-1.5 px-4 py-3 rounded-lg text-sm font-semibold text-[#9E1B22] hover:text-[#8B1E22] hover:bg-white/80 border border-transparent hover:border-[#E8DFD8] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E1B22] min-h-[44px]"
          >
            <span>Open in Gmail</span>
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Short Instruction Line */}
        <p className="text-xs text-[#6B635B] leading-relaxed pt-1 m-0">
          Tapping Email us opens your mail app. If nothing opens, copy the address or use Open in Gmail.
        </p>
      </div>

      {/* Helpful Details Box */}
      <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] text-xs text-[#6B635B] space-y-2">
        <div className="flex items-center space-x-1.5 font-semibold text-[#1A1816]">
          <InfoIcon className="w-3.5 h-3.5 text-[#9E1B22]" />
          <span>What to Include in Your Message:</span>
        </div>
        <ul className="list-disc list-inside space-y-1 text-[#4A453F] pl-1">
          <li>Your registered account email address (if inquiring about your account)</li>
          <li>Your device model and Android version</li>
          <li>A brief description of your question, suggestion, or issue</li>
        </ul>
      </div>
    </div>
  );
}
