import { cn } from "@/lib/utils";

export function Shimmer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-gradient-to-r from-purple-100/80 via-amber-50/80 to-purple-100/80 bg-[length:200%_100%]",
        className
      )}
    />
  );
}
