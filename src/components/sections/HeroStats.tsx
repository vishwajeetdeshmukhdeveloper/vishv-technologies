"use client";

import { useEffect, useRef } from "react";
import { heroStats } from "@/config/site";

export function HeroStats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          heroStats.forEach(({ value, suffix }) => {
            const el = section.querySelector(`[data-stat="${value}"]`);
            if (!el) return;
            let start = 0;
            const duration = 2000;
            const step = (timestamp: number) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);
              el.textContent = `${Math.floor(ease * value).toLocaleString()}${suffix}`;
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="animate-fade-up mt-[72px] flex flex-wrap justify-center gap-[60px] max-md:gap-8"
      style={{ animationDelay: "0.45s" }}
      aria-label="Company statistics"
    >
      {heroStats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div
            className="font-display bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl font-bold text-transparent"
            data-stat={stat.value}
            aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
          >
            0{stat.suffix}
          </div>
          <div className="mt-1 text-[13px] tracking-widest text-[var(--color-muted)] uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
