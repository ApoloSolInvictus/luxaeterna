import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        relative
        rounded-[2rem]
        border border-white/10
        bg-white/[0.05]
        backdrop-blur-2xl
        shadow-[0_0_40px_rgba(255,255,255,0.04)]
        overflow-hidden
        ${className}
      `}
    >
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-white/[0.06]
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}