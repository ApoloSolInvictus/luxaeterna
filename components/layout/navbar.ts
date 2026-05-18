"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-xl
        border-b border-white/10
        bg-black/20
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="text-2xl tracking-[0.3em] font-light">
          LUX AETERNA
        </div>

        <div className="hidden md:flex gap-8 text-sm text-white/70">
          <Link href="#">Meditation</Link>
          <Link href="#">Compatibility</Link>
          <Link href="#">AI Mediator</Link>
          <Link href="#">Growth</Link>
        </div>

        <button
          className="
            px-5 py-2 rounded-full
            bg-[var(--solar-gold)]
            text-black
            font-medium
            shadow-[0_0_30px_rgba(214,178,94,0.35)]
          "
        >
          Begin
        </button>
      </div>
    </motion.nav>
  );
}