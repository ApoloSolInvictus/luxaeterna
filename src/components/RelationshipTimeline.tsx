import { GlassCard } from "@/components/ui/glass-card";

const events = [
  ["08:10", "Soft repair started", "One partner named fear instead of blame."],
  ["12:45", "Stress peak avoided", "Mediator suggested a 90-second pause."],
  ["20:00", "Gratitude ritual", "Shared appreciation restored warmth."],
];

export function RelationshipTimeline() {
  return (
    <GlassCard>
      <h3 className="font-display text-3xl text-white">Relationship timeline</h3>
      <div className="mt-6 space-y-5">
        {events.map(([time, title, body]) => (
          <div key={title} className="grid grid-cols-[4.5rem_1fr] gap-4">
            <p className="text-sm text-solar-gold">{time}</p>
            <div className="border-l border-white/12 pl-4">
              <p className="font-medium text-white">{title}</p>
              <p className="mt-1 text-sm text-ivory-light/58">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
