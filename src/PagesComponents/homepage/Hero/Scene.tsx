"use client";

import FloatingLaptop from "@/app/[locale]/components/FloatingLaptop";
import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useStore } from "@/hooks/useStore";
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(useGSAP);


const Scene = () => {
  let xPosStart = 1;
  let xPosEnd = 1;
  const isReady = useStore((state) => state.isReady);
  const { i18n } = useTranslation();

  if (i18n.language === 'ar') {
    // Arabic is selected
    xPosStart=-1;
    xPosEnd=-1.4;
  } else if (i18n.language === 'en') {
    // English is selected
    xPosStart=1;
    xPosEnd=1.4;

  }
  const laptop1Ref = useRef<Group>(null);
  const groupRef = useRef<Group>(null);
  const FLOAT_SPEED = 1;
  useGSAP(() => {
    if (!laptop1Ref.current) return;

    isReady();

    gsap.set(laptop1Ref.current.position, { x: xPosEnd });
    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });
    introTl.from(laptop1Ref.current.position, { y: -5, x: xPosStart }, 0);
  });

  return (
    <group ref={groupRef}>
      <FloatingLaptop
        ref={laptop1Ref}
        screen="codeScreen"
        floatSpeed={FLOAT_SPEED}
      ></FloatingLaptop>
      <Environment files="/hdr/field.hdr" environmentIntensity={1} />
    </group>
  );
};

export default Scene;
