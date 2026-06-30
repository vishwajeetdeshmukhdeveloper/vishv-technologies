import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: string;
  variant: "blue" | "purple" | "cyan";
  title: string;
  description: string;
};

const iconVariants = {
  blue: "service-icon-blue",
  purple: "service-icon-purple",
  cyan: "service-icon-cyan",
};

export function ServiceCard({ icon, variant, title, description }: ServiceCardProps) {
  return (
    <article className="interactive group relative overflow-hidden rounded-[20px] border border-[var(--color-glass-border)] bg-[var(--color-glass)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-glass-border-hover)] hover:bg-white/6">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.08), transparent 60%)",
        }}
      />
      <div
        className={cn(
          "mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-[22px]",
          iconVariants[variant],
        )}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="font-display mb-2.5 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--color-muted)]">{description}</p>
    </article>
  );
}
