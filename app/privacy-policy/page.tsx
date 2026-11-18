import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicyHero from "@/components/PolicyHero";
import TableOfContents from "@/components/TableOfContents";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <PolicyHero />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Desktop Table of Contents Sticky Column */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <TableOfContents />
          </aside>

          {/* Main Privacy Policy Article Content */}
          <div className="lg:col-span-8 xl:col-span-9 bg-white p-6 sm:p-10 md:p-12 rounded-2xl border border-[#E8DFD8] shadow-sm">
            {/* Mobile TOC Quick Accordion */}
            <div className="block lg:hidden mb-10 pb-8 border-b border-[#E8DFD8]">
              <TableOfContents />
            </div>

            <PrivacyPolicyContent />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
