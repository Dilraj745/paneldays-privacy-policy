"use client";

import React, { useState, useEffect, useCallback } from "react";

export interface TermsTocItem {
  id: string;
  number: number;
  title: string;
}

export const TERMS_TOC_SECTIONS: TermsTocItem[] = [
  { id: "section-1", number: 1, title: "Acceptance of Terms" },
  { id: "section-2", number: 2, title: "The PanelDays App & Eligibility" },
  { id: "section-3", number: 3, title: "Accounts & Guest Mode" },
  { id: "section-4", number: 4, title: "Your Content & Ownership" },
  { id: "section-5", number: 5, title: "Acceptable Use" },
  { id: "section-6", number: 6, title: "Premium Subscriptions & Billing" },
  { id: "section-7", number: 7, title: "Third-Party Services" },
  { id: "section-8", number: 8, title: "Disclaimers & Limitation of Liability" },
  { id: "section-9", number: 9, title: "Changes to These Terms" },
  { id: "section-10", number: 10, title: "Contact Information" },
];

interface TermsTableOfContentsProps {
  variant?: "sidebar" | "mobile";
}

export default function TermsTableOfContents({
  variant = "sidebar",
}: TermsTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("section-1");
  const [mobileExpanded, setMobileExpanded] = useState<boolean>(false);

  const updateActiveSection = useCallback(() => {
    const triggerOffset = 150;

    for (let i = TERMS_TOC_SECTIONS.length - 1; i >= 0; i--) {
      const item = TERMS_TOC_SECTIONS[i];
      const el = document.getElementById(item.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerOffset) {
          setActiveId(item.id);
          return;
        }
      }
    }
    setActiveId("section-1");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    const timer = setTimeout(updateActiveSection, 0);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [updateActiveSection]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (variant === "mobile") {
      setMobileExpanded(false);
    }
  };

  if (variant === "mobile") {
    const activeItem =
      TERMS_TOC_SECTIONS.find((s) => s.id === activeId) ||
      TERMS_TOC_SECTIONS[0];

    return (
      <div className="bg-white rounded-xl border border-[#E8DFD8] shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="w-full px-4 py-3.5 flex items-center justify-between text-left bg-[#FAF7F2] hover:bg-[#F5EFEB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9E1B22]"
          aria-expanded={mobileExpanded}
        >
          <div className="flex items-center space-x-2.5 overflow-hidden">
            <span className="flex-shrink-0 w-6 h-6 rounded-md bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-xs flex items-center justify-center border border-[#E8DFD8]">
              {String(activeItem.number).padStart(2, "0")}
            </span>
            <span className="text-xs font-semibold text-[#8C827A] uppercase tracking-wider">
              Section:
            </span>
            <span className="text-sm font-medium text-[#1A1816] truncate">
              {activeItem.title}
            </span>
          </div>
          <svg
            className={`w-5 h-5 text-[#6B635B] transform transition-transform ${
              mobileExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {mobileExpanded && (
          <div className="p-3 max-h-80 overflow-y-auto divide-y divide-[#E8DFD8]/60 bg-white">
            {TERMS_TOC_SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full py-2.5 px-3 flex items-center space-x-3 text-left rounded-lg text-sm transition-colors ${
                  activeId === section.id
                    ? "bg-[#FDF2F2] text-[#9E1B22] font-semibold"
                    : "text-[#4A453F] hover:bg-[#FAF7F2] hover:text-[#1A1816]"
                }`}
              >
                <span className="font-mono text-xs text-[#8C827A]">
                  {String(section.number).padStart(2, "0")}.
                </span>
                <span className="truncate">{section.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <nav
      id="toc"
      aria-label="Table of Contents"
      className="sticky top-28 p-5 bg-white rounded-2xl border border-[#E8DFD8] shadow-sm space-y-4 max-h-[calc(100vh-8.5rem)] overflow-y-auto"
    >
      <div className="pb-3 border-b border-[#E8DFD8]">
        <h3 className="font-serif font-bold text-lg text-[#1A1816]">
          Table of Contents
        </h3>
        <p className="text-xs text-[#6B635B] mt-0.5">
          10 Comprehensive Terms Sections
        </p>
      </div>

      <ul className="space-y-1">
        {TERMS_TOC_SECTIONS.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center space-x-2.5 ${
                  isActive
                    ? "bg-[#FDF2F2] text-[#9E1B22] font-bold shadow-xs border-l-2 border-[#9E1B22]"
                    : "text-[#4A453F] hover:bg-[#FAF7F2] hover:text-[#1A1816] font-medium"
                }`}
              >
                <span
                  className={`font-mono text-[11px] ${
                    isActive ? "text-[#9E1B22]" : "text-[#8C827A]"
                  }`}
                >
                  {String(section.number).padStart(2, "0")}
                </span>
                <span className="truncate">{section.title}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="pt-3 border-t border-[#E8DFD8] text-[11px] text-[#8C827A] flex items-center justify-between">
        <span>Package: com.paneldays.app</span>
        <a
          href="#top"
          className="text-[#9E1B22] hover:underline font-medium"
        >
          Back to Top &uarr;
        </a>
      </div>
    </nav>
  );
}
