"use client";

import React, { useState } from "react";
import { CheckCircleIcon, EmailIcon, AlertTriangleIcon } from "@/components/Icons";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("General Support");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!message.trim()) {
      setErrorMessage("Please enter your message before sending.");
      return;
    }

    setErrorMessage(null);

    const emailSubject = encodeURIComponent(
      `[PanelDays ${category}] ${subject.trim() || "User Inquiry"}`
    );

    const emailBody = encodeURIComponent(
      `Full Name: ${fullName.trim() || "Not provided"}\n` +
      `Email Address: ${email.trim()}\n` +
      `Inquiry Category: ${category}\n` +
      `Application: PanelDays (com.paneldays.app)\n\n` +
      `Message:\n${message.trim()}\n`
    );

    const mailtoUrl = `mailto:paneldays@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open user's default email client with all details prefilled
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8DFD8] shadow-sm">
      <div className="border-b border-[#E8DFD8] pb-5 mb-6">
        <h2 className="font-serif text-2xl font-bold text-[#1A1816]">
          Send a Message to Our Team
        </h2>
        <p className="text-sm text-[#6B635B] mt-1.5 leading-relaxed">
          Fill out the details below. When you click send, your message and contact details will automatically be loaded into your device&rsquo;s email client addressed directly to <strong className="text-[#9E1B22]">paneldays@gmail.com</strong>.
        </p>
      </div>

      {isSubmitted && (
        <div className="mb-6 p-4 rounded-xl bg-[#FDF2F2] border border-[#F8D7DA] text-sm text-[#4A453F]">
          <div className="flex items-center text-[#9E1B22] font-bold mb-1">
            <CheckCircleIcon className="w-5 h-5 mr-2 text-[#9E1B22] flex-shrink-0" />
            <span>Email Client Opened</span>
          </div>
          <p className="m-0 leading-relaxed text-xs sm:text-sm">
            Your email client should have opened with your prefilled inquiry. Please click <strong>Send</strong> in your mail application to deliver it to <strong>paneldays@gmail.com</strong>. If your email client did not open automatically, you can email us directly at <a href="mailto:paneldays@gmail.com" className="text-[#9E1B22] font-semibold underline">paneldays@gmail.com</a>.
          </p>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 flex items-center">
          <AlertTriangleIcon className="w-4 h-4 mr-1.5 flex-shrink-0 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5">
              Full Name (Optional)
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Alex Morgan"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm placeholder:text-[#A89F95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5">
              Your Email Address <span className="text-[#9E1B22]">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. user@example.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm placeholder:text-[#A89F95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5">
              Inquiry Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22]"
            >
              <option value="General Support">General Support &amp; Questions</option>
              <option value="Privacy Inquiry">Privacy &amp; Data Rights</option>
              <option value="Account Deletion">Account Deletion Assistance</option>
              <option value="Subscription & Billing">Subscription &amp; Google Play Billing</option>
              <option value="Bug Report">Bug Report or Feedback</option>
            </select>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5">
              Subject Line
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Brief summary of your question"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm placeholder:text-[#A89F95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#4A453F] mb-1.5">
            Your Message <span className="text-[#9E1B22]">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please write your questions, details, or feedback here..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] bg-[#FAF7F2] text-[#1A1816] text-sm placeholder:text-[#A89F95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 focus:border-[#9E1B22]"
          />
        </div>

        {/* Honest Architecture Disclosure Notice */}
        <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] text-xs text-[#6B635B] leading-relaxed">
          <strong className="text-[#1A1816] font-semibold block mb-0.5">Privacy &amp; Processing Transparency</strong>
          To protect your privacy and ensure direct communication, this form does not transmit your personal data to third-party marketing databases or intermediate form brokers. Clicking below prepares a direct message in your mail client addressed to <span className="font-mono text-[#9E1B22]">paneldays@gmail.com</span>.
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-white bg-[#9E1B22] hover:bg-[#8B1E22] shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#9E1B22] focus:ring-offset-2"
        >
          <EmailIcon className="w-4 h-4 mr-2 text-white" />
          Open in Email Client to Send &rarr;
        </button>
      </form>
    </div>
  );
}
