"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";

const HeroCards = dynamic(
  () => import("@/components/sections/HeroCards").then((m) => m.HeroCards),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-end overflow-hidden px-8 pb-24 pt-[160px] lg:items-center lg:pb-0 lg:pt-[120px]"
      aria-labelledby="hero-heading"
    >
      {/* ── Atmospheric background gradient ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(0, 180, 216, 0.06), transparent 70%)",
        }}
      />

      {/* ── Three.js floating cards — hero only ── */}
      <HeroCards />

      {/* ── Bottom border ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full z-[3]"
        aria-hidden="true"
        style={{ background: "var(--color-border)" }}
      />

      {/* ── Content — left-aligned, editorial ── */}
      <div className="relative z-[2] mx-auto w-full max-w-[1200px]">
        <div className="max-w-[680px]">
          <div
            className="animate-fade-up mb-6 flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--color-accent)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span
              className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--color-accent)]"
              aria-hidden="true"
            />
            Software · Education · Community
          </div>

          <h1
            id="hero-heading"
            className="font-display animate-fade-up mb-7 text-[clamp(38px,6.5vw,76px)] leading-[1.04] font-bold tracking-[-0.04em] text-[var(--color-white)]"
            style={{ animationDelay: "0.1s" }}
          >
            Technology that
            <br />
            serves your vision
          </h1>

          <p
            className="animate-fade-up mb-10 max-w-[520px] text-[clamp(15px,1.8vw,18px)] leading-[1.7] text-[var(--color-muted)]"
            style={{ animationDelay: "0.2s" }}
          >
            We build production software, run career-focused developer education,
            and maintain the open-source community that ties it together. Based in
            Satara, working globally.
          </p>

          <div
            className="animate-fade-up flex flex-wrap gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <Button href="/#services">Explore our work</Button>
            <Button href="/contact" variant="secondary">
              Start a conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
