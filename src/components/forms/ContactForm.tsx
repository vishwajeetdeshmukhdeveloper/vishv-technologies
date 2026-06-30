"use client";

import { useState } from "react";
import { contactServiceOptions, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import type { ContactFormData } from "@/lib/validators";

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

type ContactFormProps = {
  showContactInfo?: boolean;
};

export function ContactForm({ showContactInfo = true }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setLoading(true);
    setSuccess(false);
    setErrors({});
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
        errors?: FormErrors;
      };

      if (!response.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(data.message ?? "Failed to send message. Please try again.");
        return;
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={showContactInfo ? "mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2" : ""}>
      {showContactInfo && (
        <div>
          <h3 className="font-display mb-4 text-[28px] font-semibold">
            Ready to start your
            <br />
            next project?
          </h3>
          <p className="mb-8 leading-relaxed text-[var(--color-muted)]">
            Whether you have a fully-formed brief or just an idea on a napkin — we want to hear it.
            Every great product starts with a conversation.
          </p>
          <ul className="list-none space-y-5" aria-label="Contact information">
            {[
              { icon: "✉️", label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: "📞", label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
              {
                icon: "💼",
                label: "LinkedIn",
                value: "linkedin.com/company/vishvtechnologies",
                href: siteConfig.social.linkedin,
              },
              { icon: "🐙", label: "GitHub", value: "github.com/vishvtechnologies", href: siteConfig.social.github },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="interactive flex items-center gap-3.5 text-[15px] text-[var(--color-muted)] no-underline transition-colors hover:text-white"
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-[var(--color-glass-border)] bg-[var(--color-glass)] text-lg"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span>{item.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        noValidate
        aria-label="Contact form"
      >
        {success && (
          <div className="form-success" role="status" aria-live="polite">
            Thank you! Your message has been sent successfully. We&apos;ll respond within 24 hours.
          </div>
        )}
        {serverError && (
          <div className="form-error rounded-xl border border-red-500/30 bg-red-500/10 p-3" role="alert">
            {serverError}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="text-[13px] font-medium tracking-wide text-[var(--color-muted)]">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="form-input"
              placeholder=""
              required
              autoComplete="given-name"
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
            />
            {errors.firstName && (
              <span id="firstName-error" className="form-error">
                {errors.firstName}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-[13px] font-medium tracking-wide text-[var(--color-muted)]">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form-input"
              placeholder=""
              required
              autoComplete="family-name"
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
            />
            {errors.lastName && (
              <span id="lastName-error" className="form-error">
                {errors.lastName}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[13px] font-medium tracking-wide text-[var(--color-muted)]">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder=""
            required
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className="form-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-[13px] font-medium tracking-wide text-[var(--color-muted)]">
            What are you looking for?
          </label>
          <select
            id="service"
            name="service"
            className="form-input cursor-pointer appearance-none"
            required
            defaultValue=""
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>
              Select a service...
            </option>
            {contactServiceOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#111]">
                {opt.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <span id="service-error" className="form-error">
              {errors.service}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[13px] font-medium tracking-wide text-[var(--color-muted)]">
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            className="form-input resize-none"
            rows={5}
            placeholder="Describe your idea, timeline, and any technical requirements..."
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="form-error">
              {errors.message}
            </span>
          )}
        </div>

        {/* Honeypot spam protection */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
          aria-hidden="true"
        />

        <Button type="submit" loading={loading}>
          Send Message →
        </Button>
      </form>
    </div>
  );
}
