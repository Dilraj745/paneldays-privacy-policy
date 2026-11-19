import React from "react";
import Link from "next/link";

export default function TermsContent() {
  return (
    <article className="prose prose-stone max-w-none space-y-16 text-[#2C2926]">
      {/* SECTION 1 */}
      <section id="section-1" className="legal-section scroll-mt-28 pt-2">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            01
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Acceptance of Terms
          </h2>
        </div>
        <p>
          Welcome to <strong>PanelDays</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;) govern your download, installation, access, and use of the PanelDays mobile application for Android (Application Package ID: <code className="text-xs bg-[#F5EFEB] px-1.5 py-0.5 rounded text-[#9E1B22] font-mono">com.paneldays.app</code>) and any related web pages or documentation provided at paneldays.app (collectively, the &ldquo;Service&rdquo;).
        </p>
        <p>
          By downloading, installing, accessing, or using PanelDays, you agree that you have read, understood, and agreed to be legally bound by these Terms and our accompanying{" "}
          <Link href="/privacy-policy" className="text-[#9E1B22] font-semibold hover:underline">
            Privacy Policy
          </Link>
          . If you do not agree with any part of these Terms, you must not download, access, or use the application, and you must promptly remove it from your device.
        </p>
        <div className="my-6 p-4 rounded-xl bg-[#FAF7F2] border-l-4 border-[#9E1B22] text-sm text-[#4A453F] leading-relaxed">
          <strong className="text-[#1A1816] block font-serif text-base mb-1">
            Important Agreement Notice
          </strong>
          These Terms form a binding agreement between you and PanelDays. Please read them thoroughly before creating books, importing personal media, or purchasing an optional premium subscription through Google Play.
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-2" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            02
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            The PanelDays App and Who Can Use It
          </h2>
        </div>
        <p>
          PanelDays is a creative, visual memory book and interactive scrapbook application designed for Android devices. The Service provides tools for assembling multi-page journals, arranging photos and video slots into stylized frames, applying artistic stickers and typography, and exporting or sharing interactive memory packages (<code className="text-xs bg-[#F5EFEB] px-1.5 py-0.5 rounded text-[#9E1B22] font-mono">.paneldays</code> files).
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          Eligibility Requirements
        </h3>
        <p>
          To use PanelDays, you must satisfy the following criteria:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#4A453F]">
          <li>
            <strong>Minimum Age:</strong> You must be at least the age of digital consent established by law in your country of residence (for example, at least 13 years of age in the United States, or 16 in specific European jurisdictions).
          </li>
          <li>
            <strong>Parental Consent:</strong> If you are between the minimum age of digital consent and the age of legal majority in your jurisdiction, you may use PanelDays only with the consent and active supervision of a parent or legal guardian who agrees to be bound by these Terms.
          </li>
          <li>
            <strong>Legal Capacity:</strong> You represent that you have the legal capacity to enter into these Terms and are not barred from receiving or using mobile applications under any applicable trade, export, or telecommunications laws.
          </li>
        </ul>
      </section>

      {/* SECTION 3 */}
      <section id="section-3" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            03
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Accounts and Guest Mode
          </h2>
        </div>
        <p>
          We believe creative expression should be accessible without unnecessary hurdles. Accordingly, PanelDays is designed with a guest-first architecture:
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          A. Guest Mode (No Account Required)
        </h3>
        <p>
          You are not required to create an account or provide personal credentials to use PanelDays. In Guest Mode:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#4A453F]">
          <li>You can immediately design, edit, and save scrapbooks on your local device.</li>
          <li>No email address, legal name, or phone number is collected or stored on remote authentication servers.</li>
          <li>Your preferences and created projects remain saved entirely within your device&rsquo;s internal application storage.</li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          B. Optional Registered Accounts
        </h3>
        <p>
          You may voluntarily register an account within the app (powered by our authentication partner, Clerk) to identify your profile or sync account settings. If you choose to register:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#4A453F]">
          <li>You agree to provide true, accurate, current, and complete information.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
          <li>You agree to notify us immediately at <a href="mailto:paneldays@gmail.com" className="text-[#9E1B22] underline font-medium">paneldays@gmail.com</a> if you suspect any unauthorized access to your account.</li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          C. Account Deletion and Retention
        </h3>
        <p>
          You have the right to delete your registered account at any time directly through the app settings or via our dedicated web portal at{" "}
          <Link href="/account-deletion" className="text-[#9E1B22] font-semibold hover:underline">
            /account-deletion
          </Link>
          . Deleting your account permanently deletes your authentication profile and purges local application databases. Please note that deleting your PanelDays account does <strong>not</strong> cancel an active Google Play subscription (see Section 6).
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="section-4" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            04
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Your Content and Ownership
          </h2>
        </div>
        <p>
          In PanelDays, your memories remain yours. We do not claim ownership over any of the photographs, videos, journal entries, artwork, or scrapbooks you create or import into the application (collectively, &ldquo;User Content&rdquo;).
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          A. Local-First Storage
        </h3>
        <p>
          All User Content is saved and processed directly on your Android device&rsquo;s local file system and internal storage. We do not continuously transmit, host, stream, or store your photos or scrapbook files on centralized cloud servers.
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          B. Your Responsibility and Rights to Media
        </h3>
        <p>
          You are solely responsible for the User Content you add to the Service. By placing photos, videos, or text into PanelDays, you represent and warrant that:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#4A453F]">
          <li>You own the copyright or have obtained all necessary licenses, permissions, authorizations, and releases from the relevant copyright holders to use the photos and media.</li>
          <li>Your media does not violate the privacy, publicity, intellectual property, or personal rights of any third party.</li>
          <li>Your content does not contain unlawful, infringing, or unauthorized materials.</li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          C. Local Backup Responsibility
        </h3>
        <p>
          Because PanelDays is a local-first application and does not maintain automatic cloud backups of your files, you are solely responsible for backing up your device and your scrapbooks (for example, by using Android system backups, saving exported files, or transferring <code className="text-xs bg-[#F5EFEB] px-1.5 py-0.5 rounded text-[#9E1B22] font-mono">.paneldays</code> packages to secure external storage). We cannot recover or restore User Content that is lost due to device damage, loss, theft, operating system reinstallation, or clearing of app storage.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="section-5" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            05
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Acceptable Use
          </h2>
        </div>
        <p>
          You agree to use PanelDays only for lawful personal, creative, and non-commercial purposes, in full compliance with these Terms and all applicable laws. You agree that you will not:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#4A453F]">
          <li>
            <strong>Reverse Engineering:</strong> Decompile, reverse engineer, disassemble, decrypt, or attempt to derive the source code or underlying ideas of the application or its binary assets, except to the extent permitted by applicable law.
          </li>
          <li>
            <strong>System Interference:</strong> Interfere with, disrupt, circumvent, or compromise the integrity, security, or performance of the application, our API servers, or our third-party service providers.
          </li>
          <li>
            <strong>Unlawful or Harmful Content:</strong> Use the application to produce, store, export, or transmit content that is defamatory, obscene, pornographic, exploitative, harassing, threatening, promoting hate speech, or encouraging illegal conduct.
          </li>
          <li>
            <strong>Malicious Software:</strong> Distribute viruses, worms, malware, or any other computer code designed to damage, monitor, or limit the functionality of any device or software.
          </li>
          <li>
            <strong>Impersonation or Fraud:</strong> Misrepresent your identity, impersonate any person or entity, or falsely state an affiliation with PanelDays or any other organization.
          </li>
          <li>
            <strong>Unauthorized Exploitation:</strong> Resell, sublicense, lease, or commercially exploit the pre-designed templates, graphics, stickers, or application assets without express written authorization.
          </li>
        </ul>
      </section>

      {/* SECTION 6 */}
      <section id="section-6" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            06
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Premium Subscription &amp; Billing
          </h2>
        </div>
        <p>
          PanelDays offers an optional recurring subscription (&ldquo;PanelDays Premium&rdquo;) that unlocks premium templates, unlimited video export duration, and exclusive creative assets.
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          A. Billing Through Google Play
        </h3>
        <p>
          All subscription purchases, renewals, and payments are processed and billed directly by <strong>Google Play (Google LLC)</strong>. When you subscribe, your payment method on file with your Google account is charged at confirmation of purchase, and will automatically renew at the disclosed price and interval (e.g., monthly) unless cancelled. PanelDays does not receive, process, or store your payment card numbers, banking details, or billing addresses.
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          B. Managing and Cancelling Subscriptions
        </h3>
        <p>
          You have full control over your subscription at all times. You can manage, update, or cancel your subscription directly through your Google Play account settings:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-[#4A453F]">
          <li>Open the <strong>Google Play Store</strong> app on your Android device.</li>
          <li>Tap your <strong>Profile Icon</strong> in the top right corner.</li>
          <li>Tap <strong>Payments &amp; subscriptions</strong>, then select <strong>Subscriptions</strong>.</li>
          <li>Select <strong>PanelDays</strong> from your list of active subscriptions.</li>
          <li>Tap <strong>Cancel subscription</strong> and follow the on-screen prompts to confirm.</li>
        </ol>
        <p className="text-sm text-[#4A453F] mt-2">
          When you cancel, your subscription remains active until the conclusion of your current billing period, after which it will not renew.
        </p>

        <div className="my-6 p-4 rounded-xl bg-[#FAF7F2] border-l-4 border-[#9E1B22] text-sm text-[#4A453F] leading-relaxed">
          <strong className="text-[#1A1816] block font-serif text-base mb-1">
            Crucial Note on Account Deletion &amp; Uninstallation
          </strong>
          Deleting your PanelDays account, deleting your local files, or uninstalling the PanelDays app from your device <strong>does NOT cancel your Google Play subscription</strong>. Because subscriptions are tied to your Google Play account, you must explicitly cancel the subscription within Google Play &gt; Payments &amp; subscriptions to stop future recurring charges.
        </div>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          C. Refunds
        </h3>
        <p>
          Because all transactions are processed exclusively by Google Play, PanelDays cannot directly issue refunds or alter Google Play billing transactions. All refund requests are handled under Google Play&rsquo;s standard refund policies. To request a refund, please submit your request directly to Google Play through your Google Play order history or support page.
        </p>
      </section>

      {/* SECTION 7 */}
      <section id="section-7" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            07
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Third-Party Services
          </h2>
        </div>
        <p>
          PanelDays relies on trusted third-party platforms to provide essential functionality:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#4A453F]">
          <li>
            <strong>Clerk (Clerk, Inc.):</strong> Provides authentication infrastructure, identity management, and token verification for users who choose to create an optional account.
          </li>
          <li>
            <strong>RevenueCat (RevenueCat, Inc.):</strong> Manages mobile in-app purchase receipts, entitlement verification, and subscription status synchronization between Google Play and the app.
          </li>
          <li>
            <strong>Google Play (Google LLC):</strong> Distributes the Android application binary, manages Android platform dependencies, and handles payment processing and billing for premium subscriptions.
          </li>
        </ul>
        <p className="mt-4">
          Your interaction with each third-party service is governed by that service&rsquo;s independent terms and privacy policy. We encourage you to review their terms. We are not responsible or liable for the acts, omissions, or availability of these external third-party services.
        </p>
      </section>

      {/* SECTION 8 */}
      <section id="section-8" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            08
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Disclaimers and Limitation of Liability
          </h2>
        </div>
        <p>
          We want to be completely clear and upfront about the limitations of our software:
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          A. &ldquo;As Is&rdquo; and &ldquo;As Available&rdquo; Service
        </h3>
        <p>
          The PanelDays application and all associated content, templates, features, and documentation are provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind. To the fullest extent permitted by applicable law, we disclaim all warranties, whether express, statutory, or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, title, quiet enjoyment, and non-infringement.
        </p>
        <p>
          We do not guarantee that:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#4A453F]">
          <li>The application will meet your specific aesthetic, technical, or personal requirements.</li>
          <li>The Service will operate uninterrupted, secure, or free from bugs, glitches, or errors.</li>
          <li>The app will be fully compatible with every hardware model, screen aspect ratio, or Android operating system version.</li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          B. Limitation of Liability
        </h3>
        <p>
          To the maximum extent permitted by applicable law, in no event shall PanelDays, its developers, operators, contributors, or service partners be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of data, photos, videos, scrapbook files, profits, goodwill, or personal memories, arising out of or related to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#4A453F]">
          <li>Your access to, use of, or inability to access or use the application.</li>
          <li>Any corruption, deletion, or loss of content stored locally on your device or storage media.</li>
          <li>Any bugs, viruses, crashes, or device performance impacts experienced while rendering complex media or video files.</li>
          <li>Any unauthorized access to or alteration of your device or transmissions.</li>
        </ul>
        <p className="mt-4">
          Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for certain damages. In such jurisdictions, our liability shall be limited to the greatest extent permitted by applicable law.
        </p>
      </section>

      {/* SECTION 9 */}
      <section id="section-9" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            09
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Changes to the Terms
          </h2>
        </div>
        <p>
          We may update or revise these Terms of Service periodically to reflect new app features, technical changes, evolving legal standards, or updates to Google Play Developer policies.
        </p>
        <p>
          When updates are made, we will revise the &ldquo;Last Updated&rdquo; date displayed at the top of this document. For significant or material updates, we may provide prominent notice within the application or via our legal portal. By continuing to access or use PanelDays after revised Terms become effective, you agree to be bound by the updated Terms. If you do not agree to the new Terms, you must discontinue using the application.
        </p>
      </section>

      {/* SECTION 10 */}
      <section id="section-10" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            10
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Contact Information
          </h2>
        </div>
        <p>
          If you have questions, feedback, or legal inquiries regarding these Terms of Service or our application practices, please contact us exclusively at:
        </p>

        <div className="my-6 p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD8] space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#9E1B22] flex items-center justify-center text-white font-serif font-bold text-lg">
              P
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#1A1816] m-0">
                PanelDays Support &amp; Legal
              </h3>
              <span className="text-xs text-[#6B635B]">
                Official Inquiries Channel
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#E8DFD8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#8C827A] font-semibold">
                Direct Email
              </span>
              <a
                href="mailto:paneldays@gmail.com"
                className="font-medium text-[#9E1B22] hover:underline"
              >
                paneldays@gmail.com
              </a>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#8C827A] font-semibold">
                Application ID
              </span>
              <span className="font-mono text-xs text-[#4A453F]">
                com.paneldays.app
              </span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#8C827A] font-semibold">
                Response Window
              </span>
              <span className="text-[#4A453F]">
                Within 48 business hours
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#8C827A]">
          Last updated: November 19, 2026.
        </p>
      </section>
    </article>
  );
}
