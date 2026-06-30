import { projects } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type Project = (typeof projects)[number] & { image?: string; link?: string };

const colorStyles = {
  blue: { text: "text-blue-500", bg: "bg-blue-500/20", border: "hover:border-blue-500/50" },
  purple: { text: "text-purple-500", bg: "bg-purple-500/20", border: "hover:border-purple-500/50" },
  cyan: { text: "text-cyan-500", bg: "bg-cyan-500/20", border: "hover:border-cyan-500/50" },
  yellow: { text: "text-yellow-500", bg: "bg-yellow-500/20", border: "hover:border-yellow-500/50" },
  green: { text: "text-green-500", bg: "bg-green-500/20", border: "hover:border-green-500/50" },
  pink: { text: "text-pink-500", bg: "bg-pink-500/20", border: "hover:border-pink-500/50" },
} as const;

export function Portfolio() {
  return (
    <section
      id="work"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll>
          <div className="section-label">Our Work</div>
          <h2 id="work-heading" className="section-title">
            Products We&apos;re
            <br />
            Proud <span className="text-blue-500">Of</span>
          </h2>
          <p className="section-desc max-w-[600px]">
            A selection of projects that showcase our range — from elegant
            consumer products to complex enterprise systems.
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const styles = colorStyles[project.color as keyof typeof colorStyles];

            return (
              <RevealOnScroll key={project.title}>
                <article
                  className={`group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--color-glass-border)] bg-[var(--color-surface)] p-8 transition-all duration-300 hover:-translate-y-1 ${styles.border}`}
                  aria-label={project.title}
                  style={{
                    background: (project as Project).image
                      ? `linear-gradient(to top, rgba(13,13,15,0.95) 0%, rgba(13,13,15,0.4) 100%), url(${(project as Project).image}) center/cover no-repeat`
                      : `${project.bgGradient}, var(--color-surface)`,
                  }}
                >
                  <div className="relative z-10">
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${styles.bg}`}
                      aria-hidden="true"
                    >
                      {project.icon}
                    </div>
                    <h3 className="font-display mb-3 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8">
                    <a
                      href={(project as Project).link ?? "#"}
                      className={`inline-flex items-center gap-2 text-[15px] font-medium transition-colors ${styles.text} hover:brightness-125`}
                      {...(project as Project).link?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}}
                    >
                      View Case Study <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
