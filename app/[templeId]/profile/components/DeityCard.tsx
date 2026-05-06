"use client";

import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";
import type { TempleProfile } from "../types";
import { prettifyDeity, prettifyRole } from "../utils/format";
import { SectionTitle } from "./SectionTitle";

type Props = {
  deities?: TempleProfile["deities"];
};

export function DeityCard({ deities }: Props) {
  if (!deities?.length) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.08 }}
      whileHover={{ y: -2 }}
      className="rounded-[1.75rem] border border-purple-300/40 bg-gradient-to-br from-purple-900 via-purple-800 to-[#2d1155] p-6 text-white shadow-[0_20px_60px_-24px_rgba(76,29,149,0.45)] md:p-8"
    >
      <SectionTitle icon={Flower2} title="Primary deity" subtitle="Divine presence" tone="onDark" />
      <div className="mt-4 flex flex-wrap gap-3">
        {deities.map((d, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="inline-flex flex-col gap-1 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-amber-400/30 backdrop-blur-md"
          >
            <span className="font-display text-lg font-semibold tracking-tight">
              {prettifyDeity(d.deityId)}
            </span>
            {d.role ? (
              <span className="text-xs font-medium uppercase tracking-wider text-amber-200/90">
                {prettifyRole(d.role)}
              </span>
            ) : null}
          </motion.span>
        ))}
      </div>
    </motion.article>
  );
}
