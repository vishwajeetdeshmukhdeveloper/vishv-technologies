import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms and Conditions for using Vishv Technologies services and website.",
  path: "/terms",
});

export default function TermsPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: siteConfig.url },
    { name: "Terms of Service", url: `${siteConfig.url}/terms` },
  ]);

  return (
    <article className="px-8 pt-[120px] pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="mx-auto max-w-[800px]">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Terms of Service", href: "/terms" },
          ]}
        />
        <RevealOnScroll>
          <h1 className="section-title">Terms of Service</h1>
          <p className="mb-8 text-sm text-[var(--color-muted)]">Last updated: June 28, 2026</p>
          <div className="space-y-6 text-[var(--color-muted)]">
            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using {siteConfig.name} services, you agree to be bound by these
                Terms of Service.
              </p>
            </section>
            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">2. Services</h2>
              <p>
                We provide software development, professional learning courses, and developer
                community services as described on our website.
              </p>
            </section>
            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                3. Intellectual Property
              </h2>
              <p>
                All content, trademarks, and materials on this website are owned by {siteConfig.name}{" "}
                unless otherwise stated.
              </p>
            </section>
            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                4. Limitation of Liability
              </h2>
              <p>
                {siteConfig.name} shall not be liable for any indirect, incidental, or consequential
                damages arising from use of our services.
              </p>
            </section>
          </div>
          <Link href="/" className="btn-secondary mt-10 inline-flex">
            ← Back to Home
          </Link>
        </RevealOnScroll>
      </div>
    </article>
  );
}
