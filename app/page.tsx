import React from "react";
import HeroSection from "@/components/aikyam/HeroSection";

import TemplesAndPriests from "@/components/aikyam/TemplesAndPriests";
import Careers from "@/components/aikyam/Careers";
import Footer from "@/components/aikyam/Footer";

export const metadata = {
  title: "Aikyam — India's Priest-Led Spiritual Ecosystem",
  description:
    "Aikyam unites temples, priests, and devotees through authentic, priest-led digital darshans and poojas — available on Android & iOS. Experience sacred digital harmony.",
  keywords: "Aikyam, temples, priests, darshan, pooja, spiritual, Hindu, India",
  openGraph: {
    title: "Aikyam — Sacred Digital Harmony",
    description:
      "Experience priest-led digital darshans and personalized poojas with verified priests.",
    type: "website",
    locale: "en_IN",
  },
};

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-purple-900 via-purple-50 to-white overflow-x-hidden scroll-smooth">
      {/* Main Content */}
      <main className="w-full">
        <section id="hero" className="scroll-mt-0">
          <HeroSection />
        </section>

        <section id="temples" className="scroll-mt-24">
          <TemplesAndPriests />
        </section>

        <section id="careers" className="scroll-mt-0">
          <Careers />
        </section>
      </main>

      <Footer />
    </div>
  );
}
