"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-8 py-20 text-center">
      <p className="section-label">500</p>
      <h1 className="section-title">Something Went Wrong</h1>
      <p className="section-desc mx-auto mb-8">
        An unexpected error occurred. Please try again or contact our support team.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button type="button" className="btn-primary" onClick={reset}>
          Try Again
        </button>
        <Button href="/contact" variant="secondary">
          Contact Support
        </Button>
      </div>
    </div>
  );
}
