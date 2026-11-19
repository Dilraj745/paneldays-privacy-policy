"use client";

import React, { useState, useEffect } from "react";
import {
  TrashIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  ExternalLinkIcon,
  InfoIcon,
  SecurityShieldIcon,
} from "@/components/Icons";

type DeletionStep = "request_code" | "verify_code" | "completed";

export default function AccountDeletionForm() {
  const [step, setStep] = useState<DeletionStep>("request_code");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [confirmationKeyword, setConfirmationKeyword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isUnconfigured, setIsUnconfigured] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  // Resend cooldown timer
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Check backend configuration on mount
  useEffect(() => {
    fetch("/api/account-deletion")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.clerkConfigured === false) {
          setIsUnconfigured(true);
        }
      })
      .catch(() => {});
  }, []);

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes("@")) {
      setErrorMessage("Please enter a valid registered email address.");
      return;
    }

    setErrorMessage(null);
    setStatusMessage(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/account-deletion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "request_code",
          email: cleanEmail,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStep("verify_code");
        setStatusMessage(
          data.message ||
            "A 6-digit verification code has been dispatched to your email address."
        );
        setResendCooldown(60);
      } else {
        if (data.unconfigured) {
          setIsUnconfigured(true);
        }
        setErrorMessage(
          data.error ||
            "Unable to send verification code. Please check your email or contact support."
        );
      }
    } catch {
      setErrorMessage(
        "A network error occurred while communicating with the server. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyAndDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    const cleanCode = code.trim();
    const cleanKeyword = confirmationKeyword.trim();

    if (!cleanCode || cleanCode.length !== 6) {
      setErrorMessage("Please enter the 6-digit verification code.");
      return;
    }

    if (cleanKeyword !== "DELETE") {
      setErrorMessage("Please type DELETE exactly to confirm permanent account deletion.");
      return;
    }

    setErrorMessage(null);
    setStatusMessage(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/account-deletion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "verify_and_delete",
          email: cleanEmail,
          code: cleanCode,
          confirmationKeyword: cleanKeyword,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStep("completed");
        setReferenceId(data.referenceId || "DEL-" + Date.now().toString(36).toUpperCase());
      } else {
        setErrorMessage(
          data.error ||
            "Failed to delete your account from the authentication server. Please check your code or try again."
        );
      }
    } catch {
      setErrorMessage(
        "A network error occurred during account deletion. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (resendCooldown > 0 || isLoading) return;
    setErrorMessage(null);
    setStatusMessage(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/account-deletion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "request_code",
          email: email.trim().toLowerCase(),
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatusMessage("A fresh verification code has been dispatched to your email.");
        setResendCooldown(60);
      } else {
        setErrorMessage(data.error || "Failed to resend verification code.");
      }
    } catch {
      setErrorMessage("Network error resending code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8DFD8] shadow-sm">
      {/* Header */}
      <div className="border-b border-[#E8DFD8] pb-6 mb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#9E1B22] border border-[#F8D7DA] mb-3">
          <SecurityShieldIcon className="w-3.5 h-3.5 text-[#9E1B22]" />
          <span>External Account Deletion</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816]">
          Delete PanelDays Account
        </h2>
        <p className="text-sm text-[#4A453F] mt-2 leading-relaxed">
          If you have uninstalled the PanelDays application, you can initiate permanent remote deletion of your Clerk user account and authentication credentials using this verified form.
        </p>
      </div>

      {/* Backend Unconfigured Notice */}
      {isUnconfigured && step !== "completed" && (
        <div className="mb-6 p-4 rounded-xl bg-[#FFF8E7] border border-[#FFE082] text-xs sm:text-sm text-[#8A5D00] flex items-start space-x-3">
          <AlertTriangleIcon className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block font-semibold">
              Notice Regarding Automated Clerk Deletion:
            </strong>
            <p className="m-0 leading-relaxed text-[#7A5200]">
              The automated Clerk deletion backend requires server-side configuration (<code className="font-mono text-xs bg-white/70 px-1 py-0.5 rounded">CLERK_SECRET_KEY</code>). If your request cannot be executed automatically, our privacy team promptly handles manual deletion requests sent to{" "}
              <a
                href="mailto:paneldays@gmail.com?subject=PanelDays%20Account%20Deletion%20Request"
                className="font-bold underline text-[#9E1B22]"
              >
                paneldays@gmail.com
              </a>.
            </p>
          </div>
        </div>
      )}

      {/* STEP 1: REQUEST VERIFICATION CODE */}
      {step === "request_code" && (
        <form onSubmit={handleRequestCode} className="space-y-5">
          <div>
            <label
              htmlFor="deletion-email"
              className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5"
            >
              Registered Email Address <span className="text-[#9E1B22]">*</span>
            </label>
            <input
              id="deletion-email"
              type="email"
              required
              value={email}
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22] transition-colors disabled:opacity-60"
            />
            <p className="text-xs text-[#6B635B] mt-1.5 leading-relaxed">
              Enter the exact email address associated with your PanelDays account. We will send a single-use verification code to verify ownership before deleting the account.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-[#FDF2F2] border border-[#F8D7DA] text-xs text-[#9E1B22] flex items-start space-x-2">
              <AlertTriangleIcon className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#9E1B22]" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-semibold text-sm text-white bg-[#9E1B22] hover:bg-[#8B1E22] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending Verification Code...</span>
                </>
              ) : (
                <span>Send Verification Code</span>
              )}
            </button>
          </div>
        </form>
      )}

      {/* STEP 2: VERIFY CODE & CONFIRM DELETION */}
      {step === "verify_code" && (
        <form onSubmit={handleVerifyAndDelete} className="space-y-5">
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] flex items-center justify-between text-xs text-[#4A453F]">
            <div>
              <span className="text-[#6B635B] block">Verification code sent to:</span>
              <strong className="text-sm text-[#1A1816] font-mono">{email}</strong>
            </div>
            <button
              type="button"
              onClick={() => {
                setStep("request_code");
                setCode("");
                setConfirmationKeyword("");
                setErrorMessage(null);
              }}
              className="text-[#9E1B22] font-semibold hover:underline"
            >
              Change Email
            </button>
          </div>

          {statusMessage && (
            <div className="p-3.5 rounded-xl bg-[#E8F5E9] border border-[#C8E6C9] text-xs text-[#2E7D32] flex items-start space-x-2">
              <CheckCircleIcon className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#2E7D32]" />
              <span>{statusMessage}</span>
            </div>
          )}

          <div>
            <label
              htmlFor="verification-code"
              className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5"
            >
              6-Digit Verification Code <span className="text-[#9E1B22]">*</span>
            </label>
            <input
              id="verification-code"
              type="text"
              required
              maxLength={6}
              value={code}
              disabled={isLoading}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              placeholder="123456"
              className="w-full max-w-xs font-mono text-lg tracking-widest text-center px-4 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22]"
            />
            <div className="mt-2 flex items-center space-x-3 text-xs text-[#6B635B]">
              <span>Didn&rsquo;t receive code?</span>
              <button
                type="button"
                onClick={handleResendCode}
                disabled={resendCooldown > 0 || isLoading}
                className="text-[#9E1B22] font-semibold hover:underline disabled:opacity-50 disabled:no-underline"
              >
                {resendCooldown > 0 ? `Resend code in ${resendCooldown}s` : "Resend Code"}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmation-keyword"
              className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5"
            >
              Type <span className="font-mono text-[#9E1B22]">DELETE</span> to Confirm <span className="text-[#9E1B22]">*</span>
            </label>
            <input
              id="confirmation-keyword"
              type="text"
              required
              value={confirmationKeyword}
              disabled={isLoading}
              onChange={(e) => setConfirmationKeyword(e.target.value)}
              placeholder="DELETE"
              className="w-full max-w-xs font-mono px-4 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22]"
            />
            <p className="text-xs text-[#8C827A] mt-1">
              This action is permanent and cannot be undone. All Clerk authentication records will be erased.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-[#FDF2F2] border border-[#F8D7DA] text-xs text-[#9E1B22] flex items-start space-x-2">
              <AlertTriangleIcon className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#9E1B22]" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={
                isLoading ||
                code.length !== 6 ||
                confirmationKeyword.trim() !== "DELETE"
              }
              className="px-6 py-2.5 rounded-lg font-semibold text-sm text-white bg-[#9E1B22] hover:bg-[#8B1E22] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center space-x-2"
            >
              <TrashIcon className="w-4 h-4 text-white" />
              <span>{isLoading ? "Deleting Account..." : "Permanently Delete My Account"}</span>
            </button>
            <button
              type="button"
              disabled={isLoading}
              onClick={() => {
                setStep("request_code");
                setCode("");
                setConfirmationKeyword("");
                setErrorMessage(null);
              }}
              className="px-4 py-2.5 rounded-lg font-medium text-sm text-[#4A453F] hover:bg-[#F5EFEB] transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* STEP 3: COMPLETED CONFIRMATION */}
      {step === "completed" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534]">
            <div className="flex items-center space-x-3 mb-2">
              <CheckCircleIcon className="w-6 h-6 text-[#16A34A]" />
              <h3 className="font-serif text-xl font-bold text-[#14532D]">
                Account Successfully Deleted
              </h3>
            </div>
            <p className="text-sm text-[#166534] leading-relaxed">
              Your registered user record and all associated authentication credentials have been permanently deleted from Clerk directories.
            </p>
            {referenceId && (
              <div className="mt-3 text-xs font-mono text-[#14532D] bg-white/70 px-3 py-1.5 rounded-md inline-block border border-[#BBF7D0]">
                Reference ID: {referenceId}
              </div>
            )}
          </div>

          <div className="p-4 rounded-xl bg-[#FFF8E7] border border-[#FFE082] text-xs text-[#8A5D00] space-y-2">
            <div className="flex items-center space-x-2 font-semibold">
              <AlertTriangleIcon className="w-4 h-4 text-[#B8860B]" />
              <span>Google Play Subscription Reminder</span>
            </div>
            <p className="m-0 leading-relaxed">
              If you had an active recurring subscription to PanelDays Premium, please ensure you cancel it directly through Google Play Store. Account deletion does not automatically cancel Google Play subscriptions.
            </p>
            <div className="pt-1">
              <a
                href="https://play.google.com/store/account/subscriptions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-[#9E1B22] hover:underline"
              >
                <span>Open Google Play Subscriptions</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setStep("request_code");
                setEmail("");
                setCode("");
                setConfirmationKeyword("");
                setReferenceId(null);
              }}
              className="text-xs font-medium text-[#6B635B] hover:text-[#1A1816] underline"
            >
              Start another request &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
