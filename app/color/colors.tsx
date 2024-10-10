"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Colors() {
  const router = useRouter();
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
      className="min-h-screen flex items-start justify-start"
      style={{ backgroundColor: colors[currentColorIndex] }}
      onClick={handleScreenClick}
    >
      {/* Icon to navigate to the previous page */}
      <div className="p-4">
        <button
          onClick={router.back}
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
