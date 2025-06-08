"use client";
import { Bounded } from "@/app/[locale]/components/Biounded";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const { t, i18n } = useTranslation();

  const whyus = [
    {
      heading: t("home.whyUs.section1.title"),
      body: t("home.whyUs.section1.content"),
    },
    {
      heading: t("home.whyUs.section2.title"),
      body: t("home.whyUs.section2.content"),
    },
  ];

  return (
    <Bounded className="whyus alternating-text-container relative my-10">
      <div>
        <div className={`relative z-0 grid px-7`}>
          {isDesktop && (
            <View
              className={`alternating-text-view absolute ${!isDesktop ? "-top-72" : "top-0"} left-0 h-screen w-full`}
            >
              <Scene />
            </View>
          )}

          <div className="mt-12 w-full text-center text-4xl font-bold text-white max-sm:text-2xl">
            {t("home.whyUs.title")}
          </div>
          <div className="relative hidden h-[250px] w-[310px] max-sm:block">
            <Image
              src={"/images/tablet1.png"}
              alt={"tablet1"}
              fill
              className={"object-cover"}
              priority
            />
          </div>
          {whyus.map((item, index) => (
            <div
              key={index}
              className="alternating-section relative grid h-screen place-items-center gap-y-24 gap-x-12 max-sm:h-auto md:grid-cols-2"
            >
              {/* Yellow circle gradient */}
              <div
                className={clsx(
                  !isDesktop
                    ? ""
                    : "h-70 w-70 rounded-full bg-[#eccc68]/100 opacity-60 blur-3xl",
                  "absolute z-0",
                  index % 2 === 0
                    ? `top-1/2 ${i18n.language === "en" ? "right-10" : "left-10"} -translate-y-1/2`
                    : `top-1/2 ${i18n.language === "en" ? "left-10" : "right-10"} -translate-y-1/2`
                )}
              />

              {/* Content */}
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "z-10 rounded-lg p-4 px-12 backdrop-blur-lg max-md:bg-white/10"
                )}
              >
                <div className="mb-9 text-4xl font-bold text-white max-sm:text-2xl">
                  {index % 2 == 0 ? ( t("home.whyUs.section1.title") ) : (
                  t("home.whyUs.section2.title") )}
                </div>
                <div className="text-justify text-gray-300">
                  {index % 2 == 0 ? ( t("home.whyUs.section1.content") ) : (
                  t("home.whyUs.section2.content") )}
                </div>
              </div>

              {/* Insert Image Between First and Second Section */}
              {index === 0 && (
                <div className="relative flex hidden justify-center max-sm:block">
                  <div className="relative h-[250px] w-[310px]">
                    <Image
                      src="/images/tablet2.png"
                      alt="Between Sections"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default WhyUs;
