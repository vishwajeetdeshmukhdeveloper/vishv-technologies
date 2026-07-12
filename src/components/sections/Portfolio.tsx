import { projects } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Portfolio() {
  return (
    <section
      id="work"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll>
          <div className="section-eyebrow">Selected Work</div>
          <h2 id="work-heading" className="section-title max-w-[500px]">
            Products we have
            <br />
            shipped and maintained
          </h2>
          <p className="section-desc max-w-[600px]">
            A selection of projects that showcase our range — from agricultural
            AI to personal finance tools and healthcare platforms.
          </p>
        </RevealOnScroll>

        {/* ── Staggered grid — varies across breakpoints ── */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            /* Alternate large/small cards for visual rhythm */
            const isLarge = index % 3 === 0;

            return (
              <RevealOnScroll
                key={project.title}
                className={isLarge ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  aria-label={`View ${project.title} project`}
                >
                  <article
                    className="card relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-lg"
                  >
                    {/* ── Project image ── */}
                    {project.image && (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{ backgroundImage: `url(${project.image})` }}
                        aria-hidden="true"
                      />
                    )}
                    {/* ── Gradient overlay for text readability ── */}
                    <div
                      className="absolute inset-0"
                      aria-hidden="true"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(6,6,6,0.95) 0%, rgba(6,6,6,0.5) 40%, rgba(6,6,6,0.15) 100%)",
                      }}
                    />

                    {/* ── Content ── */}
                    <div className="relative z-10 p-7">
                      <h3 className="font-display mb-2 text-xl font-semibold text-[var(--color-white)]">
                        {project.title}
                      </h3>
                      <p className="mb-4 max-w-[400px] text-sm leading-relaxed text-[var(--color-muted)]">
                        {project.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors group-hover:brightness-125">
                        View on GitHub
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-0.5"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </a>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
