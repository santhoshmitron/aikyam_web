"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Images } from "lucide-react";

type Props = {
  templeShortName: string;
};

export function GalleryEmptyState({ templeShortName }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[1.75rem] border border-purple-200/50 bg-gradient-to-br from-white/90 via-purple-50/50 to-amber-50/40 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_20px_60px_-34px_rgba(76,29,149,0.18)] sm:rounded-[2rem] sm:p-10 md:p-12"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(167,139,250,0.25) 0%, transparent 42%),
            radial-gradient(circle at 88% 72%, rgba(251,191,36,0.2) 0%, transparent 45%),
            linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)`,
          backgroundSize: "100% 100%, 100% 100%, 200% 200%",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234c1d95' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {!reduceMotion ? (
        <motion.div
          className="pointer-events-none absolute -right-8 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-amber-300/25 blur-3xl"
          animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.06, 1] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      ) : null}

      <div className="relative mx-auto flex max-w-lg flex-col items-center text-center">
        <motion.div
          className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-700 to-purple-950 text-amber-300 shadow-[0_12px_40px_-12px_rgba(76,29,149,0.55)] ring-2 ring-amber-300/35 ring-offset-2 ring-offset-purple-50/90 sm:h-[4.5rem] sm:w-[4.5rem]"
          animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
          transition={reduceMotion ? undefined : { duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Images className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden />
          {!reduceMotion ? (
            <span className="absolute inset-0 rounded-2xl bg-amber-400/20 blur-md" aria-hidden />
          ) : null}
        </motion.div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-800/55">
          Awaiting sacred moments
        </p>
        <h3 className="font-display mt-2 text-xl font-semibold tracking-tight text-purple-950 sm:text-2xl">
          The gallery is preparing to shine
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-purple-900/75 sm:text-[0.9375rem]">
          When {templeShortName} shares photos of architecture, rituals, and festivals, they will
          appear here in a blessed grid for devotees everywhere.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full border border-purple-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-purple-900/80 shadow-sm backdrop-blur-sm">
            0 photos yet
          </span>
          <span className="rounded-full border border-amber-200/70 bg-amber-50/80 px-3 py-1.5 text-xs font-medium text-amber-950/80 shadow-sm">
            Check back soon
          </span>
        </div>
      </div>
    </motion.div>
  );
}
