"use client";
import { Bounded } from "@/app/[locale]/components/Biounded";
import YellowBG from "../../../../public/images/YellowBG.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import MatrixEffect from "@/app/[locale]/components/MatrixEffect";
import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Component for "Hero" Slices.
 */

export const Hero = () => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const { t, i18n } = useTranslation();
  const englishPdfUrl = "/booklet/Alogza_Booklet_EN.pdf";
  const arabicPdfUrl = "/booklet/Alogza_Booklet_AR.pdf";
  const handleDownload = () => {
    // Determine which PDF to download based on locale
    const pdfUrl = i18n.language === "ar" ? arabicPdfUrl : englishPdfUrl;

    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `Alogza_Booklet-${i18n.language || "en"}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
 };


  useGSAP(
    () => {
      if (!ready && isDesktop) return;
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
      //   scrollTl.fromTo("body",{
      //     backgroundColor:"#000000"
      //   },{
      //     backgroundColor:"#222222",
      //     overwrite: "auto"
      //   },
      //   1,
      // )
    },
    { dependencies: [ready, isDesktop] }
  );

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-[1] h-full w-full border-2 opacity-10">
        <MatrixEffect />
      </div>
      {/* Background image */}
      <div className="absolute inset-0 z-0 h-full w-full ">
        <div
          className={`relative ${
            i18n.language === "en"
              ? "-right-120 -top-10 max-[1180px]:-right-80 max-md:-right-0 max-md:-top-40 2xl:-right-110"
              : "-left-120 -top-10 max-[1180px]:-left-80 max-md:-left-0 max-md:top-40 2xl:-left-110 "
          }  h-full  max-sm:relative max-sm:h-[80vh] max-sm:top-[55vh] `}
          style={{ maxWidth: "1200px" }}
        >
          <Image
            src={YellowBG}
            alt="Background"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            quality={90}
          />
        </div>
      </div>

      {i18n.language === "en" ? (
        <div className="absolute top-1/2 right-1/4 z-0 h-[800px] w-[800px] -translate-y-1/2 transform rounded-full bg-[#eccc68]/20 blur-3xl"></div>
      ) : (
        <div className="absolute top-1/2 left-1/4 z-0 h-[800px] w-[800px] -translate-y-1/2 transform rounded-full bg-[#eccc68]/20 blur-3xl"></div>
      )}
      <Bounded className="hero w-full opacity-0">
        {isDesktop && (
          <View
            className={`hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block`}
          >
            <Scene />
          </View>
        )}
        <div className="relative min-h-[calc(100vh-80px)]">
          <div className="relative z-10 container mx-auto flex h-auto min-h-[calc(100vh-80px)] flex-col justify-between px-4 pb-32 md:pb-24">
            <div className="grid items-center gap-8 pt-28 md:grid-cols-2">
              {/* Left content column */}
              <div className="flex flex-col space-y-[28px]">
                {/* Discover Alogza pill */}
                <div className="hero-subheading inline-flex self-start">
                  <div className="rounded-full border border-yellow-500/50 bg-yellow-500/20 px-3 py-1">
                    <div className="flex items-center space-x-2">
                      <span className="rounded-full bg-[#eccc68] px-2 py-0.5 text-xs font-semibold text-black">
                        {t("home.hero.new")}
                      </span>
                      <div className="font-medium text-[#eccc68]">
                        <p className="text-sm"> {t("home.hero.discover")}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Main heading */}
                <div className="text-4xl font-bold text-white md:text-5xl">
                  {/* <TextSplitter
                    text={asText(slice.primary.heading)}
                    wordDisplayStyle="inline-block"
                  /> */}
                  {/* <TextSplitter
                  text={"Boost your Business with Alogza"}
                  wordDisplayStyle="inline-block"
                  className="hero-header-word"
                  /> */}
                  <div className="inline-flex">
                    <h1 className="hero-header-word">
                      {t("home.hero.title1")} <br />
                      {t("home.hero.title2")}{" "}
                      <strong className="font-alogza hero-header-word text-[#eccc68]">
                        Alogza
                      </strong>
                    </h1>
                  </div>
                </div>
                {/* Details text */}
                <div className="hero-subheading max-w-lg text-gray-300 ">
                  {t("home.hero.subtitle")}
                </div>
                {/* CTA section */}
                <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center">
                  {/* Bordered text */}
                  <div className="hero-CTA rounded-md border border-gray-600 px-4 py-2 text-gray-300">
                    {t("home.hero.button.label")}
                  </div>

                  <button
                    onClick={handleDownload}
                    className="hero-button rounded-md bg-[#eccc68] px-6 py-2 font-medium text-black transition-colors hover:bg-gray-100"
                  >
                    {t("home.hero.button.download")}
                  </button>
                </div>
              </div>
              {/* Right image column */}
              <div className="flex items-center justify-center">
                <div className="relative hidden w-full h-[300px] max-w-md max-md:block ">
                  <Image
                    src="/images/laptop.png"
                    alt="Hero Image"
                    className="relative z-10 object-contain"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Partners section - Fixed positioning for all screen sizes */}
            <div className="w-full max-sm:mt-auto">
              <div className="container mx-auto px-4 sm:px-6 w-[50%]">
                <div className="hero-partners mb-3 text-center text-base text-white sm:mb-4 sm:text-sm">
                  {t("home.hero.follow")}
                </div>

                {/* Social Media Icons */}
                <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 md:flex-row md:justify-between md:gap-8">
                  <a
                    href="https://www.youtube.com/@alogza.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-partners flex items-center text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                      viewBox="0 0 576 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.7 124.1c-6.3-24-25-42.7-49-49C456.5 64 288 64 288 64s-168.5 0-212.7 11.1c-24 6.3-42.7 25-49 49C16 168.3 16 256 16 256s0 87.7 10.3 131.9c6.3 24 25 42.7 49 49C119.5 448 288 448 288 448s168.5 0 212.7-11.1c24-6.3 42.7-25 49-49C560 343.7 560 256 560 256s0-87.7-10.3-131.9zM232 334V178l142 78-142 78z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/alogza.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-partners flex items-center text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05H8v-2.9h2.5V9.8c0-2.48 1.49-3.85 3.77-3.85 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56v1.88H17l-.4 2.9h-2.1v7.05A10 10 0 0 0 22 12z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/alogza.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-partners flex items-center text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </a>

                  <a
                    href="https://x.com/alogza_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-partners flex items-center text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/alogza.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-partners flex items-center text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.028-3.037-1.849-3.037-1.849 0-2.131 1.445-2.131 2.939v5.667H9.36V9h3.414v1.561h.05c.476-.9 1.637-1.848 3.368-1.848 3.599 0 4.262 2.368 4.262 5.452v6.287zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.07 0-1.143.925-2.07 2.069-2.07 1.144 0 2.07.927 2.07 2.07 0 1.144-.926 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.729C24 .771 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </div>
  );
};

export default Hero;
