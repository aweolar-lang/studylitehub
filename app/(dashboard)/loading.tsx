export default function DashboardLoading() {
  return (
    <main className="min-h-full bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-8">
          {/* Header */}
          <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <div className="h-4 w-20 rounded bg-muted" />
              <div className="h-8 w-64 rounded bg-muted sm:w-80" />
              <div className="h-4 w-80 rounded bg-muted sm:w-96" />
            </div>

            <div className="flex gap-2">
              <div className="h-10 w-36 rounded-lg bg-muted" />
              <div className="h-10 w-28 rounded-lg bg-muted" />
            </div>
          </section>

          {/* Overview cards */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="h-4 w-28 rounded bg-muted" />
                <div className="mt-3 h-8 w-24 rounded bg-muted" />
                <div className="mt-2 h-3 w-32 rounded bg-muted" />
              </div>
            ))}
          </section>

          {/* Main content */}
          <section className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
            <div className="rounded-xl border border-border bg-card">
              <div className="border-b border-border px-5 py-4">
                <div className="h-5 w-32 rounded bg-muted" />
                <div className="mt-2 h-4 w-52 rounded bg-muted" />
              </div>

              <div className="flex min-h-64 items-center justify-center p-5">
                <div className="h-12 w-12 rounded-full bg-muted" />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card">
              <div className="border-b border-border px-5 py-4">
                <div className="h-5 w-36 rounded bg-muted" />
                <div className="mt-2 h-4 w-48 rounded bg-muted" />
              </div>

              <div className="space-y-5 p-5">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="h-4 w-24 rounded bg-muted" />
                    <div className="h-4 w-20 rounded bg-muted" />
                  </div>
                ))}

                <div className="h-24 rounded-lg bg-muted" />
              </div>
            </div>
          </section>

          {/* Quick actions */}
          <section className="rounded-xl border border-border bg-card p-5">
            <div className="h-5 w-28 rounded bg-muted" />
            <div className="mt-2 h-4 w-72 rounded bg-muted" />

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-28 rounded-lg border border-border bg-muted/50"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}