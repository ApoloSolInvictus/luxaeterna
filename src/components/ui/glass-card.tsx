import type * as React from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  luminous?: boolean;
};

export function GlassCard({
  className,
  luminous = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-white/12 bg-white/[0.07] p-5 shadow-glass shadow-inset backdrop-blur-2xl",
        luminous && "shadow-aura",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
