"use client";

import { useState } from "react";
import { communityItems, learningItems } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { cn } from "@/lib/utils";

type TabId = "learning" | "community";

export function Community() {
  const [activeTab, setActiveTab] = useState<TabId>("learning");

  const tabs: { id: TabId; label: string }[] = [
    { id: "learning", label: "Learning Platform" },
    { id: "community", label: "Developer Community" },
  ];

  const items = activeTab === "learning" ? learningItems : communityItems;

  return (
    <section
      id="community"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="community-heading"
    >
      <div
        className="pointer-events-none absolute bottom-[-150px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-15 blur-[80px]"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll>
          <div className="section-label">Learn. Build. Connect.</div>
          <h2 id="community-heading" className="section-title">
            More Than a
            <br />
            Tech Company
          </h2>
          <p className="section-desc">
            We&apos;ve built an ecosystem — a learning platform and developer community that
            accelerates careers and fosters collaboration.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-16">
          <div
            className="mb-10 flex w-fit gap-1 rounded-[14px] border border-[var(--color-glass-border)] bg-[var(--color-glass)] p-1"
            role="tablist"
            aria-label="Learning and community options"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                className={cn(
                  "interactive cursor-pointer rounded-[10px] border-none px-6 py-2.5 text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-purple)] text-white"
                    : "bg-transparent text-[var(--color-muted)]",
                )}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {items.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
