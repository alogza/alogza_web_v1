"use client";
import React, { forwardRef, ReactNode } from "react";
import { Float } from "@react-three/drei";
import { Group } from "three";
import { AlogzaTab, TabProps } from "./AlogzaTab";

type FloatingTabProps = {
  screen?: TabProps["screen"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatingIntensity?: number;
  floatingRange?: [number, number];
  screenOffset?: number;
  children?: ReactNode;
};

const FloatingTab = forwardRef<Group, FloatingTabProps>(
  (
    {
      screen = "codeScreen",
      floatSpeed = 1.5,
      rotationIntensity = 0.6,
      floatingIntensity = 1,
      floatingRange = [-0.1, 0.1],
      screenOffset = 0.095,
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
          <AlogzaTab scale={0.5} screen={screen} screenOffset={screenOffset}/>
        </Float>
      </group>
    );
  },
);
FloatingTab.displayName = "FloatingTab";
export default FloatingTab;
