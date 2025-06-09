"use client";
import AiDevelopmentProcess from "./AiDevelopmentStages";
import AiStaircaseConcept from "./AiGeneralInfoM";
import AiRelatedProjectsStandalone from "./AiRelateed_Projects";
import AiFeatures from "./AiFeatures";
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
            name: "AI Solutions & Integration Services - Alogza",
            description: "Advanced AI services including chatbot development, machine learning integration, and intelligent automation to power your business.",
            url: "https://www.alogza.com/services/ai",
            image: "/services/SFA_Chatbot.png",
            breadcrumb: [
                { name: "Home", item: "https://www.alogza.com" },
                { name: "Services", item: "https://www.alogza.com/services" },
                { name: "AI Solutions", item: "https://www.alogza.com/services/ai" }
            ]
        }} 
      />
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
