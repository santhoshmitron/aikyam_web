"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Images, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
};

export function TempleGallerySection({
  templeId,
  title,
  initialItems,
  initialPage,
  pageSize,
  totalElements,
  initialHasNext,
}: Props) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [nextPage, setNextPage] = useState(initialPage + (initialHasNext ? 1 : 0));
  const [hasMore, setHasMore] = useState(initialHasNext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <section className="relative mx-auto w-full max-w-screen-2xl px-4 pb-[calc(4.5rem+env(safe-area-inset-bottom))] pt-4 sm:px-6 sm:pb-16 lg:px-8 xl:pt-6 2xl:px-12">
      <div className="mb-2 h-px w-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-700 to-purple-950 text-amber-300 shadow-lg shadow-purple-900/30">
            <Images className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-purple-950 md:text-3xl">
              Sacred glimpses
            </h2>
            <p className="mt-1 text-sm text-purple-800/70">
              Moments of light, architecture, and devotion from {title.split(" ")[0]}…
            </p>
          </div>
        </div>
        <span className="w-fit rounded-full border border-purple-200/80 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-800 shadow-sm backdrop-blur-sm">
          {totalElements} photos · {items.length} shown
        </span>
      </motion.div>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-purple-300/50 bg-white/70 p-8 text-center text-sm text-purple-800/80 backdrop-blur-sm">
          Temple gallery will appear here once sacred photos are published.
        </div>
      ) : (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, index) => {
          const imageUrl = firstVariant(item.media?.variants) || item.media?.url || "";
          const isHero = index === 0;

          return (
            <motion.a
              key={item.id}
              href={imageUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-24px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-[0_12px_40px_-18px_rgba(76,29,149,0.25)] ring-1 ring-purple-200/40 ${
                isHero ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full ${isHero ? "aspect-[4/3] min-h-[200px] sm:min-h-[280px]" : "aspect-square min-h-[160px]"}`}
              >
                <Image
                  src={imageUrl}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes={
                    isHero
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-transparent to-amber-400/10 opacity-80 transition group-hover:opacity-95" />
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
              className="min-w-[220px] rounded-full bg-gradient-to-r from-purple-700 via-purple-800 to-purple-950 px-8 text-white shadow-[0_12px_40px_-12px_rgba(76,29,149,0.45)] hover:from-purple-800 hover:to-purple-950"
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
