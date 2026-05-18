"use client";

import { Download, Lock, PenLine, Search, Sparkles, Trash2, Users } from "lucide-react";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { motion } from "@/lib/motion-client";
import { journalEntries } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { ModeToggle } from "@/components/ModeToggle";
import type { JournalEntry } from "@/types/lux";

const moodOptions = ["Tender", "Warm", "Calm", "Activated", "Grateful"];

function detectTags(text: string) {
  const lowered = text.toLowerCase();
  const tags = new Set<string>();

  if (lowered.includes("thank") || lowered.includes("grateful")) tags.add("gratitude");
  if (lowered.includes("sorry") || lowered.includes("repair")) tags.add("repair");
  if (lowered.includes("afraid") || lowered.includes("scared")) tags.add("vulnerability");
  if (lowered.includes("breathe") || lowered.includes("calm")) tags.add("co-regulation");
  if (!tags.size) tags.add("reflection");

  return Array.from(tags);
}

export function SharedJournal() {
  const [entries, setEntries] = useLocalStorage<JournalEntry[]>(
    "lux-journal-entries",
    journalEntries.map((entry, index) => ({ ...entry, id: `seed-${index}` })),
  );
  const [mode, setMode] = useState<"Private" | "Shared">("Shared");
  const [mood, setMood] = useState("Tender");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [query, setQuery] = useState("");

  const filteredEntries = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) return entries;

    return entries.filter((entry) =>
      [entry.title, entry.summary, entry.body, entry.mood, ...entry.tags]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [entries, query]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanBody = body.trim();
    const cleanTitle = title.trim() || `${mood} reflection`;
    if (!cleanBody) return;

    const nextEntry: JournalEntry = {
      id: crypto.randomUUID(),
      title: cleanTitle,
      mood,
      mode,
      body: cleanBody,
      tags: detectTags(`${cleanTitle} ${cleanBody}`),
      summary: `SophIA noticed ${mood.toLowerCase()} emotional tone and prepared this entry for ${mode.toLowerCase()} reflection.`,
      createdAt: new Intl.DateTimeFormat("en", {
        weekday: "short",
        hour: "numeric",
        minute: "2-digit",
      }).format(new Date()),
    };

    setEntries([nextEntry, ...entries]);
    setTitle("");
    setBody("");
  }

  function exportEntries() {
    const file = new Blob([JSON.stringify(entries, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(file);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "lux-aeterna-journal.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function clearLocalEntries() {
    const confirmed = window.confirm("Clear local journal entries from this browser?");
    if (confirmed) {
      setEntries([]);
    }
  }

  return (
    <GlassCard luminous>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-accent text-xs tracking-[0.28em] text-solar-gold">SHARED EMOTIONAL JOURNAL</p>
          <h1 className="mt-3 font-display text-5xl text-white">Private truth. Shared repair.</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="ghost" onClick={exportEntries}>
            <Download className="h-4 w-4" aria-hidden="true" />
            Export
          </Button>
          <Button variant="ghost" onClick={clearLocalEntries}>
            <Trash2 className="h-4 w-4" aria-hidden="true" />
            Clear local
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 xl:grid-cols-[.82fr_1.18fr]">
        <form onSubmit={onSubmit} className="rounded-[8px] border border-white/10 bg-deep-space/52 p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-solar-gold/15 text-solar-gold">
              <PenLine className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-semibold text-white">New emotional entry</h2>
              <p className="text-xs text-ivory-light/48">Stored locally, ready for Supabase sync.</p>
            </div>
          </div>

          <label className="mt-6 block text-sm text-ivory-light/64" htmlFor="journal-title">
            Title
          </label>
          <input
            id="journal-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="What wants to be witnessed?"
            className="mt-2 h-11 w-full rounded-[8px] border border-white/12 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-ivory-light/30 focus:border-solar-gold/60"
          />

          <label className="mt-4 block text-sm text-ivory-light/64" htmlFor="journal-body">
            Reflection
          </label>
          <textarea
            id="journal-body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            placeholder="Name the feeling, the need, the gratitude, or the repair..."
            className="mt-2 min-h-40 w-full rounded-[8px] border border-white/12 bg-white/[0.04] p-4 text-sm leading-6 text-white outline-none transition placeholder:text-ivory-light/30 focus:border-solar-gold/60"
          />

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ModeToggle label="Visibility" value={mode} options={["Shared", "Private"]} onChange={setMode} />
            <div>
              <label className="text-xs font-medium uppercase text-ivory-light/48" htmlFor="journal-mood">
                Mood
              </label>
              <select
                id="journal-mood"
                value={mood}
                onChange={(event) => setMood(event.target.value)}
                className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-deep-space/70 px-3 text-sm text-white outline-none focus:border-solar-gold/60"
              >
                {moodOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <Button className="mt-5 w-full" variant="gold" type="submit">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Save reflection
          </Button>
        </form>

        <div>
          <label className="sr-only" htmlFor="journal-search">
            Search journal
          </label>
          <div className="flex min-h-12 items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] px-4">
            <Search className="h-4 w-4 text-ivory-light/40" aria-hidden="true" />
            <input
              id="journal-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search moods, tags, gratitude, repair..."
              className="h-11 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-ivory-light/34"
            />
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {filteredEntries.map((entry, index) => (
              <motion.article
                key={entry.id ?? entry.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-[8px] bg-rose-empathy/14 px-3 py-1 text-xs text-rose-empathy">
                    {entry.mood}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-ivory-light/50">
                    {entry.mode === "Private" ? <Lock className="h-3 w-3" /> : <Users className="h-3 w-3" />}
                    {entry.mode}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">{entry.title}</h2>
                {entry.createdAt ? <p className="mt-1 text-xs text-ivory-light/38">{entry.createdAt}</p> : null}
                <p className="mt-3 text-sm leading-6 text-ivory-light/64">{entry.summary}</p>
                {entry.body ? <p className="mt-3 text-sm leading-6 text-ivory-light/50">{entry.body}</p> : null}
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[8px] border border-white/10 px-2.5 py-1 text-xs text-ivory-light/54"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
