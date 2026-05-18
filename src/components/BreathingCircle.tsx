"use client";

import { motion } from "@/lib/motion-client";

export function BreathingCircle() {
  return (
    <div className="grid min-h-[26rem] place-items-center rounded-[8px] border border-white/10 bg-[radial-gradient(circle,rgba(175,203,255,.2),transparent_58%)]">
      <motion.div
        className="grid h-56 w-56 place-items-center rounded-full border border-solar-gold/40 bg-white/[0.05] shadow-aura"
        animate={{ scale: [0.86, 1.08, 0.86] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="grid h-36 w-36 place-items-center rounded-full border border-aura-blue/40 bg-aura-blue/10 text-center"
          animate={{ opacity: [0.62, 1, 0.62] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-semibold text-white">Breathe</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
