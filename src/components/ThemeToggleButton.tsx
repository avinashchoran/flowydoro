"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-lg p-2 rounded-lg focus:bg-[#3c3b53] text-white"
      aria-label="Toggle theme"
      type="button"
    >
      {resolvedTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}