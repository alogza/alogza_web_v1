"use client";
import { Bounded } from "@/app/[locale]/components/Biounded";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useStore } from "@/hooks/useStore";
import { useTranslation } from "react-i18next";
import Image from "next/image";
interface HeroHeaderProps {
  backgroundImage: string;
  heading: {
    main: string;
    highlight?: string;
  };
  subheading: string;
  laptopImage: string;
}

const HeroHeader = ({
  backgroundImage,
  heading,
  subheading,
  laptopImage,
}: HeroHeaderProps) => {
  const ready = useStore((state) => state.ready);

  useGSAP(
    () => {
      const introTl = gsap.timeline({});
      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.1,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            y: 30,
            opacity: 0,
          },
          "+=.8"
        )
        .from(".hero-CTA", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.5,
        })
        .from(".hero-partners", {
          opacity: 0,
          y: 10,
          ease: "power4.in",
          stagger: 1,
        });
    },
    { dependencies: [ready] }
  );
  const { i18n } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      {/* <div className="absolute inset-0 -z-[1] h-full w-full border-2 opacity-10">
        <MatrixEffect />
      </div> */}
      {/* Background image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {i18n.language === "en" ? (
          <div className="absolute -top-10 -right-34 h-full w-full max-w-[1200px] max-md:right-0 2xl:right-0 max-sm:relative max-sm:h-[80vh] max-sm:top-[20vh]">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              priority
              className="object-cover"
            />
          </div>
        ) : (
          <div className="absolute -top-10 -left-34 h-full w-full max-w-[1200px] max-md:left-0 2xl:left-0 max-sm:relative max-sm:h-[80vh] max-sm:top-[20vh] ">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              priority
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* Yellow gradient background */}
      <div className="absolute top-1/4 right-1/4 z-0 h-[600px] w-[600px] -translate-y-1/2 transform rounded-full bg-[#eccc68]/20 blur-3xl max-sm:hidden"></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <Bounded className="hero w-full opacity-0">
        <div className="relative">
          <div className="relative z-10 container mx-auto flex h-[650px] flex-col justify-between px-4 pb-32 md:pb-24">
            <div className="grid items-center gap-8 pt-28 md:grid-cols-2">
              {/* Left content column */}
              <div className="flex flex-col space-y-[28px]">
                {/* Main heading */}
                <div className="text-4xl leading-[1.3] font-bold text-white md:text-5xl">
                  <div className="inline-flex">
                    <h1 className="hero-header-word">
                      {heading.main} <br />
                      <strong
                        className={`font-alogza ${heading.highlight ? "hero-header-word" : ""} text-[#eccc68]`}
                      >
                        {heading.highlight}
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* Details text */}
                <div className="hero-subheading max-w-lg text-gray-300">
                  <p className="text-justify text-base md:text-lg">
                    {subheading}
                  </p>
                </div>
              </div>
              {/* Right image column */}
              <div className="hero-header-word flex items-center justify-center">
                <div className="relative w-full h-[400px] max-sm:h-[250px]">
                  <Image
                    src={laptopImage}
                    alt="Laptop"
                    fill
                    priority
                    className="relative z-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </div>
  );
};

export default HeroHeader;
