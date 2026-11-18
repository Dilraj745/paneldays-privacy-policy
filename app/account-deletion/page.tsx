import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccountDeletionForm from "@/components/AccountDeletionForm";

export const metadata: Metadata = {
  title: "Delete Your PanelDays Account — Data & Account Removal",
  description:
    "Official guide and request resource for permanently deleting your PanelDays account and associated data. Google Play compliant account removal instructions.",
  alternates: {
    canonical: "/account-deletion",
  },
  openGraph: {
    title: "Delete Your PanelDays Account — Official Removal Guide",
    description:
      "Permanent account and data removal instructions for PanelDays (com.paneldays.app). Complete in-app steps and web-based request options.",
    url: "/account-deletion",
  },
};

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-[#E8DFD8] bg-gradient-to-b from-[#FAF7F2] to-[#F5EFEB]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#9E1B22] border border-[#F8D7DA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E1B22] mr-2"></span>
              Google Play Policy Compliant Resource
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono text-[#6B635B] bg-white border border-[#E8DFD8]">
              Package: com.paneldays.app
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1A1816] tracking-tight leading-tight mb-4">
            Delete Your PanelDays Account
          </h1>

          <p className="text-lg sm:text-xl text-[#4A453F] max-w-3xl font-light leading-relaxed">
            PanelDays respects your privacy and gives registered users the ability to request permanent deletion of their accounts and associated personal data.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-12">
        {/* Step-by-Step In-App Deletion Guide */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8DFD8] shadow-sm">
          <div className="border-b border-[#E8DFD8] pb-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B22]">
              Recommended &amp; Instant Method
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] mt-1">
              How to Delete Your Account in the PanelDays Mobile App
            </h2>
            <p className="text-sm text-[#6B635B] mt-1">
              If you have the PanelDays Android application installed, you can trigger immediate account deletion directly in the app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#9E1B22] text-white font-mono text-xs font-bold mb-3">
                  Step 1
                </span>
                <h3 className="font-serif font-bold text-base text-[#1A1816] mb-1">
                  Open PanelDays
                </h3>
                <p className="text-xs text-[#6B635B] leading-relaxed">
                  Launch the PanelDays application on your Android phone or tablet.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#9E1B22] text-white font-mono text-xs font-bold mb-3">
                  Step 2
                </span>
                <h3 className="font-serif font-bold text-base text-[#1A1816] mb-1">
                  Open Profile
                </h3>
                <p className="text-xs text-[#6B635B] leading-relaxed">
                  Navigate to the <strong>Profile</strong> tab on the bottom navigation bar.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#9E1B22] text-white font-mono text-xs font-bold mb-3">
                  Step 3
                </span>
                <h3 className="font-serif font-bold text-base text-[#1A1816] mb-1">
                  Select Delete Account
                </h3>
                <p className="text-xs text-[#6B635B] leading-relaxed">
                  Scroll to the bottom of the Profile screen and tap <strong>Delete Account</strong>.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#9E1B22] text-white font-mono text-xs font-bold mb-3">
                  Step 4
                </span>
                <h3 className="font-serif font-bold text-base text-[#1A1816] mb-1">
                  Confirm Request
                </h3>
                <p className="text-xs text-[#6B635B] leading-relaxed">
                  Type <strong className="font-mono text-[#9E1B22]">DELETE</strong>. If prompted, re-verify your password for security.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FDF2F2] border border-[#F8D7DA] flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#9E1B22] text-white font-mono text-xs font-bold mb-3">
                  Step 5
                </span>
                <h3 className="font-serif font-bold text-base text-[#9E1B22] mb-1">
                  Account Purge
                </h3>
                <p className="text-xs text-[#6B635B] leading-relaxed">
                  All local projects, custom stickers, vault keys, and session credentials are permanently purged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Architectural Scope of Deletion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Data Deletion Scope */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFD8] shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF4E8] text-[#C5A059] flex items-center justify-center font-bold text-lg">
                🗑️
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1816]">
                What Data is Permanently Deleted?
              </h3>
            </div>
            <p className="text-sm text-[#4A453F] leading-relaxed">
              Upon completing account deletion, the following data categories are irreversibly erased:
            </p>
            <ul className="text-sm text-[#4A453F] space-y-2 list-disc ml-5">
              <li><strong>Local User Profile:</strong> Display name, profile photo preferences, and app configuration (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">@paneldays_user_profile_v1</code>).</li>
              <li><strong>Scrapbook Projects &amp; Pages:</strong> All user-created memory books, layout configurations, and text journals (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">@paneldays_books_v1</code>).</li>
              <li><strong>Custom Stickers &amp; Designs:</strong> All user-generated stickers, stamps, and layout templates (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">@paneldays_custom_stickers_v1</code>).</li>
              <li><strong>Private Vault Data:</strong> Vault albums, PIN hashes, and Android KeyStore master encryption keys.</li>
              <li><strong>Local Authentication Session:</strong> Auth tokens stored in encrypted secure storage (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">paneldays_auth_token_v1</code>).</li>
              <li><strong>Remote Authentication Record:</strong> When verified, your registered identity is permanently deleted from Clerk user directories.</li>
            </ul>
          </div>

          {/* Subscriptions & Google Play Billing */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFD8] shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#FDF2F2] text-[#9E1B22] flex items-center justify-center font-bold text-lg">
                💳
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1816]">
                What Happens to Google Play Subscriptions?
              </h3>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FFF8E7] border border-[#FFE082] text-xs text-[#8A5D00] leading-relaxed">
              <strong>CRITICAL NOTICE:</strong> Deleting your PanelDays account does <strong>NOT</strong> automatically cancel or refund your active Google Play subscription.
            </div>
            <p className="text-sm text-[#4A453F] leading-relaxed">
              In-app subscriptions are managed solely by <strong>Google Play Billing</strong>. PanelDays cannot cancel subscriptions or issue direct refunds on your behalf. To prevent recurring charges:
            </p>
            <ol className="text-sm text-[#4A453F] space-y-2 list-decimal ml-5">
              <li>Open the <strong>Google Play Store</strong> app on your device.</li>
              <li>Tap your profile icon in the upper-right corner.</li>
              <li>Select <strong>Payments &amp; subscriptions &rarr; Subscriptions</strong>.</li>
              <li>Locate <strong>PanelDays Premium</strong> and tap <strong>Cancel subscription</strong>.</li>
            </ol>
            <div className="pt-2">
              <a
                href="https://play.google.com/store/account/subscriptions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-[#9E1B22] hover:underline"
              >
                Manage Google Play Subscriptions Directly &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Important Distinctions Box */}
        <section className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFD8] text-sm text-[#4A453F] space-y-3">
          <h4 className="font-serif text-lg font-bold text-[#1A1816]">
            Important Distinctions Regarding Account Deletion
          </h4>
          <ul className="space-y-1.5 list-disc ml-5 text-xs sm:text-sm">
            <li>
              <strong>Account Deletion vs. Uninstalling:</strong> Uninstalling the application from your phone removes local cached data but does not formally remove your registered account identity from remote Clerk directories. Use the in-app deletion button or the web request form below to ensure complete removal.
            </li>
            <li>
              <strong>Exported Files:</strong> Any scrapbook packages (<code className="text-xs bg-white px-1 py-0.5 rounded text-[#9E1B22] font-mono">.paneldays</code>), videos, or images that you previously exported to your device gallery or external storage will remain on your device unless manually deleted by you through your Android file manager.
            </li>
            <li>
              <strong>Legally Required Records:</strong> We do not retain personal content after deletion. However, financial transaction receipt records are retained by Google Play in accordance with applicable tax and commercial accounting regulations.
            </li>
          </ul>
        </section>

        {/* Web-Based Request Form (For users unable to access mobile app) */}
        <section id="request-form">
          <AccountDeletionForm />
        </section>

        {/* Google Play Compliance Identification Card */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFD8] shadow-sm">
          <h4 className="font-serif text-base font-bold text-[#1A1816] mb-3">
            Google Play User Data &amp; Account Deletion Compliance Summary
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#4A453F]">
            <div>
              <span className="block text-[#8C827A] uppercase tracking-wider font-semibold">Application</span>
              <span className="font-medium text-[#1A1816]">PanelDays</span>
            </div>
            <div>
              <span className="block text-[#8C827A] uppercase tracking-wider font-semibold">Package Name</span>
              <code className="text-[#9E1B22] font-mono">com.paneldays.app</code>
            </div>
            <div>
              <span className="block text-[#8C827A] uppercase tracking-wider font-semibold">Developer Identity</span>
              <span className="font-medium text-[#1A1816]">PanelDays</span>
            </div>
            <div>
              <span className="block text-[#8C827A] uppercase tracking-wider font-semibold">Privacy Officer Contact</span>
              <a href="mailto:paneldays@gmail.com" className="text-[#9E1B22] font-medium hover:underline">
                paneldays@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#E8DFD8] flex flex-wrap gap-4 text-xs text-[#6B635B]">
            <Link href="/privacy-policy" className="hover:text-[#9E1B22] underline">
              View Complete Privacy Policy &rarr;
            </Link>
            <Link href="/contact" className="hover:text-[#9E1B22] underline">
              Need assistance? Contact Support &rarr;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
