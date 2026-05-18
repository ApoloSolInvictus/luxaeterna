"use client";

import { motion } from "@/lib/motion-client";
import { personas } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { fadeUp, staggerContainer } from "@/animations/motion";

const toneClass = {
  warm: "text-rose-empathy border-rose-empathy/30",
  calm: "text-aura-blue border-aura-blue/30",
  strategic: "text-solar-gold border-solar-gold/30",
  secure: "text-harmony-green border-harmony-green/30",
};

export function AICompanion() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
    >
      {personas.map((persona) => (
        <motion.div key={persona.name} variants={fadeUp}>
          <GlassCard className="h-full">
            <p className="font-accent text-xs tracking-[0.24em] text-ivory-light/46">{persona.role}</p>
            <h3 className="mt-4 font-display text-3xl text-white">{persona.name}</h3>
            <p className={`mt-3 inline-flex rounded-[8px] border px-3 py-1 text-xs ${toneClass[persona.tone]}`}>
              {persona.signal}
            </p>
            <p className="mt-5 text-sm leading-6 text-ivory-light/68">{persona.description}</p>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
