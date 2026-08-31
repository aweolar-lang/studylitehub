"use client";

import { useEffect } from "react";

type DashboardErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function DashboardError({
  error,
  reset,
}: DashboardErrorProps) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-10">
      <section className="w-full max-w-md text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <span className="text-xl font-semibold">!</span>
        </div>

        <p className="mt-6 text-sm font-medium text-primary">
          Something went wrong
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          We couldn&apos;t load your dashboard
        </h1>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          An unexpected error occurred while loading this part of StudyLite.
          Please try again.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Go home
          </a>
        </div>
      </section>
    </main>
  );
}