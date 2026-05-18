import type { LucideIcon } from "lucide-react";

export type PersonaTone = "warm" | "calm" | "strategic" | "secure";

export type AIPersona = {
  name: string;
  role: string;
  tone: PersonaTone;
  signal: string;
  description: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  detail: string;
  trend: string;
};

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type JournalEntry = {
  id?: string;
  title: string;
  mood: string;
  tags: string[];
  mode: "Private" | "Shared";
  summary: string;
  body?: string;
  createdAt?: string;
};

export type CompatibilityAxis = {
  label: string;
  value: number;
};

export type Ritual = {
  title: string;
  duration: string;
  intention: string;
  steps: string[];
};

export type Insight = {
  title: string;
  signal: string;
  recommendation: string;
  confidence: number;
};
