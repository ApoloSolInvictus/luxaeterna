"use client";

import { motion } from "@/lib/motion-client";
import { cn } from "@/lib/utils";

type FloatingOrbProps = {
  className?: string;
  delay?: number;
};

export function FloatingOrb({ className, delay = 0 }: FloatingOrbProps) {
  return (
    <motion.span
      aria-hidden="true"
      className={cn("absolute h-1 w-1 rounded-full bg-solar-gold/70", className)}
      animate={{ y: [-8, 14, -8], opacity: [0.25, 0.85, 0.25] }}
      transition={{ duration: 7, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}
