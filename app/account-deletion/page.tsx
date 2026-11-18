import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccountDeletionForm from "@/components/AccountDeletionForm";
import {
  TrashIcon,
  CreditCardIcon,
  SecurityShieldIcon,
  AlertTriangleIcon,
  ExternalLinkIcon,
  DeviceMobileIcon,
  InfoIcon,
} from "@/components/Icons";

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
      "Account and data removal instructions for PanelDays (com.paneldays.app). Complete in-app steps and email-based deletion request process.",
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
              <SecurityShieldIcon className="w-3.5 h-3.5 mr-1.5 text-[#9E1B22]" />
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B22] flex items-center">
              <DeviceMobileIcon className="w-3.5 h-3.5 mr-1 text-[#9E1B22]" />
              In-App Deletion Process (Instant)
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] mt-1">
              How Account Deletion Operates in the PanelDays Mobile App
            </h2>
            <p className="text-sm text-[#6B635B] mt-1">
              If you have access to your Android device with PanelDays installed, you can trigger immediate account deletion directly in the app.
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
                  Type <strong className="font-mono text-[#9E1B22]">DELETE</strong>. If your last sign-in was more than 15 minutes ago, re-verify your password.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FDF2F2] border border-[#F8D7DA] flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#9E1B22] text-white font-mono text-xs font-bold mb-3">
                  Step 5
                </span>
                <h3 className="font-serif font-bold text-base text-[#9E1B22] mb-1">
                  Data Purge &amp; Sync
                </h3>
                <p className="text-xs text-[#6B635B] leading-relaxed">
                  All local projects, stickers, vault keys, and session tokens are wiped immediately. If Clerk self-deletion is enabled, remote deletion executes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EXPLAIN WHAT IS DELETED & 5. GOOGLE PLAY SUBSCRIPTION NOTICE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 4. Data Deletion Scope Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFD8] shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF4E8] text-[#C5A059] flex items-center justify-center font-bold text-lg">
                <TrashIcon className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1816]">
                What Is Deleted &amp; Architecture
              </h3>
            </div>
            <p className="text-sm text-[#4A453F] leading-relaxed">
              We precisely distinguish how different categories of data are processed upon deletion:
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-[#4A453F]">
              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8]">
                <strong className="text-[#1A1816] block font-semibold mb-1">
                  A. Local Device Data (Cleared via In-App Deletion)
                </strong>
                <p className="text-xs text-[#554F49] leading-relaxed mb-1.5">
                  Local user data is cleared exclusively through the verified in-app deletion flow on that device. This erases local profile preferences (<code className="text-[#9E1B22] font-mono">@paneldays_user_profile_v1</code>), scrapbook projects (<code className="text-[#9E1B22] font-mono">@paneldays_books_v1</code>), custom stickers, Private Vault albums and encryption keys, and session tokens.
                </p>
                <p className="text-[11px] text-[#8C827A] italic m-0">
                  Note: A remote request cannot remotely reach into or erase local-only files on an inaccessible physical device.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8]">
                <strong className="text-[#1A1816] block font-semibold mb-1">
                  B. Remote Clerk Account Information
                </strong>
                <p className="text-xs text-[#554F49] leading-relaxed m-0">
                  Remote Clerk user deletion during the in-app flow depends on the configured Clerk account-deletion capability (<code className="text-[#9E1B22] font-mono">deleteSelfEnabled</code>) successfully executing. When enabled in Clerk, your user record and credentials are deleted from Clerk&rsquo;s directory.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8]">
                <strong className="text-[#1A1816] block font-semibold mb-1">
                  C. Associated Data Requiring Manual Processing
                </strong>
                <p className="text-xs text-[#554F49] leading-relaxed m-0">
                  Email requests submitted through the form below are manually verified and processed by the PanelDays team directly within our authentication and service registries.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Google Play Subscription Notice Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFD8] shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#FDF2F2] text-[#9E1B22] flex items-center justify-center font-bold text-lg">
                <CreditCardIcon className="w-5 h-5 text-[#9E1B22]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1816]">
                Google Play Subscription Notice
              </h3>
            </div>
            
            <div className="p-4 rounded-xl bg-[#FFF8E7] border border-[#FFE082] text-xs sm:text-sm text-[#8A5D00] leading-relaxed flex items-start space-x-2.5">
              <AlertTriangleIcon className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold mb-0.5">
                  Deleting your PanelDays account does not automatically cancel your Google Play subscription.
                </strong>
                <span>
                  All recurring subscription payments are processed independently by Google Play Billing. PanelDays cannot cancel active recurring subscriptions or issue direct refunds.
                </span>
              </div>
            </div>

            <p className="text-sm text-[#4A453F] leading-relaxed">
              Users must cancel recurring subscriptions separately through Google Play. To cancel your active subscription before or after deleting your account:
            </p>
            <ol className="text-sm text-[#4A453F] space-y-2 list-decimal ml-5">
              <li>Open the <strong>Google Play Store</strong> app on your Android device.</li>
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
                <span>Manage Subscriptions on Google Play</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Important Distinctions Box */}
        <section className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFD8] text-sm text-[#4A453F] space-y-3">
          <div className="flex items-center space-x-2">
            <InfoIcon className="w-4 h-4 text-[#9E1B22]" />
            <h4 className="font-serif text-lg font-bold text-[#1A1816]">
              Important Distinctions Regarding Account Deletion
            </h4>
          </div>
          <ul className="space-y-1.5 list-disc ml-5 text-xs sm:text-sm">
            <li>
              <strong>Account Deletion vs. Uninstalling:</strong> Uninstalling the application removes locally stored app data from that device but does not delete your registered user identity from Clerk. To ensure full account removal, use the in-app deletion option or submit an email request.
            </li>
            <li>
              <strong>Exported Files:</strong> Any scrapbook package files (<code className="text-xs bg-white px-1 py-0.5 rounded text-[#9E1B22] font-mono">.paneldays</code>), videos, or images previously exported to your device gallery or external storage remain on your device unless manually deleted by you through your Android file manager.
            </li>
            <li>
              <strong>Financial Records:</strong> Transaction receipts and billing history are retained by Google Play in accordance with statutory accounting and tax regulations.
            </li>
          </ul>
        </section>

        {/* 2. Redesigned Email Request Section */}
        <section id="request-form">
          <AccountDeletionForm />
        </section>

        {/* Google Play Compliance Identification Card */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFD8] shadow-sm">
          <h4 className="font-serif text-base font-bold text-[#1A1816] mb-3 flex items-center">
            <SecurityShieldIcon className="w-4 h-4 mr-2 text-[#9E1B22]" />
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
