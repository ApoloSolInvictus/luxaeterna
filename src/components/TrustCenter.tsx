"use client";

import { Eye, KeyRound, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";

const controls = [
  "Allow AI analysis for mediator text",
  "Allow shared journal summaries",
  "Require consent before partner visibility",
  "Show privacy status on every module",
];

export function TrustCenter() {
  const [enabledControls, setEnabledControls] = useState<string[]>([
    controls[2],
    controls[3],
  ]);

  function toggleControl(control: string) {
    setEnabledControls((current) =>
      current.includes(control) ? current.filter((item) => item !== control) : [...current, control],
    );
  }

  return (
    <GlassCard luminous>
      <p className="font-accent text-xs tracking-[0.28em] text-harmony-green">PRIVACY & TRUST CENTER</p>
      <h1 className="mt-3 font-display text-5xl text-white">Emotional data deserves sacred boundaries.</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { title: "Consent ledger", body: "Every shared reflection records who can see it and why.", icon: Eye },
          { title: "Encrypted storage", body: "Supabase Postgres is prepared for row-level security and private modes.", icon: KeyRound },
          { title: "AI transparency", body: "NSA Core Redimido explains what models receive before any analysis.", icon: ShieldCheck },
        ].map(({ title, body, icon: Icon }) => (
          <div key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <Icon className="h-5 w-5 text-solar-gold" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-ivory-light/62">{body}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-3">
        {controls.map((control) => {
          const isEnabled = enabledControls.includes(control);

          return (
            <button
              key={control}
              type="button"
              onClick={() => toggleControl(control)}
              className="flex min-h-14 items-center justify-between rounded-[8px] border border-white/10 bg-white/[0.04] px-4 text-left transition hover:bg-white/[0.08]"
            >
              <span className="text-sm text-white">{control}</span>
              <span
                className={`relative h-7 w-12 rounded-full transition ${
                  isEnabled ? "bg-harmony-green" : "bg-white/12"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    isEnabled ? "left-6" : "left-1"
                  }`}
                />
              </span>
            </button>
          );
        })}
      </div>
    </GlassCard>
  );
}
