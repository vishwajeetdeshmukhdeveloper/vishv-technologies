"use client";

import dynamic from "next/dynamic";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SkipLink } from "@/components/layout/SkipLink";
import { OfflineBanner } from "@/components/layout/OfflineBanner";
import { Analytics } from "@/components/analytics/Analytics";

const PageLoader = dynamic(
  () => import("@/components/layout/PageLoader").then((m) => m.PageLoader),
  { ssr: false },
);

export function ClientShell() {
  return (
    <>
      <SkipLink />
      <OfflineBanner />
      <PageLoader />
      <ScrollProgress />
      <ScrollToTop />
      <Analytics />
    </>
  );
}
