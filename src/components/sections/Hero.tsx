import { Button } from "@/components/ui/Button";
import { HeroCanvasLazy } from "@/components/sections/HeroCanvasLazy";
import { HeroStats } from "@/components/sections/HeroStats";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 pt-[120px] pb-20"
      aria-labelledby="hero-heading"
    >
      <HeroCanvasLazy />
      <div
        className="pointer-events-none absolute -top-[200px] -left-[100px] h-[600px] w-[600px] rounded-full opacity-40 blur-[80px]"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-[100px] -bottom-[100px] h-[500px] w-[500px] rounded-full opacity-35 blur-[80px]"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)",
        }}
      />

      <div className="relative z-[2] mx-auto max-w-[900px] text-center">
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass)] px-[18px] py-2 text-[13px] text-[var(--color-muted)] backdrop-blur-[10px]">
          <span
            className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--color-cyan)]"
            aria-hidden="true"
          />
          Now building the future of tech education
        </div>

        <h1
          id="hero-heading"
          className="font-display animate-fade-up mb-6 text-[clamp(42px,7vw,84px)] leading-[1.05] font-bold tracking-[-2px]"
          style={{ animationDelay: "0.1s" }}
        >
          Building the Future
          <br />
          <span className="gradient-text">Through Technology</span>
        </h1>

        <p
          className="animate-fade-up mx-auto mb-11 max-w-[580px] text-[clamp(16px,2vw,20px)] leading-relaxed text-[var(--color-muted)]"
          style={{ animationDelay: "0.2s" }}
        >
          We craft world-class software, educate the next generation of developers, and build
          communities where innovation thrives.
        </p>

        <div
          className="animate-fade-up flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <Button href="/#services">Explore Services</Button>
          <Button href="/#community" variant="secondary">
            Join Community →
          </Button>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}
