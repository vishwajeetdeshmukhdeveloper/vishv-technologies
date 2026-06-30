import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute -bottom-[150px] -left-[100px] h-[500px] w-[500px] rounded-full opacity-15 blur-[80px]"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll>
          <div className="section-label">Get in Touch</div>
          <h2 id="contact-heading" className="section-title">
            Let&apos;s Build Something
            <br />
            Extraordinary
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}
