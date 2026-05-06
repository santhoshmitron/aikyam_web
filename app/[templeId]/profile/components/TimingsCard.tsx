"use client";

import { motion } from "framer-motion";
import { Clock3, Moon, Sun } from "lucide-react";
import type { TempleProfile } from "../types";
import { formatTimeWindow12h, isOpenNow } from "../utils/format";
import { SectionTitle } from "./SectionTitle";

type Props = {
  timings?: TempleProfile["timings"];
};

export function TimingsCard({ timings }: Props) {
  const morning = timings?.darshan?.morning;
  const evening = timings?.darshan?.evening;
  const morningStr = formatTimeWindow12h(morning);
  const eveningStr = formatTimeWindow12h(evening);
  const status = isOpenNow(timings);

  const hasAny = morningStr || eveningStr;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
      className="rounded-[1.75rem] border border-purple-200/70 bg-white/85 p-6 shadow-[0_16px_48px_-24px_rgba(76,29,149,0.18)] backdrop-blur-xl md:p-8"
    >
      <SectionTitle icon={Clock3} title="Darshan timings" subtitle="Plan your blessed visit" />

      {status.status === "open" ? (
        <motion.div
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          className="mt-4 flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-400/40"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {status.label}
        </motion.div>
      ) : status.status === "closed" ? (
        <p className="mt-4 rounded-xl bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-200/80">
          {status.label}
        </p>
      ) : null}

      {hasAny ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {morningStr ? (
            <div className="group rounded-2xl bg-gradient-to-br from-amber-50 to-white p-4 ring-1 ring-amber-200/60 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-2 text-amber-700">
                <Sun className="h-5 w-5" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wider">Morning</span>
              </div>
              <p className="font-display mt-2 text-xl font-semibold text-purple-950 md:text-2xl">
                {morningStr}
              </p>
            </div>
          ) : null}
          {eveningStr ? (
            <div className="group rounded-2xl bg-gradient-to-br from-purple-50 to-white p-4 ring-1 ring-purple-200/60 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-2 text-purple-700">
                <Moon className="h-5 w-5" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wider">Evening</span>
              </div>
              <p className="font-display mt-2 text-xl font-semibold text-purple-950 md:text-2xl">
                {eveningStr}
              </p>
            </div>
          ) : null}
        </div>
      ) : (
        <p className="mt-4 rounded-xl bg-purple-50 px-4 py-5 text-center text-sm text-purple-800/75">
          Timings will be updated soon. Please contact the temple office for today&apos;s schedule.
        </p>
      )}
    </motion.article>
  );
}
