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
                  className="font-medium text-[#4A453F] hover:text-[#9E1B22] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="font-medium text-[#4A453F] hover:text-[#9E1B22] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/account-deletion"
                  className="font-medium text-[#9E1B22] hover:underline flex items-center"
                >
                  Account Deletion
                  <span className="ml-2 text-[10px] bg-[#D1FAE5] text-[#065F46] font-bold px-1.5 py-0.5 rounded border border-[#A7F3D0]">
                    Google Play
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-[#4A453F] hover:text-[#9E1B22] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy#section-16"
                  className="text-[#6B635B] hover:text-[#9E1B22] transition-colors"
                >
                  User Privacy Rights
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy#section-9"
                  className="text-[#6B635B] hover:text-[#9E1B22] transition-colors"
                >
                  Third-Party Disclosures
                </Link>
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
            <div className="pt-2">
              <Link
                href="/contact"
                className="text-xs font-medium text-[#4A453F] hover:text-[#9E1B22] underline"
              >
                Open Contact &amp; Support Page &rarr;
              </Link>
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
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <span>•</span>
            <Link href="/account-deletion" className="hover:underline">Account Deletion</Link>
            <span>•</span>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
