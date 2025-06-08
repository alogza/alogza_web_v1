"use client";
import Ui_UxDesignDevelopmentProcess from "./Ui&UxDesignDevelopmentStages";
import Ui_UxDesignStaircaseConcept from "./Ui&UxDesignGeneralInfoM";
import Ui_UxDesignFeatures from "./Ui&UxDesignFeatures";
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
            main: t("servicesPage.uiuxDesign.hero.title"),
            highlight: "Alogza",
          }}
          subheading={t("servicesPage.uiuxDesign.hero.subtitle")}
          laptopImage="/services/UiDesign.png"
        />{" "}
      </Suspense>
      <Ui_UxDesignStaircaseConcept />
      <Ui_UxDesignDevelopmentProcess />
      {/* <Ui_UxDesignRelatedProjectsStandalone /> */}
      <Ui_UxDesignFeatures />
    </>
  );
}
