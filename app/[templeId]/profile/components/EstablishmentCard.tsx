"use client";

import { motion } from "framer-motion";
import { Landmark } from "lucide-react";
import type { TempleProfile } from "../types";
import { SectionTitle } from "./SectionTitle";

type Props = {
  establishment?: TempleProfile["establishment"];
};

export function EstablishmentCard({ establishment }: Props) {
  if (!establishment?.year && !establishment?.foundedBy) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.05 }}
      whileHover={{ y: -2 }}
      className="relative overflow-hidden rounded-[1.75rem] border border-amber-200/70 bg-gradient-to-br from-amber-50/90 via-white to-purple-50/50 p-6 shadow-[0_16px_48px_-20px_rgba(180,83,9,0.15)] transition-shadow hover:shadow-[0_24px_54px_-26px_rgba(180,83,9,0.3)] md:p-8 lg:rounded-[1.85rem] lg:p-7 xl:p-8"
    >
      <div className="absolute bottom-0 left-6 top-8 w-0.5 rounded-full bg-gradient-to-b from-amber-400 via-purple-400 to-transparent lg:left-7" />
      <div className="pl-8 lg:pl-9">
        <SectionTitle icon={Landmark} title="Establishment" subtitle="Roots of devotion" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {establishment.year ? (
            <div className="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-amber-200/60 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:ring-amber-300/70">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-800/80">
                Founded
              </p>
              <p className="font-display mt-1 text-2xl font-semibold text-purple-950">
                {establishment.year}
              </p>
            </div>
          ) : null}
          {establishment.foundedBy ? (
            <div className="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-purple-200/60 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:ring-purple-300/70">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-800/80">
                Founded by
              </p>
              <p className="mt-1 text-base font-medium text-purple-950">{establishment.foundedBy}</p>
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
