"use client";
import AiDevelopmentProcess from "./AiDevelopmentStages";
import AiStaircaseConcept from "./AiGeneralInfoM";
import AiRelatedProjectsStandalone from "./AiRelateed_Projects";
import AiFeatures from "./AiFeatures";
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
            main: t("servicesPage.aiSolutions.hero.title"),
            highlight: "ALOGZA",
          }}
          subheading={t("servicesPage.aiSolutions.hero.subtitle")}
          laptopImage="/services/SFA_Chatbot.png"
        />
      </Suspense>

      <AiStaircaseConcept />
      <AiDevelopmentProcess />
      <AiRelatedProjectsStandalone />

      <AiFeatures />
    </>
  );
}
