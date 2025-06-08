import {
  ArrowRight,
  RefreshCcwDot,
  Landmark,
  MonitorSmartphone,
  PenTool,
  Figma,
  UserCheck,
  ArrowLeft,
} from "lucide-react";
import { HoverEffect } from "@/app/[locale]/components/ui/card-hover-effect";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Ui_UxDesignFeatures() {
  const { t, i18n } = useTranslation();

  const services = [
    {
      title: t("servicesPage.uiuxDesign.uiuxDesignFeatures.features.0.title"),
      description: t(
        "servicesPage.uiuxDesign.uiuxDesignFeatures.features.0.description",
      ),
      link: "#ux-research",
      icon: <UserCheck className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.uiuxDesign.uiuxDesignFeatures.features.1.title"),
      description: t(
        "servicesPage.uiuxDesign.uiuxDesignFeatures.features.1.description",
      ),
      link: "#prototyping",
      icon: <Figma className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.uiuxDesign.uiuxDesignFeatures.features.2.title"),
      description: t(
        "servicesPage.uiuxDesign.uiuxDesignFeatures.features.2.description",
      ),
      link: "#ui-design",
      icon: <PenTool className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.uiuxDesign.uiuxDesignFeatures.features.3.title"),
      description: t(
        "servicesPage.uiuxDesign.uiuxDesignFeatures.features.3.description",
      ),
      link: "#responsive-design",
      icon: <MonitorSmartphone className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.uiuxDesign.uiuxDesignFeatures.features.4.title"),
      description: t(
        "servicesPage.uiuxDesign.uiuxDesignFeatures.features.4.description",
      ),
      link: "#design-systems",
      icon: <Landmark className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.uiuxDesign.uiuxDesignFeatures.features.5.title"),
      description: t(
        "servicesPage.uiuxDesign.uiuxDesignFeatures.features.5.description",
      ),
      link: "#ux-testing",
      icon: <RefreshCcwDot className="h-10 w-10 text-[#eccc68]" />,
    },
  ];

  return (
    <div className="text-whSite bg-black px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-16 text-center text-2xl font-bold sm:text-2xl md:text-4xl lg:text-4xl">
          {t("servicesPage.uiuxDesign.uiuxDesignFeatures.title")}
        </h1>

        <HoverEffect items={services} />

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center text-lg font-medium text-[#eccc68] hover:text-white"
          >
          { t("servicesPage.ContactUsServices.contact")}
            {i18n.language === "ar" ? (
              <ArrowLeft className="ml-2 h-5 w-5 transition-transform group-hover:-translate-x-1 hover:bg-white" />
            ) : (
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 hover:bg-white" />
            )}{" "}          </Link>
        </div>
      </div>
    </div>
  );
}
