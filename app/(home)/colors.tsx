"use client";

import { currentColorAtom } from "@/lib/atoms/themes";
import { useAtom } from "jotai";
import { useId } from "react";

export interface ColorsProps {
  readonly onBackClick: () => void;
}

export default function Colors({ onBackClick }: ColorsProps) {
  const colorElementId = useId();

  // Array of 7 testing colors
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#000000",
  ];
  const [currentColor, setCurrentColor] = useAtom(currentColorAtom);

  // Function to cycle through the colors on screen click
  const handleScreenClick = () => {
    const currentIndex = colors.includes(currentColor ?? '') 
  ? colors.indexOf(currentColor ?? '')
  : -1;
    const nextIndex = (currentIndex + 1) % colors.length;
    setCurrentColor(colors[nextIndex]);
  };

  const handleBackClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBackClick();
  };

  return (
    <div
      id={colorElementId}
      className="absolute z-50 top-0 left-0 min-h-screen w-screen"
      style={{ backgroundColor: currentColor ?? colors[0] }}
      onClick={handleScreenClick}
    >
      <div className="p-4">
        <button
          onClick={handleBackClick}
          aria-label="Go back"
          className="text-white text-2xl p-2 rounded focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}