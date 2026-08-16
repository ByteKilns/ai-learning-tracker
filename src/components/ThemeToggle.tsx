"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const CYCLE = ["light", "dark", "system"] as const;

const ICONS = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Button variant="outline" size="icon-sm" disabled aria-hidden />;
  }

  const current = (theme as (typeof CYCLE)[number]) ?? "system";
  const Icon = ICONS[current];

  function cycleTheme() {
    const nextIndex = (CYCLE.indexOf(current) + 1) % CYCLE.length;
    setTheme(CYCLE[nextIndex]);
  }

  return (
    <Button
      variant="outline"
      size="icon-sm"
      onClick={cycleTheme}
      aria-label={`Theme: ${current}. Click to change.`}
    >
      <Icon />
    </Button>
  );
}
