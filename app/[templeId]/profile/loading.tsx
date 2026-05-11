import { Shimmer } from "./components/Skeleton";

export default function TempleProfileLoading() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#fdfbff] via-white to-amber-50/40 pb-24">
      <div className="relative h-[min(52vh,420px)] w-full overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-amber-900/30 lg:h-[min(44vh,360px)]">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-t from-[#1a0b2e]/90 to-transparent" />
      </div>

      <div className="relative mx-auto -mt-24 w-full max-w-screen-2xl px-4 sm:px-6 lg:-mt-20 lg:px-8 2xl:px-12">
        <div className="rounded-[2rem] border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-xl md:p-8 lg:p-7 xl:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <Shimmer className="mx-auto h-28 w-28 shrink-0 rounded-2xl lg:mx-0 md:h-36 md:w-36" />
            <div className="min-w-0 flex-1 space-y-3">
              <Shimmer className="mx-auto h-8 w-44 rounded-full lg:mx-0" />
              <Shimmer className="mx-auto h-12 w-full max-w-xl rounded-xl lg:mx-0" />
              <Shimmer className="mx-auto h-16 w-full max-w-2xl rounded-xl lg:mx-0" />
              <div className="hidden gap-3 pt-2 sm:flex lg:justify-start">
                <Shimmer className="h-10 w-28 rounded-full" />
                <Shimmer className="h-10 w-24 rounded-full" />
              </div>
            </div>
            <div className="grid w-full grid-cols-3 gap-2 lg:w-52">
              <Shimmer className="h-24 rounded-2xl" />
              <Shimmer className="h-24 rounded-2xl" />
              <Shimmer className="h-24 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-screen-2xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-7 lg:px-8 xl:gap-8 2xl:px-12">
        <div className="flex flex-col gap-8 lg:col-span-8 lg:gap-7 xl:gap-8">
          <Shimmer className="min-h-[280px] rounded-[1.75rem]" />
          <Shimmer className="min-h-[160px] rounded-[1.75rem]" />
          <Shimmer className="min-h-[200px] rounded-[1.75rem]" />
        </div>
        <div className="flex flex-col gap-8 lg:col-span-4 lg:gap-7 xl:gap-8">
          <Shimmer className="min-h-[260px] rounded-[1.75rem]" />
          <Shimmer className="min-h-[200px] rounded-[1.75rem]" />
          <Shimmer className="min-h-[220px] rounded-[1.75rem]" />
        </div>
      </div>
    </div>
  );
}
