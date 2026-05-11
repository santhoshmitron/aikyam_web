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

const petalLayers = [
  { className: "left-[4%] top-[24%] h-40 w-72 opacity-35 blur-[0.2px]", delay: 0 },
  { className: "left-[38%] top-[36%] h-32 w-56 opacity-30 blur-[0.6px]", delay: 1.4 },
] as const;

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
        <div className="relative h-[clamp(16rem,42vw,30rem)] w-full overflow-hidden lg:h-[clamp(13rem,20vw,17.5rem)] xl:h-[clamp(13.75rem,18vw,18.5rem)]">
          <Image
            src={bannerUrl}
            alt=""
            fill
            priority
            className="object-cover scale-105 transition-transform duration-[20s] ease-out hover:scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a0f4a]/62 via-[#4c1d95]/32 to-purple-700/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,_rgba(251,191,36,0.16)_0%,_transparent_46%)]" />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fdfbff] to-transparent lg:h-20"
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
            className="-mt-20 pb-6 md:-mt-24 md:pb-8 lg:-mt-[5.4rem] lg:pb-8 xl:-mt-24 xl:pb-9"
          >
            <motion.div
              variants={item}
              className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/55 bg-white/78 p-4 shadow-[0_24px_90px_-28px_rgba(76,29,149,0.3)] backdrop-blur-xl sm:p-6 lg:rounded-[1.75rem] lg:px-5 lg:py-[1.125rem] xl:px-6 xl:py-5"
            >
              <div
                className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] overflow-hidden lg:block"
                aria-hidden
              >
                <motion.div
                  className="absolute inset-y-0 -right-8 h-full w-[112%] bg-[radial-gradient(circle_at_72%_26%,rgba(251,191,36,0.22),transparent_26%),radial-gradient(circle_at_78%_78%,rgba(244,114,182,0.18),transparent_34%),linear-gradient(115deg,transparent_0%,rgba(255,247,237,0.28)_46%,rgba(251,191,36,0.12)_100%)] opacity-90"
                  animate={{ opacity: [0.48, 0.74, 0.48], scale: [0.98, 1.035, 0.98] }}
                  transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.img
                  src="/devotional/bells/realistic-temple-bells.png"
                  alt=""
                  className="absolute -top-3 right-0 h-[13.5rem] w-[21rem] object-contain object-top drop-shadow-[0_18px_22px_rgba(120,53,15,0.2)] xl:h-[14.5rem] xl:w-[23rem]"
                  animate={{ rotate: [-0.35, 0.45, -0.35], x: [0, 1.5, 0] }}
                  transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut" }}
                  draggable={false}
                />

                <motion.div
                  className="absolute -bottom-5 -right-4 h-36 w-64 opacity-95 xl:h-40 xl:w-72"
                  animate={{ y: [0, -4, 0], opacity: [0.78, 0.96, 0.78] }}
                  transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="/devotional/lotus/realistic-lotus-cluster.png"
                    alt=""
                    className="h-full w-full object-contain drop-shadow-[0_22px_30px_rgba(190,24,93,0.18)]"
                    draggable={false}
                  />
                </motion.div>

                <motion.div
                  className="absolute bottom-2 right-32 h-24 w-44 opacity-45 blur-[0.4px]"
                  animate={{ y: [0, 3, 0], x: [0, -2, 0], opacity: [0.35, 0.55, 0.35] }}
                  transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <img
                    src="/devotional/lotus/realistic-lotus-cluster.png"
                    alt=""
                    className="h-full w-full object-contain"
                    draggable={false}
                  />
                </motion.div>

                {petalLayers.map((petal) => (
                  <motion.img
                    key={petal.className}
                    src="/devotional/petals/realistic-floating-petals.png"
                    alt=""
                    className={`absolute ${petal.className}`}
                    animate={{ y: [0, -8, 0], x: [0, 5, 0], rotate: [-1, 1.4, -1] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: petal.delay }}
                    draggable={false}
                  />
                ))}
              </div>

              <div className="relative z-10 grid gap-5 lg:grid-cols-[minmax(11.25rem,12.5rem)_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-6 lg:gap-y-4 xl:grid-cols-[minmax(12rem,13.25rem)_minmax(0,1fr)] xl:gap-x-7">
                <motion.div
                  variants={item}
                  className="relative mx-auto shrink-0 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:self-start"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 280 }}
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl ring-4 ring-amber-200/80 shadow-[0_0_36px_rgba(251,191,36,0.28)] sm:h-28 sm:w-28 lg:h-[7rem] lg:w-[7rem] xl:h-[7.6rem] xl:w-[7.6rem]">
                    <Image
                      src={avatarUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="144px"
                    />
                  </div>
                  {verified ? (
                    <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 px-3 py-1 text-xs font-semibold text-purple-950 shadow-[0_0_20px_rgba(251,191,36,0.55)] lg:-bottom-2.5 lg:px-2.5 lg:py-[0.28rem]">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                      Verified
                    </span>
                  ) : null}
                </motion.div>

                <div className="min-w-0 text-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pr-48 lg:text-left xl:pr-56 2xl:pr-64">
                  <motion.p
                    variants={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-purple-100/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-purple-800"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-amber-500" aria-hidden />
                    Sacred space on Aikyam
                  </motion.p>
                  <motion.h1
                    variants={item}
                    className="font-display mt-2.5 max-w-[23ch] text-balance text-3xl font-semibold leading-[1.06] tracking-tight text-purple-950 md:text-4xl lg:mt-2 lg:max-w-[28ch] lg:text-[2.12rem] lg:leading-[1.16] lg:[text-wrap:wrap] xl:max-w-[30ch] xl:text-[2.34rem] 2xl:max-w-[32ch] 2xl:text-[2.48rem]"
                  >
                    {title}
                  </motion.h1>
                  <motion.p
                    variants={item}
                    className="mt-1.5 text-sm text-purple-900/80 sm:text-base lg:max-w-[64ch] lg:text-[0.96rem]"
                  >
                    {subtitle}
                  </motion.p>
                  <motion.p
                    variants={item}
                    className="mx-auto mt-2.5 max-w-2xl text-pretty text-sm italic leading-relaxed text-purple-800/75 lg:mx-0 lg:max-w-[68ch] lg:text-[0.9rem]"
                  >
                    “{tagline}”
                  </motion.p>

                  <motion.div
                    variants={item}
                    className="mt-4 hidden flex-wrap items-center justify-center gap-2.5 sm:flex lg:mt-3.5 lg:justify-start lg:gap-2.5"
                  >
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="button"
                        variant="outline"
                        disabled={isSharing}
                        onClick={() => void handleShare()}
                        className="rounded-full border-purple-300/80 bg-white/90 text-purple-900 transition-all hover:-translate-y-0.5 hover:border-purple-400/80 hover:bg-white hover:shadow-[0_10px_24px_-16px_rgba(76,29,149,0.55)] lg:h-10 lg:px-4"
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
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-amber-400/60 bg-white/85 transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:bg-white hover:shadow-[0_10px_24px_-16px_rgba(180,83,9,0.5)] lg:h-10 lg:px-4"
                      >
                        <a href={directions} target="_blank" rel="noreferrer">
                          <Navigation className="mr-2 h-4 w-4 text-amber-600" />
                          Directions
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  variants={item}
                  className="grid w-full grid-cols-3 gap-2 lg:col-start-1 lg:row-start-2 lg:max-w-none lg:grid-cols-3 lg:gap-1.5 lg:self-start"
                >
                  {[
                    { label: "Posts", value: postsCount, icon: LayoutGrid },
                    { label: "Followers", value: followersCount, icon: Users },
                    { label: "Views", value: viewsCount, icon: Eye },
                  ].map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="group rounded-2xl border border-white/70 bg-gradient-to-br from-white/95 to-purple-50/95 px-2 py-3 text-center shadow-[0_8px_26px_-20px_rgba(76,29,149,0.65)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-purple-300/60 hover:shadow-[0_16px_34px_-22px_rgba(76,29,149,0.6)] lg:flex lg:min-h-0 lg:flex-col lg:justify-center lg:rounded-xl lg:px-1.5 lg:py-2"
                    >
                      <Icon className="mx-auto mb-1 h-4 w-4 text-amber-600 lg:h-3.5 lg:w-3.5" aria-hidden />
                      <p className="font-display text-lg font-semibold tabular-nums text-purple-950 md:text-xl lg:text-[0.98rem]">
                        {value}
                      </p>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-purple-700/70 lg:text-[8px] lg:tracking-[0.08em]">
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
