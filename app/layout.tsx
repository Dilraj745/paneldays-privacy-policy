import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#9E1B22",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://paneldays.app"),
  title: "Privacy Policy — PanelDays Official",
  description:
    "Official Privacy Policy for the PanelDays Android application (com.paneldays.app). Learn how PanelDays handles, protects, and respects your data with local-first security.",
  keywords: [
    "PanelDays",
    "PanelDays Privacy Policy",
    "com.paneldays.app",
    "Android Privacy Policy",
    "Scrapbook App Privacy",
    "Local-First Privacy",
  ],
  authors: [{ name: "PanelDays" }],
  creator: "PanelDays",
  publisher: "PanelDays",
  applicationName: "PanelDays",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/privacy-policy",
    siteName: "PanelDays",
    title: "Privacy Policy — PanelDays Official",
    description:
      "Transparent, local-first privacy documentation for the PanelDays Android mobile application. No ad trackers, no unauthorized data sharing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — PanelDays Official",
    description:
      "Official Privacy Policy for PanelDays Android application (com.paneldays.app).",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#22201E] font-sans antialiased selection:bg-[#FBEAEA] selection:text-[#8B1E22]">
        {children}
      </body>
    </html>
  );
}
