"use client";

import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";
import { motion } from "@/lib/motion-client";
import { Button } from "@/components/ui/button";
import { FloatingOrb } from "@/components/FloatingOrb";
import { fadeUp, staggerContainer } from "@/animations/motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen overflow-hidden bg-solar-radial px-4 pb-16 pt-28 text-ivory-light">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-solar-gold/20 bg-[radial-gradient(circle,rgba(214,178,94,.22),transparent_62%)] blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-deep-space to-transparent" />
        <FloatingOrb className="left-[12%] top-[26%]" />
        <FloatingOrb className="right-[18%] top-[34%]" delay={1.4} />
        <FloatingOrb className="left-[72%] top-[68%]" delay={2.2} />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr]"
      >
        <div className="max-w-4xl">
          <motion.p variants={fadeUp} className="mb-5 font-accent text-xs tracking-[0.42em] text-solar-gold">
            CONSCIOUS RELATIONSHIP INTELLIGENCE OS
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-6xl leading-[0.9] text-white sm:text-7xl lg:text-8xl"
          >
            Transform emotional conflict into conscious evolution.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-ivory-light/72 sm:text-xl"
          >
            A benevolent AI ecosystem for empathy, repair, meditation, self-love,
            privacy, and relational growth.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/dashboard">
                Begin emotional alignment <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/mediator">
                Try AI mediation <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative min-h-[31rem]">
          <div className="absolute inset-x-8 bottom-0 top-8 rounded-t-full border border-solar-gold/25 bg-white/[0.05] shadow-aura backdrop-blur-xl" />
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-solar-gold/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-16 grid grid-cols-5 gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-72 rounded-t-full border border-white/10 bg-gradient-to-b from-ivory-light/18 to-white/[0.03] backdrop-blur-md"
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-1/2 w-[86%] -translate-x-1/2 rounded-[8px] border border-white/12 bg-deep-space/70 p-5 shadow-glass backdrop-blur-2xl">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-harmony-green/18 text-harmony-green">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Emotional safety layer active</p>
                <p className="text-xs text-ivory-light/58">Consent-first AI, private reflections, encrypted architecture.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
