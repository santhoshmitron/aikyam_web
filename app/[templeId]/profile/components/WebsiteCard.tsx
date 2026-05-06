"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import type { TempleProfile } from "../types";
import { SectionTitle } from "./SectionTitle";

type Props = {
  website?: TempleProfile["website"];
};

export function WebsiteCard({ website }: Props) {
  if (!website?.official && !website?.donation) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
      className="rounded-[1.75rem] border border-purple-200/70 bg-gradient-to-br from-white via-purple-50/30 to-amber-50/40 p-6 shadow-[0_16px_48px_-24px_rgba(76,29,149,0.12)] md:p-8"
    >
      <SectionTitle icon={Globe} title="Online presence" subtitle="Official links" />
      <div className="mt-5 flex flex-col gap-3">
        {website.official ? (
          <a
            href={website.official}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 ring-1 ring-purple-200/60 transition hover:shadow-md"
          >
            <span className="font-medium text-purple-950">Official website</span>
            <ExternalLink className="h-4 w-4 shrink-0 text-purple-600" aria-hidden />
          </a>
        ) : null}
        {website.donation ? (
          <a
            href={website.donation}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-3 ring-1 ring-amber-300/60 transition hover:shadow-md"
          >
            <span className="font-semibold text-purple-950">Offer seva / donate</span>
            <ExternalLink className="h-4 w-4 shrink-0 text-amber-800" aria-hidden />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
