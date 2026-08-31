import type { ReactNode } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FlaskConical,
  Folder,
  FileText,
  CheckSquare,
  MessageSquare,
  User,
  CreditCard,
  Settings,
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Percent,
  LogOut,
} from "lucide-react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const navigation = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Lab", href: "/mylab", icon: FlaskConical },
  { label: "My Projects", href: "/myprojects", icon: Folder },
  { label: "My Research", href: "/myresearch", icon: FileText },
  { label: "My Tests", href: "/mytests", icon: CheckSquare },
  { label: "Messages", href: "/messages", icon: MessageSquare },
];

const walletNavigation = [
  { label: "Wallet", href: "/wallet", icon: Wallet },
  { label: "Top up", href: "/topup", icon: ArrowUpRight },
  { label: "Withdraw", href: "/withdraw", icon: ArrowDownLeft },
  { label: "Commissions", href: "/commissions", icon: Percent },
];

const accountNavigation = [
  { label: "Profile", href: "/profile", icon: User },
  { label: "Subscriptions", href: "/subscriptions", icon: CreditCard },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // ==========================================
  // DB & AUTH LOGIC PLACEHOLDER
  // ==========================================

  return (
    <div className="flex h-screen bg-slate-50/70 overflow-hidden font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* DESKTOP SIDEBAR - Premium Dark Theme */}
      <aside className="hidden lg:flex flex-col w-64 bg-slate-950 text-slate-300 border-r border-slate-800/80 shrink-0 shadow-2xl z-30">
        {/* Brand Logo */}
        <div className="flex h-16 items-center px-6 border-b border-slate-800/80 bg-slate-950/50 backdrop-blur-sm">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-xl font-extrabold text-white tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/30 group-hover:bg-indigo-500 transition-colors">
              <span className="text-sm font-black">S</span>
            </div>
            <span>
              Study<span className="text-indigo-400">Hub</span>
            </span>
          </Link>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto py-6 px-3.5 space-y-7 custom-scrollbar">
          <div>
            <p className="px-3 pb-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400/80">
              Workspace
            </p>
            <nav className="space-y-1" aria-label="Workspace navigation">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all duration-150 ease-in-out border border-transparent hover:border-indigo-500/20 active:scale-[0.98]"
                  >
                    <Icon className="h-4 w-4 text-slate-400 group-hover:text-indigo-400 transition-colors shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <p className="px-3 pb-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400/80">
              Wallet
            </p>
            <nav className="space-y-1" aria-label="Wallet navigation">
              {walletNavigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all duration-150 ease-in-out border border-transparent hover:border-emerald-500/20 active:scale-[0.98]"
                  >
                    <Icon className="h-4 w-4 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <p className="px-3 pb-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400/80">
              Account
            </p>
            <nav className="space-y-1" aria-label="Account navigation">
              {accountNavigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800/80 hover:text-white transition-all duration-150 ease-in-out border border-transparent hover:border-slate-700/50 active:scale-[0.98]"
                  >
                    <Icon className="h-4 w-4 text-slate-400 group-hover:text-slate-200 transition-colors shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Footer & Sign Out Action */}
        <div className="p-3.5 border-t border-slate-800/80 bg-slate-950/80">
          {/* PLACEHOLDER: Wrap with Server Action form for logout */}
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all duration-150 border border-transparent hover:border-rose-500/20 active:scale-[0.98] cursor-pointer"
            >
              <LogOut className="h-4 w-4 shrink-0" />
              <span>Sign Out</span>
            </button>
          </form>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Desktop & Mobile Sticky Header - Frosted Glass Effect */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white/70 px-4 backdrop-blur-md sm:px-6 lg:px-8 shadow-xs">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-xl font-extrabold text-slate-900 tracking-tight lg:hidden"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-black">
                S
              </div>
              <span>
                Study<span className="text-indigo-600">Lite</span>
              </span>
            </Link>

            <div className="hidden lg:block">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200/60">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                Student Workspace
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/messages"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3.5 text-xs font-semibold text-slate-700 shadow-xs transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.97]"
            >
              <MessageSquare className="h-3.5 w-3.5 text-slate-400" />
              <span>Messages</span>
            </Link>

            <Link
              href="/profile"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3.5 text-xs font-semibold text-slate-700 shadow-xs transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.97]"
            >
              <User className="h-3.5 w-3.5 text-slate-400" />
              <span>Profile</span>
            </Link>
          </div>
        </header>

        {/* Scrollable Content Container */}
        <main className="flex-1 overflow-y-auto px-4 py-6 pb-24 sm:px-6 lg:px-8 lg:pb-8">
          {children}
        </main>
      </div>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-200/80 pb-safe shadow-[0_-8px_30px_rgba(0,0,0,0.06)] z-50">
        <nav className="flex justify-around items-center px-4 py-2.5">
          <Link
            href="/dashboard"
            className="flex flex-col items-center gap-1 p-1 text-slate-400 hover:text-indigo-600 transition-colors rounded-lg active:scale-95"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span className="text-[10px] font-semibold tracking-wide">Home</span>
          </Link>

          <Link
            href="/mylab"
            className="flex flex-col items-center gap-1 p-1 text-slate-400 hover:text-indigo-600 transition-colors rounded-lg active:scale-95"
          >
            <FlaskConical className="h-5 w-5" />
            <span className="text-[10px] font-semibold tracking-wide">Lab</span>
          </Link>

          <Link
            href="/wallet"
            className="flex flex-col items-center gap-1 p-1 text-slate-400 hover:text-emerald-600 transition-colors rounded-lg active:scale-95"
          >
            <Wallet className="h-5 w-5" />
            <span className="text-[10px] font-semibold tracking-wide">Wallet</span>
          </Link>

          <Link
            href="/settings"
            className="flex flex-col items-center gap-1 p-1 text-slate-400 hover:text-indigo-600 transition-colors rounded-lg active:scale-95"
          >
            <Settings className="h-5 w-5" />
            <span className="text-[10px] font-semibold tracking-wide">Settings</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}