"use client";

import Head from "next/head";
import { useId, useState } from "react";

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
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Function to cycle through the colors on screen click
  const handleScreenClick = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div
      id={colorElementId}
      className="absolute z-50 top-0 left-0 min-h-screen w-screen"
      style={{ backgroundColor: colors[currentColorIndex] }}
      onClick={handleScreenClick}
    >
      <Head>
        <meta name="theme-color" content={colors[currentColorIndex]} />
      </Head>
      <div className="p-4">
        <button
          onClick={onBackClick}
          className="text-white text-2xl p-2 rounded focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
