'use client';

import { currentColorAtom } from "@/lib/atoms/themes";
import { useAtom } from "jotai";
import { useEffect } from "react";
import type { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export const INITIAL_COLOR = '#FF0000';
export const DEFAULT_RESET_COLOR = '#ffffff';

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentColor] = useAtom(currentColorAtom);

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]') || (() => {
      const tag = document.createElement('meta');
      tag.name = 'theme-color';
      return tag;
    })();

    try {
      meta.setAttribute('content', currentColor || DEFAULT_RESET_COLOR);
      if (!meta.parentElement) {
        document.head?.appendChild(meta);
      }
    } catch (error) {
      console.error('Unable to update theme color:', error);
    }

    return () => {
      if (meta.parentElement === document.head) {
        meta.remove();
      }
    };
  }, [currentColor]);

  return <main>{children}</main>;
}