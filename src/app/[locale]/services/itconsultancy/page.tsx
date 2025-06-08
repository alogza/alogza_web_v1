"use client";
import IT_ConsultancyDevelopmentProcess from "./IT_ConsultancyDevelopmentStages";
import IT_ConsultancyStaircaseConcept from "./IT_ConsultancyGeneralInfoM";
import IT_ConsultancyFeatures from "./IT_ConsultancyFeatures";
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
            main: t("servicesPage.itConsultancy.hero.title"),
            highlight: "Alogza",
          }}
          subheading={t("servicesPage.itConsultancy.hero.subtitle")}
          laptopImage="/services/IT_Consultant.png"
        />
      </Suspense>
      <IT_ConsultancyStaircaseConcept />
      <IT_ConsultancyDevelopmentProcess />
      {/* <IT_ConsultancyRelatedProjectsStandalone /> */}

      <IT_ConsultancyFeatures />
    </>
  );
}
