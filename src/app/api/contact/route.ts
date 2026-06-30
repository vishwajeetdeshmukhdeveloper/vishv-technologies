import { NextResponse } from "next/server";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import {
  contactFormSchema,
  sanitizeFormData,
  type ContactFormData,
} from "@/lib/validators";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limit = rateLimit(`contact:${ip}`);

    if (!limit.success) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((limit.resetAt - Date.now()) / 1000)),
          },
        },
      );
    }

    const body = (await request.json()) as Record<string, string>;

    if (body.website) {
      return NextResponse.json({ success: true, message: "Message sent successfully." });
    }

    const sanitized = sanitizeFormData({
      firstName: body.firstName ?? "",
      lastName: body.lastName ?? "",
      email: body.email ?? "",
      service: body.service ?? "",
      message: body.message ?? "",
      website: body.website ?? "",
    });
    const result = contactFormSchema.safeParse(sanitized);

    if (!result.success) {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (field && field !== "website") {
          errors[field] = err.message;
        }
      });
      return NextResponse.json(
        { success: false, message: "Validation failed.", errors },
        { status: 400 },
      );
    }

    const data = result.data;

    // Save submission to Supabase
    if (supabase) {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          service: data.service,
          message: data.message,
        }]);

      if (error) {
        console.error("[Contact Form] Supabase insert error:", error);
      }
    } else {
      console.info("[Contact Form Submission - DB Not Configured]", data);
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully. We'll respond within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}
