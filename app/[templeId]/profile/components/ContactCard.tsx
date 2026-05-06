"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import type { TempleProfile } from "../types";
import { SectionTitle } from "./SectionTitle";

function formatHelplineLabel(type?: string): string {
  if (!type) return "Temple office";
  const t = type.replace(/_/g, " ").toLowerCase();
  return t.replace(/\b\w/g, (c) => c.toUpperCase());
}

type Props = {
  profile: TempleProfile;
};

export function ContactCard({ profile }: Props) {
  const helplines = profile.helplines ?? [];
  const hasContact =
    helplines.some((l) => Boolean(l.phone)) || Boolean(profile.email);

  if (!hasContact) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[1.75rem] border border-dashed border-purple-300/60 bg-purple-50/50 p-6 text-center text-sm text-purple-800/75 md:p-8"
      >
        <SectionTitle icon={Phone} title="Contact" subtitle="Reach the temple" />
        <p className="mt-4">Contact details will be shared here soon.</p>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
      className="rounded-[1.75rem] border border-purple-200/70 bg-white/85 p-6 shadow-[0_16px_48px_-24px_rgba(76,29,149,0.15)] backdrop-blur-xl md:p-8"
    >
      <SectionTitle icon={Phone} title="Contact" subtitle="Call or write with reverence" />

      <div className="mt-5 space-y-4">
        {helplines.length > 0 ? (
          <div className="space-y-3 pt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-800/60">
              {helplines.length > 1 ? "Helplines" : "Temple phone"}
            </p>
            {helplines.map((line, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/90 px-4 py-3 ring-1 ring-purple-100 shadow-sm"
              >
                <p className="text-xs font-semibold text-purple-800">{formatHelplineLabel(line.type)}</p>
                {line.phone ? (
                  <a
                    href={`tel:${line.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm font-medium text-purple-700 hover:underline"
                  >
                    {line.phone}
                  </a>
                ) : null}
                {line.language?.length ? (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {line.language.map((lang) => (
                      <span
                        key={lang}
                        className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-medium uppercase text-purple-800"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}

        {profile.email ? (
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-2xl bg-amber-50/90 px-4 py-3 ring-1 ring-amber-200/70 transition hover:bg-amber-100/90 hover:shadow-md"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-purple-950">
              <Mail className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-900/80">
                Email
              </p>
              <p className="truncate text-base font-semibold text-purple-950">{profile.email}</p>
            </div>
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
