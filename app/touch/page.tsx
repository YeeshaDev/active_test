"use client";

import { useEffect, useRef, TouchEvent } from "react";

export default function TouchGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Constants for the grid layout
  const boxSize = 24; // size of each box

  // Handle canvas setup and resizing
  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas === null) {
      console.error("Failed to get canvas element");
      return;
    }

    const context = canvas.getContext("2d");

    if (context === null) {
      console.error("Failed to get canvas context");
      return;
    }
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid(context); // Redraw grid when resized
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Function to draw grid on the canvas
  const drawGrid = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    // Calculate the number of rows and columns based on canvas size and box size
    const numRows = Math.floor(context.canvas.height / boxSize);
    const numCols = Math.floor(context.canvas.width / boxSize);

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        context.strokeStyle = "#000";
        context.lineWidth = 0.5;
        context.strokeRect(col * boxSize, row * boxSize, boxSize, boxSize);
      }
    }
  };

  // Function to handle touch events
  const handleTouch = (
    e: TouchEvent<HTMLCanvasElement> 
  ) => {
     const canvas = canvasRef.current;
     
    if (canvas === null) {
      console.error("Failed to get canvas element");
      return;
    }
     
     const context = canvas.getContext("2d");
     
    if (context === null) {
      console.error("Failed to get canvas context");
      return;
    }
     
    const rect = canvas.getBoundingClientRect();

    // Check if the event is a TouchEvent
     if(!("touches" in e)) {
      return;
    }
      // Get touch coordinates
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
     const y = touch.clientY - rect.top;
     
      // Calculate which box was touched
      const row = Math.floor(y / boxSize);
      const col = Math.floor(x / boxSize);

      // Highlight the touched box
      context.fillStyle = "rgba(0, 255, 0, 0.5)";
      context.fillRect(col * boxSize, row * boxSize, boxSize, boxSize);
    
     // Redraw the grid to keep the lines visible
    context.strokeStyle = "#000";
    context.lineWidth = 0.5;
    context.strokeRect(col * boxSize, row * boxSize, boxSize, boxSize);
  };

  return (
    <div>
      <canvas
        className="bg-slate-100"
        ref={canvasRef}
        id="touchGridCanvas"
        onTouchStart={handleTouch}
        onTouchMove={handleTouch}
        style={{ touchAction: "none" }} // Disable default touch behaviors
      />
    </div>
  );
}
