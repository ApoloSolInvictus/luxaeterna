import { DashboardCommandCenter } from "@/components/DashboardCommandCenter";
import { DashboardShell } from "@/components/DashboardShell";
import { EmotionalPulse } from "@/components/EmotionalPulse";
import { EmpathyMeter } from "@/components/EmpathyMeter";
import { ReflectionCard } from "@/components/ReflectionCard";
import { RelationshipTimeline } from "@/components/RelationshipTimeline";
import { GlassCard } from "@/components/ui/glass-card";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <GlassCard className="marble-vein bg-marble-faint text-deep-space">
        <p className="font-accent text-xs tracking-[0.28em] text-deep-space/60">COUPLES DASHBOARD</p>
        <h1 className="mt-3 font-display text-5xl leading-none text-deep-space md:text-6xl">
          Today's relationship field is receptive.
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-deep-space/68">
          Lux is tracking emotional pulse, empathy, stress load, repair momentum, and daily insights
          across shared rituals.
        </p>
      </GlassCard>
      <EmotionalPulse />
      <DashboardCommandCenter />
      <div className="grid gap-4 xl:grid-cols-[.8fr_1.2fr]">
        <EmpathyMeter />
        <ReflectionCard />
      </div>
      <RelationshipTimeline />
    </DashboardShell>
  );
}
