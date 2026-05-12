"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Images, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GalleryEmptyState } from "./components/GalleryEmptyState";

export type GalleryItem = {
  id: string;
  mediaType?: string;
  media?: {
    url?: string;
    variants?: Record<string, string>;
  };
  createdAt?: string;
};

function firstVariant(variants?: Record<string, string>) {
  if (!variants) return "";
  return Object.values(variants).find(Boolean) ?? "";
}

type Props = {
  templeId: string;
  title: string;
  initialItems: GalleryItem[];
  initialPage: number;
  pageSize: number;
  totalElements: number;
  initialHasNext: boolean;
  /** Nested inside profile content deck — parent provides width and outer chrome. */
  embedded?: boolean;
};

export function TempleGallerySection({
  templeId,
  title,
  initialItems,
  initialPage,
  pageSize,
  totalElements,
  initialHasNext,
  embedded = false,
}: Props) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [nextPage, setNextPage] = useState(initialPage + (initialHasNext ? 1 : 0));
  const [hasMore, setHasMore] = useState(initialHasNext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const templeShortName = useMemo(() => {
    const first = title.trim().split(/\s+/)[0];
    return first || "this temple";
  }, [title]);

  const loadMore = useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/temples/${encodeURIComponent(templeId)}/gallery?page=${nextPage}&size=${pageSize}`
      );
      const json = (await res.json()) as {
        success?: boolean;
        data?: {
          content?: GalleryItem[];
          hasNext?: boolean;
          page?: number;
        };
      };
      if (!res.ok || !json.success) {
        setError("Could not load more photos.");
        setLoading(false);
        return;
      }
      const raw = json.data?.content ?? [];
      const filtered = raw.filter((item) => {
        if (item.mediaType && item.mediaType.toLowerCase() !== "image") return false;
        return Boolean(firstVariant(item.media?.variants) || item.media?.url);
      });
      setItems((prev) => {
        const seen = new Set(prev.map((i) => i.id));
        const merged = [...prev];
        for (const it of filtered) {
          if (!seen.has(it.id)) {
            seen.add(it.id);
            merged.push(it);
          }
        }
        return merged;
      });
      setHasMore(Boolean(json.data?.hasNext));
      setNextPage((json.data?.page ?? nextPage) + 1);
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }, [hasMore, loading, nextPage, pageSize, templeId]);

  const sectionClass = embedded
    ? "relative border-t border-purple-200/45 bg-gradient-to-b from-white/70 via-[#faf8ff] to-amber-50/35 px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
    : "relative mx-auto w-full max-w-screen-2xl px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7 xl:pt-8 2xl:px-12";

  const bottomPad = embedded
    ? "pb-[calc(4.5rem+env(safe-area-inset-bottom))] sm:pb-14 lg:pb-16"
    : "pb-[calc(4.5rem+env(safe-area-inset-bottom))] sm:pb-16";

  return (
    <section
      aria-labelledby="sacred-glimpses-heading"
      className={cn(sectionClass, bottomPad)}
    >
      <div
        className={cn(
          "mb-5 h-px w-full bg-gradient-to-r from-transparent via-amber-400/55 to-transparent sm:mb-6",
          embedded && "opacity-90"
        )}
      />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-36px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 flex flex-col gap-4 sm:mb-7 sm:flex-row sm:items-end sm:justify-between lg:mb-8"
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <motion.span
            whileHover={reduceMotion ? undefined : { scale: 1.04, rotate: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-700 to-purple-950 text-amber-300 shadow-lg shadow-purple-900/35 sm:h-14 sm:w-14"
          >
            <Images className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
          </motion.span>
          <div>
            <h2
              id="sacred-glimpses-heading"
              className="font-display text-2xl font-semibold tracking-tight text-purple-950 md:text-3xl"
            >
              Sacred glimpses
            </h2>
            <p className="mt-1 max-w-prose text-sm leading-relaxed text-purple-800/72">
              Visual moments from {templeShortName} — architecture, light, and devotion.
            </p>
          </div>
        </div>
        <span className="w-fit rounded-full border border-purple-200/85 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-800 shadow-sm backdrop-blur-sm">
          {totalElements} photos · {items.length} shown
        </span>
      </motion.div>

      {items.length === 0 ? (
        <GalleryEmptyState templeShortName={templeShortName} />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[1.05rem] xl:grid-cols-4">
          {items.map((item, index) => {
            const imageUrl = firstVariant(item.media?.variants) || item.media?.url || "";
            const isHero = index === 0;

            return (
              <motion.a
                key={item.id}
                href={imageUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.38, delay: Math.min(index * 0.035, 0.35) }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl bg-white shadow-[0_14px_44px_-20px_rgba(76,29,149,0.28)] ring-1 ring-purple-200/45 transition-shadow duration-300 hover:shadow-[0_22px_50px_-26px_rgba(76,29,149,0.48)]",
                  isHero ? "sm:col-span-2 sm:row-span-2 xl:col-span-1 xl:row-span-1" : ""
                )}
              >
                <div
                  className={cn(
                    "relative w-full",
                    isHero ? "aspect-[4/3] min-h-[200px] sm:min-h-[280px]" : "aspect-square min-h-[160px]"
                  )}
                >
                  <Image
                    src={imageUrl}
                    alt=""
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    sizes={
                      isHero
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/72 via-transparent to-amber-400/10 opacity-85 transition duration-300 group-hover:opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-xs font-medium text-white/95 drop-shadow-md">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString("en-IN", {
                            dateStyle: "medium",
                          })
                        : "Blessed moment"}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      )}

      {hasMore ? (
        <div className="mt-10 flex flex-col items-center gap-3">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="button"
              size="lg"
              className="min-w-[220px] rounded-full bg-gradient-to-r from-purple-700 via-purple-800 to-purple-950 px-8 text-white shadow-[0_12px_40px_-12px_rgba(76,29,149,0.45)] transition hover:from-purple-800 hover:to-purple-950"
              onClick={() => void loadMore()}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Gathering blessings…
                </>
              ) : (
                "Load more photos"
              )}
            </Button>
          </motion.div>
          {error ? <p className="text-center text-sm font-medium text-red-600">{error}</p> : null}
        </div>
      ) : !hasMore && items.length > 0 && totalElements <= items.length ? (
        <p className="mt-8 text-center text-sm font-medium text-purple-800/60">
          All sacred photos are here.
        </p>
      ) : null}
    </section>
  );
}
