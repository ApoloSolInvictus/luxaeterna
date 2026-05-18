import { GlassCard } from "@/components/ui/glass-card";

export function EmpathyMeter() {
  return (
    <GlassCard>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm text-ivory-light/58">Empathy coherence</p>
          <p className="mt-2 text-5xl font-semibold text-white">91</p>
        </div>
        <p className="text-sm text-harmony-green">+12%</p>
      </div>
      <div className="mt-6 h-3 rounded-full bg-white/10">
        <div className="h-full w-[91%] rounded-full bg-gradient-to-r from-rose-empathy via-solar-gold to-harmony-green" />
      </div>
      <p className="mt-4 text-sm leading-6 text-ivory-light/62">
        Reflective listening and ownership language are increasing across shared entries.
      </p>
    </GlassCard>
  );
}
