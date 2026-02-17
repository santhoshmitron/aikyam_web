import React from "react";
import HeroSection from "@/components/aikyam/HeroSection";

//import TemplesAndPriests from "@/components/aikyam/TemplesAndPriests";
import Careers from "@/components/aikyam/Careers";
import Footer from "@/components/aikyam/Footer";

export const metadata = {
  title: "Aikyam",
  description: "Aikyam a new age faith-tech platform",
  keywords: "Aikyam, spiritual, Hindu, Sanatan, India",
  openGraph: {
    title: "Aikyam",
    description:
      "Aikyam a new age faith-tech platform",
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

        <section id="careers" className="scroll-mt-0">
          <Careers />
        </section>
      </main>

      <Footer />
    </div>
  );
}
