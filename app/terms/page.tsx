import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsHero from "@/components/TermsHero";
import TermsTableOfContents from "@/components/TermsTableOfContents";
import TermsContent from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service — PanelDays Official",
  description:
    "Official Terms of Service for the PanelDays Android application (com.paneldays.app). Understand your rights, local content ownership, and Google Play subscription terms.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/terms",
    siteName: "PanelDays",
    title: "Terms of Service — PanelDays Official",
    description:
      "Official Terms of Service for the PanelDays Android mobile application. Clear, transparent rules on local content ownership, accounts, and subscriptions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — PanelDays Official",
    description:
      "Official Terms of Service for the PanelDays Android application (com.paneldays.app).",
  },
};

export default function TermsPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <TermsHero />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Mobile TOC Quick Accordion */}
        <div className="block lg:hidden mb-8">
          <TermsTableOfContents variant="mobile" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Desktop Table of Contents Sticky Column */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <TermsTableOfContents variant="sidebar" />
          </aside>

          {/* Main Terms of Service Article Content */}
          <div className="lg:col-span-8 xl:col-span-9 bg-white p-6 sm:p-10 md:p-12 rounded-2xl border border-[#E8DFD8] shadow-sm">
            <TermsContent />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
