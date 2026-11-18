"use client";

import React, { useState, useEffect, useCallback } from "react";

export interface TocItem {
  id: string;
  number: number;
  title: string;
}

export const TOC_SECTIONS: TocItem[] = [
  { id: "section-1", number: 1, title: "Introduction" },
  { id: "section-2", number: 2, title: "Information We Collect" },
  { id: "section-3", number: 3, title: "Guest Accounts and Registered Accounts" },
  { id: "section-4", number: 4, title: "Device Permissions" },
  { id: "section-5", number: 5, title: "Photos, Videos and User Content" },
  { id: "section-6", number: 6, title: "Local Storage and Project Management" },
  { id: "section-7", number: 7, title: "Private Vault and Device Security" },
  { id: "section-8", number: 8, title: "How We Use Information" },
  { id: "section-9", number: 9, title: "Third-Party Services" },
  { id: "section-10", number: 10, title: "Subscriptions and Payments" },
  { id: "section-11", number: 11, title: "Information Sharing and Disclosure" },
  { id: "section-12", number: 12, title: "Data Security" },
  { id: "section-13", number: 13, title: "Data Retention" },
  { id: "section-14", number: 14, title: "Account Deletion and Data Removal" },
  { id: "section-15", number: 15, title: "Children's Privacy" },
  { id: "section-16", number: 16, title: "User Privacy Rights" },
  { id: "section-17", number: 17, title: "International Data Transfers" },
  { id: "section-18", number: 18, title: "Changes to This Privacy Policy" },
  { id: "section-19", number: 19, title: "Contact Information" },
];

interface TableOfContentsProps {
  variant?: "sidebar" | "mobile";
}

export default function TableOfContents({ variant = "sidebar" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("section-1");
  const [mobileExpanded, setMobileExpanded] = useState<boolean>(false);

  // Accurate active section calculation using getBoundingClientRect
  const updateActiveSection = useCallback(() => {
    // 140px accounts for sticky header (80px) + 60px viewport breathing room
    const triggerOffset = 150;

    for (let i = TOC_SECTIONS.length - 1; i >= 0; i--) {
      const item = TOC_SECTIONS[i];
      const el = document.getElementById(item.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerOffset) {
          setActiveId(item.id);
          return;
        }
      }
    }
    // Fallback to section 1 when above the first trigger
    setActiveId("section-1");
  }, []);

  // Handle direct hash navigation on initial page load, browser refresh, or hash change
  useEffect(() => {
    const handleHashNavigation = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        const target = document.getElementById(hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveId(hash);
          }, 120);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);
    return () => window.removeEventListener("hashchange", handleHashNavigation);
  }, []);

  // Scroll listener
  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
      if (variant === "mobile") {
        setMobileExpanded(false);
      }
    }
  };

  // Find active item title for mobile summary
  const activeItem = TOC_SECTIONS.find((s) => s.id === activeId) || TOC_SECTIONS[0];

  // Mobile Accordion Variant
  if (variant === "mobile") {
    return (
      <div className="w-full bg-[#FAF7F2] border border-[#E8DFD8] rounded-xl overflow-hidden shadow-sm">
        <button
          type="button"
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="w-full px-4 py-3.5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 transition-colors bg-[#FAF7F2] hover:bg-[#F5EFEB]"
          aria-expanded={mobileExpanded}
          aria-controls="mobile-toc-list"
        >
          <div className="flex items-center space-x-2.5 truncate pr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9E1B22] flex-shrink-0" />
            <div className="flex flex-col truncate">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C827A]">
                Table of Contents ({TOC_SECTIONS.length} Sections)
              </span>
              <span className="text-xs font-semibold text-[#1A1816] truncate">
                {activeItem.number.toString().padStart(2, "0")}. {activeItem.title}
              </span>
            </div>
          </div>
          <span className="flex-shrink-0 text-xs font-semibold text-[#9E1B22] flex items-center bg-white px-2.5 py-1 rounded-md border border-[#E8DFD8]">
            {mobileExpanded ? "Hide" : "Jump To"}
            <svg
              className={`w-3.5 h-3.5 ml-1 transition-transform ${mobileExpanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        {mobileExpanded && (
          <div
            id="mobile-toc-list"
            className="p-3 border-t border-[#E8DFD8] bg-white max-h-80 overflow-y-auto space-y-1"
          >
            {TOC_SECTIONS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`flex items-center py-2 px-3 rounded-lg text-xs transition-colors ${isActive
                    ? "bg-[#FDF2F2] text-[#9E1B22] font-semibold"
                    : "text-[#4A453F] hover:bg-[#FAF7F2] hover:text-[#1A1816]"
                    }`}
                >
                  <span
                    className={`w-6 flex-shrink-0 font-mono text-[11px] ${isActive ? "text-[#9E1B22] font-bold" : "text-[#B3A89F]"
                      }`}
                  >
                    {item.number.toString().padStart(2, "0")}
                  </span>
                  <span className="truncate">{item.title}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Desktop Sidebar Variant
  return (
    <nav
      id="toc"
      aria-label="Table of Contents"
      className="bg-white/90 backdrop-blur-sm border border-[#E8DFD8] rounded-2xl p-5 shadow-sm sticky top-28"
    >
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8DFD8]">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#9E1B22]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#1A1816]">
            Table of Contents
          </h2>
        </div>
        <span className="text-xs font-mono text-[#8C827A]">19 Sections</span>
      </div>

      <div className="max-h-[calc(100vh-14rem)] overflow-y-auto pr-1 space-y-1 text-sm">
        {TOC_SECTIONS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`group flex items-start py-1.5 px-2.5 rounded-lg text-xs leading-snug transition-all ${isActive
                ? "bg-[#FDF2F2] text-[#9E1B22] font-semibold border-l-2 border-[#9E1B22]"
                : "text-[#6B635B] hover:text-[#1A1816] hover:bg-[#FAF7F2]"
                }`}
            >
              <span
                className={`w-5 flex-shrink-0 font-mono text-[11px] ${isActive ? "text-[#9E1B22] font-bold" : "text-[#B3A89F]"
                  }`}
              >
                {item.number.toString().padStart(2, "0")}
              </span>
              <span className="truncate">{item.title}</span>
            </a>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-[#E8DFD8] text-[11px] text-[#8C827A] flex items-center justify-between">
        <span>Click any section to jump</span>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "#top");
          }}
          className="text-[#9E1B22] hover:underline font-medium inline-flex items-center"
        >
          Top ↑
        </a>
      </div>
    </nav>
  );
}
