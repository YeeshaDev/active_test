"use client";

import { useState } from "react";
import { FingerPrintIcon } from "@heroicons/react/20/solid";
import Button from "@/components/button";
import Touch from "./touch";

export default function TouchFeature() {
  const [isTouchOpen, setIsTouchOpen] = useState(false);

  const handleTouchOpen = () => {
    setIsTouchOpen(true);
  };

  const handleTouchClose = () => {
    setIsTouchOpen(false);
  };

  return (
    <>
      <Button
        className="bg-[#1181ED] text-sm font-medium rounded-3xl w-full text-white py"
        onClick={handleTouchOpen}
      >
        <div className="flex items-center gap-4">
          <FingerPrintIcon className="w-5 h-5" />
          Touch test
        </div>
      </Button>
      {isTouchOpen && <Touch onExitClick={handleTouchClose} />}
    </>
  );
}
