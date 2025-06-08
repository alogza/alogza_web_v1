"use client";

import FloatingTab from "@/app/[locale]/components/FloatingTab";
import { Environment } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function Scene() {
  const tabRef = useRef<Group>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const [screenOffset, setScreenOffset] = useState(0.095);
  const { i18n } = useTranslation();


  useGSAP(
    () => {
      if (!tabRef.current) return;

      const sections = gsap.utils.toArray(".alternating-section");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".alternating-text-view",
          endTrigger: ".alternating-text-container",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress; // 0 to 1
            const min = 0.095;
            const max = 0.6;
            const offset = min + (max - min) * progress;

            setScreenOffset(offset);
          },
        },
      });

      const isArabic = i18n.language === "ar";
      // Set initial position based on language
      if (tabRef.current) {
        const isArabic = i18n.language === "ar";

        // Start from the left if Arabic, right if otherwise
        tabRef.current.position.x = isDesktop ? (isArabic ? -1 : 1) : 0;

        // Start with corresponding Y rotation
        tabRef.current.rotation.y = isDesktop ? (isArabic ? 0.4 : -0.4) : 0;
      }

      sections.forEach((_, index) => {
        if (!tabRef.current) return;
        if (index === 0) return;

        const isOdd = index % 2 !== 0;

        // ⬅️ Flip direction for Arabic layout
        let xPosition = isDesktop ? (isOdd ? -1 : 1) : 0;
        if (isArabic) {
          xPosition *= -1;
        }

        scrollTl
          .to(tabRef.current.position, {
            x: xPosition,
            ease: "circ.inOut",
            delay: 0.5,
          })
          .to(
            tabRef.current.rotation,
            {
              y: isArabic
              ? isOdd
                ? -0.4
                : 0.4 // flip direction in Arabic
              : isOdd
                ? 0.4
                : -0.4,
                              ease: "back.inOut",
            },
            "<",
          );
      });
    },
    { dependencies: [isDesktop, i18n.language] }
  );

  return (
    <group ref={tabRef} position-x={isDesktop ? 1 : 0} rotation-y={-0.3}>
      <FloatingTab screen={"Whyus"} screenOffset={screenOffset} />
      <Environment files="/hdr/field.hdr" environmentIntensity={1.5} />
    </group>
  );
}
