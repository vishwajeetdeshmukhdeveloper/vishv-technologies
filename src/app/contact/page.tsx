import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Vishv Technologies for software development, learning courses, and community partnerships.",
  path: "/contact",
  keywords: [...siteConfig.keywords, "contact Vishv Technologies", "hire developers"],
});

export default function ContactPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: siteConfig.url },
    { name: "Contact", url: `${siteConfig.url}/contact` },
  ]);

  return (
    <div className="px-8 pt-[120px] pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="mx-auto max-w-[1200px]">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <RevealOnScroll>
          <div className="section-label">Get in Touch</div>
          <h1 className="section-title">Contact Vishv Technologies</h1>
          <p className="section-desc mb-4">
            Tell us about your project, partnership idea, or learning goals. We respond within 24
            hours.
          </p>
        </RevealOnScroll>
        <RevealOnScroll>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </div>
  );
}
