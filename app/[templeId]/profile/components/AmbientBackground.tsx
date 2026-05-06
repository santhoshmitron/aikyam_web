"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbff] via-[#faf5ff] to-amber-50/50" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/15 via-amber-400/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-amber-300/20 via-purple-500/10 to-transparent blur-3xl" />

      {/* Lotus watermark */}
      <svg
        className="absolute -right-16 bottom-24 opacity-[0.06] md:opacity-[0.08]"
        width="420"
        height="420"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 20c-8 24-32 40-56 40 8 32 32 56 56 72 24-16 48-40 56-72-24 0-48-16-56-40z"
          stroke="currentColor"
          strokeWidth="2"
          className="text-purple-800"
        />
        <path
          d="M100 180c8-24 32-40 56-40-8-32-32-56-56-72-24 16-48 40-56 72 24 0 48 16 56 40z"
          stroke="currentColor"
          strokeWidth="2"
          className="text-purple-800"
        />
        <circle cx="100" cy="100" r="8" fill="currentColor" className="text-amber-400/40" />
      </svg>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-amber-300/25 blur-md"
          style={{
            width: 6 + (i % 3) * 4,
            height: 6 + (i % 3) * 4,
            left: `${12 + i * 14}%`,
            top: `${18 + (i % 4) * 12}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
