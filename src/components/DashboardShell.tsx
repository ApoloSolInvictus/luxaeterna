import Link from "next/link";
import type * as React from "react";
import { Sparkles } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AuthPanel } from "@/components/AuthPanel";

export function DashboardShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className="min-h-screen bg-deep-space text-ivory-light">
      <div className="fixed inset-0 -z-10 bg-solar-radial" />
      <div className="mx-auto grid min-h-screen max-w-[96rem] gap-4 p-4 lg:grid-cols-[18rem_1fr]">
        <aside className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]">
          <div className="flex h-full flex-col rounded-[8px] border border-white/12 bg-deep-space/68 p-4 shadow-glass backdrop-blur-2xl">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-ivory-light text-deep-space">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-accent text-sm tracking-[0.24em]">LUX</span>
                <span className="block text-xs text-ivory-light/50">Aeterna OS</span>
              </span>
            </Link>
            <nav className="mt-8 grid gap-1" aria-label="Dashboard navigation">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex min-h-11 items-center gap-3 rounded-[8px] px-3 text-sm text-ivory-light/68 transition hover:bg-white/[0.07] hover:text-white"
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6">
              <AuthPanel />
            </div>
            <div className="mt-auto rounded-[8px] border border-harmony-green/20 bg-harmony-green/10 p-4">
              <p className="text-sm font-semibold text-white">Protected field</p>
              <p className="mt-2 text-xs leading-5 text-ivory-light/58">
                Consent, shared modes, and private reflections remain visible by design.
              </p>
            </div>
          </div>
        </aside>
        <section className={cn("space-y-4 pb-8", className)}>{children}</section>
      </div>
    </main>
  );
}
