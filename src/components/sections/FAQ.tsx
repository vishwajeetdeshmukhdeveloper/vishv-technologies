"use client";

import { useState } from "react";
import { faqItems } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[800px]">
        <RevealOnScroll className="text-center">
          <div className="section-label">FAQ</div>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked Questions
          </h2>
        </RevealOnScroll>

        <div className="mt-12 flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <RevealOnScroll key={item.question}>
                <div className="overflow-hidden rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass)]">
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      className="interactive flex w-full items-center justify-between px-6 py-5 text-left text-base font-semibold transition-colors hover:text-[var(--color-blue)]"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      {item.question}
                      <span aria-hidden="true" className="ml-4 text-xl text-[var(--color-muted)]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "overflow-hidden px-6 text-sm leading-relaxed text-[var(--color-muted)] transition-all",
                      isOpen ? "max-h-48 pb-5" : "max-h-0",
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
