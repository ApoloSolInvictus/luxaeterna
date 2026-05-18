import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "solar-gold": "#D6B25E",
        "deep-space": "#0D0F14",
        "ivory-light": "#F8F6F2",
        "aura-blue": "#AFCBFF",
        "rose-empathy": "#E6C7C2",
        "harmony-green": "#8FB996",
        marble: "#ECE7DD",
        obsidian: "#161922",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        accent: ["var(--font-cinzel)", "Cinzel", "serif"],
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      boxShadow: {
        aura: "0 0 60px rgba(214, 178, 94, 0.22)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.32)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.18)",
      },
      backgroundImage: {
        "solar-radial":
          "radial-gradient(circle at 20% 15%, rgba(214,178,94,.28), transparent 30%), radial-gradient(circle at 80% 10%, rgba(175,203,255,.18), transparent 28%), linear-gradient(135deg, #0D0F14 0%, #161922 48%, #251F19 100%)",
        "marble-faint":
          "linear-gradient(135deg, rgba(248,246,242,.95), rgba(236,231,221,.9)), radial-gradient(circle at 25% 20%, rgba(214,178,94,.2), transparent 24%)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(0.92)", opacity: "0.68" },
          "50%": { transform: "scale(1.08)", opacity: "1" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(2%, -3%, 0) rotate(5deg)" },
        },
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
        aurora: "aurora 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
