"use client";

import { CheckCircle2, Circle, Leaf, Mountain, Sparkles } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

const growthTracks = [
  { title: "Self-compassion ritual", body: "Name the inner need without judgement.", icon: Sparkles },
  { title: "Attachment reflection", body: "Track protest patterns and bids for closeness.", icon: Leaf },
  { title: "Values alignment", body: "Turn shared values into weekly choices.", icon: Mountain },
];

const practices = [
  "I can name my feeling without making it a verdict.",
  "I can ask for closeness without accusation.",
  "I can take space and still reassure connection.",
  "I can repair without self-abandoning.",
];

export function GrowthCenter() {
  const [completed, setCompleted] = useState<string[]>([practices[0]]);
  const score = Math.round((completed.length / practices.length) * 100);

  function togglePractice(practice: string) {
    setCompleted((current) =>
      current.includes(practice) ? current.filter((item) => item !== practice) : [...current, practice],
    );
  }

  return (
    <GlassCard luminous>
      <p className="font-accent text-xs tracking-[0.28em] text-harmony-green">PERSONAL GROWTH CENTER</p>
      <h1 className="mt-3 font-display text-5xl text-white">Self-love becomes relational intelligence.</h1>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {growthTracks.map(({ title, body, icon: Icon }) => (
          <div key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <Icon className="h-5 w-5 text-solar-gold" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-ivory-light/62">{body}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[.7fr_1.3fr]">
        <div className="rounded-[8px] border border-harmony-green/20 bg-harmony-green/10 p-5">
          <p className="text-sm text-ivory-light/58">Growth coherence</p>
          <p className="mt-3 text-5xl font-semibold text-white">{score}%</p>
          <div className="mt-5 h-2 rounded-full bg-white/10">
            <div className="h-full rounded-full bg-harmony-green" style={{ width: `${score}%` }} />
          </div>
        </div>
        <div className="grid gap-3">
          {practices.map((practice) => {
            const isComplete = completed.includes(practice);

            return (
              <button
                key={practice}
                type="button"
                onClick={() => togglePractice(practice)}
                className="flex min-h-14 items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] px-4 text-left transition hover:bg-white/[0.08]"
              >
                {isComplete ? (
                  <CheckCircle2 className="h-5 w-5 text-harmony-green" />
                ) : (
                  <Circle className="h-5 w-5 text-ivory-light/30" />
                )}
                <span className={cn("text-sm", isComplete ? "text-white" : "text-ivory-light/62")}>{practice}</span>
              </button>
            );
          })}
        </div>
      </div>
    </GlassCard>
  );
}
