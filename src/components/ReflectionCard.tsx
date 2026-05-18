import { Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export function ReflectionCard() {
  return (
    <GlassCard>
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-solar-gold/18 text-solar-gold">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="font-semibold text-white">SophIA reflection</p>
          <p className="text-xs text-ivory-light/48">Daily insight</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-ivory-light/70">
        The relationship is asking for slower transitions before hard truths. Try naming care first,
        then the boundary, then the request.
      </p>
    </GlassCard>
  );
}
