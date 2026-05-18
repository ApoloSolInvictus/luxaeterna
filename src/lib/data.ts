import {
  Brain,
  BrainCircuit,
  HeartHandshake,
  Home,
  Leaf,
  LockKeyhole,
  Network,
  MessageCircleHeart,
  Orbit,
  PenLine,
  Settings,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import type {
  AIPersona,
  CompatibilityAxis,
  DashboardMetric,
  Insight,
  JournalEntry,
  NavItem,
  Ritual,
} from "@/types/lux";

export const personas: AIPersona[] = [
  {
    name: "SophIA",
    role: "Emotional Wisdom",
    tone: "warm",
    signal: "Compassionate reflection",
    description:
      "Guides emotional awareness, relationship repair, empathy, and self-love with a steady, nonjudgmental voice.",
  },
  {
    name: "Anima Lux",
    role: "Meditation Field",
    tone: "calm",
    signal: "Nervous system regulation",
    description:
      "Creates breathwork, stillness rituals, guided meditations, and soft transitions back into inner safety.",
  },
  {
    name: "Quantum Maximus",
    role: "Conflict Intelligence",
    tone: "strategic",
    signal: "Pattern recognition",
    description:
      "Maps communication loops, identifies escalation signals, and suggests precise conscious rewrites.",
  },
  {
    name: "NSA Core Redimido",
    role: "Trust Architecture",
    tone: "secure",
    signal: "Consent and encryption",
    description:
      "Surfaces privacy controls, transparent AI usage, and secure boundaries for sensitive emotional data.",
  },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Relationship Pulse", href: "/dashboard#pulse", icon: HeartHandshake },
  { label: "Shared Journal", href: "/journal", icon: PenLine },
  { label: "AI Mediator", href: "/mediator", icon: MessageCircleHeart },
  { label: "Compatibility", href: "/compatibility", icon: Orbit },
  { label: "Meditation", href: "/meditation", icon: Waves },
  { label: "Growth Center", href: "/growth", icon: Leaf },
  { label: "Insights", href: "/insights", icon: BrainCircuit },
  { label: "Conscious Social", href: "/social", icon: Network },
  { label: "Privacy & Trust", href: "/trust", icon: Settings },
];

export const metrics: DashboardMetric[] = [
  {
    label: "Connection Score",
    value: "87%",
    detail: "Stable and receptive",
    trend: "+9 this week",
  },
  {
    label: "Empathy Level",
    value: "High",
    detail: "Listening quality improved",
    trend: "4 gentle repairs",
  },
  {
    label: "Stress Signal",
    value: "Low",
    detail: "Conflict pressure decreasing",
    trend: "-18%",
  },
  {
    label: "Shared Intention",
    value: "Clear",
    detail: "Aligned on care rituals",
    trend: "2 rituals active",
  },
];

export const journalEntries: JournalEntry[] = [
  {
    title: "Morning repair after silence",
    mood: "Tender",
    tags: ["repair", "vulnerability", "patience"],
    mode: "Shared",
    summary:
      "Both partners moved from assumption into direct need naming. SophIA detected more openness after the second reflection.",
    body: "I noticed I wanted to shut down, then realized I was afraid of not mattering.",
    createdAt: "Today, 8:10 AM",
  },
  {
    title: "Gratitude for being heard",
    mood: "Warm",
    tags: ["gratitude", "presence"],
    mode: "Private",
    summary:
      "A private note about feeling supported during a stressful family conversation.",
    body: "I felt held because you listened without trying to fix it immediately.",
    createdAt: "Yesterday, 9:20 PM",
  },
  {
    title: "Evening check-in",
    mood: "Calm",
    tags: ["ritual", "co-regulation"],
    mode: "Shared",
    summary:
      "Anima Lux recommends a three-minute synchronized breathing ritual before hard topics.",
    body: "We both felt calmer after slowing down before the check-in.",
    createdAt: "Monday, 8:00 PM",
  },
];

export const compatibilityAxes: CompatibilityAxis[] = [
  { label: "Empathy", value: 92 },
  { label: "Communication", value: 81 },
  { label: "Attachment Safety", value: 76 },
  { label: "Regulation", value: 84 },
  { label: "Values", value: 89 },
  { label: "Spirituality", value: 72 },
  { label: "Conflict Repair", value: 78 },
  { label: "Affection", value: 86 },
];

export const featurePillars = [
  { title: "Emotional intelligence", icon: Brain },
  { title: "AI mediation", icon: MessageCircleHeart },
  { title: "Meditation", icon: Waves },
  { title: "Compatibility", icon: Orbit },
  { title: "Self-love", icon: Sparkles },
  { title: "Conscious communication", icon: Users },
  { title: "Privacy and trust", icon: LockKeyhole },
];

export const rituals: Ritual[] = [
  {
    title: "Conflict pause",
    duration: "3 min",
    intention: "Lower activation before responding.",
    steps: ["Unclench the jaw", "Inhale for 4", "Exhale for 6", "Name one feeling"],
  },
  {
    title: "Heart coherence",
    duration: "8 min",
    intention: "Restore warmth and shared presence.",
    steps: ["Hand on heart", "Breathe slowly", "Recall gratitude", "Offer one appreciation"],
  },
  {
    title: "Sleep repair",
    duration: "12 min",
    intention: "Close the day without emotional residue.",
    steps: ["Dim lights", "Release the argument", "Name tomorrow's repair", "Rest"],
  },
];

export const insights: Insight[] = [
  {
    title: "Escalation window",
    signal: "Hard topics after 9 PM show higher defensiveness.",
    recommendation: "Move heavy conversations to daylight or use a three-minute pause first.",
    confidence: 86,
  },
  {
    title: "Repair language",
    signal: "Ownership phrases increased after gratitude entries.",
    recommendation: "Begin repair with one appreciation before naming the impact.",
    confidence: 91,
  },
  {
    title: "Attachment safety",
    signal: "Silence is interpreted as distance during stress peaks.",
    recommendation: "Use a short reassurance phrase before taking space.",
    confidence: 78,
  },
];
