"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? 0 : 200;

    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-[var(--color-bg)] transition-opacity duration-500"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--color-glass-border)] border-t-[var(--color-blue)]"
          aria-hidden="true"
        />
        <span className="font-display text-sm text-[var(--color-muted)]">{siteConfig.name}</span>
      </div>
    </div>
  );
}
