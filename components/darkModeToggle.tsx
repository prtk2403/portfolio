"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="bg-black text-white outline-none relative hover:bg-black hover:text-white"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-[20px] w-[20px]" />
      ) : (
        <SunIcon className="h-[20px] w-[20px]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
