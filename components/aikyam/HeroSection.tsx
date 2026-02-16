"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleScrollToCareers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const careersSection = document.getElementById("careers");
    if (careersSection) {
      const offset = 0; // No offset needed since we removed scroll-mt
      const elementPosition = careersSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900" style={{ transform: 'translateZ(0)', willChange: 'scroll-position' }}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-64 h-64 border border-purple-300 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-purple-300 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 border border-purple-300 rounded-full animate-pulse delay-2000" />
      </div>

      {/* Diya glow effect */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-radial from-yellow-400 to-transparent rounded-full opacity-30"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "opacity, transform" }}
      />

      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-radial from-amber-400 to-transparent rounded-full opacity-20"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ willChange: "opacity, transform" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-12 lg:py-16 text-center flex flex-col items-center justify-center min-h-screen w-full">
        {/* Sacred symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <div className="inline-block text-6xl sm:text-7xl md:text-8xl text-yellow-400 filter drop-shadow-lg">
            ॐ
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Aikyam
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-5 md:mb-6 text-purple-100 font-light"
        >
          The Sacred Digital Harmony
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-200 leading-relaxed font-light">
            Aikyam is a stealth mode startup operating in India's Faith-Tech
            sector. We see immense opportunity and rapid evolution in this
            emerging space.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-300 mt-3 sm:mt-4 leading-relaxed">
            Anticipating complex technological challenges, we are building
            cutting-edge AI solutions for language processing, image
            recognition, intelligent search, personalized recommendations, and
            more.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-300 mt-3 sm:mt-4 leading-relaxed">
            Our team is developing scalable backend systems and reliable mobile
            applications to power the next generation of spiritual technology.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-300 mt-3 sm:mt-4 leading-relaxed">
            If you're excited to be part of this mission, we'd love to connect —
            we're hiring!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0 mt-2 sm:mt-4"
        >
          <a href="#careers" onClick={handleScrollToCareers} className="scroll-smooth">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-yellow-400 text-yellow-400 hover:bg-purple-800 px-6 sm:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Briefcase className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">See Open Roles</span>
              <span className="sm:hidden">Careers</span>
            </Button>
          </a>
        </motion.div>

        {/* Floating lotus petals */}
        <motion.div
          className="absolute bottom-0 left-1/4 text-6xl opacity-20 pointer-events-none"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform" }}
        >
          🪷
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-1/4 text-5xl opacity-20 pointer-events-none"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ willChange: "transform" }}
        >
          🪷
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-50 to-transparent" />
    </section>
  );
}
