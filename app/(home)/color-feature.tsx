"use client";

import Button from "@/components/button";
import { PaintBrushIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Colors from "./colors";
import { useSetAtom } from "jotai";
import { currentColorAtom } from "@/lib/atoms/themes";
import { DEFAULT_RESET_COLOR, INITIAL_COLOR } from "@/constants/constants";

export default function ColorFeature() {
  const [isClosed, setIsClosed] = useState(false);
  const setCurrentColor = useSetAtom(currentColorAtom);

  const handleOpenModal = () => {
    // We only set the initial color when opening the modal
    setCurrentColor(INITIAL_COLOR); 
    setIsClosed(true);
  };

  const handleCloseModal = () => {
    setCurrentColor(DEFAULT_RESET_COLOR); 
    setIsClosed(false);
  };

  return (
    <>
      <Button
        className="bg-[#1181ED] text-sm font-medium rounded-3xl w-full text-white py"
        onClick={handleOpenModal}
      >
        <div className="flex items-center gap-4">
          <PaintBrushIcon className="w-5 h-5" />
          Color test
        </div>
      </Button>
      {isClosed && <Colors onBackClick={handleCloseModal} />}
    </>
  );
}