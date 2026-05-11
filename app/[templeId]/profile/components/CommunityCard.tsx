"use client";

import { motion } from "framer-motion";
import { CalendarHeart, Sparkles, Users } from "lucide-react";
import type { TempleProfile } from "../types";
import { formatRelativeDate } from "../utils/format";

type Props = {
  profile: TempleProfile;
};

export function CommunityCard({ profile }: Props) {
  const relative = formatRelativeDate(profile.lastUpdatedAt);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="relative overflow-hidden rounded-[1.75rem] border border-white/20 p-6 shadow-[0_24px_64px_-28px_rgba(76,29,149,0.45)] transition-shadow hover:shadow-[0_30px_74px_-34px_rgba(76,29,149,0.65)] md:p-8 lg:rounded-[1.85rem] lg:p-7 xl:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-[#4c1d95] to-amber-600/90" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/25 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl" />

      <div className="relative text-white">
        <div className="flex items-center gap-2 text-amber-200/90">
          <Sparkles className="h-5 w-5" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-[0.15em]">Community</span>
        </div>
        <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight md:text-3xl lg:text-[2rem]">
          Join fellow devotees
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
          Be part of prayers, updates, and celebrations from this blessed temple.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 lg:gap-3">
          <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/20 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/15">
            <Users className="h-8 w-8 text-amber-300" aria-hidden />
            <div>
              <p className="font-display text-2xl font-bold tabular-nums">{profile.followersCount ?? 0}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-white/70">Followers</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/20 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/15">
            <CalendarHeart className="h-8 w-8 text-amber-300" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-white/95">{relative ?? "Recently active"}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-white/70">Last updated</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
