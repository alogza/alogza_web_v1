"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import LinkWithLoading from "@/app/[locale]/components/LinkWithLoading";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Services = () => {
  const [currentService, setCurrentService] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const prevServiceRef = useRef(0);
  const directionRef = useRef<"next" | "prev">("next");
  const { i18n, t } = useTranslation();
  const SERVICES = [
    {
      title: t("home.services.webDevelopment.title"),
      description: t("home.services.webDevelopment.description"),
      features: t("home.services.webDevelopment.points", {
        returnObjects: true,
      }) as string[],
      image: "/services/Website_Homepage.png",
      url: "/services/website",
    },
    {
      title: t("home.services.mobileApps.title"),
      description: t("home.services.mobileApps.description"),
      features: t("home.services.mobileApps.points", {
        returnObjects: true,
      }) as string[],
      image: "/services/MobileApp_Homepage.png",
      url: "/services/mobileapp",
    },
    {
      title: t("home.services.chatbots.title"),
      description: t("home.services.chatbots.description"),
      features: t("home.services.chatbots.points", {
        returnObjects: true,
      }) as string[],
      image: "/services/SFA_Chatbot.png",
      url: "/services/ai",
    },
    {
      title: t("home.services.games.title"),
      description: t("home.services.games.description"),
      features: t("home.services.games.points", {
        returnObjects: true,
      }) as string[],
      image: "/services/Game_Development.png",
      url: "/services/game",
    },
    {
      title: t("home.services.consultancy.title"),
      description: t("home.services.consultancy.description"),
      features: t("home.services.consultancy.points", {
        returnObjects: true,
      }) as string[],
      image: "/services/IT_Consultant.png",
      url: "/services/itconsultancy",
    },
    {
      title: t("home.services.uxui.title"),
      description: t("home.services.uxui.description"),
      features: t("home.services.uxui.points", {
        returnObjects: true,
      }) as string[],
      image: "/services/UiDesign.png",
      url: "/services/design",
    },
  ];
  const animateSlider = useCallback(
    (direction: "next" | "prev") => {
      const container = imageContainerRef.current;
      if (!container) return;

      const currentImg = container.children[currentService];
      const prevImg = container.children[prevServiceRef.current];

      const tl = gsap.timeline();
      const fromX = direction === "next" ? "100%" : "-100%";
      const toX = direction === "next" ? "-50%" : "50%";

      tl.to(
        prevImg,
        {
          x: toX,
          scale: 0.8,
          opacity: 0.5,
          filter: "blur(8px)",
          duration: 0.8,
          ease: "power3.out",
        },
        0
      );

      tl.fromTo(
        currentImg,
        { x: fromX, scale: 0.8, opacity: 0, filter: "blur(8px)" },
        {
          x: "0%",
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
        0
      );

      tl.to(
        ".text-wrapper",
        {
          y: 20,
          opacity: 0,
          duration: 0.2,
        },
        0
      ).to(
        ".text-wrapper",
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
        },
        0.3
      );
    },
    [currentService]
  );

  const handleNext = () => {
    prevServiceRef.current = currentService;
    directionRef.current = "next";
    setCurrentService((prev) => (prev + 1) % SERVICES.length);
  };

  const handlePrev = () => {
    prevServiceRef.current = currentService;
    directionRef.current = "prev";
    setCurrentService((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  useEffect(() => {
    animateSlider(directionRef.current);
  }, [currentService, animateSlider]);

  const service = SERVICES[currentService];

  return (
    <section className="relative overflow-hidden bg-black px-4 pt-24 text-white sm:px-6 md:px-8 lg:px-16">
      {/* <WavyCircles className="absolute top-1/2 left-1/2 h-[70vmin] translate-x-10 -translate-y-1/2 text-[#AB8101]" /> */}
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-4 inline-block w-auto text-center text-4xl font-bold max-sm:text-2xl max-sm:w-full sm:text-4xl lg:mb-2 lg:text-left lg:text-4xl">
          {t("home.services.heading.title")}
        </div>
        {/* Description on large screens only */}
        <div className="hidden lg:block">
          <div className="w-[70%] text-sm sm:text-base md:text-lg">
            {t("home.services.heading.description")}
          </div>
        </div>

        {/* Description on small/medium screens */}
        <div className="mb-6 block lg:hidden">
          <div className="text-justify text-sm sm:text-base md:text-lg">
            {t("home.services.heading.description")}
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="relative z-10 order-2 space-y-8 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-wrapper text-4xl font-bold text-[#eccc68] max-sm:text-2xl">
                {service.title}
              </h3>
              <p className="text-wrapper text-sm sm:text-base md:text-lg">
                {service.description}
              </p>

              <ul className="text-wrapper space-y-2">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm sm:text-base"
                  >
                    <span className="mt-0.5 text-xl text-[#eccc68]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <LinkWithLoading
                href={service.url}
                className="inline-block shrink-0 rounded-xl bg-[#eccc68] px-5 py-2 text-sm font-medium
                 text-black transition-all hover:scale-105 hover:bg-gray-200 max-sm:mt-4 max-sm:w-full max-sm:rounded-xl max-sm:text-center"
              >
                {t("home.projects.items.readMore")}
              </LinkWithLoading>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative order-1 h-[300px] w-full sm:h-[400px] md:h-[500px] lg:order-2 lg:h-[500px]">
            <div className="absolute top-[90%] z-50 flex w-full justify-between px-4 sm:top-[45%]">
              <button
                onClick={i18n.language === "ar" ? handleNext : handlePrev}
                className="rounded-full border border-gray-700 bg-black/30 p-2 backdrop-blur-sm transition-colors hover:bg-gray-800"
                aria-label="Previous service"
              >
                {i18n.language === "ar" ? (
                  <ChevronRight className="h-6 w-6 text-gray-300" />
                ) : (
                  <ChevronLeft className="h-6 w-6 text-gray-300" />
                )}
              </button>
              <button
                onClick={i18n.language === "ar" ? handlePrev : handleNext}
                className="rounded-full border border-gray-700 bg-black/30 p-2 backdrop-blur-sm transition-colors hover:bg-gray-800"
                aria-label="Next service"
              >
                {i18n.language === "ar" ? (
                  <ChevronLeft className="h-6 w-6 text-gray-300" />
                ) : (
                  <ChevronRight className="h-6 w-6 text-gray-300" />
                )}
              </button>
            </div>

            <div
              ref={imageContainerRef}
              className="absolute inset-0 flex items-center"
            >
              {SERVICES.map((service, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${(index - currentService) * 100}%)`,
                    scale: index === currentService ? 1 : 0.8,
                    opacity: index === currentService ? 1 : 0.5,
                    filter: index === currentService ? "none" : "blur(8px)",
                  }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain object-center sm:object-left"
                      priority={index === currentService}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
