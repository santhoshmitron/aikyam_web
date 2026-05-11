"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { mapsDirectionsUrl, mapsEmbedUrl, mapsSearchUrl, prettifyPlace } from "../utils/format";
import type { TempleProfile } from "../types";
import { SectionTitle } from "./SectionTitle";

type Props = {
  profile: TempleProfile;
  addressLine: string;
};

export function LocationCard({ profile, addressLine }: Props) {
  const [showMap, setShowMap] = useState(false);

  const placeLabel = prettifyPlace(profile.placeId);
  const query =
    addressLine ||
    [profile.username, placeLabel].filter(Boolean).join(", ") ||
    "India";

  const searchUrl = mapsSearchUrl(query);
  const directionsUrl = mapsDirectionsUrl(query);
  const embedUrl = mapsEmbedUrl(query);

  const hasLocation = Boolean(addressLine || placeLabel || profile.username);

  if (!hasLocation) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[1.75rem] border border-dashed border-purple-300/60 bg-purple-50/40 p-6 text-center text-sm text-purple-800/75 md:p-8 lg:rounded-[1.85rem] lg:p-7 xl:p-8"
      >
        <SectionTitle icon={MapPin} title="Location" subtitle="Find your way" />
        <p className="mt-4">Location details will appear here soon.</p>
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
      className="rounded-[1.75rem] border border-purple-200/70 bg-white/85 p-6 shadow-[0_16px_48px_-24px_rgba(76,29,149,0.15)] backdrop-blur-xl transition-shadow hover:shadow-[0_24px_52px_-26px_rgba(76,29,149,0.32)] md:p-8 lg:rounded-[1.85rem] lg:p-7 xl:p-8"
    >
      <SectionTitle icon={MapPin} title="Location" subtitle="Sacred geography" />

      {addressLine ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-purple-900/90">{addressLine}</p>
      ) : placeLabel ? (
        <p className="mt-4 text-pretty text-base text-purple-900/90">{placeLabel}</p>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:gap-2.5">
        <Button
          asChild
          className="flex-1 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-lg shadow-purple-900/20 transition-all hover:-translate-y-0.5 hover:shadow-purple-900/30 lg:h-11"
        >
          <a href={searchUrl} target="_blank" rel="noreferrer">
            <MapPin className="mr-2 h-4 w-4" />
            Open in Maps
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 rounded-full border-amber-400/70 bg-white/90 text-purple-900 transition-all hover:-translate-y-0.5 hover:border-amber-400/90 hover:bg-white lg:h-11"
        >
          <a href={directionsUrl} target="_blank" rel="noreferrer">
            <Navigation className="mr-2 h-4 w-4 text-amber-600" />
            Get directions
          </a>
        </Button>
      </div>

      <button
        type="button"
        onClick={() => setShowMap((s) => !s)}
        className="mt-4 flex w-full items-center justify-center gap-2 text-sm font-semibold text-purple-700 underline-offset-4 hover:text-purple-900 hover:underline"
      >
        <ExternalLink className="h-4 w-4" aria-hidden />
        {showMap ? "Hide map preview" : "Show map preview"}
      </button>

      {showMap ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 overflow-hidden rounded-2xl ring-2 ring-amber-300/40"
        >
          <iframe
            title="Temple location map"
            src={embedUrl}
            className="h-[240px] w-full md:h-[300px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      ) : null}
    </motion.article>
  );
}
