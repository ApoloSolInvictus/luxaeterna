"use client";

import { cn } from "@/lib/utils";

type ModeToggleProps<T extends string> = {
  label: string;
  value: T;
  options: T[];
  onChange: (value: T) => void;
};

export function ModeToggle<T extends string>({
  label,
  value,
  options,
  onChange,
}: ModeToggleProps<T>) {
  return (
    <div>
      <p className="text-xs font-medium uppercase text-ivory-light/48">{label}</p>
      <div className="mt-2 grid grid-cols-2 rounded-[8px] border border-white/10 bg-deep-space/50 p-1">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "min-h-9 rounded-[6px] px-3 text-sm transition",
              value === option
                ? "bg-ivory-light text-deep-space"
                : "text-ivory-light/58 hover:text-white",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
