import { approachItems } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function WhyChooseUs() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[0.45fr_0.55fr]">
          {/* ── Left: sticky editorial header ── */}
          <RevealOnScroll>
            <div className="lg:sticky lg:top-32">
              <div className="section-eyebrow">Our Approach</div>
              <h2 id="approach-heading" className="section-title">
                How we work
              </h2>
              <p className="section-desc">
                Six principles that shape every project we take on. Not
                slogans — operating decisions that affect your outcome.
              </p>
            </div>
          </RevealOnScroll>

          {/* ── Right: approach items in an editorial list ── */}
          <div className="flex flex-col gap-6">
            {approachItems.map((item, index) => (
              <RevealOnScroll key={item.title}>
                <article className="card rounded-lg p-7">
                  <div className="mb-3 flex items-baseline gap-4">
                    <span
                      className="font-display text-xs font-semibold tracking-widest text-[var(--color-accent)]"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-base font-semibold text-[var(--color-white)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="pl-10 text-sm leading-relaxed text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
