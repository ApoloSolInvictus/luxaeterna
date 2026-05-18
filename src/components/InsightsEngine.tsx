"use client";

import { BrainCircuit, LineChart, Radar, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { insights } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";

const engines = [
  { title: "Pattern detection", body: "Recurring escalation windows are flagged before hard topics.", icon: BrainCircuit },
  { title: "Stress analysis", body: "Somatic pressure, topic intensity, and timing are modeled together.", icon: LineChart },
  { title: "Repair forecasting", body: "Lux predicts which repair ritual is most likely to restore safety.", icon: Radar },
];

export function InsightsEngine() {
  const [query, setQuery] = useState("");
  const filteredInsights = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) return insights;

    return insights.filter((insight) =>
      [insight.title, insight.signal, insight.recommendation].join(" ").toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  return (
    <GlassCard luminous>
      <p className="font-accent text-xs tracking-[0.28em] text-aura-blue">EMOTIONAL INSIGHTS ENGINE</p>
      <h1 className="mt-3 font-display text-5xl text-white">Patterns become choices when they become visible.</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {engines.map(({ title, body, icon: Icon }) => (
          <div key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <Icon className="h-5 w-5 text-solar-gold" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-ivory-light/62">{body}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex min-h-12 items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] px-4">
        <Search className="h-4 w-4 text-ivory-light/40" aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search repair, stress, attachment, gratitude..."
          className="h-11 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-ivory-light/34"
        />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {filteredInsights.map((insight) => (
          <article key={insight.title} className="rounded-[8px] border border-white/10 bg-deep-space/45 p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-white">{insight.title}</h2>
              <span className="rounded-[8px] bg-aura-blue/12 px-3 py-1 text-xs text-aura-blue">
                {insight.confidence}% confidence
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-ivory-light/64">{insight.signal}</p>
            <p className="mt-4 rounded-[8px] border border-solar-gold/20 bg-solar-gold/10 p-3 text-sm leading-6 text-ivory-light/70">
              {insight.recommendation}
            </p>
          </article>
        ))}
      </div>
    </GlassCard>
  );
}
