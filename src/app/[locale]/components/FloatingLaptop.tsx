"use client";
import React, { forwardRef, ReactNode } from "react";
import { AlogzaLaptop, LaptopProps } from "./AlogzaLaptop";
import { Float } from "@react-three/drei";
import { Group } from "three";

type FloatingLaptopProps = {
  screen?: LaptopProps["screen"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatingIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingLaptop = forwardRef<Group, FloatingLaptopProps>(
  (
    {
      screen = "codeScreen",
      floatSpeed = 1.5,
      rotationIntensity = 0.6,
      floatingIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed} // Animation speed, defaults to 1
          rotationIntensity={rotationIntensity} // XYZ rotation intensity, defaults to 1
          floatIntensity={floatingIntensity} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={floatingRange} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          {children}
          <AlogzaLaptop scale={0.25} screen={screen} />
        </Float>
      </group>
    );
  },
);
FloatingLaptop.displayName = "FloatingLaptop";
export default FloatingLaptop;
