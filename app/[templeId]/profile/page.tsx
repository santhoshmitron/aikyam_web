import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CalendarDays,
  Clock3,
  ExternalLink,
  Globe,
  Heart,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { getTempleAuthHeaders, TEMPLE_API_BASE_URL } from "@/lib/temple-api";
import { TempleGallerySection, type GalleryItem } from "./TempleGallerySection";

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

type LocalizedFields = Record<string, string>;

type DarshanWindow = {
  open?: string;
  close?: string;
};

type TempleProfile = {
  id: string;
  templeId: string;
  username?: string;
  names?: LocalizedFields;
  history?: LocalizedFields;
  establishment?: {
    year?: number;
    foundedBy?: string;
  };
  timings?: {
    darshan?: {
      morning?: DarshanWindow;
      evening?: DarshanWindow;
    };
  };
  website?: {
    official?: string;
    donation?: string;
  };
  helplines?: Array<{
    type?: string;
    phone?: string;
    language?: string[];
  }>;
  email?: string;
  address?: {
    area?: string;
    city?: string;
    district?: string;
    stateCode?: string;
    countryCode?: string;
    pincode?: string;
  };
  deities?: Array<{
    deityId?: string;
    role?: string;
  }>;
  verified?: boolean;
  assets?: {
    avatar?: {
      variants?: Record<string, string>;
    };
    banner?: {
      variants?: Record<string, string>;
    };
  };
  isFollowing?: boolean;
  postsCount?: number;
  followersCount?: number;
  postsViewCount?: number;
  lastUpdatedAt?: string;
  placeId?: string;
};

async function getTempleProfile(templeId: string): Promise<TempleProfileResult> {
  try {
    const url = `${TEMPLE_API_BASE_URL}/core/api/v1/temples/${templeId}/profile`;
    const headers = getTempleAuthHeaders();

    const response = await fetch(url, {
      method: "GET",
      headers,
      next: { revalidate: 180 },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return { profile: null, errorType: "not-found" };
      }
      if (response.status === 401 || response.status === 403) {
        return { profile: null, errorType: "unauthorized" };
      }
      return { profile: null, errorType: "failed" };
    }

    const payload = (await response.json()) as TempleApiResponse;
    if (!payload.success || !payload.data) {
      return { profile: null, errorType: "failed" };
    }

    return { profile: payload.data, errorType: "none" };
  } catch {
    return { profile: null, errorType: "failed" };
  }
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

function pickLocalizedText(
  value?: LocalizedFields,
  preferred: string[] = ["en", "official", "local", "kn", "hi"]
) {
  if (!value) return "";
  for (const key of preferred) {
    if (value[key]) return value[key];
  }
  const fallback = Object.values(value).find(Boolean);
  return fallback ?? "";
}

function firstVariant(variants?: Record<string, string>) {
  if (!variants) return "";
  return Object.values(variants).find(Boolean) ?? "";
}

function formatAddress(address?: TempleProfile["address"]) {
  if (!address) return "Address information unavailable";
  const parts = [
    address.area,
    address.city,
    address.district,
    address.stateCode,
    address.pincode,
    address.countryCode,
  ].filter(Boolean);
  return parts.length ? parts.join(", ") : "Address information unavailable";
}

function formatTimeWindow(slot?: DarshanWindow) {
  if (!slot?.open && !slot?.close) return "Not specified";
  if (slot?.open && slot?.close) return `${slot.open} - ${slot.close}`;
  return slot.open ?? slot.close ?? "Not specified";
}

function buildMapQuery(profile: TempleProfile) {
  const parts = [
    profile.username,
    profile.address?.area,
    profile.address?.city,
    profile.address?.district,
    profile.address?.stateCode,
    profile.address?.countryCode,
  ].filter(Boolean);
  return encodeURIComponent(parts.join(", "));
}

function prettifyDeityId(deityId?: string) {
  if (!deityId) return "Unknown Deity";
  return deityId
    .replace(/^deity_/, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (s) => s.toUpperCase());
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
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-amber-50">
        <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-4 py-20">
          <div className="w-full rounded-3xl bg-white p-7 text-center shadow-xl ring-1 ring-black/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-600">
              Temple Profile
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
              Unable to load this temple now
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              {errorType === "unauthorized"
                ? "Your API requires authorization. Add TEMPLE_PROFILE_API_TOKEN (and optional TEMPLE_PROFILE_COOKIE) in your local .env file and restart dev server."
                : errorType === "not-found"
                ? "Temple ID was not found in API. Please check the templeId in URL."
                : "API is currently unavailable. Please try again in a few minutes."}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/temples"
                className="inline-flex items-center rounded-full border border-purple-200 bg-white px-5 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-50"
              >
                Back to Temples
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const title = pickLocalizedText(profile.names) || profile.username || "Temple";
  const subtitle =
    profile.username && profile.username !== title ? profile.username : "Sacred temple profile";
  const history = pickLocalizedText(profile.history, ["en", "official", "local", "kn", "hi"]);
  const avatarUrl =
    firstVariant(profile.assets?.avatar?.variants) || "https://www.shriaikyam.com/logo.jpeg";
  const bannerUrl = firstVariant(profile.assets?.banner?.variants) || avatarUrl;
  const primaryHelpline = profile.helplines?.find((item) => item.phone)?.phone;
  const mapQuery = buildMapQuery(profile);
  const deities = profile.deities ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-amber-50 text-slate-900">
      <section className="relative">
        <div className="relative h-[220px] w-full md:h-[320px]">
          <Image
            src={bannerUrl}
            alt={`${title} banner`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/20" />
        </div>

        <div className="mx-auto -mt-16 flex w-full max-w-6xl flex-col gap-6 px-4 pb-6 sm:px-6 md:-mt-20 lg:px-8">
          <div className="rounded-3xl bg-white/95 p-5 shadow-2xl ring-1 ring-black/5 backdrop-blur md:p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-2xl ring-4 ring-white md:h-28 md:w-28">
                  <Image
                    src={avatarUrl}
                    alt={`${title} avatar`}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
                <div className="min-w-0">
                  <h1 className="break-words text-2xl font-semibold text-slate-900 md:text-3xl">
                    <span>{title}</span>
                  </h1>
                  <p className="mt-1 text-sm text-slate-600 md:text-base">{subtitle}</p>
                  <div className="mt-3 flex min-w-0 flex-wrap items-center gap-2">
                    <span className="inline-flex min-w-0 max-w-full items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                      <Landmark className="h-3.5 w-3.5 shrink-0" />
                      <span className="max-w-[180px] truncate sm:max-w-[320px] md:max-w-[420px]">
                        {profile.templeId}
                      </span>
                    </span>
                    {profile.verified ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Verified Temple
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="grid w-full grid-cols-3 gap-2 rounded-2xl bg-slate-50 p-3 text-center sm:gap-4 sm:p-4 lg:w-auto lg:min-w-[240px]">
                <div>
                  <p className="text-lg font-semibold leading-none text-slate-900">
                    {profile.postsCount ?? 0}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-slate-500">Posts</p>
                </div>
                <div>
                  <p className="text-lg font-semibold leading-none text-slate-900">
                    {profile.followersCount ?? 0}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-slate-500">Followers</p>
                </div>
                <div>
                  <p className="text-lg font-semibold leading-none text-slate-900">
                    {profile.postsViewCount ?? 0}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-slate-500">Views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <article className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-black/5 md:p-7 lg:col-span-2">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">Temple History</h2>
          <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-700 md:text-base">
            {history || "Temple history will be added soon."}
          </p>

          {(profile.establishment?.year || profile.establishment?.foundedBy) && (
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-900">
                <CalendarDays className="h-4 w-4" />
                Establishment
              </h3>
              <div className="mt-2 text-sm text-amber-900">
                {profile.establishment?.year ? (
                  <p>
                    <span className="font-semibold">Year:</span> {profile.establishment.year}
                  </p>
                ) : null}
                {profile.establishment?.foundedBy ? (
                  <p>
                    <span className="font-semibold">Founded By:</span>{" "}
                    {profile.establishment.foundedBy}
                  </p>
                ) : null}
              </div>
            </div>
          )}

          {deities.length > 0 ? (
            <div className="mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-900">
                Deities
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {deities.map((deity, idx) => (
                  <span
                    key={`${deity.deityId ?? "deity"}-${idx}`}
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-purple-800 ring-1 ring-purple-200"
                  >
                    {prettifyDeityId(deity.deityId)}
                    {deity.role ? ` · ${deity.role}` : ""}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <details className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-800">
              View temple on map
            </summary>
            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200">
              <iframe
                title={`${title} map`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-[280px] w-full md:h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </details>
        </article>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-black/5 md:p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
              <Clock3 className="h-4.5 w-4.5" />
              Darshan Timings
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="font-medium text-slate-800">Morning</p>
                <p>{formatTimeWindow(profile.timings?.darshan?.morning)}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="font-medium text-slate-800">Evening</p>
                <p>{formatTimeWindow(profile.timings?.darshan?.evening)}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-black/5 md:p-6">
            <h3 className="text-lg font-semibold text-slate-900">Contact & Address</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                <span>{formatAddress(profile.address)}</span>
              </p>
              {primaryHelpline ? (
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-purple-600" />
                  <span>{primaryHelpline}</span>
                </p>
              ) : null}
              {profile.email ? (
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-purple-600" />
                  <span>{profile.email}</span>
                </p>
              ) : null}
              {profile.placeId ? (
                <p className="flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-purple-600" />
                  <span>{profile.placeId}</span>
                </p>
              ) : null}
            </div>
          </div>

          {(profile.website?.official || profile.website?.donation) && (
            <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-black/5 md:p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Globe className="h-4 w-4" />
                Website
              </h3>
              <div className="mt-4 space-y-2 text-sm">
                {profile.website?.official ? (
                  <a
                    href={profile.website.official}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-purple-700 hover:underline"
                  >
                    Official Website <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                {profile.website?.donation ? (
                  <a
                    href={profile.website.donation}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-purple-700 hover:underline"
                  >
                    Donation Link <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
          )}

          {profile.helplines && profile.helplines.length > 1 ? (
            <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-black/5 md:p-6">
              <h3 className="text-lg font-semibold text-slate-900">All Helplines</h3>
              <div className="mt-4 space-y-3">
                {profile.helplines.map((line, idx) => (
                  <div
                    key={`${line.type ?? "line"}-${idx}`}
                    className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700"
                  >
                    <p className="font-medium text-slate-800">{line.type ?? "HELPLINE"}</p>
                    <p>{line.phone ?? "N/A"}</p>
                    {line.language?.length ? (
                      <p className="mt-1 text-xs text-slate-500">
                        Languages: {line.language.join(", ")}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="rounded-3xl bg-gradient-to-br from-purple-900 to-purple-700 p-5 text-white shadow-lg md:p-6">
            <h3 className="text-lg font-semibold">Community</h3>
            <div className="mt-4 space-y-3 text-sm text-purple-100">
              <p className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {profile.followersCount ?? 0} devotees following
              </p>
              <p className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                {profile.isFollowing ? "You are following this temple" : "Follow this temple"}
              </p>
            </div>
            {profile.lastUpdatedAt ? (
              <p className="mt-4 text-xs text-purple-200">
                Updated on {new Date(profile.lastUpdatedAt).toLocaleDateString("en-IN")}
              </p>
            ) : null}
          </div>
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
  );
}
