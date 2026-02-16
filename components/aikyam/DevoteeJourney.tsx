"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Search, Calendar, Play, Package } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "Step 1",
    title: "Download Aikyam",
    description: "Get the app on Android or iOS. Sign up with your phone number in seconds.",
  },
  {
    icon: Search,
    step: "Step 2",
    title: "Explore Temples & Priests",
    description: "Browse thousands of temples, live darshans, and verified priests across India.",
  },
  {
    icon: Calendar,
    step: "Step 3",
    title: "Book Your Pooja",
    description: "Choose your ritual, select a priest, pick date and time. Personalize with your sankalpam.",
  },
  {
    icon: Play,
    step: "Step 4",
    title: "Watch Live",
    description: "Experience your pooja in real-time via live stream. Feel connected from anywhere.",
  },
  {
    icon: Package,
    step: "Step 5",
    title: "Receive Prasad",
    description: "Sacred offerings delivered to your doorstep. Dharma completes the circle.",
  },
];

export default function DevoteeJourney() {
  return (
    <section className="relative py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
            The Devotee Journey
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            From download to divine connection — in five sacred steps
          </p>
        </motion.div>

        {/* Journey steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200 transform -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`inline-block mb-3 px-4 py-1 bg-purple-100 rounded-full`}>
                    <p className="text-sm font-medium text-purple-700 uppercase tracking-wide">
                      {item.step}
                    </p>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                    {item.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center shadow-2xl relative z-10"
                  >
                    <item.icon className="w-12 h-12 text-white" />
                  </motion.div>
                  
                  {/* Glow effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className="absolute inset-0 bg-purple-400 rounded-full blur-xl"
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full">
            <p className="text-6xl">🙏</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
