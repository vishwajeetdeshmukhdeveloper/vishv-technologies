import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy for Vishv Technologies — how we use cookies and tracking technologies.",
  path: "/cookies",
});

export default function CookiesPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: siteConfig.url },
    { name: "Cookie Policy", url: `${siteConfig.url}/cookies` },
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
            { label: "Cookie Policy", href: "/cookies" },
          ]}
        />
        <RevealOnScroll>
          <h1 className="section-title">Cookie Policy</h1>
          <p className="mb-8 text-sm text-[var(--color-muted)]">Last updated: June 28, 2026</p>
          <div className="space-y-6 text-[var(--color-muted)]">
            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                What Are Cookies
              </h2>
              <p>
                Cookies are small text files stored on your device that help us improve your
                browsing experience and analyze site traffic.
              </p>
            </section>
            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                Cookies We Use
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Essential cookies for site functionality</li>
                <li>Analytics cookies (Google Analytics 4, Microsoft Clarity)</li>
                <li>Marketing cookies (Meta Pixel, if enabled)</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                Managing Cookies
              </h2>
              <p>
                You can control cookies through your browser settings. Disabling cookies may affect
                certain website features.
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
