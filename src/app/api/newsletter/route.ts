import { NextResponse } from "next/server";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { newsletterSchema, sanitizeFormData } from "@/lib/validators";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limit = rateLimit(`newsletter:${ip}`);

    if (!limit.success) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = (await request.json()) as Record<string, string>;

    if (body.website) {
      return NextResponse.json({ success: true, message: "Subscribed successfully." });
    }

    const sanitized = sanitizeFormData({
      email: body.email ?? "",
      website: body.website ?? "",
    });
    const result = newsletterSchema.safeParse(sanitized);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.error.errors[0]?.message ?? "Invalid email address.",
        },
        { status: 400 },
      );
    }

    // Save subscription to Supabase
    if (supabase) {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: result.data.email }]);

      if (error) {
        // Handle duplicate email gracefully
        if (error.code === '23505') {
          return NextResponse.json({
            success: true,
            message: "You're already subscribed! Thanks for being part of the community.",
          });
        }
        console.error("[Newsletter] Supabase insert error:", error);
      }
    } else {
      console.info("[Newsletter Subscription - DB Not Configured]", result.data.email);
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully. Welcome to the Vishv community!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}
