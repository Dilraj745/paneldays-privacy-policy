"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isPrivacy = pathname === "/privacy-policy" || pathname === "/";
  const isContact = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark */}
          <Link
            href="/privacy-policy"
            className="group flex items-center space-x-3 text-decoration-none focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/40 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-[#9E1B22] flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm group-hover:bg-[#8B1E22] transition-colors">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl tracking-tight text-[#1A1816] group-hover:text-[#9E1B22] transition-colors">
                PanelDays
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#6B635B] -mt-1">
                Official Privacy &amp; Legal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#F5EFEB] text-[#6B635B] border border-[#E8DFD8]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
              Android • v1.0.0
            </span>

            <Link
              href="/privacy-policy"
              className={`text-sm font-semibold transition-colors pb-0.5 ${
                isPrivacy
                  ? "text-[#9E1B22] border-b-2 border-[#9E1B22]"
                  : "text-[#4A453F] hover:text-[#1A1816]"
              }`}
            >
              Privacy Policy
            </Link>

            <Link
              href="/privacy-policy#toc"
              className="text-sm font-medium text-[#4A453F] hover:text-[#9E1B22] transition-colors"
            >
              Sections
            </Link>

            <Link
              href="/contact"
              className={`inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#9E1B22] focus:ring-offset-2 ${
                isContact
                  ? "bg-[#8B1E22] text-white"
                  : "text-white bg-[#9E1B22] hover:bg-[#8B1E22] hover:shadow"
              }`}
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
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#9E1B22] rounded-md"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#6B635B] hover:text-[#1A1816] hover:bg-[#F5EFEB] focus:outline-none focus:ring-2 focus:ring-[#9E1B22]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E8DFD8] bg-[#FAF7F2] space-y-2">
            <div className="px-3 pb-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#F5EFEB] text-[#6B635B] border border-[#E8DFD8]">
                Package: com.paneldays.app
              </span>
            </div>
            <Link
              href="/privacy-policy"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isPrivacy
                  ? "text-[#9E1B22] bg-[#FDF2F2]"
                  : "text-[#2C2926] hover:bg-[#F5EFEB]"
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/privacy-policy#toc"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#2C2926] hover:bg-[#F5EFEB]"
            >
              Table of Contents (19 Sections)
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isContact
                  ? "text-[#9E1B22] bg-[#FDF2F2]"
                  : "text-[#9E1B22] hover:bg-[#FDF2F2]"
              }`}
            >
              Contact Us &amp; Support
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
