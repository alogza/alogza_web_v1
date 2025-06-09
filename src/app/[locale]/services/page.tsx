"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import HeroHeader from "../components/HeroHeader";
import { PinContainer } from "../components/ui/3d-pin";
import { Suspense } from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import { useLocalePath } from "@/utils/localPath";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const localePath = useLocalePath();
  // Sample project data for the pins
  const pinnedProjects = [
    {
      id: "modern_web",
      title: t("servicesPage.categories.Web"),
      description:
        "We build fast, secure, and scalable websites tailored to your business—corporate sites, e-commerce, and web apps included.",
      color: "from-blue-500 via-blue-400 to-cyan-300",
      href: "/services/website",
      image: "/services/Website_Homepage.png",
    },
    {
      id: "mobile_app",
      title: t("servicesPage.categories.App"),
      description:
        "We build fast, secure, and user-friendly mobile apps for iOS, Android, and cross-platform use.",
      color: "from-blue-500 via-blue-400 to-cyan-300",
      href: "/services/mobileapp",
      image: "/services/MobileApp_Homepage.png",
    },
    {
      id: "ai_app",
      title: t("servicesPage.categories.AI"),
      description:
        "Our smart chatbots automate support and boost engagement with real-time, database-connected conversations.",
      color: "from-blue-500 via-blue-400 to-cyan-300",
      href: "/services/ai",
      image: "/services/SFA_Chatbot.png",
    },
    {
      id: "game_dev",
      title: t("servicesPage.categories.Game"),
      description:
        "We create immersive games using AI and AR, tailored for mobile, PC, and simulation experiences.",
      color: "from-blue-500 via-blue-400 to-cyan-300",
      href: "/services/game",
      image: "/services/Game_Development.png",
    },
    {
      id: "it_consultancy",
      title: t("servicesPage.categories.Consultancy"),
      description:
        "Get expert guidance to improve security, scalability, and performance of your IT systems.",
      color: "from-blue-500 via-blue-400 to-cyan-300",
      href: "/services/itconsultancy",
      image: "/services/IT_Consultant.png",
    },
    {
      id: "ux_ui",
      title: t("servicesPage.categories.Design"),
      description:
        "We design intuitive, user-focused interfaces that boost usability and customer satisfaction.",
      color: "from-blue-500 via-blue-400 to-cyan-300",
      href: "/services/design",
      image: "/services/UiDesign.png",
    },
  ];

  return (
    <>
      <Suspense fallback={<LoadingOverlay />}>
        <HeroHeader
          backgroundImage="/images/YellowBG.png"
          heading={{
            main: t("servicesPage.hero.headline"),
            highlight: "Alogza",
          }}
          subheading={t("servicesPage.hero.subtext")}
          laptopImage="/services/Services.png"
        />
      </Suspense>
      <div className="flex flex-col min-h-screen w-full bg-black text-white">
        {/* Responsive Grid Layout */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-6 auto-rows-max">
            {pinnedProjects.map((project, index) => (
              
              <div key={index} className="flex items-center justify-center">
    <PinContainer
      key={project.id}
      title={project.title}
      href={localePath(project.href)}
    >
                  <div className="flex h-[17rem] w-[20rem] flex-col p-4 tracking-tight text-slate-100/50">
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title || "Project"}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <p className="!m-0 !p-0 text-base font-normal text-center w-full text-white">
                      {project.title}
                    </p>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
