"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Share2,
  Sparkles,
  Navigation,
  ShieldCheck,
  Check,
  Loader2,
  Eye,
  LayoutGrid,
  Users,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { mapsDirectionsUrl } from "../utils/format";

type Props = {
  templeId: string;
  title: string;
  subtitle: string;
  tagline: string;
  avatarUrl: string;
  bannerUrl: string;
  verified: boolean;
  postsCount: number;
  followersCount: number;
  viewsCount: number;
  mapSearchQuery: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection({
  templeId,
  title,
  subtitle,
  tagline,
  avatarUrl,
  bannerUrl,
  verified,
  postsCount,
  followersCount,
  viewsCount,
  mapSearchQuery,
}: Props) {
  const [isSharing, setIsSharing] = useState(false);
  const [showCopiedToast, setShowCopiedToast] = useState(false);

  const isSmallScreen = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 1023px)").matches;
  }, []);

  useEffect(() => {
    if (!showCopiedToast) return;
    const timer = window.setTimeout(() => setShowCopiedToast(false), 2200);
    return () => window.clearTimeout(timer);
  }, [showCopiedToast]);

  const handleShare = useCallback(async () => {
    if (isSharing) return;
    setIsSharing(true);
    const encodedTempleId = encodeURIComponent(templeId);
    const url = `https://www.shriaikyam.com/${encodedTempleId}/profile`;
    try {
      if (navigator.share && isSmallScreen) {
        await navigator.share({ title, text: tagline, url });
      } else {
        await navigator.clipboard.writeText(url);
        setShowCopiedToast(true);
      }
    } catch {
      /* user cancelled or share unavailable */
    } finally {
      setIsSharing(false);
    }
  }, [isSharing, isSmallScreen, tagline, templeId, title]);

  const directions = mapsDirectionsUrl(mapSearchQuery);

  return (
    <>
      <section className="relative">
        <div className="relative h-[clamp(16rem,42vw,30rem)] w-full overflow-hidden">
          <Image
            src={bannerUrl}
            alt=""
            fill
            priority
            className="object-cover scale-105 transition-transform duration-[20s] ease-out hover:scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-[#2a0f4a]/85 to-purple-900/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,_rgba(251,191,36,0.18)_0%,_transparent_45%)]" />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fdfbff] to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 2xl:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="-mt-20 pb-6 md:-mt-24 md:pb-8 lg:-mt-28"
          >
            <motion.div
              variants={item}
              className="relative mx-auto max-w-7xl rounded-[1.75rem] border border-white/55 bg-white/78 p-4 shadow-[0_24px_90px_-28px_rgba(76,29,149,0.3)] backdrop-blur-xl sm:p-6 lg:p-8"
            >
              <div className="grid gap-5 lg:grid-cols-12 lg:items-center lg:gap-7">
                <motion.div
                  variants={item}
                  className="relative mx-auto shrink-0 lg:col-span-3 lg:mx-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 280 }}
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl ring-4 ring-amber-200/80 shadow-[0_0_36px_rgba(251,191,36,0.28)] sm:h-28 sm:w-28 lg:h-36 lg:w-36 xl:h-40 xl:w-40">
                    <Image
                      src={avatarUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="144px"
                    />
                  </div>
                  {verified ? (
                    <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 px-3 py-1 text-xs font-semibold text-purple-950 shadow-[0_0_20px_rgba(251,191,36,0.55)]">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                      Verified
                    </span>
                  ) : null}
                </motion.div>

                <div className="min-w-0 text-center lg:col-span-6 lg:text-left">
                  <motion.p
                    variants={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-purple-100/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-purple-800"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-amber-500" aria-hidden />
                    Sacred space on Aikyam
                  </motion.p>
                  <motion.h1
                    variants={item}
                    className="font-display mt-3 text-balance text-3xl font-semibold leading-[1.06] tracking-tight text-purple-950 md:text-4xl lg:text-5xl 2xl:text-6xl"
                  >
                    {title}
                  </motion.h1>
                  <motion.p
                    variants={item}
                    className="mt-2 text-sm text-purple-900/80 sm:text-base lg:text-lg"
                  >
                    {subtitle}
                  </motion.p>
                  <motion.p
                    variants={item}
                    className="mx-auto mt-3 max-w-2xl text-pretty text-sm italic leading-relaxed text-purple-800/75 lg:mx-0"
                  >
                    “{tagline}”
                  </motion.p>

                  <motion.div
                    variants={item}
                    className="mt-5 hidden flex-wrap items-center justify-center gap-2.5 sm:flex lg:justify-start"
                  >
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="button"
                        variant="outline"
                        disabled={isSharing}
                        onClick={() => void handleShare()}
                        className="rounded-full border-purple-300/80 bg-white/90 text-purple-900 transition-all hover:-translate-y-0.5 hover:bg-white"
                      >
                        {isSharing ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Share2 className="mr-2 h-4 w-4" />
                        )}
                        Share
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button asChild variant="outline" className="rounded-full border-amber-400/60 bg-white/85 hover:-translate-y-0.5">
                        <a href={directions} target="_blank" rel="noreferrer">
                          <Navigation className="mr-2 h-4 w-4 text-amber-600" />
                          Directions
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div variants={item} className="grid w-full grid-cols-3 gap-2 lg:col-span-3 lg:grid-cols-1 lg:gap-3">
                  {[
                    { label: "Posts", value: postsCount, icon: LayoutGrid },
                    { label: "Followers", value: followersCount, icon: Users },
                    { label: "Views", value: viewsCount, icon: Eye },
                  ].map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/60 bg-gradient-to-br from-white/95 to-purple-50/90 px-2 py-3 text-center shadow-inner shadow-purple-900/5 backdrop-blur-sm lg:px-3 lg:py-3.5"
                    >
                      <Icon className="mx-auto mb-1 h-4 w-4 text-amber-600" aria-hidden />
                      <p className="font-display text-lg font-semibold tabular-nums text-purple-950 md:text-xl">
                        {value}
                      </p>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-purple-700/70">
                        {label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-2 z-30 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: showCopiedToast ? 1 : 0, y: showCopiedToast ? 0 : 8 }}
            className="rounded-full bg-purple-950 px-4 py-2 text-xs font-medium text-white shadow-lg shadow-purple-900/40"
          >
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-amber-300" />
              Temple profile link copied
            </span>
          </motion.div>
        </div>
      </section>

      {/* Mobile sticky actions */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-white/10 bg-[#1a0b2e]/92 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden">
        <Button
          type="button"
          size="sm"
          disabled={isSharing}
          className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 text-xs text-white"
          onClick={() => void handleShare()}
        >
          {isSharing ? <Loader2 className="mr-1 h-3.5 w-3.5 animate-spin" /> : <Share2 className="mr-1 h-3.5 w-3.5" />}
          Share
        </Button>
        <Button asChild size="sm" variant="outline" className="flex-1 rounded-full border-amber-400/50 bg-white/10 text-xs text-white">
          <a href={directions} target="_blank" rel="noreferrer">
            <Navigation className="mr-1 h-3.5 w-3.5" />
            Directions
          </a>
        </Button>
      </div>
    </>
  );
}
