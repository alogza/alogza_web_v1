"use client";
import WebAppDevelopmentProcess from "./WebDevelopmentStages";
import WebStaircaseConcept from "./WebGeneralInfoM";
import WebRelatedProjectsStandalone from "./WebRelateed_Projects";
import WebFeatures from "./WebFeatures";
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
        name: "Website Development Services - Alogza",
        description: "Professional website development services including responsive design, e-commerce platforms, web applications, and custom business websites.",
        url: "https://www.alogza.com/services/website",
        breadcrumb: [
            { name: "Home", item: "https://www.alogza.com" },
            { name: "Services", item: "https://www.alogza.com/services" },
            { name: "Website Development", item: "https://www.alogza.com/services/website" }
        ]
    }} 
/>
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
