"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ClosingInvocation() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-purple-100 to-purple-200 overflow-hidden">
      {/* Background sacred geometry */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-96 h-96"
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-64 h-1 bg-purple-300 origin-left"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating diyas */}
      <motion.div
        className="absolute top-20 left-20 text-6xl opacity-30"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🪔
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-32 text-5xl opacity-30"
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🪔
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/3 text-5xl opacity-30"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🪔
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Om symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="text-9xl text-purple-700 filter drop-shadow-xl">
            ॐ
          </div>
        </motion.div>

        {/* Invocation text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-relaxed">
            May every click be a prayer.
          </h2>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-relaxed">
            May every screen glow with devotion.
          </h2>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-relaxed">
            May technology serve the timeless.
          </h2>
        </motion.div>

        {/* Closing mantra */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16"
        >
          <div className="inline-block p-10 bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl">
            <p className="text-3xl md:text-4xl text-purple-800 font-light mb-4 tracking-wide">
              ॐ शान्तिः शान्तिः शान्तिः
            </p>
            <p className="text-lg text-gray-600 italic">
              Om, Peace, Peace, Peace
            </p>
          </div>
        </motion.div>

        {/* Lotus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-8xl"
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 1,
              delay: 0.9
            }
          }}
        >
          🪷
        </motion.div>
      </div>
    </section>
  );
}
