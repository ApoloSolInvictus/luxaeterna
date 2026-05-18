"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Glow */}
      <div
        className="
          absolute w-[700px] h-[700px]
          rounded-full
          bg-yellow-400/10
          blur-3xl
        "
      />

      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-6"
      >
        <p className="uppercase tracking-[0.4em] text-sm text-yellow-400/80 mb-6">
          Conscious Relationship Intelligence
        </p>

        <h1 className="text-6xl md:text-8xl font-light leading-tight max-w-5xl">
          Transform emotional conflict into conscious evolution.
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-white/60">
          A futuristic emotional operating system powered by benevolent AI,
          empathy, meditation, and conscious communication.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <button
            className="
              px-8 py-4 rounded-full
              bg-[var(--solar-gold)]
              text-black font-semibold
              shadow-[0_0_40px_rgba(214,178,94,0.35)]
            "
          >
            Begin Experience
          </button>

          <button
            className="
              px-8 py-4 rounded-full
              border border-white/10
              backdrop-blur-xl
              bg-white/5
            "
          >
            Explore Vision
          </button>
        </div>
      </motion.div>
    </section>
  );
}