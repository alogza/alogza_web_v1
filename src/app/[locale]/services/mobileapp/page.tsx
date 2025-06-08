"use client";
import MobileAppDevelopmentProcess from "./MobileDevelopmentStages";
import StaircaseConcept from "./MobileGeneralInfoM";
import RelatedProjectsStandalone from "./MobileRelateed_Projects";
import MobileFeatures from "./MobileFeatures";
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
            main: t("servicesPage.mobileApp.hero.title"),
            highlight: "Alogza",
          }}
          subheading={t("servicesPage.mobileApp.hero.subtitle")}
          laptopImage="/services/MobileApp_Homepage.png"
        />
      </Suspense>
      <StaircaseConcept />
      <MobileAppDevelopmentProcess />
      <RelatedProjectsStandalone />

      <MobileFeatures />
    </>
  );
}
