import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl border border-[#E8DFD8] shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#FDF2F2] text-[#9E1B22] flex items-center justify-center font-serif font-bold text-xl mx-auto mb-4">
            404
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#1A1816] mb-2">
            Page Not Found
          </h1>
          <p className="text-sm text-[#6B635B] mb-6">
            The page you are looking for does not exist or has been moved. You can access the official PanelDays Privacy Policy below.
          </p>
          <Link
            href="/privacy-policy"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#9E1B22] hover:bg-[#8B1E22] transition-colors shadow-sm"
          >
            View Privacy Policy &rarr;
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
