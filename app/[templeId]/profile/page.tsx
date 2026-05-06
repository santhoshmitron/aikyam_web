import Link from "next/link";
import type { Metadata } from "next";
import { getTempleAuthHeaders, TEMPLE_API_BASE_URL } from "@/lib/temple-api";
import { ProfileShell } from "./ProfileShell";
import type { TempleProfile } from "./types";
import type { GalleryItem } from "./TempleGallerySection";
import { pickLocalizedText } from "./utils/text";

type TempleApiResponse = {
  success: boolean;
  message?: string;
  data?: TempleProfile;
};

type TempleProfileResult = {
  profile: TempleProfile | null;
  errorType: "none" | "not-found" | "unauthorized" | "failed";
};

type TempleGalleryApiResponse = {
  success: boolean;
  data?: {
    content?: GalleryItem[];
    page?: number;
    size?: number;
    totalElements?: number;
    totalPages?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
  };
};

type TempleGalleryResult = {
  items: GalleryItem[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
};

async function getTempleProfile(templeId: string): Promise<TempleProfileResult> {
  try {
    const url = `${TEMPLE_API_BASE_URL}/core/api/v1/temples/${templeId}/profile`;
    const response = await fetch(url, {
      method: "GET",
      headers: getTempleAuthHeaders(),
      next: { revalidate: 180 },
    });

    if (!response.ok) {
      if (response.status === 404) return { profile: null, errorType: "not-found" };
      if (response.status === 401 || response.status === 403)
        return { profile: null, errorType: "unauthorized" };
      return { profile: null, errorType: "failed" };
    }

    const payload = (await response.json()) as TempleApiResponse;
    if (!payload.success || !payload.data) return { profile: null, errorType: "failed" };

    return { profile: payload.data, errorType: "none" };
  } catch {
    return { profile: null, errorType: "failed" };
  }
}

function firstVariant(variants?: Record<string, string>) {
  if (!variants) return "";
  return Object.values(variants).find(Boolean) ?? "";
}

async function getTempleGallery(
  templeId: string,
  page: number,
  size = 10
): Promise<TempleGalleryResult> {
  try {
    const safePage = Number.isFinite(page) && page >= 0 ? page : 0;
    const url = `${TEMPLE_API_BASE_URL}/core/api/v1/temples/${templeId}/gallery?page=${safePage}&size=${size}`;
    const response = await fetch(url, {
      method: "GET",
      headers: getTempleAuthHeaders(),
      next: { revalidate: 180 },
    });

    if (!response.ok) {
      return {
        items: [],
        page: safePage,
        size,
        totalElements: 0,
        totalPages: 0,
        hasNext: false,
        hasPrevious: safePage > 0,
      };
    }

    const payload = (await response.json()) as TempleGalleryApiResponse;
    const items = payload.data?.content ?? [];
    const filteredItems = items.filter((item) => {
      if (item.mediaType && item.mediaType.toLowerCase() !== "image") return false;
      return Boolean(firstVariant(item.media?.variants) || item.media?.url);
    });
    const totalElements = payload.data?.totalElements ?? filteredItems.length;
    const totalPages = payload.data?.totalPages ?? (totalElements > 0 ? 1 : 0);

    return {
      items: filteredItems,
      page: payload.data?.page ?? safePage,
      size: payload.data?.size ?? size,
      totalElements,
      totalPages,
      hasNext: payload.data?.hasNext ?? false,
      hasPrevious: payload.data?.hasPrevious ?? safePage > 0,
    };
  } catch {
    return {
      items: [],
      page,
      size,
      totalElements: 0,
      totalPages: 0,
      hasNext: false,
      hasPrevious: page > 0,
    };
  }
}

function buildSubtitle(profile: TempleProfile, title: string): string {
  const candidates = [
    profile.names?.local,
    profile.names?.official,
    profile.names?.kn,
    profile.names?.hi,
    profile.username,
  ].filter(Boolean) as string[];

  for (const c of candidates) {
    const t = c.trim();
    if (t && t !== title) return t;
  }
  return "A sacred place of worship & blessed community";
}

function buildTagline(history: string): string {
  const fallback =
    "Where lamps glow softly and hearts turn inward — may your visit be filled with peace.";
  const h = history.trim();
  if (!h) return fallback;
  const line = h.split(/\n+/)[0]?.trim() ?? h;
  if (line.length <= 220) return line;
  return `${line.slice(0, 217).trimEnd()}…`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ templeId: string }>;
}): Promise<Metadata> {
  const { templeId } = await params;
  const { profile } = await getTempleProfile(templeId);

  if (!profile) {
    return {
      title: "Temple Profile",
      description: "Temple details on Aikyam",
    };
  }

  const title = pickLocalizedText(profile.names) || profile.username || "Temple Profile";
  const description = pickLocalizedText(profile.history) || "Temple details on Aikyam";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url:
            firstVariant(profile.assets?.banner?.variants) ||
            firstVariant(profile.assets?.avatar?.variants) ||
            "https://www.shriaikyam.com/logo.jpeg",
        },
      ],
    },
  };
}

export default async function TempleProfilePage({
  params,
}: {
  params: Promise<{ templeId: string }>;
}) {
  const { templeId } = await params;

  const [{ profile, errorType }, gallery] = await Promise.all([
    getTempleProfile(templeId),
    getTempleGallery(templeId, 0, 10),
  ]);

  if (!profile) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a0b2e] via-purple-950 to-[#2d1155] px-4 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.12)_0%,_transparent_50%)]" />
        <main className="relative w-full max-w-lg rounded-[2rem] border border-white/15 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/90">
            Temple profile
          </p>
          <h1 className="font-display mt-4 text-2xl font-semibold text-white md:text-3xl">
            Unable to load this temple
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {errorType === "not-found"
              ? "We couldn’t find this temple. Please check the link and try again."
              : errorType === "unauthorized"
              ? "This temple isn’t available right now. Please try again later."
              : "Something went wrong. Please try again in a few moments."}
          </p>
          <Link
            href="/temples"
            className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3 text-sm font-semibold text-purple-950 shadow-lg transition hover:from-amber-500 hover:to-orange-600"
          >
            Explore temples
          </Link>
        </main>
      </div>
    );
  }

  const title = pickLocalizedText(profile.names) || profile.username || "Temple";
  const subtitle = buildSubtitle(profile, title);
  const historyRaw = pickLocalizedText(profile.history, ["en", "official", "local", "kn", "hi"]);
  const tagline = buildTagline(historyRaw);
  const historyText =
    historyRaw ||
    "";
  const avatarUrl =
    firstVariant(profile.assets?.avatar?.variants) || "https://www.shriaikyam.com/logo.jpeg";
  const bannerUrl = firstVariant(profile.assets?.banner?.variants) || avatarUrl;

  return (
    <ProfileShell
      templeId={templeId}
      profile={profile}
      gallery={{
        items: gallery.items,
        page: gallery.page,
        size: gallery.size,
        totalElements: gallery.totalElements,
        hasNext: gallery.hasNext,
      }}
      title={title}
      subtitle={subtitle}
      tagline={tagline}
      historyText={historyText}
      avatarUrl={avatarUrl}
      bannerUrl={bannerUrl}
    />
  );
}
