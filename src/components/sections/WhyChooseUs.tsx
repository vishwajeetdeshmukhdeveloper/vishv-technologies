import { features } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="why-heading"
    >
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full opacity-12 blur-[80px]"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll className="mx-auto max-w-[600px] text-center">
          <div className="section-label">Our Edge</div>
          <h2 id="why-heading" className="section-title">
            Why Vishv Stands Apart
          </h2>
          <p className="section-desc mx-auto">
            Built on a foundation of excellence, speed, and a genuine passion for technology that
            shows in every line of code.
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <RevealOnScroll key={feature.num}>
              <article className="interactive group relative overflow-hidden rounded-[20px] border border-[var(--color-glass-border)] bg-[var(--color-glass)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(59,130,246,0.3)]">
                <div className="font-display mb-5 text-[13px] font-semibold tracking-widest text-[var(--color-blue)]">
                  {feature.num}
                </div>
                <h3 className="font-display mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {feature.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
