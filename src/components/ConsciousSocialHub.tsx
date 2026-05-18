"use client";

import { HandHeart, MessageCircleHeart, Plus, UsersRound } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

const prompts = [
  "What would help you feel more emotionally safe this week?",
  "Where did I misunderstand you, and what should I know now?",
  "What is one small care action that would mean a lot today?",
];

export function ConsciousSocialHub() {
  const [circles, setCircles] = useState(["Inner repair circle", "Sunday gratitude ritual"]);
  const [newCircle, setNewCircle] = useState("");
  const [activePrompt, setActivePrompt] = useState(prompts[0]);

  function addCircle(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanCircle = newCircle.trim();
    if (!cleanCircle) return;
    setCircles([cleanCircle, ...circles]);
    setNewCircle("");
  }

  return (
    <GlassCard luminous>
      <p className="font-accent text-xs tracking-[0.28em] text-rose-empathy">CONSCIOUS SOCIAL FEATURES</p>
      <h1 className="mt-3 font-display text-5xl text-white">Community without performance pressure.</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { title: "Shared rituals", body: "Invite trusted circles into gratitude, repair, and meditation practices.", icon: UsersRound },
          { title: "Empathy prompts", body: "Practice responses that validate without rescuing or minimizing.", icon: MessageCircleHeart },
          { title: "Care circles", body: "Small consent-based support spaces with emotional boundaries.", icon: HandHeart },
        ].map(({ title, body, icon: Icon }) => (
          <div key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <Icon className="h-5 w-5 text-solar-gold" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-ivory-light/62">{body}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
        <form onSubmit={addCircle} className="rounded-[8px] border border-white/10 bg-deep-space/45 p-5">
          <h2 className="text-xl font-semibold text-white">Create care circle</h2>
          <p className="mt-2 text-sm text-ivory-light/54">Prototype state now, Supabase table later.</p>
          <input
            value={newCircle}
            onChange={(event) => setNewCircle(event.target.value)}
            placeholder="Circle name"
            className="mt-5 h-11 w-full rounded-[8px] border border-white/12 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-ivory-light/30 focus:border-solar-gold/60"
          />
          <Button className="mt-4 w-full" variant="gold" type="submit">
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add circle
          </Button>
        </form>
        <div className="grid gap-3">
          {circles.map((circle) => (
            <div key={circle} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
              <p className="font-medium text-white">{circle}</p>
              <p className="mt-2 text-sm text-ivory-light/52">Consent-based sharing enabled.</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 rounded-[8px] border border-rose-empathy/20 bg-rose-empathy/10 p-5">
        <p className="font-semibold text-white">Empathy prompt</p>
        <p className="mt-3 text-lg leading-8 text-ivory-light/78">{activePrompt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {prompts.map((prompt, index) => (
            <button
              key={prompt}
              type="button"
              onClick={() => setActivePrompt(prompt)}
              className="rounded-[8px] border border-white/10 px-3 py-2 text-xs text-ivory-light/62 transition hover:bg-white/[0.08] hover:text-white"
            >
              Prompt {index + 1}
            </button>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
