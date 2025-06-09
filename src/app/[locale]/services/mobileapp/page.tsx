"use client";
import MobileAppDevelopmentProcess from "./MobileDevelopmentStages";
import StaircaseConcept from "./MobileGeneralInfoM";
import RelatedProjectsStandalone from "./MobileRelateed_Projects";
import MobileFeatures from "./MobileFeatures";
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
        name: "Mobile App Development Services - Alogza",
        description: "End-to-end mobile app development services for iOS and Android, including UI/UX design, cross-platform solutions, and custom app features.",
        url: "https://www.alogza.com/services/mobileapp",
        breadcrumb: [
            { name: "Home", item: "https://www.alogza.com" },
            { name: "Services", item: "https://www.alogza.com/services" },
            { name: "Mobile App Development", item: "https://www.alogza.com/services/mobileapp" }
        ]
    }} 
/>

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
