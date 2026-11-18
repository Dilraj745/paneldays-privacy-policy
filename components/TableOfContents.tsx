"use client";

import React, { useState, useEffect } from "react";

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

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("section-1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = TOC_SECTIONS.length - 1; i >= 0; i--) {
        const item = TOC_SECTIONS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="toc"
      aria-label="Table of Contents"
      className="bg-white/80 backdrop-blur-sm border border-[#E8DFD8] rounded-2xl p-5 shadow-sm sticky top-28"
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
              className={`group flex items-start py-1.5 px-2.5 rounded-lg text-xs leading-snug transition-all ${
                isActive
                  ? "bg-[#FDF2F2] text-[#9E1B22] font-semibold"
                  : "text-[#6B635B] hover:text-[#1A1816] hover:bg-[#FAF7F2]"
              }`}
            >
              <span
                className={`w-5 flex-shrink-0 font-mono text-[11px] ${
                  isActive ? "text-[#9E1B22] font-bold" : "text-[#B3A89F]"
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
          className="text-[#9E1B22] hover:underline font-medium inline-flex items-center"
        >
          Top ↑
        </a>
      </div>
    </nav>
  );
}
