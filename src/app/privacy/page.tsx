import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Vishv Technologies — how we collect, use, and protect your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: siteConfig.url },
    { name: "Privacy Policy", url: `${siteConfig.url}/privacy` },
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
            { label: "Privacy Policy", href: "/privacy" },
          ]}
        />
        <RevealOnScroll>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="mb-8 text-sm text-[var(--color-muted)]">Last updated: June 28, 2026</p>
          <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-muted)]">
            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly, such as name, email address, and
                project details when you contact us or subscribe to our newsletter.
              </p>
            </section>
            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                2. How We Use Your Information
              </h2>
              <p>
                We use your information to respond to inquiries, provide services, send newsletters
                (with consent), and improve our website experience.
              </p>
            </section>
            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                3. Data Protection
              </h2>
              <p>
                We implement industry-standard security measures including encryption, secure
                headers, input validation, and rate limiting to protect your personal data.
              </p>
            </section>
            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                4. Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your personal data by contacting{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-blue)]">
                  {siteConfig.email}
                </a>
                .
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
