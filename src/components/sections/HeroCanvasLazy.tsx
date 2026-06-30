"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/sections/HeroCanvas").then((m) => m.HeroCanvas), {
  ssr: false,
  loading: () => null,
});

export function HeroCanvasLazy() {
  return <HeroCanvas />;
}
