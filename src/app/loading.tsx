import { GlassCard } from "@/components/ui/glass-card";

export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-deep-space p-4 text-ivory-light">
      <GlassCard className="w-full max-w-md text-center">
        <div className="mx-auto h-20 w-20 animate-breathe rounded-full border border-solar-gold/40 bg-solar-gold/10" />
        <p className="mt-6 font-accent text-xs tracking-[0.3em] text-solar-gold">LUX AETERNA</p>
        <p className="mt-3 text-sm text-ivory-light/60">Calibrating emotional field</p>
      </GlassCard>
    </main>
  );
}
