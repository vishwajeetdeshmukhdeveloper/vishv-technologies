import { techStack } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function TechStack() {
  return (
    <section
      className="relative overflow-hidden px-8 py-[80px] max-md:py-14"
      aria-labelledby="tech-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll>
          <div className="border-t border-b border-[var(--color-border)] py-10">
            <p
              id="tech-heading"
              className="mb-6 text-center text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--color-subtle)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Technologies we work with
            </p>
            <div
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
              role="list"
              aria-label="Technology stack"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  role="listitem"
                  className="text-sm font-medium text-[var(--color-subtle)] transition-colors hover:text-[var(--color-white)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
