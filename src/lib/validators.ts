import { z } from "zod";
import { contactServiceOptions } from "@/config/site";

const serviceValues = contactServiceOptions.map((o) => o.value) as [
  string,
  ...string[],
];

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name must be under 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name contains invalid characters"),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Last name must be under 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name contains invalid characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  service: z.enum(serviceValues, {
    errorMap: () => ({ message: "Please select a service" }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be under 5000 characters"),
  website: z.string().max(0).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address"),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function sanitizeInput(value: string): string {
  return value
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim();
}

export function sanitizeFormData<T extends Record<string, string>>(data: T): T {
  const sanitized = { ...data };
  for (const key of Object.keys(sanitized)) {
    sanitized[key as keyof T] = sanitizeInput(sanitized[key as keyof T]) as T[keyof T];
  }
  return sanitized;
}
