"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header>
      <nav
        id="navbar"
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 right-0 left-0 z-[1000] px-0 py-4 transition-all duration-300",
          scrolled && "border-b border-[var(--color-glass-border)] bg-[rgba(5,5,5,0.8)] backdrop-blur-[20px]",
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8">
          <Link
            href="/"
            className="font-display interactive bg-gradient-to-br from-white to-white/70 bg-clip-text text-[22px] font-bold tracking-tight text-transparent no-underline"
            aria-label="Vishv Technologies home"
          >
            Vishv<span className="gradient-text"> Technologies</span>
          </Link>

          <ul className="hidden list-none items-center gap-8 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="interactive text-sm font-medium tracking-wide text-[var(--color-muted)] no-underline transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary interactive !px-[22px] !py-2.5 text-sm">
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className="interactive flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[var(--color-glass-border)] bg-[var(--color-glass)] md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-white transition-transform",
                mobileOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn("block h-0.5 w-5 bg-white transition-opacity", mobileOpen && "opacity-0")}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-white transition-transform",
                mobileOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-0 top-[72px] z-[999] bg-[rgba(5,5,5,0.95)] backdrop-blur-xl transition-transform duration-300 md:hidden",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
          aria-hidden={!mobileOpen}
        >
          <ul className="flex list-none flex-col gap-1 p-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="interactive block rounded-xl px-4 py-4 text-lg font-medium text-white no-underline transition-colors hover:bg-[var(--color-glass)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="/contact"
                className="btn-primary interactive block text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
