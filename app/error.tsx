"use client"; // Error components must be client components

import { useEffect } from "react";
import { AlertOctagon, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry
    console.error("Global Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        <AlertOctagon className="w-8 h-8" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-3">System Error</h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        We encountered an unexpected disruption in the ecosystem. Our engineering team has been notified.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-background border border-border text-foreground font-medium hover:bg-muted transition-colors shadow-sm"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Attempt Recovery
      </button>
    </div>
  );
}