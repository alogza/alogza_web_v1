"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import type React from "react";
import { type MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  imageUrl,
  ...props
}: {
  radius?: number;
  color?: string;
  imageUrl?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Motion mask template
  const imageMask = useMotionTemplate`
    radial-gradient(
      ${radius}px circle at ${mouseX}px ${mouseY}px,
      white,
      transparent 80%
    )
  `;

  const colorMask = useMotionTemplate`
    radial-gradient(
      ${radius}px circle at ${mouseX}px ${mouseY}px,
      transparent 40%,
      white 80%
    )
  `;

  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800 overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Background image with dark overlay */}
      {imageUrl && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${imageUrl})`,
            filter: "brightness(0.6) contrast(1.2)",
            maskImage: imageMask,
            WebkitMaskImage: imageMask,
          }}
        />
      )}

      {/* Colored spotlight effect */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-50"
        style={{
          backgroundColor: color,
          maskImage: colorMask,
          WebkitMaskImage: colorMask,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [255, 215, 0], // Gold (#FFD700)
              [255, 193, 7], // Amber (#FFC107)
            ]}
            dotSize={3}
          />
        )}
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
