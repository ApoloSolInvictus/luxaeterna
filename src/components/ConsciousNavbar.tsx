"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { motion } from "@/lib/motion-client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Mediator", href: "/mediator" },
  { label: "Meditation", href: "/meditation" },
  { label: "Trust", href: "/trust" },
];

export function ConsciousNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[8px] border border-white/12 bg-deep-space/55 px-4 py-3 text-ivory-light shadow-glass backdrop-blur-2xl">
        <Link href="/" className="flex items-center gap-3" aria-label="Lux Aeterna home">
          <span className="grid h-9 w-9 place-items-center rounded-[8px] bg-ivory-light text-deep-space">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <span className="block font-accent text-sm tracking-[0.28em]">LUX AETERNA</span>
            <span className="block text-xs text-ivory-light/58">Relationship Intelligence OS</span>
          </span>
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="px-3 py-2 text-sm text-ivory-light/78 hover:text-white">
              {link.label}
            </Link>
          ))}
          <Button asChild variant="gold">
            <Link href="/dashboard">Enter OS</Link>
          </Button>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </Button>
      </nav>
      {isOpen ? (
        <div className="mx-auto mt-2 grid max-w-7xl gap-2 rounded-[8px] border border-white/12 bg-deep-space/90 p-3 shadow-glass backdrop-blur-2xl md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-[8px] px-3 py-3 text-sm text-ivory-light/78 hover:bg-white/[0.07] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="gold">
            <Link href="/dashboard" onClick={() => setIsOpen(false)}>
              Enter OS
            </Link>
          </Button>
        </div>
      ) : null}
    </motion.header>
  );
}
