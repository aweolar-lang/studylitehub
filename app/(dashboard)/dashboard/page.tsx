// app/dashboard/page.tsx
import Link from "next/link";
import {
  Wallet,
  UploadCloud,
  GraduationCap,
  Clock,
  ShoppingBag,
  PlusCircle,
  BookOpen,
  MessageSquare,
  Users,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  FolderKanban,
  FlaskConical,
} from "lucide-react";

export default function DashboardPage() {
  // =========================================================================
  // DATABASE & AUTH PLACEHOLDERS
  // =========================================================================

  const user = {
    firstName: "[User]",
    role: "STUDENT", // "TUTOR" | "RESEARCHER" | "STUDENT"
    currency: "KSh",
    subscriptionPlan: "TRIAL_7_DAY", // e.g. "TRIAL_7_DAY", "FREE", "PRO"
  };

  const isCreator =
    user.role === "TUTOR" || user.role === "RESEARCHER";

  const daysLeft = 5;
  const isTrialExpired = false;
  const walletBalance = "0.00";
  const purchasedNotesCount = 0;
  const notesCreatedCount = 0;

  // =========================================================================
  // UI ONLY
  // =========================================================================

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-7xl">
        <section className="space-y-8">

          {/* ============================================================ */}
          {/* HEADER                                                       */}
          {/* ============================================================ */}

          <header className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-8">
            {/* Background subtle mesh glow */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl" />
            
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3 py-1">
                  <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
                  <span className="text-xs font-semibold text-indigo-700">
                    StudyLite Workspace
                  </span>
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Welcome back, {user.firstName}!
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                  Here is what is happening with your account today. Manage your learning,
                  academic resources, projects, and account from one place.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/market"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-xs font-semibold text-white shadow-xs transition-all hover:bg-slate-800 active:scale-[0.98]"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Marketplace</span>
                </Link>

                <Link
                  href="/dashboard/upload"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 text-xs font-semibold text-white shadow-xs shadow-indigo-600/20 transition-all hover:bg-indigo-700 active:scale-[0.98]"
                >
                  <PlusCircle className="h-4 w-4" />
                  <span>Upload Material</span>
                </Link>
              </div>
            </div>
          </header>

          {/* ============================================================ */}
          {/* TRIAL                                                        */}
          {/* ============================================================ */}

          {user.subscriptionPlan === "TRIAL_7_DAY" &&
            !isTrialExpired && (
              <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50/90 via-amber-50/60 to-orange-50/80 p-4 shadow-xs sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 ring-1 ring-amber-500/20">
                      <Clock className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-amber-950">
                        Free Trial Active
                      </h4>

                      <p className="mt-0.5 text-xs text-amber-800">
                        You have{" "}
                        <span className="font-extrabold text-amber-950">{daysLeft} days</span>{" "}
                        remaining on your trial access.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-amber-700 active:scale-[0.98]"
                  >
                    <span>Upgrade Plan</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}

          {/* ============================================================ */}
          {/* STAT CARDS                                                   */}
          {/* ============================================================ */}

          <section
            aria-label="Dashboard overview"
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {/* Wallet */}
            <div className="relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-sm">
              <div className="absolute -right-3 -top-3 p-4 opacity-5">
                <Wallet className="h-28 w-28 text-white" />
              </div>

              <div className="relative flex items-start justify-between">
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Available Balance
                  </h3>

                  <p className="mt-4 text-3xl font-black tracking-tight text-white">
                    {user.currency} {walletBalance}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Current wallet balance
                  </p>
                </div>

                <div className="rounded-xl bg-indigo-500/10 p-2.5 text-indigo-400 ring-1 ring-indigo-500/20">
                  <Wallet className="h-5 w-5" />
                </div>
              </div>

              <div className="relative mt-6 flex gap-2">
                <Link
                  href="/dashboard/wallet"
                  className="flex-1 rounded-xl bg-indigo-600 px-3 py-2 text-center text-xs font-semibold text-white transition-all hover:bg-indigo-500 active:scale-[0.98]"
                >
                  Top Up
                </Link>

                {isCreator && (
                  <Link
                    href="/dashboard/wallet/withdraw"
                    className="flex-1 rounded-xl bg-slate-800 px-3 py-2 text-center text-xs font-semibold text-white transition-all hover:bg-slate-700 active:scale-[0.98]"
                  >
                    Withdraw
                  </Link>
                )}
              </div>
            </div>

            {/* Library */}
            <div className="flex min-h-[210px] flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all hover:border-slate-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    My Library
                  </h3>

                  <p className="mt-4 text-3xl font-black tracking-tight text-slate-900">
                    {purchasedNotesCount}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Purchased resources
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 ring-1 ring-emerald-500/20">
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>

              <Link
                href="/dashboard/library"
                className="group inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
              >
                <span>Access Library</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Creator */}
            {isCreator ? (
              <div className="flex min-h-[210px] flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all hover:border-slate-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      My Uploads
                    </h3>

                    <p className="mt-4 text-3xl font-black tracking-tight text-slate-900">
                      {notesCreatedCount}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Published materials
                    </p>
                  </div>

                  <div className="rounded-xl bg-purple-500/10 p-2.5 text-purple-600 ring-1 ring-purple-500/20">
                    <UploadCloud className="h-5 w-5" />
                  </div>
                </div>

                <Link
                  href="/dashboard/upload"
                  className="group inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700"
                >
                  <span>Manage Uploads</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ) : (
              <div className="flex min-h-[210px] flex-col justify-between rounded-2xl border border-indigo-100 bg-gradient-to-b from-indigo-50/70 to-indigo-50/20 p-6 shadow-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600">
                      Creator Access
                    </h3>

                    <p className="mt-3 text-lg font-black tracking-tight text-slate-900">
                      Become a Tutor
                    </p>

                    <p className="mt-1 max-w-[200px] text-xs text-slate-600">
                      Upload and sell your academic materials.
                    </p>
                  </div>

                  <div className="rounded-xl bg-indigo-500/10 p-2.5 text-indigo-600 ring-1 ring-indigo-500/20">
                    <UploadCloud className="h-5 w-5" />
                  </div>
                </div>

                <Link
                  href="/dashboard/settings/upgrade"
                  className="inline-flex w-fit items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-indigo-700 active:scale-[0.98]"
                >
                  <span>Upgrade Account</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}

            {/* Subscription */}
            <div className="flex min-h-[210px] flex-col justify-between rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Subscription
                  </h3>

                  <p className="mt-4 text-2xl font-extrabold capitalize tracking-tight text-white">
                    {user.subscriptionPlan
                      ? user.subscriptionPlan
                          .replace(/_/g, " ")
                          .toLowerCase()
                      : "Free"}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Current active plan
                  </p>
                </div>

                <div className="rounded-xl bg-amber-500/10 p-2.5 text-amber-400 ring-1 ring-amber-500/20">
                  <Clock className="h-5 w-5" />
                </div>
              </div>

              <Link
                href="/pricing"
                className="group inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Manage Plan</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </section>

          {/* ============================================================ */}
          {/* MAIN DASHBOARD AREA                                          */}
          {/* ============================================================ */}

          <section className="grid gap-6 lg:grid-cols-[1.45fr_0.9fr]">
            {/* Recent Activity */}
            <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Recent Activity
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Your latest purchases, updates, and interactions.
                  </p>
                </div>

                <Link
                  href="/dashboard/wallet"
                  className="hidden text-xs font-bold text-indigo-600 hover:text-indigo-700 sm:inline"
                >
                  View all
                </Link>
              </div>

              <div className="flex min-h-[300px] items-center justify-center px-6 py-10">
                <div className="max-w-xs text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-slate-900">
                    No recent activity
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    Start exploring StudyLite to see your purchases, wallet
                    activity, and study updates here.
                  </p>

                  <Link
                    href="/market"
                    className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-slate-800 active:scale-[0.98]"
                  >
                    <span>Explore Marketplace</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Account Overview */}
            <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xs">
              <div className="border-b border-slate-100 px-6 py-5">
                <h2 className="text-base font-bold text-slate-900">
                  Account Overview
                </h2>

                <p className="mt-0.5 text-xs text-slate-500">
                  Status and verification indicators.
                </p>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-50/60 p-3">
                  <span className="text-xs font-medium text-slate-600">
                    Role
                  </span>

                  <span className="rounded-lg bg-slate-200/70 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-700">
                    {user.role}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-50/60 p-3">
                  <span className="text-xs font-medium text-slate-600">
                    Verification
                  </span>

                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600">
                    <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                    Not verified
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-50/60 p-3">
                  <span className="text-xs font-medium text-slate-600">
                    Profile status
                  </span>

                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600">
                    <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                    Incomplete
                  </span>
                </div>

                <div className="pt-2">
                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-white p-2 text-indigo-600 shadow-xs">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-xs font-extrabold text-slate-900">
                          Complete your profile
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                          Add academic details to personalize your learning dashboard.
                        </p>

                        <Link
                          href="/dashboard/settings"
                          className="group mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700"
                        >
                          <span>Complete Profile</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* QUICK ACTIONS                                                */}
          {/* ============================================================ */}

          <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-7">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Quick Actions
              </h2>

              <p className="mt-0.5 text-xs text-slate-500">
                Jump directly into key workspace sections.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/market"
                className="group rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-xs transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-indigo-500/10 p-2.5 text-indigo-600 ring-1 ring-indigo-500/20">
                    <ShoppingBag className="h-4 w-4" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition-colors group-hover:text-indigo-600" />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-900">
                  Marketplace
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Discover notes, projects, and learning resources.
                </p>
              </Link>

              <Link
                href="/dashboard/upload"
                className="group rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-xs transition-all hover:-translate-y-1 hover:border-purple-300 hover:shadow-md active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-purple-500/10 p-2.5 text-purple-600 ring-1 ring-purple-500/20">
                    <UploadCloud className="h-4 w-4" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition-colors group-hover:text-purple-600" />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-900">
                  Upload Material
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Share academic work with the study community.
                </p>
              </Link>

              <Link
                href="/community"
                className="group rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-xs transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 ring-1 ring-emerald-500/20">
                    <Users className="h-4 w-4" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition-colors group-hover:text-emerald-600" />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-900">
                  Community
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Ask questions, share knowledge, and connect.
                </p>
              </Link>

              <Link
                href="/messages"
                className="group rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-xs transition-all hover:-translate-y-1 hover:border-slate-400 hover:shadow-md active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-slate-100 p-2.5 text-slate-700 ring-1 ring-slate-200">
                    <MessageSquare className="h-4 w-4" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition-colors group-hover:text-slate-700" />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-900">
                  Messages
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  View discussions and reach out to peers.
                </p>
              </Link>
            </div>
          </section>

          {/* ============================================================ */}
          {/* WORKSPACE SHORTCUTS                                          */}
          {/* ============================================================ */}

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/mylab"
              className="group flex items-center gap-4 rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-sm transition-all hover:border-slate-700 active:scale-[0.98]"
            >
              <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-400 ring-1 ring-indigo-500/20">
                <FlaskConical className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white">
                  My Lab
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  Access your interactive lab workspace.
                </p>
              </div>

              <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-400" />
            </Link>

            <Link
              href="/myprojects"
              className="group flex items-center gap-4 rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-sm transition-all hover:border-slate-700 active:scale-[0.98]"
            >
              <div className="rounded-xl bg-purple-500/10 p-3 text-purple-400 ring-1 ring-purple-500/20">
                <FolderKanban className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white">
                  My Projects
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  Organize ongoing academic projects.
                </p>
              </div>

              <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-purple-400" />
            </Link>

            <Link
              href="/myresearch"
              className="group flex items-center gap-4 rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-sm transition-all hover:border-slate-700 active:scale-[0.98]"
            >
              <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400 ring-1 ring-emerald-500/20">
                <BookOpen className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white">
                  My Research
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  Manage research papers and citations.
                </p>
              </div>

              <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-400" />
            </Link>
          </section>
        </section>
      </div>
    </div>
  );
}