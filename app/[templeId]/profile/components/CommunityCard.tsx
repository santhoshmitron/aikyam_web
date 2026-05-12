"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarHeart, Sparkles, Users } from "lucide-react";
import type { TempleProfile } from "../types";
import { formatRelativeDate } from "../utils/format";
import { cn } from "@/lib/utils";

type Props = {
  profile: TempleProfile;
  /** `ribbon` = full-width band in profile deck. `sidebar` = compact column card. */
  variant?: "ribbon" | "sidebar";
  className?: string;
};

export function CommunityCard({ profile, variant = "ribbon", className }: Props) {
  const relative = formatRelativeDate(profile.lastUpdatedAt);
  const reduceMotion = useReducedMotion();

  if (variant === "sidebar") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-48px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reduceMotion ? undefined : { y: -3 }}
        className={cn(
          "relative overflow-hidden rounded-[1.75rem] border border-white/20 p-6 shadow-[0_24px_64px_-28px_rgba(76,29,149,0.45)] transition-shadow duration-300 hover:shadow-[0_32px_72px_-32px_rgba(76,29,149,0.58)] md:p-8 lg:rounded-[1.85rem]",
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-[#4c1d95] to-amber-600/90" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl" />
        <CommunityCopy profile={profile} relative={relative} layout="stacked" />
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { scale: 1.001 }}
      className={cn(
        "relative border-t border-white/25 bg-gradient-to-br from-[#2e1064] via-[#4c1d95] to-[#6b2d8f] px-6 py-9 sm:px-8 sm:py-10 lg:px-10 lg:py-11",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
        className
      )}
    >
      {!reduceMotion ? (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "linear-gradient(115deg, transparent 0%, rgba(251,191,36,0.15) 35%, transparent 55%, rgba(167,139,250,0.12) 75%, transparent 100%)",
            backgroundSize: "220% 100%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      ) : null}
      <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-purple-400/25 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent" />
      <CommunityCopy profile={profile} relative={relative} layout="ribbon" />
    </motion.article>
  );
}

function CommunityCopy({
  profile,
  relative,
  layout,
}: {
  profile: TempleProfile;
  relative: string | null;
  layout: "ribbon" | "stacked";
}) {
  return (
    <div className="relative text-white">
      <div className="flex items-center gap-2 text-amber-200/95">
        <Sparkles className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden />
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs">Community</span>
      </div>

      <div
        className={cn(
          "mt-5 flex flex-col gap-6 lg:mt-6",
          layout === "ribbon" && "md:flex-row md:items-end md:justify-between md:gap-10"
        )}
      >
        <div className="max-w-xl">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-[2.1rem] lg:leading-tight">
            Join fellow devotees
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/88 sm:text-[0.9375rem]">
            Be part of prayers, updates, and celebrations from this blessed temple.
          </p>
        </div>

        <div
          className={cn(
            "flex flex-wrap gap-3 sm:gap-4",
            layout === "ribbon" && "md:shrink-0 md:justify-end"
          )}
        >
          <motion.div
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="flex min-w-[9.5rem] items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 shadow-lg shadow-purple-950/20 ring-1 ring-white/10 backdrop-blur-md transition-shadow hover:border-amber-300/35 hover:bg-white/[0.14] hover:shadow-purple-950/30"
          >
            <Users className="h-7 w-7 shrink-0 text-amber-300 sm:h-8 sm:w-8" aria-hidden />
            <div className="min-w-0">
              <p className="font-display text-2xl font-bold tabular-nums leading-none tracking-tight">
                {profile.followersCount ?? 0}
              </p>
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-xs">
                Followers
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="flex min-w-[10.5rem] items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 shadow-lg shadow-purple-950/20 ring-1 ring-white/10 backdrop-blur-md transition-shadow hover:border-amber-300/35 hover:bg-white/[0.14] hover:shadow-purple-950/30"
          >
            <CalendarHeart className="h-7 w-7 shrink-0 text-amber-300 sm:h-8 sm:w-8" aria-hidden />
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-snug text-white/95">
                {relative ?? "Recently active"}
              </p>
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-xs">
                Last updated
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
