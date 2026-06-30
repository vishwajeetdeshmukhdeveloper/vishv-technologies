import { services } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute -top-[50px] -right-[100px] h-[500px] w-[500px] rounded-full opacity-15 blur-[80px]"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll>
          <div className="section-label">What We Build</div>
          <h2 id="services-heading" className="section-title">
            Services Designed
            <br />
            to Scale
          </h2>
          <p className="section-desc">
            Full-spectrum technology solutions — from idea to deployment, we handle every layer with
            precision.
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <RevealOnScroll key={service.title}>
              <ServiceCard {...service} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
