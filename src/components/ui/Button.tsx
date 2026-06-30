import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  type = "button",
  disabled,
  loading,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(variant === "primary" ? "btn-primary" : "btn-secondary", className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {loading ? "Sending..." : children}
    </button>
  );
}
