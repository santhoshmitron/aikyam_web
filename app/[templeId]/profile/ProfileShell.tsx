"use client";

import { motion } from "framer-motion";
import { AmbientBackground } from "./components/AmbientBackground";
import { CommunityCard } from "./components/CommunityCard";
import { ContactCard } from "./components/ContactCard";
import { DeityCard } from "./components/DeityCard";
import { EstablishmentCard } from "./components/EstablishmentCard";
import { HeroSection } from "./components/HeroSection";
import { HistoryCard } from "./components/HistoryCard";
import { LocationCard } from "./components/LocationCard";
import { TimingsCard } from "./components/TimingsCard";
import type { TempleProfile } from "./types";
import { TempleGallerySection, type GalleryItem } from "./TempleGallerySection";
import { formatAddressClean } from "./utils/format";

export type TempleGalleryBundle = {
  items: GalleryItem[];
  page: number;
  size: number;
  totalElements: number;
  hasNext: boolean;
};

type Props = {
  templeId: string;
  profile: TempleProfile;
  gallery: TempleGalleryBundle;
  title: string;
  subtitle: string;
  tagline: string;
  historyText: string;
  avatarUrl: string;
  bannerUrl: string;
};

export function ProfileShell({
  templeId,
  profile,
  gallery,
  title,
  subtitle,
  tagline,
  historyText,
  avatarUrl,
  bannerUrl,
}: Props) {
  const addressLine = formatAddressClean(profile.address, profile.username);
  const mapSearchQuery =
    addressLine ||
    profile.locationName?.trim() ||
    profile.username ||
    "Sacred temple, India";

  return (
    <div className="relative min-h-screen overflow-x-hidden pb-[calc(4.5rem+env(safe-area-inset-bottom))] sm:pb-0">
      <AmbientBackground />
      <div className="relative z-10">
        <HeroSection
          templeId={templeId}
          title={title}
          subtitle={subtitle}
          tagline={tagline}
          avatarUrl={avatarUrl}
          bannerUrl={bannerUrl}
          verified={Boolean(profile.verified)}
          postsCount={profile.postsCount ?? 0}
          followersCount={profile.followersCount ?? 0}
          viewsCount={profile.postsViewCount ?? 0}
          mapSearchQuery={mapSearchQuery}
          mapLatitude={profile.latitude}
          mapLongitude={profile.longitude}
        />

        <div className="mx-auto max-w-screen-2xl px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8 lg:pt-5 xl:px-10 2xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2rem] border border-purple-200/55 bg-gradient-to-b from-white/95 via-[#faf7ff] to-purple-50/50 shadow-[0_28px_90px_-40px_rgba(76,29,149,0.32)] ring-1 ring-purple-100/50 backdrop-blur-xl sm:rounded-[2.25rem]"
          >
            <main
              aria-label="Temple story, location, and practical details"
              className="grid grid-cols-1 gap-8 p-6 sm:gap-9 sm:p-8 lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-0 lg:p-10 lg:pb-9"
            >
              <div className="flex flex-col gap-7 lg:col-span-8 lg:gap-8">
                <HistoryCard historyText={historyText} />
                <EstablishmentCard establishment={profile.establishment} />
                <DeityCard deities={profile.deities} />
                <LocationCard profile={profile} addressLine={addressLine} />
              </div>
              <aside
                aria-label="Timings and contact"
                className="flex flex-col gap-7 lg:col-span-4 lg:gap-8"
              >
                <TimingsCard timings={profile.timings} />
                <ContactCard profile={profile} />
              </aside>
            </main>

            <CommunityCard profile={profile} variant="ribbon" />

            <TempleGallerySection
              embedded
              templeId={templeId}
              title={title}
              initialItems={gallery.items}
              initialPage={gallery.page}
              pageSize={gallery.size}
              totalElements={gallery.totalElements}
              initialHasNext={gallery.hasNext}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
