"use client";

import { useEffect, useRef } from "react";

export default function MatrixEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    const characters = "ALOGZA";

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0,0,0,0.05";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length),
        );
        ctx.fillText(text, i * fontSize, drops [i] * fontSize);

        if(drops[i] * fontSize > canvas.height && Math.random()> 0.95){
            drops[i] = 0;
        }
        drops[i] ++;
      }
    }

    const intervalId = setInterval(draw, 33);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
