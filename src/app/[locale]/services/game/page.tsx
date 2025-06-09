"use client";
import GameDevelopmentProcess from "./GameDevelopmentStages";
import GameStaircaseConcept from "./GameGeneralInfoM";
import GameRelatedProjectsStandalone from "./GameRelateed_Projects";
import GameFeatures from "./GameFeatures";
import HeroHeader from "@/app/[locale]/components/HeroHeader";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import LoadingOverlay from "../../components/LoadingOverlay";
import StructuredData from "@/components/StructuredData";


export default function MobileAppPage() {
  const { t } = useTranslation();
  return (
    <>
<StructuredData 
    type="ServicePage" 
    pageData={{
        name: "Game Development Services - Alogza",
        description: "Custom game development services including 2D/3D games, mobile and PC platforms, interactive experiences, and AI-powered gameplay solutions.",
        url: "https://www.alogza.com/services/game",
        breadcrumb: [
            { name: "Home", item: "https://www.alogza.com" },
            { name: "Services", item: "https://www.alogza.com/services" },
            { name: "Game Development", item: "https://www.alogza.com/services/game" }
        ]
    }} 
/>


      <Suspense fallback={<LoadingOverlay />}>
        {/* <Header /> */}
        <HeroHeader
          backgroundImage="/images/YellowBG.png"
          heading={{
            main: t("servicesPage.gameDevelopment.hero.title"),
            highlight: "Alogza",
          }}
          subheading={t("servicesPage.gameDevelopment.hero.subtitle")}
          laptopImage="/services/Game_Development.png"
        />{" "}
      </Suspense>

      <GameStaircaseConcept />
      <GameDevelopmentProcess />
      <GameRelatedProjectsStandalone />
      <GameFeatures />
    </>
  );
}
