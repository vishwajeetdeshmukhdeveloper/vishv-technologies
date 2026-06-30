import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export function Skeleton({ className, "aria-hidden": ariaHidden = true }: SkeletonProps) {
  return <div className={cn("skeleton", className)} aria-hidden={ariaHidden} />;
}

export function CardSkeleton() {
  return (
    <div className="glass-card rounded-[20px] p-8" aria-busy="true" aria-label="Loading content">
      <Skeleton className="mb-5 h-12 w-12" />
      <Skeleton className="mb-3 h-5 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-4/5" />
    </div>
  );
}
