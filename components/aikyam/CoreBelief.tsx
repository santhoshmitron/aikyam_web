"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CoreBelief() {
  return (
    <section className="relative py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Sanskrit shloka */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="inline-block p-12 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-2xl border border-purple-200">
            <p className="text-4xl md:text-5xl font-light text-purple-800 mb-6 tracking-wide">
              धर्मो रक्षति रक्षितः
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-gray-600 font-light italic">
              "Dharma protects those who protect it"
            </p>
          </div>
        </motion.div>

        {/* Core belief text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
            Our Core Belief
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            In an age of disconnection, Aikyam restores the sacred thread between devotee and divine. 
            We believe technology should serve spirituality, not replace it.
          </p>
          <p className="text-lg md:text-xl text-gray-500 mt-6 leading-relaxed">
            Every mantra, every ritual, every darshan is led by verified priests who carry centuries of tradition 
            in their hearts — now accessible to millions through the devices in their hands.
          </p>
        </motion.div>

        {/* Decorative diya */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12"
        >
          <div className="text-6xl">🪔</div>
        </motion.div>
      </div>
    </section>
  );
}
