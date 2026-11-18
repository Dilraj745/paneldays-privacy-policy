import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact PanelDays — Official Support & Privacy Team",
  description:
    "Get in touch with the official PanelDays support and privacy team. Help with your account, app features, subscriptions, and data deletion requests.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact PanelDays — Support & Privacy Team",
    description:
      "We're here to help. Reach out to the PanelDays team regarding app features, privacy requests, subscriptions, and account assistance.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-[#E8DFD8] bg-gradient-to-b from-[#FAF7F2] to-[#F5EFEB]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#9E1B22] border border-[#F8D7DA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E1B22] mr-2"></span>
              Official Support Channel
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono text-[#6B635B] bg-white border border-[#E8DFD8]">
              Response within 48 hours
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1A1816] tracking-tight leading-tight mb-4">
            Contact PanelDays
          </h1>

          <p className="text-lg sm:text-xl text-[#4A453F] max-w-3xl font-light leading-relaxed">
            We&rsquo;re here to help. Whether you have questions about your account, privacy, subscriptions, or the PanelDays application, feel free to contact our team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Cards Column (Left / Top) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A1816] mb-2">
                Dedicated Channels
              </h2>
              <p className="text-sm text-[#6B635B] leading-relaxed">
                Click any contact card below to immediately open an email draft with the subject prefilled for that department.
              </p>
            </div>

            {/* Card 1: General Support */}
            <a
              href="mailto:paneldays@gmail.com?subject=%5BPanelDays%20Support%5D%20General%20Inquiry"
              className="group block p-5 rounded-2xl bg-white border border-[#E8DFD8] hover:border-[#9E1B22]/40 shadow-sm hover:shadow transition-all text-decoration-none"
            >
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F2] text-[#9E1B22] flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                  💬
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-base text-[#1A1816] group-hover:text-[#9E1B22] transition-colors m-0">
                      General Support
                    </h3>
                    <span className="text-xs text-[#9E1B22] font-semibold flex items-center">
                      Email &rarr;
                    </span>
                  </div>
                  <p className="text-xs text-[#6B635B] mt-1 mb-2 leading-relaxed">
                    Questions about scrapbook tools, templates, video editing, or app functionality.
                  </p>
                  <span className="inline-flex items-center text-xs font-semibold text-[#9E1B22] font-mono">
                    paneldays@gmail.com
                  </span>
                </div>
              </div>
            </a>

            {/* Card 2: Privacy and Data Requests */}
            <a
              href="mailto:paneldays@gmail.com?subject=%5BPanelDays%20Privacy%5D%20Data%20Access%20or%20Grievance%20Request"
              className="group block p-5 rounded-2xl bg-white border border-[#E8DFD8] hover:border-[#9E1B22]/40 shadow-sm hover:shadow transition-all text-decoration-none"
            >
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF4E8] text-[#C5A059] flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                  🛡️
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-base text-[#1A1816] group-hover:text-[#9E1B22] transition-colors m-0">
                      Privacy &amp; Data Requests
                    </h3>
                    <span className="text-xs text-[#9E1B22] font-semibold flex items-center">
                      Email &rarr;
                    </span>
                  </div>
                  <p className="text-xs text-[#6B635B] mt-1 mb-2 leading-relaxed">
                    Privacy concerns, data access rights, grievance redressal under DPDP/GDPR/CCPA.
                  </p>
                  <span className="inline-flex items-center text-xs font-semibold text-[#9E1B22] font-mono">
                    paneldays@gmail.com
                  </span>
                </div>
              </div>
            </a>

            {/* Card 3: Account Deletion Assistance */}
            <a
              href="mailto:paneldays@gmail.com?subject=%5BPanelDays%20Account%5D%20Account%20Deletion%20Assistance"
              className="group block p-5 rounded-2xl bg-white border border-[#E8DFD8] hover:border-[#9E1B22]/40 shadow-sm hover:shadow transition-all text-decoration-none"
            >
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F2] text-[#9E1B22] flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                  🗑️
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-base text-[#1A1816] group-hover:text-[#9E1B22] transition-colors m-0">
                      Account Deletion Assistance
                    </h3>
                    <span className="text-xs text-[#9E1B22] font-semibold flex items-center">
                      Email &rarr;
                    </span>
                  </div>
                  <p className="text-xs text-[#6B635B] mt-1 mb-2 leading-relaxed">
                    Assistance with permanently deleting your registered account and associated records.
                  </p>
                  <span className="inline-flex items-center text-xs font-semibold text-[#9E1B22] font-mono">
                    paneldays@gmail.com
                  </span>
                </div>
              </div>
            </a>

            {/* Application Identifier Badge Box */}
            <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E8DFD8] text-xs text-[#4A453F] space-y-1.5">
              <div className="font-semibold text-[#1A1816]">App Metadata for Inquiries:</div>
              <div className="flex justify-between">
                <span className="text-[#6B635B]">Application:</span>
                <span className="font-medium">PanelDays</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B635B]">Android Package ID:</span>
                <code className="text-[#9E1B22] font-mono">com.paneldays.app</code>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B635B]">Platform:</span>
                <span>Android (Google Play)</span>
              </div>
            </div>
          </div>

          {/* Form Column (Right) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
