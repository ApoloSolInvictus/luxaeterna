"use client";

import Link from "next/link";
import { CheckCircle2, Circle, LockKeyhole, MessageCircleHeart, Sparkles, Waves } from "lucide-react";
import { useState } from "react";
import { insights, personas } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const careTasks = [
  "Share one gratitude entry",
  "Complete a 3-minute conflict pause",
  "Name one need without blame",
  "Confirm privacy settings",
];

export function DashboardCommandCenter() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([careTasks[0]]);
  const [activePersona, setActivePersona] = useState(personas[0].name);
  const completion = Math.round((completedTasks.length / careTasks.length) * 100);

  function toggleTask(task: string) {
    setCompletedTasks((current) =>
      current.includes(task) ? current.filter((item) => item !== task) : [...current, task],
    );
  }

  return (
    <div className="grid gap-4 xl:grid-cols-[1.1fr_.9fr]">
      <GlassCard>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="font-accent text-xs tracking-[0.28em] text-solar-gold">DAILY ALIGNMENT</p>
            <h2 className="mt-3 font-display text-4xl text-white">Care rituals for today</h2>
          </div>
          <div className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-right">
            <p className="text-3xl font-semibold text-white">{completion}%</p>
            <p className="text-xs text-ivory-light/46">complete</p>
          </div>
        </div>
        <div className="mt-6 grid gap-3">
          {careTasks.map((task) => {
            const isComplete = completedTasks.includes(task);

            return (
              <button
                key={task}
                type="button"
                onClick={() => toggleTask(task)}
                className="flex min-h-14 items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] px-4 text-left transition hover:bg-white/[0.08]"
              >
                {isComplete ? (
                  <CheckCircle2 className="h-5 w-5 text-harmony-green" aria-hidden="true" />
                ) : (
                  <Circle className="h-5 w-5 text-ivory-light/30" aria-hidden="true" />
                )}
                <span className={cn("text-sm", isComplete ? "text-white" : "text-ivory-light/62")}>{task}</span>
              </button>
            );
          })}
        </div>
      </GlassCard>

      <GlassCard>
        <p className="font-accent text-xs tracking-[0.28em] text-aura-blue">AI ORCHESTRATION</p>
        <h2 className="mt-3 font-display text-4xl text-white">Active guide: {activePersona}</h2>
        <div className="mt-6 grid gap-2">
          {personas.map((persona) => (
            <button
              key={persona.name}
              type="button"
              onClick={() => setActivePersona(persona.name)}
              className={cn(
                "rounded-[8px] border p-3 text-left transition",
                activePersona === persona.name
                  ? "border-solar-gold/45 bg-solar-gold/12"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]",
              )}
            >
              <span className="block text-sm font-semibold text-white">{persona.name}</span>
              <span className="mt-1 block text-xs text-ivory-light/50">{persona.signal}</span>
            </button>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="xl:col-span-2">
        <div className="grid gap-4 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="font-accent text-xs tracking-[0.28em] text-harmony-green">SYSTEM READINESS</p>
            <h2 className="mt-3 font-display text-4xl text-white">Lux is ready for real integrations.</h2>
            <p className="mt-4 text-sm leading-7 text-ivory-light/62">
              OpenAI mediation, Supabase persistence, Clerk authentication, privacy controls,
              and Vercel deployment variables now have clear architecture points.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="gold">
                <Link href="/mediator">
                  <MessageCircleHeart className="h-4 w-4" aria-hidden="true" />
                  Mediate
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/meditation">
                  <Waves className="h-4 w-4" aria-hidden="true" />
                  Regulate
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/trust">
                  <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                  Trust
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-3">
            {insights.map((insight) => (
              <div key={insight.title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-white">{insight.title}</p>
                  <span className="flex items-center gap-1 rounded-[8px] bg-deep-space px-2.5 py-1 text-xs text-solar-gold">
                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                    {insight.confidence}%
                  </span>
                </div>
                <p className="mt-2 text-sm text-ivory-light/56">{insight.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
