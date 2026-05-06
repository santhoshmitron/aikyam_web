"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  tone?: "default" | "onDark";
};

export function SectionTitle({ icon: Icon, title, subtitle, tone = "default" }: Props) {
  const isDark = tone === "onDark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className="mb-4"
    >
      <div className="flex items-center gap-3">
        {Icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300/90 to-amber-500 text-purple-950 shadow-[0_0_24px_rgba(251,191,36,0.35)]">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
        ) : null}
        <div className="min-w-0">
          <h2
            className={`font-display text-xl font-semibold tracking-tight md:text-2xl ${isDark ? "text-white" : "text-purple-950"}`}
          >
            {title}
          </h2>
          {subtitle ? (
            <p className={`mt-0.5 text-sm ${isDark ? "text-white/75" : "text-purple-800/70"}`}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
      <div
        className="mt-3 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"
        aria-hidden
      />
    </motion.div>
  );
}
