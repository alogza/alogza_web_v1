"use client";
import Ui_UxDesignDevelopmentProcess from "./Ui&UxDesignDevelopmentStages";
import Ui_UxDesignStaircaseConcept from "./Ui&UxDesignGeneralInfoM";
import Ui_UxDesignFeatures from "./Ui&UxDesignFeatures";
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
        name: "Graphic Design Services - Alogza",
        description: "Creative graphic design services including branding, logo design, social media visuals, and marketing materials tailored to your brand.",
        url: "https://www.alogza.com/services/design",
        breadcrumb: [
            { name: "Home", item: "https://www.alogza.com" },
            { name: "Services", item: "https://www.alogza.com/services" },
            { name: "Graphic Design", item: "https://www.alogza.com/services/design" }
        ]
    }} 
/>

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
