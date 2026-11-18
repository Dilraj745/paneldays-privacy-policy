import React from "react";

export default function PrivacyPolicyContent() {
  return (
    <article className="prose prose-stone max-w-none space-y-16 text-[#2C2926]">
      {/* SECTION 1 */}
      <section id="section-1" className="legal-section scroll-mt-28 pt-2">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            01
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Introduction
          </h2>
        </div>
        <p>
          Welcome to <strong>PanelDays</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). PanelDays is an artistic, interactive digital scrapbook and visual diary application for Android (Application Package ID: <code className="text-xs bg-[#F5EFEB] px-1.5 py-0.5 rounded text-[#9E1B22] font-mono">com.paneldays.app</code>). The application empowers users to celebrate life moments, design multi-page memory books, arrange dynamic photo and video grids, personalize layouts with stickers and doodles, and safeguard personal journals.
        </p>
        <p>
          This Privacy Policy sets forth our commitments and practices regarding the collection, handling, storage, and protection of information when you download, install, access, or use PanelDays. We believe personal memories belong exclusively to their creators. Accordingly, PanelDays is designed around a <strong>local-first architectural paradigm</strong>: your creative works, photos, videos, and private scrapbooks are stored directly on your personal device rather than on our centralized servers.
        </p>
        <div className="my-6 p-4 rounded-xl bg-[#FAF7F2] border-l-4 border-[#9E1B22] text-sm text-[#4A453F] leading-relaxed">
          <strong className="text-[#1A1816] block font-serif text-base mb-1">Core Commitment</strong>
          By downloading, accessing, or using the PanelDays mobile application, you acknowledge the practices described in this Privacy Policy. If you do not agree with any term of this Privacy Policy, please discontinue using the application and remove it from your device.
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-2" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            02
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Information We Collect
          </h2>
        </div>
        <p>
          We adhere strictly to data minimization principles. We do not collect personal information indiscriminately; we only process information that is technically required to provide the core services, manage authentication, maintain subscriptions, and protect user security.
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          A. Information for Registered Accounts
        </h3>
        <p>
          When you voluntarily choose to register an account or sign in to PanelDays, we collect and manage authentication information through our identity provider, <strong>Clerk</strong>:
        </p>
        <ul>
          <li><strong>Email Address:</strong> Used as your unique account credential, for email verification codes, and for password-recovery communications.</li>
          <li><strong>Full Name or Display Name:</strong> An optional display name you may provide to customize your profile within the app.</li>
          <li><strong>Authentication Identifiers and Tokens:</strong> Unique cryptographic user identifiers and secure authentication session tokens issued by Clerk, stored locally in encrypted device keystores.</li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          B. Information for Guest Accounts
        </h3>
        <p>
          If you use PanelDays in Guest Mode without registering an account:
        </p>
        <ul>
          <li>We do <strong>not</strong> collect your email address, legal name, phone number, or social media credentials.</li>
          <li>Your created books, layouts, sticker selections, and app preferences are stored exclusively on your local device.</li>
          <li>No personal identity profile is transmitted to or retained on remote authentication servers.</li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          C. User Content (Photos, Videos, Scrapbooks, and Audio)
        </h3>
        <p>
          All photographs, video clips, captions, journal texts, scrapbook pages, custom stickers, and interactive memory books created or imported into the application are classified as <strong>User Content</strong>. User Content is stored locally on your device file system and indexed in local databases. We do <strong>not</strong> continuously upload, sync, or transmit your User Content to our remote servers.
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          D. In-App Purchase and Subscription Information
        </h3>
        <p>
          When you subscribe to PanelDays Premium, payment transactions are executed by the <strong>Google Play Store</strong>. We never receive, process, or store your credit card number, debit card number, bank details, or billing address. Our subscription infrastructure provider, <strong>RevenueCat</strong>, receives an anonymous app user identifier and receipt tokens generated by Google Play to confirm your active entitlement status.
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          E. Technical and Diagnostic Data
        </h3>
        <p>
          PanelDays operates without third-party tracking or advertising SDKs. When the app interacts with our authentication or subscription providers, standard network transmission data (such as IP address, operating system version, and client app version) may be processed transiently by those third-party providers solely for connection establishment and rate limiting, as disclosed in Section 9.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="section-3" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            03
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Guest Accounts and Registered Accounts
          </h2>
        </div>
        <p>
          PanelDays is architected with an onboarding design that lets you start creating immediately without setting up an account:
        </p>
        <ul>
          <li>
            <strong>Guest Mode Functionality:</strong> You can launch the application, choose themes, arrange photos, add text captions, place stickers, and export completed scrapbook files completely as a Guest. All guest projects and media references remain safely stored within your device&rsquo;s isolated application storage.
          </li>
          <li>
            <strong>Registering an Account:</strong> You may voluntarily register at any time via Clerk. Creating an account enables you to attach subscription entitlements to a verified email address, authenticate across multiple authorized devices, and recover access to premium features if you replace your phone.
          </li>
          <li>
            <strong>Local Continuity:</strong> Creating an account or signing in does not overwrite your existing local scrapbooks. Your local creations remain on your device.
          </li>
          <li>
            <strong>No Automatic Cloud Mirroring:</strong> Signing in does <em>not</em> automatically upload or synchronize your local photos or memory books to a cloud server. Your creative works remain local unless you explicitly export or share them using the app&rsquo;s file export tools.
          </li>
        </ul>
      </section>

      {/* SECTION 4 */}
      <section id="section-4" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            04
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Device Permissions
          </h2>
        </div>
        <p>
          To deliver interactive scrapbook features, PanelDays requests specific Android runtime permissions. Each permission is requested only when relevant to a feature you initiate:
        </p>

        <div className="space-y-4 my-6">
          <div className="p-4 rounded-xl bg-white border border-[#E8DFD8]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-serif font-bold text-base text-[#1A1816]">
                Photos and Videos Access (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">READ_MEDIA_IMAGES</code> / <code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">READ_MEDIA_VIDEO</code>)
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                User-Triggered
              </span>
            </div>
            <p className="text-sm text-[#4A453F] m-0">
              Required to open your device photo gallery so you can choose which pictures and video clips to place inside your scrapbook panels. On modern Android versions, you may grant selective access to specific photos rather than your entire library.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E8DFD8]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-serif font-bold text-base text-[#1A1816]">
                Camera (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">CAMERA</code>)
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                Optional
              </span>
            </div>
            <p className="text-sm text-[#4A453F] m-0">
              Allows you to capture a new photo or video clip directly from within the scrapbook editor to insert into an active frame slot.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E8DFD8]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-serif font-bold text-base text-[#1A1816]">
                Notifications (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">POST_NOTIFICATIONS</code>)
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                Optional
              </span>
            </div>
            <p className="text-sm text-[#4A453F] m-0">
              Allows the app to deliver local reminders regarding unsaved scrapbook drafts or anniversary memory prompts. These notifications are scheduled locally on your device without communicating with external push servers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E8DFD8]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-serif font-bold text-base text-[#1A1816]">
                Biometric Hardware (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">USE_BIOMETRIC</code> / <code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">USE_FINGERPRINT</code>)
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                Optional
              </span>
            </div>
            <p className="text-sm text-[#4A453F] m-0">
              Enables local device biometric verification (Fingerprint or Face Unlock) to unlock your Private Vault. Biometric authentication is handled entirely by the Android operating system; PanelDays never sees, accesses, or stores your biometric data.
            </p>
          </div>
        </div>

        <p className="text-sm text-[#6B635B]">
          You can modify or revoke any of these permissions at any time through your Android device settings (<span className="italic">Settings &rarr; Apps &rarr; PanelDays &rarr; Permissions</span>) or via the Permissions manager inside the PanelDays Settings screen.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="section-5" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            05
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Photos, Videos and User Content
          </h2>
        </div>
        <p>
          Your media content represents your personal memories. We treat User Content with strict confidentiality:
        </p>
        <ul>
          <li>
            <strong>Local Processing:</strong> All image rendering, video trimming, photo filtering, sticker overlaying, and frame transformations are executed locally on your device hardware using client-side rendering engines.
          </li>
          <li>
            <strong>Local Processing &amp; Zero Remote AI Transmission:</strong> The application does not transmit your photos, videos, or creative projects to external generative AI services, cloud image processors, or remote servers. All stickers, frames, templates, and decorative elements available in the app are pre-packaged locally on your device.
          </li>
          <li>
            <strong>No Cloud Photo Mining:</strong> PanelDays does not scan your photo library for facial recognition, advertising profiling, or metadata harvesting.
          </li>
          <li>
            <strong>Project Exporting:</strong> When you choose to export or share a memory book, PanelDays packages the book data and referenced assets into a standalone, compressed <code className="text-xs bg-[#F5EFEB] px-1.5 py-0.5 rounded text-[#9E1B22] font-mono">.paneldays</code> archive file or exports rendered video/image files locally. The sharing of these exported files is entirely under your manual control via Android&rsquo;s native sharing sheet.
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
            Local Storage and Project Management
          </h2>
        </div>
        <p>
          PanelDays utilizes sandboxed local storage technologies built into Android:
        </p>
        <ul>
          <li><strong>Expo FileSystem:</strong> Used to manage app-specific directories for cached stickers, custom templates, imported project archives, and rendered export files.</li>
          <li><strong>AsyncStorage &amp; SQLite:</strong> Used to persist your scrapbook structure, page arrangements, caption styling, theme configurations, and favorite template IDs.</li>
          <li><strong>Device Backup Recommendation:</strong> Because PanelDays does not maintain a copy of your scrapbook projects on remote servers, your creations exist solely on your device. We encourage users to maintain regular device backups or export key memory books into <code className="text-xs bg-[#F5EFEB] px-1.5 py-0.5 rounded text-[#9E1B22] font-mono">.paneldays</code> packages for safekeeping.</li>
        </ul>
      </section>

      {/* SECTION 7 */}
      <section id="section-7" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            07
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Private Vault and Device Security
          </h2>
        </div>
        <p>
          PanelDays includes a dedicated <strong>Private Vault</strong> feature designed for scrapbooks and memories that require extra confidentiality:
        </p>
        <ul>
          <li>
            <strong>Cryptographic PIN Protection:</strong> When you set up the Private Vault, you establish a 6-digit PIN. The PIN is salted and hashed using cryptographic SHA-256 via <code className="text-xs bg-[#F5EFEB] px-1.5 py-0.5 rounded text-[#9E1B22] font-mono">expo-crypto</code>. The plaintext PIN is never stored anywhere on the device or transmitted over the network.
          </li>
          <li>
            <strong>Hardware-Backed KeyStore:</strong> The vault salt, hashed PIN, and master encryption payload key are stored in the Android KeyStore using <code className="text-xs bg-[#F5EFEB] px-1.5 py-0.5 rounded text-[#9E1B22] font-mono">expo-secure-store</code>, which provides hardware-level encryption on supported Android devices.
          </li>
          <li>
            <strong>Biometric Integration:</strong> If enabled, device biometrics (Fingerprint or Face Unlock) use the native Android <code className="text-xs bg-[#F5EFEB] px-1.5 py-0.5 rounded text-[#9E1B22] font-mono">BiometricPrompt</code> API. Biometric verification is evaluated exclusively by Android hardware; PanelDays does not capture, process, or transmit raw biometric templates.
          </li>
        </ul>
      </section>

      {/* SECTION 8 */}
      <section id="section-8" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            08
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            How We Use Information
          </h2>
        </div>
        <p>
          We use the minimal information collected exclusively for legitimate, defined operational purposes:
        </p>
        <ul>
          <li><strong>Delivering Core Scrapbook Functionality:</strong> Enabling you to open, edit, customize, organize, and export interactive scrapbook projects.</li>
          <li><strong>Authentication and Account Management:</strong> Verifying your identity when you register or sign in via Clerk, safeguarding account access, and managing session longevity.</li>
          <li><strong>Enabling In-App Purchases:</strong> Verifying Google Play receipt tokens through RevenueCat to unlock PanelDays Premium features (such as premium templates and high-resolution exports).</li>
          <li><strong>Local Security Enforcement:</strong> Authenticating access to your Private Vault before revealing protected albums.</li>
          <li><strong>Customer Support:</strong> Responding to inquiries, bug reports, and account-deletion requests sent to <a href="mailto:paneldays@gmail.com" className="text-[#9E1B22] underline font-medium">paneldays@gmail.com</a>.</li>
        </ul>
        <div className="p-4 rounded-xl bg-white border border-[#E8DFD8] text-sm text-[#4A453F] mt-4">
          <strong className="text-[#1A1816] block font-serif text-base mb-1">What We Never Do</strong>
          We do <strong>not</strong> sell your personal data, do <strong>not</strong> license your photos to third parties, do <strong>not</strong> run behavioral advertising SDKs, and do <strong>not</strong> build commercial tracking profiles based on your scrapbook creations.
        </div>
      </section>

      {/* SECTION 9 */}
      <section id="section-9" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            09
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Third-Party Services
          </h2>
        </div>
        <p>
          To maintain high reliability, secure authentication, and compliant in-app billing, PanelDays integrates with verified third-party technical service providers. We disclose each provider, its purpose, and its official privacy documentation below:
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-xl bg-white border border-[#E8DFD8] shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 className="font-serif font-bold text-lg text-[#1A1816] m-0">
                1. Clerk Inc.
              </h4>
              <span className="text-xs font-mono bg-[#FAF7F2] text-[#6B635B] px-2 py-0.5 rounded border border-[#E8DFD8]">
                Authentication &amp; User Management
              </span>
            </div>
            <p className="text-sm text-[#4A453F] mb-3">
              Clerk manages registered account authentication, email verification code delivery, session tokens, and identity lifecycle. When you register an account, your email and authentication credentials are secure with Clerk.
            </p>
            <a
              href="https://clerk.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#9E1B22] hover:underline inline-flex items-center"
            >
              Review Clerk Privacy Policy &rarr;
            </a>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E8DFD8] shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 className="font-serif font-bold text-lg text-[#1A1816] m-0">
                2. RevenueCat Inc.
              </h4>
              <span className="text-xs font-mono bg-[#FAF7F2] text-[#6B635B] px-2 py-0.5 rounded border border-[#E8DFD8]">
                In-App Purchase &amp; Subscription Infrastructure
              </span>
            </div>
            <p className="text-sm text-[#4A453F] mb-3">
              RevenueCat validates purchase receipts from the Google Play Store to verify active subscription entitlements. For registered users, purchase entitlements are linked to your Clerk user identifier. For guest users, an anonymous RevenueCat app user ID is generated locally.
            </p>
            <a
              href="https://www.revenuecat.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#9E1B22] hover:underline inline-flex items-center"
            >
              Review RevenueCat Privacy Policy &rarr;
            </a>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E8DFD8] shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 className="font-serif font-bold text-lg text-[#1A1816] m-0">
                3. Google Play Services / Google LLC
              </h4>
              <span className="text-xs font-mono bg-[#FAF7F2] text-[#6B635B] px-2 py-0.5 rounded border border-[#E8DFD8]">
                Billing &amp; App Distribution
              </span>
            </div>
            <p className="text-sm text-[#4A453F] mb-3">
              Google handles payment processing, subscription renewals, tax collection, and app package distribution via the Google Play Store on Android devices.
            </p>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#9E1B22] hover:underline inline-flex items-center"
            >
              Review Google Privacy Policy &rarr;
            </a>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] text-sm text-[#4A453F]">
          <strong>Absence of Tracking and Ad Networks:</strong> PanelDays does <em>not</em> integrate Google Firebase Analytics, Facebook SDK, AppsFlyer, Mixpanel, Sentry, Google AdMob, or any other commercial ad network or telemetry tracker.
        </div>
      </section>

      {/* SECTION 10 */}
      <section id="section-10" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            10
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Subscriptions and Payments
          </h2>
        </div>
        <p>
          PanelDays offers an optional auto-renewing subscription known as <strong>PanelDays Premium</strong> (Monthly subscription: $4.99/month, or equivalent local currency).
        </p>
        <ul>
          <li><strong>Billing Operator:</strong> All subscription transactions are processed directly by the Google Play Store under Google&rsquo;s Terms of Service and Payment Policies.</li>
          <li><strong>No Payment Card Storage:</strong> PanelDays does not request, view, or retain your payment card numbers, banking records, or billing address.</li>
          <li><strong>Managing Subscriptions:</strong> You can view, modify, or cancel your active subscription at any time through your Google Play Store account settings (<span className="italic">Google Play Store &rarr; Profile &rarr; Payments &amp; subscriptions &rarr; Subscriptions</span>).</li>
          <li><strong>Entitlement Restoration:</strong> If you reinstall the app or change Android devices, your purchase status can be restored using the &ldquo;Restore Purchases&rdquo; button in the app&rsquo;s Premium Plans screen.</li>
        </ul>
      </section>

      {/* SECTION 11 */}
      <section id="section-11" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            11
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Information Sharing and Disclosure
          </h2>
        </div>
        <p>
          We do not sell, rent, monetize, or disclose your personal information or User Content to third parties. Disclosure only occurs under the following narrow circumstances:
        </p>
        <ul>
          <li><strong>Authorized Service Providers:</strong> Sharing with Clerk and RevenueCat strictly to the extent required to execute authentication and subscription verification.</li>
          <li><strong>Compliance with Legal Process:</strong> If required by applicable law, enforceable court subpoena, search warrant, or government authority with valid legal jurisdiction.</li>
          <li><strong>Protection of Rights and Safety:</strong> When necessary to enforce our legal terms, investigate potential security breaches, or protect the vital rights, safety, and property of PanelDays, our users, or the public.</li>
          <li><strong>Business Reorganization:</strong> In the event of a merger, acquisition, or sale of company assets, user data would transition subject to the protective commitments of this Privacy Policy.</li>
        </ul>
      </section>

      {/* SECTION 12 */}
      <section id="section-12" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            12
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Data Security
          </h2>
        </div>
        <p>
          We implement layered technical and organizational safeguards designed to protect your information:
        </p>
        <ul>
          <li><strong>Transport Layer Security (TLS 1.3 / HTTPS):</strong> All communications between the mobile application and third-party service providers (Clerk, RevenueCat) are strictly encrypted in transit using industry-standard TLS protocols.</li>
          <li><strong>Hardware KeyStore Storage:</strong> Sensitive credentials, including authentication tokens and Private Vault master encryption keys, are stored in Android&rsquo;s hardware-backed KeyStore via <code className="text-xs bg-[#F5EFEB] px-1.5 py-0.5 rounded text-[#9E1B22] font-mono">expo-secure-store</code>.</li>
          <li><strong>Sandboxed Operating System Boundaries:</strong> The application utilizes Android&rsquo;s internal application sandbox, preventing other installed applications from inspecting or accessing PanelDays databases or project files.</li>
          <li><strong>Cryptographic Salting:</strong> Vault credentials are protected with randomly generated unique cryptographic salts and SHA-256 digest hashing.</li>
        </ul>
        <p className="text-sm text-[#6B635B] italic">
          Please note that no method of electronic storage or wireless transmission is 100% impenetrable. While we apply modern security practices, we cannot guarantee absolute security against all conceivable threats or device-level malware.
        </p>
      </section>

      {/* SECTION 13 */}
      <section id="section-13" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            13
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Data Retention
          </h2>
        </div>
        <p>
          Our data retention practices correspond directly to where data resides:
        </p>
        <ul>
          <li><strong>Local Scrapbooks and User Media:</strong> Retained locally on your device indefinitely until you manually delete individual books, remove custom stickers, clear app storage, or uninstall the application.</li>
          <li><strong>Registered Clerk Accounts:</strong> Retained in Clerk&rsquo;s secure directory for as long as your account remains active. If you initiate account deletion, your account record is removed according to Section 14.</li>
          <li><strong>Guest Records:</strong> Because guest creations and preferences are stored exclusively on your device, their retention is tied entirely to your local device application state.</li>
          <li><strong>Support Communications:</strong> Emails sent to <a href="mailto:paneldays@gmail.com" className="text-[#9E1B22] underline font-medium">paneldays@gmail.com</a> are retained for up to 180 days to resolve ongoing inquiries, after which they are systematically deleted.</li>
        </ul>
      </section>

      {/* SECTION 14 */}
      <section id="section-14" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            14
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Account Deletion and Data Removal
          </h2>
        </div>
        <p>
          We respect your right to completely remove your data and account. PanelDays provides multiple direct channels to execute deletion:
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          Method 1: Native In-App Account Deletion
        </h3>
        <p>
          You can initiate full deletion directly within the mobile application at any time:
        </p>
        <ol className="list-decimal ml-6 space-y-2 mb-4 text-sm sm:text-base">
          <li>Open the PanelDays mobile app and tap the <strong>Profile</strong> tab.</li>
          <li>Scroll to the bottom of the Profile screen and tap <strong>Delete Account</strong>.</li>
          <li>To prevent accidental deletion, type the confirmation keyword <strong className="text-[#9E1B22] font-mono font-bold">DELETE</strong> exactly as displayed.</li>
          <li>If your last sign-in was more than 15 minutes ago, you will be prompted to re-authenticate for your security.</li>
          <li>Confirm permanent deletion.</li>
        </ol>

        <div className="p-4 rounded-xl bg-white border border-[#E8DFD8] mb-4 text-sm">
          <strong className="text-[#1A1816] block font-serif text-base mb-1">
            Immediate In-App Purge Scope
          </strong>
          Executing the in-app deletion instantly and irreversibly wipes:
          <ul className="mt-2 space-y-1">
            <li>Your local user profile configuration (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">@paneldays_user_profile_v1</code>)</li>
            <li>All user-created scrapbook projects and memory books (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">@paneldays_books_v1</code>)</li>
            <li>All custom created stickers and designs (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">@paneldays_custom_stickers_v1</code>)</li>
            <li>All saved custom templates and favorites (<code className="text-xs bg-[#F5EFEB] px-1 py-0.5 rounded text-[#9E1B22]">@paneldays_saved_templates_v1</code>)</li>
            <li>Private Vault albums, salted PIN hashes, and vault master keys</li>
            <li>All local authentication tokens and session caches</li>
          </ul>
        </div>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          Method 2: Email Account Deletion Request (Remote Clerk Identity Purge)
        </h3>
        <p>
          If you have uninstalled the application or wish to ensure that your remote registered account record in Clerk is permanently deleted:
        </p>
        <ul>
          <li>
            Send an email to: <a href="mailto:paneldays@gmail.com" className="text-[#9E1B22] font-semibold underline">paneldays@gmail.com</a>
          </li>
          <li>
            Use the subject line: <code className="text-xs bg-[#F5EFEB] px-1.5 py-0.5 rounded text-[#9E1B22] font-mono">PanelDays Account Deletion Request</code>
          </li>
          <li>
            Send the request from the email address registered with PanelDays.
          </li>
        </ul>
        <p className="text-sm text-[#4A453F]">
          Our team verifies ownership and permanently purges your remote account identity from Clerk within <strong>30 days</strong> of receiving your request. We will reply to your email confirming completion.
        </p>

        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] text-xs text-[#6B635B] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <strong className="text-[#1A1816] font-semibold block sm:inline">Dedicated Web Page Available:</strong>{" "}
            You can also submit an account deletion request online through our official Google Play–compliant webpage.
          </div>
          <a
            href="/account-deletion"
            className="inline-flex items-center text-xs font-bold text-[#9E1B22] hover:underline flex-shrink-0"
          >
            Open Account Deletion Page &rarr;
          </a>
        </div>
      </section>

      {/* SECTION 15 */}
      <section id="section-15" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            15
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Children&rsquo;s Privacy
          </h2>
        </div>
        <p>
          PanelDays is a general-audience creative software utility. The application is not directed toward children under 13 years of age (or under 16 in the European Economic Area; or the age of majority under India&rsquo;s Digital Personal Data Protection Act 2023).
        </p>
        <p>
          We do not knowingly solicit or collect personal information from children without verified parental consent. If we learn that personal information has been collected from a child without verifiable parental consent, we will take immediate steps to delete that information from our records.
        </p>
        <p className="text-sm text-[#6B635B]">
          If you are a parent or legal guardian and believe your child has submitted personal information to PanelDays without your consent, please contact us at <a href="mailto:paneldays@gmail.com" className="text-[#9E1B22] underline font-medium">paneldays@gmail.com</a> so we can investigate and promptly purge the account.
        </p>
      </section>

      {/* SECTION 16 */}
      <section id="section-16" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            16
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            User Privacy Rights
          </h2>
        </div>
        <p>
          Depending on your jurisdiction, you possess specific legal rights regarding your personal information under applicable data protection laws:
        </p>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          A. Indian Users (Digital Personal Data Protection Act, 2023 &ndash; DPDP Act)
        </h3>
        <ul>
          <li><strong>Right to Access:</strong> The right to obtain a summary of personal data processed about you and the identities of data processors involved.</li>
          <li><strong>Right to Correction &amp; Erasure:</strong> The right to rectify inaccurate data or request complete deletion of personal data.</li>
          <li><strong>Right to Grievance Redressal:</strong> The right to address grievances directly to our Data Protection Grievance Officer at <a href="mailto:paneldays@gmail.com" className="text-[#9E1B22] underline">paneldays@gmail.com</a>.</li>
          <li><strong>Right to Nominate:</strong> The right to nominate an individual to exercise privacy rights on your behalf in the event of incapacity.</li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          B. European Union &amp; United Kingdom Users (GDPR / UK GDPR)
        </h3>
        <ul>
          <li><strong>Right of Access (Article 15):</strong> Confirm whether personal data is being processed and receive a copy.</li>
          <li><strong>Right to Rectification (Article 16):</strong> Request correction of inaccurate personal data.</li>
          <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;, Article 17):</strong> Request deletion of personal data where retention is no longer justified.</li>
          <li><strong>Right to Restrict Processing (Article 18):</strong> Request temporary limitation of processing in certain situations.</li>
          <li><strong>Right to Data Portability (Article 20):</strong> Receive your personal data in a structured, commonly used, machine-readable format.</li>
          <li><strong>Right to Object (Article 21):</strong> Object to processing carried out under legitimate interest grounds.</li>
          <li><strong>Supervisory Authority Complaint:</strong> You have the right to lodge a complaint with your local EU/EEA Data Protection Authority.</li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-[#1A1816] mt-6 mb-2">
          C. California and United States Residents (CCPA / CPRA)
        </h3>
        <ul>
          <li><strong>Right to Know:</strong> Disclose categories and specific pieces of personal information collected.</li>
          <li><strong>Right to Delete:</strong> Request deletion of personal information collected from you.</li>
          <li><strong>Right to Opt-Out of Sale / Sharing:</strong> We do <strong>not</strong> sell or share personal information for cross-context behavioral advertising.</li>
          <li><strong>Right to Non-Discrimination:</strong> We will never discriminate against you for exercising your privacy rights.</li>
        </ul>

        <p className="text-sm text-[#4A453F] mt-4">
          To exercise any of these rights, email us at <a href="mailto:paneldays@gmail.com" className="text-[#9E1B22] font-semibold underline">paneldays@gmail.com</a>. We will acknowledge and respond to all verified requests within statutory timeframes.
        </p>
      </section>

      {/* SECTION 17 */}
      <section id="section-17" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            17
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            International Data Transfers
          </h2>
        </div>
        <p>
          PanelDays operates globally. When you interact with third-party infrastructure providers:
        </p>
        <ul>
          <li>Authentication records managed by Clerk Inc. and subscription receipt tokens verified by RevenueCat Inc. are processed on secure servers located primarily in the <strong>United States</strong> and global content delivery networks.</li>
          <li>These transfers are governed by recognized cross-border transfer mechanisms, including standard contractual clauses (SCCs) and adherence to international privacy safeguards.</li>
          <li>Your creative scrapbook projects, photos, and videos do not participate in cross-border transfers because they remain stored locally on your device.</li>
        </ul>
      </section>

      {/* SECTION 18 */}
      <section id="section-18" className="legal-section scroll-mt-28">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            18
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Changes to This Privacy Policy
          </h2>
        </div>
        <p>
          We may update this Privacy Policy from time to time to reflect operational, legal, technical, or regulatory developments.
        </p>
        <ul>
          <li>When updates are made, we will revise the <strong>&ldquo;Last Updated&rdquo;</strong> date at the top of this policy webpage.</li>
          <li>For material changes that significantly affect your rights, we will provide prominent notice through the PanelDays mobile application or by notifying registered users via email where appropriate.</li>
          <li>Your continued use of PanelDays following the posting of an updated policy signifies your acknowledgement of the revised terms.</li>
        </ul>
      </section>

      {/* SECTION 19 */}
      <section id="section-19" className="legal-section scroll-mt-28 pb-8">
        <div className="flex items-center space-x-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF4E8] text-[#C5A059] font-serif font-bold text-sm border border-[#E8DFD8]">
            19
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] tracking-tight m-0">
            Contact Information
          </h2>
        </div>
        <p>
          If you have any questions, feedback, grievance reports, or account-deletion inquiries regarding this Privacy Policy or our privacy practices, please contact us:
        </p>

        <div className="p-6 rounded-2xl bg-white border border-[#E8DFD8] shadow-sm my-6 space-y-4">
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#8C827A] font-semibold">
              Application Name
            </span>
            <span className="font-serif font-bold text-lg text-[#1A1816]">
              PanelDays
            </span>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-wider text-[#8C827A] font-semibold">
              Android Application Identifier
            </span>
            <code className="text-sm bg-[#F5EFEB] px-2 py-0.5 rounded text-[#9E1B22] font-mono">
              com.paneldays.app
            </code>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-wider text-[#8C827A] font-semibold">
              Official Privacy &amp; Support Email
            </span>
            <a
              href="mailto:paneldays@gmail.com"
              className="inline-flex items-center text-base font-bold text-[#9E1B22] hover:text-[#8B1E22] underline decoration-[#9E1B22]/30 underline-offset-4"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              paneldays@gmail.com
            </a>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-wider text-[#8C827A] font-semibold">
              Operational Scope
            </span>
            <span className="text-sm text-[#4A453F]">
              Global Distribution (Google Play Store) &bull; Primary Jurisdiction: India
            </span>
          </div>
        </div>

        <p className="text-sm text-[#6B635B]">
          We endeavor to acknowledge all email inquiries within <strong>48 hours</strong> and resolve formal privacy or deletion requests within <strong>30 calendar days</strong>.
        </p>
      </section>
    </article>
  );
}
