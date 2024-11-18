'use client';

import { currentColorAtom } from "@/lib/atoms/themes";
import { useAtom } from "jotai";
import { useEffect } from "react";
import type { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentColor] = useAtom(currentColorAtom);

  useEffect(() => {
    // Handle both the initial and other color changes
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', currentColor || '#ffffff');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = currentColor || '#ffffff';
      document.head.appendChild(meta);
    }
  }, [currentColor]);

  return <main>{children}</main>;
}