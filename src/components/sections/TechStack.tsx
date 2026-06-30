import { techStack } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function TechStack() {
  return (
    <section
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="tech-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll className="text-center">
          <div className="section-label">Our Stack</div>
          <h2 id="tech-heading" className="section-title">
            Technologies We Master
          </h2>
          <p className="section-desc mx-auto">The best tools, wielded with precision.</p>
          <ul
            className="mt-12 flex flex-wrap justify-center gap-3"
            role="list"
            aria-label="Technology stack"
          >
            {techStack.map((tech) => (
              <li key={tech}>
                <span className="interactive inline-block cursor-default rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass)] px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-[var(--color-blue)] hover:bg-[rgba(59,130,246,0.1)] hover:text-[var(--color-blue)]">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
