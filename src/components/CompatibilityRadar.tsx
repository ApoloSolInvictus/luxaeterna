"use client";

import { useMemo, useState } from "react";
import { compatibilityAxes } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";

export function CompatibilityRadar() {
  const [axes, setAxes] = useState(compatibilityAxes);
  const average = Math.round(axes.reduce((sum, axis) => sum + axis.value, 0) / axes.length);
  const strongest = useMemo(() => [...axes].sort((a, b) => b.value - a.value)[0], [axes]);
  const growthEdge = useMemo(() => [...axes].sort((a, b) => a.value - b.value)[0], [axes]);
  const points = axes
    .map((axis, index) => {
      const angle = (Math.PI * 2 * index) / axes.length - Math.PI / 2;
      const radius = axis.value / 2;
      return `${50 + Math.cos(angle) * radius},${50 + Math.sin(angle) * radius}`;
    })
    .join(" ");

  function updateAxis(label: string, value: number) {
    setAxes((current) =>
      current.map((axis) => (axis.label === label ? { ...axis, value } : axis)),
    );
  }

  return (
    <GlassCard luminous>
      <div className="grid gap-8 lg:grid-cols-[.9fr_1fr] lg:items-center">
        <div>
          <p className="font-accent text-xs tracking-[0.28em] text-solar-gold">COMPATIBILITY SYSTEM</p>
          <h1 className="mt-3 font-display text-5xl text-white">A constellation of emotional fit.</h1>
          <p className="mt-5 text-sm leading-7 text-ivory-light/66">
            Adjust each axis to model how the relationship feels today. Lux translates
            compatibility into evolving signals, not fixed labels.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {axes.map((axis) => (
              <label key={axis.label} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-ivory-light/66">{axis.label}</span>
                  <span className="text-white">{axis.value}%</span>
                </div>
                <input
                  className="mt-3 h-1.5 w-full accent-solar-gold"
                  type="range"
                  min="0"
                  max="100"
                  value={axis.value}
                  onChange={(event) => updateAxis(axis.label, Number(event.target.value))}
                />
              </label>
            ))}
          </div>
        </div>
        <div>
          <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
            <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Emotional compatibility radar chart">
              {[18, 32, 46].map((radius) => (
                <circle key={radius} cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,.12)" />
              ))}
              {axes.map((axis, index) => {
                const angle = (Math.PI * 2 * index) / axes.length - Math.PI / 2;
                const x = 50 + Math.cos(angle) * 46;
                const y = 50 + Math.sin(angle) * 46;
                return <line key={axis.label} x1="50" y1="50" x2={x} y2={y} stroke="rgba(255,255,255,.1)" />;
              })}
              <polygon points={points} fill="rgba(214,178,94,.28)" stroke="#D6B25E" strokeWidth="0.8" />
              {points.split(" ").map((point) => {
                const [x, y] = point.split(",");
                return <circle key={point} cx={x} cy={y} r="1.6" fill="#F8F6F2" />;
              })}
            </svg>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs text-ivory-light/46">Coherence</p>
              <p className="mt-2 text-3xl font-semibold text-white">{average}%</p>
            </div>
            <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs text-ivory-light/46">Strength</p>
              <p className="mt-2 text-sm font-semibold text-white">{strongest.label}</p>
            </div>
            <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs text-ivory-light/46">Growth edge</p>
              <p className="mt-2 text-sm font-semibold text-white">{growthEdge.label}</p>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
