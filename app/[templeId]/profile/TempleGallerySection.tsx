"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { Loader2 } from "lucide-react";
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

  if (items.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">Temple Gallery</h2>
        <span className="w-fit rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
          {totalElements} photos · showing {items.length}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, index) => {
          const imageUrl = firstVariant(item.media?.variants) || item.media?.url || "";
          const isHero = index === 0;

          return (
            <a
              key={item.id}
              href={imageUrl}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 transition hover:shadow-xl ${
                isHero ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full ${isHero ? "aspect-[4/3] min-h-[200px] sm:min-h-[280px]" : "aspect-square min-h-[160px]"}`}
              >
                <Image
                  src={imageUrl}
                  alt={`${title} gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes={
                    isHero
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  }
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-xs text-white/90">
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString("en-IN")
                      : "Temple photo"}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {hasMore ? (
        <div className="mt-8 flex flex-col items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="min-w-[200px] rounded-full border-purple-300 bg-white text-purple-800 hover:bg-purple-50"
            onClick={() => void loadMore()}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Loading…
              </>
            ) : (
              "Load more photos"
            )}
          </Button>
          {error ? <p className="text-center text-sm text-red-600">{error}</p> : null}
        </div>
      ) : !hasMore && items.length > 0 && totalElements <= items.length ? (
        <p className="mt-6 text-center text-sm text-slate-500">All photos loaded.</p>
      ) : null}
    </section>
  );
}
