import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#F5EFEB] border-t border-[#E8DFD8] text-[#383430] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#9E1B22] flex items-center justify-center text-white font-serif font-bold text-lg">
                P
              </div>
              <span className="font-serif font-bold text-2xl text-[#1A1816]">
                PanelDays
              </span>
            </div>
            <p className="text-sm text-[#6B635B] max-w-md leading-relaxed">
              PanelDays is a creative, local-first scrapbook and photo memory application
              for Android. Designed with privacy, artistic control, and personal memory
              preservation at its heart.
            </p>
            <div className="pt-1 flex flex-wrap gap-2 text-xs text-[#6B635B]">
              <span className="bg-[#FAF7F2] px-3 py-1 rounded-md border border-[#E8DFD8]">
                Android Package: com.paneldays.app
              </span>
              <span className="bg-[#FAF7F2] px-3 py-1 rounded-md border border-[#E8DFD8]">
                Google Play Compliant
              </span>
            </div>
          </div>

          {/* Quick Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1816] font-sans">
              Legal Documentation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="font-medium text-[#9E1B22] hover:underline"
                >
                  Privacy Policy (Active)
                </Link>
              </li>
              <li>
                {/* Honest placeholder without fake URL */}
                <span className="text-[#8C827A] flex items-center">
                  Account Deletion Webpage
                  <span className="ml-2 text-[10px] bg-[#E8DFD8] text-[#4A453F] px-1.5 py-0.5 rounded font-mono">
                    Coming Soon
                  </span>
                </span>
                <p className="text-[11px] text-[#6B635B] mt-0.5">
                  Currently handled directly in the app or via email.
                </p>
              </li>
              <li>
                <a
                  href="#section-16"
                  className="text-[#6B635B] hover:text-[#9E1B22] transition-colors"
                >
                  User Privacy Rights
                </a>
              </li>
              <li>
                <a
                  href="#section-9"
                  className="text-[#6B635B] hover:text-[#9E1B22] transition-colors"
                >
                  Third-Party Disclosures
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1816] font-sans">
              Direct Contact
            </h4>
            <p className="text-sm text-[#6B635B] leading-relaxed">
              Questions, feedback, or legal inquiries regarding your privacy:
            </p>
            <div className="pt-1">
              <a
                href="mailto:paneldays@gmail.com"
                className="inline-flex items-center text-sm font-semibold text-[#9E1B22] hover:text-[#8B1E22] transition-colors underline decoration-[#9E1B22]/30 underline-offset-4"
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                paneldays@gmail.com
              </a>
            </div>
            <p className="text-xs text-[#8C827A] pt-1">
              Response window: Within 48 business hours.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#E8DFD8] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B635B] gap-4">
          <div>
            &copy; {currentYear} PanelDays. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>Built for Google Play Store compliance</span>
            <span>•</span>
            <span>Local-First Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
