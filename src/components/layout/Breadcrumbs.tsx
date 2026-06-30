"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = pathname === item.href;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-[var(--color-subtle)]">
                  /
                </span>
              )}
              {isLast || isCurrent ? (
                <span aria-current="page" className="text-white">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn("transition-colors hover:text-white focus-visible:outline-none")}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
