import Link from "next/link";
import { footerLinks, siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-glass-border)] px-8 pt-[60px] pb-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="footer-brand">
            <Link
              href="/"
              className="font-display bg-gradient-to-br from-white to-white/70 bg-clip-text text-xl font-bold tracking-tight text-transparent no-underline"
              aria-label="Vishv Technologies home"
            >
              Vishv<span className="gradient-text"> Technologies</span>
            </Link>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-[var(--color-muted)]">
              Building the future through technology — one line of code, one learner, one community
              at a time.
            </p>
            <ul className="mt-5 flex list-none gap-3" aria-label="Social media links">
              {[
                { href: siteConfig.social.github, label: "GitHub" },
                { href: siteConfig.social.linkedin, label: "LinkedIn" },
                { href: siteConfig.social.twitter, label: "Twitter" },
                { href: siteConfig.social.instagram, label: "Instagram" },
                { href: siteConfig.social.discord, label: "Discord" },
              ].map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-glass-border)] bg-[var(--color-glass)] text-sm no-underline transition-all hover:-translate-y-0.5 hover:border-[var(--color-glass-border-hover)] hover:bg-white/8"
                  >
                    <span className="sr-only">Follow us on {social.label}</span>
                    <span aria-hidden="true">{social.label.slice(0, 2)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-[13px] font-semibold tracking-widest text-[var(--color-muted)] uppercase">
              Company
            </h2>
            <ul className="flex list-none flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-[13px] font-semibold tracking-widest text-[var(--color-muted)] uppercase">
              Services
            </h2>
            <ul className="flex list-none flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-[13px] font-semibold tracking-widest text-[var(--color-muted)] uppercase">
              Community
            </h2>
            <ul className="flex list-none flex-col gap-2.5">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/50 no-underline transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 no-underline transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-[var(--color-glass-border)] pt-7 sm:flex-row sm:items-center">
          <p className="text-[13px] text-[var(--color-muted)]">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-[var(--color-muted)] no-underline transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
