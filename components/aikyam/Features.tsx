"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Sparkles, Building2, Users2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Video,
    title: "Live Temple Darshans",
    description: "Experience real-time darshans from India's most sacred temples. Feel the divine presence, wherever you are.",
    gradient: "from-purple-600 to-purple-500"
  },
  {
    icon: Sparkles,
    title: "Personalized Poojas",
    description: "Book authentic rituals performed by verified priests in your name, with live streaming and prasad delivery.",
    gradient: "from-purple-500 to-yellow-500"
  },
  {
    icon: Building2,
    title: "Temple Sanctums",
    description: "Explore detailed temple histories, deities, and timings. Plan your spiritual journey with divine guidance.",
    gradient: "from-purple-700 to-purple-600"
  },
  {
    icon: Users2,
    title: "Verified Priest Network",
    description: "Connect with authenticated priests for spiritual guidance, Sanskrit learning, and personalized consultations.",
    gradient: "from-yellow-600 to-amber-600"
  }
];

export default function Features() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white to-purple-50">
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
            What Aikyam Brings
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Four pillars of divine connection, crafted for the modern devotee
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-2xl hover:shadow-purple-200 transition-all duration-500 transform hover:scale-105 bg-white overflow-hidden group">
                <CardContent className="p-10">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-24 transition-all duration-500`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating bell icon */}
        <motion.div
          className="absolute top-20 right-20 text-6xl opacity-10"
          animate={{
            rotate: [-5, 5, -5],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🔔
        </motion.div>
      </div>
    </section>
  );
}
