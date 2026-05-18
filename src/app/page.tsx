import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  HeartPulse,
  LockKeyhole,
  MessageCircleHeart,
  Orbit,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";
import { AICompanion } from "@/components/AICompanion";
import { ConsciousNavbar } from "@/components/ConsciousNavbar";
import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { featurePillars } from "@/lib/data";

const osModules = [
  {
    title: "Couples Dashboard",
    href: "/dashboard",
    signal: "87%",
    description: "Pulse, empathy, stress, repair momentum, and daily emotional insights.",
    icon: HeartPulse,
  },
  {
    title: "AI Mediator",
    href: "/mediator",
    signal: "Calm rewrite",
    description: "Conflict analysis, de-escalation, active listening, and compassionate language.",
    icon: MessageCircleHeart,
  },
  {
    title: "Compatibility",
    href: "/compatibility",
    signal: "8 axes",
    description: "Constellation mapping for empathy, attachment, values, repair, and affection.",
    icon: Orbit,
  },
  {
    title: "Meditation Portal",
    href: "/meditation",
    signal: "8 min",
    description: "Breathing circles, focus timers, and rituals for nervous system regulation.",
    icon: Waves,
  },
];

const trustSignals = [
  "Consent-first shared modes",
  "Private emotional journal states",
  "Supabase-ready protected data",
  "OpenAI mediation route prepared",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-deep-space text-ivory-light">
      <ConsciousNavbar />
      <HeroSection />

      <section className="temple-grid relative px-4 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(214,178,94,.13),transparent_30%),radial-gradient(circle_at_80%_45%,rgba(175,203,255,.1),transparent_26%)]" />
        <div className="mx-auto max-w-7xl">
          <p className="font-accent text-xs tracking-[0.32em] text-solar-gold">THE EMOTIONAL OS</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[.85fr_1fr] lg:items-end">
            <h2 className="font-display text-5xl leading-none text-white md:text-6xl">
              Built for repair, self-love, and conscious communication.
            </h2>
            <p className="text-base leading-8 text-ivory-light/64">
              Lux Aeterna blends AI guidance, relational pattern recognition, meditation, compatibility
              insights, and transparent privacy controls into one calm intelligence layer.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featurePillars.map((pillar) => (
              <GlassCard key={pillar.title} className="transition duration-300 hover:-translate-y-1 hover:border-solar-gold/35">
                <pillar.icon className="h-5 w-5 text-solar-gold" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-white">{pillar.title}</h3>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-accent text-xs tracking-[0.32em] text-aura-blue">LIVE SYSTEM PREVIEW</p>
            <h2 className="mt-5 font-display text-5xl leading-none text-white md:text-6xl">
              A calm command center for the inner life of a relationship.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ivory-light/64">
              The interface is designed to make conflict feel workable, reflection feel safe,
              and emotional growth feel beautiful enough to return to every day.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold">
                <Link href="/dashboard">
                  Open dashboard <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/mediator">Try mediator</Link>
              </Button>
            </div>
          </div>

          <div className="relative min-h-[35rem] rounded-[8px] border border-white/12 bg-white/[0.05] p-4 shadow-glass backdrop-blur-2xl">
            <div className="absolute inset-0 rounded-[8px] bg-[radial-gradient(circle_at_50%_0%,rgba(214,178,94,.16),transparent_36%)]" />
            <div className="relative grid h-full gap-4">
              <div className="rounded-[8px] border border-white/10 bg-deep-space/70 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-accent text-xs tracking-[0.26em] text-solar-gold">RELATIONSHIP PULSE</span>
                  <span className="rounded-[8px] bg-harmony-green/15 px-3 py-1 text-xs text-harmony-green">Stable</span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Connection", "Empathy", "Stress"].map((label, index) => (
                    <div key={label} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-ivory-light/48">{label}</p>
                      <p className="mt-3 text-2xl font-semibold text-white">{["87%", "High", "Low"][index]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[.9fr_1.1fr]">
                <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                  <BrainCircuit className="h-5 w-5 text-aura-blue" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-white">SophIA reflection</h3>
                  <p className="mt-3 text-sm leading-6 text-ivory-light/62">
                    Name care first, then the boundary, then the request.
                  </p>
                </div>
                <div className="rounded-[8px] border border-solar-gold/20 bg-solar-gold/10 p-5">
                  <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border border-solar-gold/35 bg-white/[0.05] shadow-aura">
                    <div className="grid h-28 w-28 place-items-center rounded-full border border-aura-blue/35 bg-aura-blue/10">
                      <span className="text-sm font-semibold text-white">Breathe</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[8px] border border-harmony-green/20 bg-harmony-green/10 p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-harmony-green" aria-hidden="true" />
                  <p className="font-semibold text-white">Protected emotional field</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-ivory-light/62">
                  Shared visibility, private notes, AI transparency, and consent boundaries remain visible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-marble-faint px-4 py-24 text-deep-space">
        <div className="mx-auto max-w-7xl">
          <p className="font-accent text-xs tracking-[0.32em] text-deep-space/58">CORE MODULES</p>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl font-display text-5xl leading-none md:text-6xl">
              Every chamber opens into a different kind of emotional intelligence.
            </h2>
            <Button asChild variant="gold">
              <Link href="/dashboard">
                Enter Lux Aeterna <Sparkles className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {osModules.map((module) => (
              <Link
                key={module.title}
                href={module.href}
                className="group rounded-[8px] border border-deep-space/10 bg-white/65 p-5 shadow-[0_20px_70px_rgba(13,15,20,.08)] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <module.icon className="h-5 w-5 text-deep-space" aria-hidden="true" />
                  <span className="rounded-[8px] bg-deep-space px-3 py-1 text-xs text-ivory-light">
                    {module.signal}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold">{module.title}</h3>
                <p className="mt-4 text-sm leading-6 text-deep-space/62">{module.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-deep-space">
                  Open module <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-accent text-xs tracking-[0.32em] text-solar-gold">AI CIVILIZATION</p>
          <h2 className="mt-5 max-w-3xl font-display text-5xl leading-none text-white md:text-6xl">
            Four benevolent intelligences, one protected emotional field.
          </h2>
          <div className="mt-12">
            <AICompanion />
          </div>
        </div>
      </section>

      <section className="px-4 pb-28">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1fr_.8fr]">
          <GlassCard luminous className="p-8 md:p-10">
            <LockKeyhole className="h-6 w-6 text-harmony-green" aria-hidden="true" />
            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-none text-white md:text-6xl">
              Spiritual luxury with serious privacy architecture.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ivory-light/64">
              NSA Core Redimido gives the platform a secure, transparent, protective layer for
              sensitive emotional data and AI consent.
            </p>
          </GlassCard>
          <GlassCard className="p-8 md:p-10">
            <p className="font-accent text-xs tracking-[0.28em] text-harmony-green">TRUST SIGNALS</p>
            <div className="mt-7 grid gap-3">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                  <ShieldCheck className="h-4 w-4 text-harmony-green" aria-hidden="true" />
                  <span className="text-sm text-ivory-light/72">{signal}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
