"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: ComponentProps<"button">) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "border-input rounded-full bg-transparent shadow-none focus-visible:border-0 focus-visible:ring-0",
        className,
      )}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
      <Moon className="hidden h-[1.2rem] w-[1.2rem] transition-all dark:block" />
    </Button>
  );
}
