import React from "react";
import {
  SecurityShieldIcon,
  SparklesIcon,
  CreditCardIcon,
  InfoIcon,
} from "@/components/Icons";

export default function TermsHero() {
  return (
    <div className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-[#E8DFD8] bg-gradient-to-b from-[#FAF7F2] to-[#F5EFEB]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compliance pill */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#9E1B22] border border-[#F8D7DA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E1B22] mr-2"></span>
            Official Legal Terms
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-[#4A453F] border border-[#E8DFD8]">
            Google Play Store Compliant
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono text-[#6B635B] bg-white border border-[#E8DFD8]">
            Package: com.paneldays.app
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1816] tracking-tight leading-tight mb-4">
          Terms of Service
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#4A453F] max-w-3xl font-light leading-relaxed mb-8">
          Welcome to <strong className="font-semibold text-[#1A1816]">PanelDays</strong>. Please review these Terms of Service carefully to understand your rights, responsibilities, content ownership, and Google Play subscription rules.
        </p>

        {/* Meta details bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-white border border-[#E8DFD8] shadow-sm mb-8 text-sm">
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#8C827A] font-semibold">
              Application
            </span>
            <span className="font-medium text-[#1A1816]">PanelDays (Android)</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#8C827A] font-semibold">
              Effective Date
            </span>
            <span className="font-medium text-[#1A1816]">November 19, 2026</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#8C827A] font-semibold">
              Last Updated
            </span>
            <span className="font-medium text-[#1A1816]">November 19, 2026</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#8C827A] font-semibold">
              Support &amp; Legal Contact
            </span>
            <a
              href="mailto:paneldays@gmail.com"
              className="font-medium text-[#9E1B22] hover:underline"
            >
              paneldays@gmail.com
            </a>
          </div>
        </div>

        {/* 4 Core Terms Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white/70 border border-[#E8DFD8] hover:border-[#9E1B22]/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] flex items-center justify-center font-bold mb-3">
              <SecurityShieldIcon className="w-4 h-4 text-[#C5A059]" />
            </div>
            <h3 className="font-serif font-bold text-sm text-[#1A1816] mb-1">
              Local Content Ownership
            </h3>
            <p className="text-xs text-[#6B635B] leading-relaxed">
              Your photos, videos, and scrapbooks reside on your device. You retain full ownership and responsibility for what you create.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#E8DFD8] hover:border-[#9E1B22]/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] flex items-center justify-center font-bold mb-3">
              <SparklesIcon className="w-4 h-4 text-[#C5A059]" />
            </div>
            <h3 className="font-serif font-bold text-sm text-[#1A1816] mb-1">
              Guest Mode Freedom
            </h3>
            <p className="text-xs text-[#6B635B] leading-relaxed">
              Use PanelDays immediately without mandatory registration. Optional accounts are provided for user identity sync.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#E8DFD8] hover:border-[#9E1B22]/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] flex items-center justify-center font-bold mb-3">
              <CreditCardIcon className="w-4 h-4 text-[#C5A059]" />
            </div>
            <h3 className="font-serif font-bold text-sm text-[#1A1816] mb-1">
              Google Play Billing
            </h3>
            <p className="text-xs text-[#6B635B] leading-relaxed">
              All premium subscriptions are billed, managed, renewed, and cancelled directly through your Google Play account settings.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#E8DFD8] hover:border-[#9E1B22]/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] flex items-center justify-center font-bold mb-3">
              <InfoIcon className="w-4 h-4 text-[#C5A059]" />
            </div>
            <h3 className="font-serif font-bold text-sm text-[#1A1816] mb-1">
              Clear &amp; Plain Language
            </h3>
            <p className="text-xs text-[#6B635B] leading-relaxed">
              Straightforward terms written in plain language without hidden clauses, complicated legalese, or unfair restrictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
