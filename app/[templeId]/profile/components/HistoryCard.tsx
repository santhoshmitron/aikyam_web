"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

type Props = {
  historyText: string;
};

export function HistoryCard({ historyText }: Props) {
  const [expanded, setExpanded] = useState(false);
  const long = historyText.length > 420;
  const shown = expanded || !long ? historyText : `${historyText.slice(0, 420).trim()}…`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -2 }}
      className="relative overflow-hidden rounded-[1.75rem] border border-purple-200/70 bg-gradient-to-br from-white via-purple-50/40 to-amber-50/30 p-6 shadow-[0_16px_48px_-20px_rgba(76,29,149,0.2)] transition-shadow hover:shadow-[0_24px_52px_-26px_rgba(76,29,149,0.35)] md:p-8 lg:rounded-[1.85rem] lg:p-7 xl:p-8"
    >
      <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-amber-300/15 blur-3xl" />
      <SectionTitle icon={BookOpen} title="Temple history" subtitle="Heritage & blessings" />
      {historyText ? (
        <>
          <blockquote className="relative mt-4 border-l-[3px] border-amber-400/90 pl-5 lg:mt-5">
            <p className="max-w-none whitespace-pre-line text-pretty text-[15px] leading-[1.75] text-purple-900/90 md:text-base lg:leading-[1.8]">
              {shown}
            </p>
          </blockquote>
          {long ? (
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="mt-4 text-sm font-semibold text-purple-700 underline-offset-4 transition-colors hover:text-purple-900 hover:underline"
            >
              {expanded ? "Show less" : "Read full story"}
            </button>
          ) : null}
        </>
      ) : (
        <p className="mt-4 rounded-xl bg-purple-50/80 px-4 py-6 text-center text-sm text-purple-800/70">
          The story of this temple will appear here soon. Visit again for blessed updates.
        </p>
      )}
    </motion.article>
  );
}
