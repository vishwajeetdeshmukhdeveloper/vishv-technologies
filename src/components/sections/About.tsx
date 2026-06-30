import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute top-1/2 -left-[100px] h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-20 blur-[80px]"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll>
          <div className="section-label">Who We Are</div>
          <h2 id="about-heading" className="section-title">
            Empowering Innovation
            <br />
            at Every Level
          </h2>
          <p className="section-desc">
            Empowering businesses and individuals through innovative software, practical education,
            and a thriving developer community.
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <RevealOnScroll>
            <p className="mb-6 text-[15px] leading-relaxed text-[var(--color-muted)]">
              Vishv Technologies was founded with a singular vision: to be the bridge between great
              ideas and powerful technology. We don&apos;t just build software — we architect
              solutions that scale, educate teams that evolve, and cultivate communities that
              inspire.
            </p>
            <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
              From early-stage startups to established enterprises, we partner with organizations
              to craft meaningful digital experiences. Our learning platform opens doors for
              aspiring developers worldwide, offering career-focused curricula with real-world
              projects and mentorship from industry professionals.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6">
                <div className="font-display gradient-text text-[32px] font-bold">Founded in 2026</div>
                <div className="mt-1 text-[13px] text-[var(--color-muted)]">Building the Future</div>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <div className="font-display bg-gradient-to-br from-[var(--color-purple)] to-[var(--color-blue)] bg-clip-text text-[32px] font-bold text-transparent">
                  3 Core Services
                </div>
                <div className="mt-1 text-[13px] text-[var(--color-muted)]">Software • Education • Community</div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="relative h-[420px]">
              <div className="glass-card absolute flex h-full w-full flex-col justify-between rounded-[20px] p-7">
                <div className="font-display text-base font-semibold">Performance Overview</div>
                <div className="rounded-[14px] border border-[var(--color-glass-border)] bg-gradient-to-br from-[rgba(59,130,246,0.08)] to-[rgba(124,58,237,0.08)] p-5">
                  <div className="mb-4 flex justify-between">
                    {[
                      { val: "99.9%", lbl: "Reliability" },
                      { val: "4.0★", lbl: "Avg Rating" },
                      { val: "72h", lbl: "Avg Delivery" },
                    ].map((m) => (
                      <div key={m.lbl} className="text-center">
                        <div className="font-display text-[28px] font-bold">{m.val}</div>
                        <div className="mt-0.5 text-xs text-[var(--color-muted)]">{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="section-label mb-4">Tech Stack Expertise</div>
                  {[
                    { label: "Frontend", pct: 92, color: "blue" },
                    { label: "Backend", pct: 88, color: "purple" },
                    { label: "AI/ML", pct: 78, color: "cyan" },
                    { label: "DevOps", pct: 85, color: "blue" },
                  ].map((bar) => (
                    <div key={bar.label} className="mb-2.5 flex items-center gap-3">
                      <div className="w-20 shrink-0 text-xs text-[var(--color-muted)]">
                        {bar.label}
                      </div>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/6">
                        <div
                          className={`bar-fill h-full rounded-full bg-gradient-to-r ${
                            bar.color === "blue"
                              ? "from-[var(--color-blue)] to-[var(--color-cyan)]"
                              : bar.color === "purple"
                                ? "from-[var(--color-purple)] to-[var(--color-blue)]"
                                : "from-[var(--color-cyan)] to-sky-400"
                          }`}
                          style={{ width: `${bar.pct}%` }}
                          role="progressbar"
                          aria-valuenow={bar.pct}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${bar.label} expertise ${bar.pct}%`}
                        />
                      </div>
                      <div className="w-8 text-xs text-[var(--color-muted)]">{bar.pct}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
