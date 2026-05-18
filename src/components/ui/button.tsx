import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] px-5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-gold/70 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ivory-light text-deep-space shadow-aura hover:bg-white hover:shadow-[0_0_80px_rgba(214,178,94,.32)]",
        ghost:
          "border border-white/12 bg-white/[0.06] text-ivory-light backdrop-blur-xl hover:bg-white/[0.12]",
        gold:
          "bg-solar-gold text-deep-space hover:bg-[#e5c778] shadow-[0_12px_40px_rgba(214,178,94,.28)]",
      },
      size: {
        default: "h-11",
        lg: "h-13 px-7 text-base",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
