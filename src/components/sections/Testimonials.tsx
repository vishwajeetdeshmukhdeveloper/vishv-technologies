import { testimonials } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll className="mx-auto max-w-[600px] text-center">
          <div className="section-eyebrow">Social Proof</div>
          <h2 id="testimonials-heading" className="section-title">
            Trusted by Builders
            <br />
            Worldwide
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <RevealOnScroll key={item.name}>
              <blockquote className="card p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 text-sm tracking-widest text-amber-400" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="mb-6 text-[15px] leading-relaxed text-white/80">
                  &ldquo;{item.text}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div
                    className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface2)] border border-[var(--color-border)] text-base font-semibold text-[var(--color-accent)]"
                    aria-hidden="true"
                  >
                    {item.initials}
                  </div>
                  <div>
                    <cite className="text-sm font-semibold not-italic text-[var(--color-white)]">{item.name}</cite>
                    <div className="mt-0.5 text-xs text-[var(--color-muted)]">{item.role}</div>
                  </div>
                </footer>
              </blockquote>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
