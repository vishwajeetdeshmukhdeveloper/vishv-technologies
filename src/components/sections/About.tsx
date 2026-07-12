import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll>
          <div className="section-eyebrow">About {siteConfig.shortName}</div>
        </RevealOnScroll>

        <div className="mt-4 grid grid-cols-1 items-start gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ── Left column: editorial text ── */}
          <RevealOnScroll>
            <h2 id="about-heading" className="section-title">
              We build tools that
              <br />
              outlast the hype cycle
            </h2>
            <p className="mb-6 max-w-[540px] text-[15px] leading-[1.75] text-[var(--color-muted)]">
              {siteConfig.name} was founded in 2026 in Satara, Maharashtra with
              a straightforward purpose: build software that works, teach people
              how to build it themselves, and keep the whole thing connected
              through community.
            </p>
            <p className="max-w-[540px] text-[15px] leading-[1.75] text-[var(--color-muted)]">
              We partner with startups and growing businesses to craft digital
              products — from architecture to deployment. Our learning platform
              offers structured, career-focused curricula with real projects and
              mentorship from working professionals. And our open Discord
              community of 500+ developers keeps the feedback loop alive.
            </p>
          </RevealOnScroll>

          {/* ── Right column: three pillars ── */}
          <RevealOnScroll>
            <div className="flex flex-col gap-6">
              {[
                {
                  label: "Production Software",
                  detail:
                    "Full-stack development in Next.js, TypeScript, Python, Flutter. From MVPs to enterprise platforms — we ship code that scales.",
                },
                {
                  label: "Developer Education",
                  detail:
                    "Structured courses, live classes, and project-based learning paths. Careers change when curricula connect to real engineering.",
                },
                {
                  label: "Open Community",
                  detail:
                    "500+ developers on Discord. Hackathons, workshops, mentorship, and open-source contributions. Learning doesn't stop at the classroom.",
                },
              ].map((pillar) => (
                <div
                  key={pillar.label}
                  className="card rounded-lg p-6"
                >
                  <h3 className="font-display mb-2 text-base font-semibold text-[var(--color-white)]">
                    {pillar.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
