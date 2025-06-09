import {
  ArrowRight,
  Code,
  Palette,
  Bug,
  Wrench,
  MonitorSmartphone,
  Globe,
  ArrowLeft,
} from "lucide-react";
import { HoverEffect } from "@/app/[locale]/components/ui/card-hover-effect";
import { useTranslation } from "react-i18next";
import LinkWithLoading from "../../components/LinkWithLoading";

export default function WebFeatures() {
  const { t, i18n } = useTranslation();
  const services = [
    {
      title: t("servicesPage.webDevelopment.websiteFeatures.features.0.title"),
      description: t(
        "servicesPage.webDevelopment.websiteFeatures.features.0.description"
      ),
      link: "#responsive-design",
      icon: <MonitorSmartphone className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.webDevelopment.websiteFeatures.features.1.title"),
      description: t(
        "servicesPage.webDevelopment.websiteFeatures.features.1.description"
      ),
      link: "#frontend-development",
      icon: <Code className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.webDevelopment.websiteFeatures.features.2.title"),
      description: t(
        "servicesPage.webDevelopment.websiteFeatures.features.2.description"
      ),
      link: "#backend-development",
      icon: <Globe className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.webDevelopment.websiteFeatures.features.3.title"),
      description: t(
        "servicesPage.webDevelopment.websiteFeatures.features.3.description"
      ),
      link: "#web-design",
      icon: <Palette className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.webDevelopment.websiteFeatures.features.4.title"),
      description: t(
        "servicesPage.webDevelopment.websiteFeatures.features.4.description"
      ),
      link: "#web-testing",
      icon: <Bug className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.webDevelopment.websiteFeatures.features.5.title"),
      description: t(
        "servicesPage.webDevelopment.websiteFeatures.features.5.description"
      ),
      link: "#web-maintenance",
      icon: <Wrench className="h-10 w-10 text-[#eccc68]" />,
    },
  ];
  return (
    <div className="bg-black px-4 py-16 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-16 text-center text-4xl font-bold max-sm:text-2xl">
          {t("servicesPage.webDevelopment.websiteFeatures.title")}
        </h1>

        <HoverEffect items={services} />

        <div className="mt-12 text-center">
          <LinkWithLoading
            href="/contact"
            className="group inline-flex items-center text-lg font-medium text-[#eccc68] hover:text-white"
          >
            {t("servicesPage.ContactUsServices.contact")}
            {i18n.language === "ar" ? (
              <ArrowLeft className="ml-2 h-5 w-5 transition-transform group-hover:-translate-x-1 hover:bg-white" />
            ) : (
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 hover:bg-white" />
            )}{" "}
          </LinkWithLoading>
        </div>
      </div>
    </div>
  );
}
