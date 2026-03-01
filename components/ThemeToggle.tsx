"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] transition-opacity duration-300 opacity-100 dark:opacity-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-opacity duration-300 opacity-0 dark:opacity-100" />
    </button>
  );
}
