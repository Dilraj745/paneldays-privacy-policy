# PanelDays — Official Privacy Policy Website

**Production-Ready Privacy Documentation for the PanelDays Android Mobile Application**  
*Application Package ID:* `com.paneldays.app`  
*Primary Contact:* `paneldays@gmail.com`  
*Hosting Target:* GitHub + Vercel  
*Permanent Route:* `/privacy-policy`

---

## 1. Overview & Architecture

This repository contains the standalone, official Privacy Policy website for **PanelDays**, an artistic, interactive digital scrapbook and visual diary application for Android.

### Key Privacy & Architectural Guarantees:
* **Local-First Architecture:** User photos, video clips, captions, scrapbook pages, and custom sticker designs are stored locally on the user's device (`expo-file-system`, SQLite/AsyncStorage). The app does not continuously upload memories or media to external cloud servers.
* **Guest-First Freedom:** Users can explore templates, design scrapbooks, and export creations without forced registration. No guest user tracking or device fingerprinting is performed.
* **No Ad Trackers or Telemetry SDKs:** Zero integration of third-party advertising networks (e.g., AdMob, Unity) or behavioral analytics trackers (e.g., Firebase, Facebook SDK, Mixpanel).
* **Private Vault Security:** Built-in PIN-protected memory vault utilizing salted SHA-256 cryptographic hashing (`expo-crypto`), Android KeyStore hardware protection (`expo-secure-store`), and native biometric verification (`expo-local-authentication`).
* **Verified Technical Processors:**
  1. **Clerk Inc.:** Identity and authentication management for registered users.
  2. **RevenueCat Inc. & Google Play Billing:** Subscription and purchase entitlement verification (`paneldays_premium_monthly`, $4.99/mo).

---

## 2. Tech Stack

* **Framework:** Next.js 16 (App Router, Static Pre-Rendering)
* **Library:** React 19
* **Language:** TypeScript 5
* **Styling:** Tailwind CSS 4
* **Typography:** Playfair Display (Serif Headings) & Inter (Modern Sans Body) via `next/font/google`
* **Performance:** 100% static generation, zero heavy external runtime scripts, sub-second load times

---

## 3. Project Structure

```text
D:\privacypolicy\
├── app/
│   ├── globals.css              # Cream/Cherry-red/Gold palette, smooth scrolling, print styles
│   ├── layout.tsx               # Root layout, Google Fonts, SEO metadata, OpenGraph tags
│   ├── not-found.tsx            # Accessible 404 page redirecting to /privacy-policy
│   ├── page.tsx                 # Root route (/) rendering Privacy Policy
│   └── privacy-policy/
│       └── page.tsx             # Primary canonical route (/privacy-policy)
├── components/
│   ├── Footer.tsx               # Branding, email, links, honest Account Deletion placeholder
│   ├── Header.tsx               # Responsive header, brand wordmark, mobile navigation
│   ├── PolicyHero.tsx           # Hero section, compliance badges, metadata, core guarantees
│   ├── PrivacyPolicyContent.tsx # Authoritative legal documentation across all 19 sections
│   └── TableOfContents.tsx      # Sticky sidebar & mobile quick-jump table of contents
├── public/                      # Static assets and icons
├── next.config.ts               # Next.js build and Turbopack configuration
├── package.json                 # Project dependencies and build scripts
├── tsconfig.json                # TypeScript strict configuration
└── README.md                    # Project documentation & deployment guide
```

---

## 4. Local Development

### Prerequisites
* Node.js v18.17+ or v20+ (tested on Node v24.21.0)
* npm v9+

### Commands

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` or `http://localhost:3000/privacy-policy` in your browser.

3. **Build Production Distribution:**
   ```bash
   npm run build
   ```
   Generates optimized static pages for `/`, `/privacy-policy`, and `/_not-found`.

4. **Run Production Server Locally:**
   ```bash
   npm run start
   ```

---

## 5. Step-by-Step GitHub Upload Instructions

1. **Open PowerShell / Terminal in `D:\privacypolicy`:**
   ```powershell
   cd D:\privacypolicy
   ```

2. **Initialize Git Repository (if not already initialized):**
   ```powershell
   git init
   git branch -M main
   ```

3. **Stage All Project Files:**
   ```powershell
   git add .
   ```

4. **Create Initial Commit:**
   ```powershell
   git commit -m "feat: complete official PanelDays privacy policy website"
   ```

5. **Create a New Repository on GitHub:**
   * Go to [github.com/new](https://github.com/new).
   * Name your repository (e.g. `paneldays-privacy-policy` or `paneldays-legal`).
   * Choose **Public** (required so Google Play reviewers and users can access it).
   * Do **not** initialize with README, .gitignore, or license (these already exist in the project).
   * Click **Create repository**.

6. **Link Remote and Push:**
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

---

## 6. Step-by-Step Vercel Deployment Instructions

1. **Log in to Vercel:**
   * Visit [vercel.com](https://vercel.com) and log in with your GitHub account.

2. **Import Repository:**
   * Click **Add New...** &rarr; **Project**.
   * Locate your repository (`paneldays-privacy-policy`) from the GitHub list and click **Import**.

3. **Configure Project:**
   * **Framework Preset:** Next.js (automatically detected).
   * **Root Directory:** `./` (default).
   * **Build Command:** `next build` (default).
   * **Output Directory:** `.next` (default).
   * **Environment Variables:** None required! (The privacy website contains zero secret keys).

4. **Deploy:**
   * Click **Deploy**.
   * Vercel will build and deploy the website in ~30 seconds.

5. **Verify Permanent URLs:**
   * Your primary deployment URL will be available at:
     ```text
     https://<YOUR-PROJECT-NAME>.vercel.app/privacy-policy
     https://<YOUR-PROJECT-NAME>.vercel.app/
     ```
   * Both URLs are active, fully responsive, and return HTTP 200.

---

## 7. Google Play Console Submission Instructions

When publishing or updating the **PanelDays** listing in the Google Play Console:

1. Navigate to **Policy and programs** &rarr; **App content**.
2. Under **Privacy Policy**, click **Manage** or **Start**.
3. Paste your public production URL:
   ```text
   https://<YOUR-PROJECT-NAME>.vercel.app/privacy-policy
   ```
4. Save and Submit.
5. In the **Data safety** section:
   * **Data Collection:** Disclose email address and name (optional) for registered accounts via Clerk.
   * **Personal Photos & Videos:** Disclose that photos and videos are accessed for app functionality, stored locally on-device, and not shared with third parties.
   * **Financial Info:** Google Play Billing manages purchases.
   * **Security Practices:** Data is encrypted in transit (TLS 1.3), users can request data deletion directly in the app or via `paneldays@gmail.com`.

---

## 8. License & Support

&copy; 2026 PanelDays. All rights reserved.  
Direct privacy inquiries to: [paneldays@gmail.com](mailto:paneldays@gmail.com)
