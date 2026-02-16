"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wand2, Music, BookOpen, Sparkles } from "lucide-react";

export default function AikyamAI() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative p-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl shadow-2xl">
              {/* Center icon with glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.3)",
                    "0 0 60px rgba(168, 85, 247, 0.6)",
                    "0 0 20px rgba(168, 85, 247, 0.3)",
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center mb-8"
              >
                <Wand2 className="w-16 h-16 text-white" />
              </motion.div>

              {/* Floating icons */}
              <div className="absolute top-8 right-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Music className="w-8 h-8 text-purple-500" />
                </motion.div>
              </div>

              <div className="absolute bottom-8 left-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </motion.div>
              </div>

              <div className="absolute top-1/2 right-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </motion.div>
              </div>

              {/* Sound wave visualization */}
              <div className="flex justify-center items-end gap-1 h-24 mt-8">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 bg-gradient-to-t from-purple-600 to-purple-400 rounded-full"
                    animate={{
                      height: ["30%", `${Math.random() * 70 + 30}%`, "30%"]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full">
              <p className="text-sm font-medium text-purple-700 tracking-wide uppercase">
                Aikyam AI
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
              Reviving the Forgotten Sounds of Faith
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Ancient mantras, regional bhajans, rare temple chants — thousands of sacred sounds 
                are vanishing with each generation. Aikyam AI preserves them.
              </p>
              
              <p>
                Using machine learning trained on temple archives and priest recordings, we restore 
                pronunciation, reconstruct lost verses, and make them accessible to devotees worldwide.
              </p>

              <p className="text-xl font-light text-purple-700 italic">
                "When a mantra fades, a universe of devotion fades with it. We're ensuring that never happens."
              </p>

              <div className="pt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                  <p className="text-gray-700">Digitizing rare temple audio archives</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                  <p className="text-gray-700">AI-assisted pronunciation guides for forgotten Sanskrit verses</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                  <p className="text-gray-700">Regional bhajan restoration with native priest guidance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
