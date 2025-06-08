"use client";
import GameDevelopmentProcess from "./GameDevelopmentStages";
import GameStaircaseConcept from "./GameGeneralInfoM";
import GameRelatedProjectsStandalone from "./GameRelateed_Projects";
import GameFeatures from "./GameFeatures";
import HeroHeader from "@/app/[locale]/components/HeroHeader";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import LoadingOverlay from "../../components/LoadingOverlay";
export default function MobileAppPage() {
  const { t } = useTranslation();
  return (
    <>
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
