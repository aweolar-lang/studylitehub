export default function MessagesPage() {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] flex-col bg-background">
      {/* Page header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-medium text-primary">Messages</p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Conversations
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Connect with students, tutors, researchers, and other StudyLite
              users.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            New message
          </button>
        </div>
      </header>

      {/* Messaging workspace */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[620px] w-full overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* Conversation list */}
          <aside className="hidden border-r border-border lg:flex lg:flex-col">
            <div className="border-b border-border p-4">
              <label htmlFor="message-search" className="sr-only">
                Search conversations
              </label>

              <input
                id="message-search"
                type="search"
                placeholder="Search conversations"
                className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <div className="flex-1 overflow-y-auto p-2">
              <div className="flex min-h-80 items-center justify-center px-5 text-center">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <span className="text-lg font-semibold">M</span>
                  </div>

                  <h2 className="mt-4 text-sm font-semibold text-foreground">
                    No conversations yet
                  </h2>

                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    Your conversations will appear here when you start
                    messaging someone.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Active conversation */}
          <section className="flex min-w-0 flex-col">
            {/* Conversation header */}
            <header className="flex min-h-16 items-center justify-between border-b border-border px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">
                  Select a conversation
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Choose a conversation to start chatting.
                </p>
              </div>

              <button
                type="button"
                aria-label="More conversation options"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  ⋯
                </span>
              </button>
            </header>

            {/* Empty conversation state */}
            <div className="flex flex-1 items-center justify-center px-6 py-12">
              <div className="max-w-sm text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-2xl font-semibold">S</span>
                </div>

                <h2 className="mt-5 text-base font-semibold text-foreground">
                  Your messages will appear here
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Start a conversation with another StudyLite user to discuss
                  academic resources, projects, research, tutoring, or other
                  platform activities.
                </p>

                <button
                  type="button"
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start a conversation
                </button>
              </div>
            </div>

            {/* Message composer */}
            <footer className="border-t border-border p-3 sm:p-4">
              <div className="flex items-end gap-2">
                <textarea
                  rows={1}
                  placeholder="Write a message..."
                  disabled
                  className="min-h-10 flex-1 resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  disabled
                  className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </section>
  );
}