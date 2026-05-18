"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AuthPanel() {
  return (
    <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-3">
      <SignedIn>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">Identity active</p>
            <p className="mt-1 text-xs text-ivory-light/46">Clerk session secured.</p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="w-full" variant="gold">
            <LogIn className="h-4 w-4" aria-hidden="true" />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
