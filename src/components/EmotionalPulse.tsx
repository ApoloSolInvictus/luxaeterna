"use client";

import { Activity } from "lucide-react";
import { motion } from "@/lib/motion-client";
import { metrics } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";

export function EmotionalPulse() {
  return (
    <GlassCard id="pulse" luminous className="overflow-hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-accent text-xs tracking-[0.28em] text-solar-gold">RELATIONSHIP PULSE</p>
          <h2 className="mt-3 font-display text-4xl text-white">Nervous systems are syncing.</h2>
        </div>
        <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-harmony-green/18 text-harmony-green">
          <Activity className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase text-ivory-light/48">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
            <p className="mt-2 text-sm text-ivory-light/62">{metric.detail}</p>
            <p className="mt-4 text-xs text-harmony-green">{metric.trend}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 h-24 overflow-hidden rounded-[8px] border border-white/10 bg-deep-space/50">
        <motion.div
          className="h-full w-[140%] bg-[repeating-linear-gradient(90deg,transparent_0_24px,rgba(214,178,94,.22)_25px_26px),linear-gradient(90deg,transparent,rgba(143,185,150,.35),transparent)]"
          animate={{ x: ["-20%", "0%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </GlassCard>
  );
}
