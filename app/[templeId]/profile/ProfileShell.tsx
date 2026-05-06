"use client";

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
    addressLine || profile.username || "Sacred temple, India";

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
        />

        <main className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-6 px-4 pb-12 pt-2 sm:gap-7 sm:px-6 md:pb-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-4 2xl:gap-10 2xl:px-12">
          <div className="flex flex-col gap-6 sm:gap-7 lg:col-span-8 lg:gap-8">
            <HistoryCard historyText={historyText} />
            <EstablishmentCard establishment={profile.establishment} />
            <DeityCard deities={profile.deities} />
            <LocationCard profile={profile} addressLine={addressLine} />
          </div>
          <aside className="flex flex-col gap-6 sm:gap-7 lg:col-span-4 lg:gap-8">
            <TimingsCard timings={profile.timings} />
            <ContactCard profile={profile} />
            <CommunityCard profile={profile} />
          </aside>
        </main>

        <TempleGallerySection
          templeId={templeId}
          title={title}
          initialItems={gallery.items}
          initialPage={gallery.page}
          pageSize={gallery.size}
          totalElements={gallery.totalElements}
          initialHasNext={gallery.hasNext}
        />
      </div>
    </div>
  );
}
