"use client";
import WebAppDevelopmentProcess from "./WebDevelopmentStages";
import WebStaircaseConcept from "./WebGeneralInfoM";
import WebRelatedProjectsStandalone from "./WebRelateed_Projects";
import WebFeatures from "./WebFeatures";
import HeroHeader from "@/app/[locale]/components/HeroHeader";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import LoadingOverlay from "../../components/LoadingOverlay";

export default function MobileAppPage() {
  const { t } = useTranslation();
  return (
    <>
      <Suspense fallback={<LoadingOverlay />}>
        <HeroHeader
          backgroundImage="/images/YellowBG.png"
          heading={{
            main: t("servicesPage.webDevelopment.hero.title"),
            highlight: "Alogza",
          }}
          subheading={t("servicesPage.webDevelopment.hero.subtitle")}
          laptopImage="/services/Website_Homepage.png"
        />
      </Suspense>
      <WebStaircaseConcept />
      <WebAppDevelopmentProcess />
      <WebRelatedProjectsStandalone />

      <WebFeatures />
    </>
  );
}
