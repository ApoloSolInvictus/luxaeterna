"use client";

import { Clock, Headphones, HeartPulse, Pause, Play, RotateCcw, Waves } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { BreathingCircle } from "@/components/BreathingCircle";
import { Button } from "@/components/ui/button";
import { rituals } from "@/lib/data";

const sessionIcons = [Waves, HeartPulse, Headphones];

function parseMinutes(duration: string) {
  const [minutes] = duration.split(" ");
  return Number(minutes) * 60;
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function MeditationSphere() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(parseMinutes(rituals[0].duration));
  const [isRunning, setIsRunning] = useState(false);
  const activeRitual = rituals[activeIndex];
  const totalSeconds = useMemo(() => parseMinutes(activeRitual.duration), [activeRitual.duration]);
  const progress = Math.round(((totalSeconds - remainingSeconds) / totalSeconds) * 100);

  useEffect(() => {
    setRemainingSeconds(parseMinutes(activeRitual.duration));
    setIsRunning(false);
  }, [activeRitual.duration]);

  useEffect(() => {
    if (!isRunning || remainingSeconds <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setRemainingSeconds((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isRunning, remainingSeconds]);

  return (
    <GlassCard luminous>
      <div className="grid gap-8 lg:grid-cols-[.85fr_1fr] lg:items-center">
        <div>
          <p className="font-accent text-xs tracking-[0.28em] text-aura-blue">ANIMA LUX MEDITATION PORTAL</p>
          <h1 className="mt-3 font-display text-5xl text-white">Return to the body before the conversation.</h1>
          <p className="mt-5 text-sm leading-7 text-ivory-light/66">
            Breath pacing, ambient focus timers, and guided rituals for nervous system regulation.
          </p>
          <div className="mt-7 grid gap-3">
            {rituals.map((ritual, index) => {
              const Icon = sessionIcons[index] ?? Waves;

              return (
                <button
                  type="button"
                  key={ritual.title}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center justify-between rounded-[8px] border p-4 text-left transition ${
                    activeIndex === index
                      ? "border-solar-gold/45 bg-solar-gold/12"
                      : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-solar-gold" aria-hidden="true" />
                    <span>
                      <span className="block font-medium text-white">{ritual.title}</span>
                      <span className="mt-1 block text-xs text-ivory-light/46">{ritual.intention}</span>
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-sm text-ivory-light/54">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {ritual.duration}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button className="min-w-36" variant="gold" onClick={() => setIsRunning((current) => !current)}>
              {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isRunning ? "Pause" : "Start session"}
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setRemainingSeconds(totalSeconds);
                setIsRunning(false);
              }}
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
        <div>
          <BreathingCircle />
          <div className="mt-4 rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">{activeRitual.title}</p>
                <p className="mt-1 text-xs text-ivory-light/48">{activeRitual.intention}</p>
              </div>
              <p className="font-mono text-3xl text-white">{formatTime(remainingSeconds)}</p>
            </div>
            <div className="mt-5 h-2 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-aura-blue" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {activeRitual.steps.map((step, index) => (
                <div key={step} className="rounded-[8px] border border-white/10 bg-deep-space/45 p-3 text-sm text-ivory-light/62">
                  <span className="mr-2 text-solar-gold">{index + 1}.</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
