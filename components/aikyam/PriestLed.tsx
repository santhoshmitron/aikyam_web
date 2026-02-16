"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, Award, Heart } from "lucide-react";

export default function PriestLed() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-purple-900 to-purple-800 text-white overflow-hidden">
      {/* Sacred geometry background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white rounded-full"
              style={{
                width: `${(i + 1) * 15}%`,
                height: `${(i + 1) * 15}%`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="inline-flex p-8 bg-white/10 backdrop-blur-sm rounded-full">
            <Shield className="w-16 h-16 text-yellow-400" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl font-light mb-8"
        >
          Priest-Led Authenticity
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl font-light text-yellow-100 leading-relaxed mb-6">
            Every prayer, every ritual — guided by guardians of tradition
          </p>
          <p className="text-lg md:text-xl text-purple-200 leading-relaxed max-w-3xl mx-auto">
            Our priests are not performers. They are lineage-bearers, verified through rigorous credentials, 
            temple affiliations, and decades of sacred knowledge. With Aikyam, you receive blessings from 
            those who've spent lifetimes at the altar.
          </p>
        </motion.div>

        {/* Trust markers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
            <CheckCircle2 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-light mb-2">Temple Verified</h3>
            <p className="text-purple-200 text-sm">
              Affiliated with recognized temples across Bharat
            </p>
          </div>

          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-light mb-2">Lineage Authenticated</h3>
            <p className="text-purple-200 text-sm">
              Credentials checked through guru parampara
            </p>
          </div>

          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
            <Heart className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-light mb-2">Devotion First</h3>
            <p className="text-purple-200 text-sm">
              Priests who serve dharma, not algorithms
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
