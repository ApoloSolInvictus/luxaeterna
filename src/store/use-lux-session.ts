"use client";

import { useMemo, useState } from "react";

export function useLuxSession() {
  const [activePersona, setActivePersona] = useState("SophIA");
  const [isSharedMode, setIsSharedMode] = useState(true);

  return useMemo(
    () => ({
      activePersona,
      setActivePersona,
      isSharedMode,
      setIsSharedMode,
    }),
    [activePersona, isSharedMode],
  );
}
