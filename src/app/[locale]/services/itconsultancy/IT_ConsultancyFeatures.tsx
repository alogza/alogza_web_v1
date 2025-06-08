import {
  ArrowRight,
  ShieldCheck,
  Server,
  Cloud,
  Settings2,
  Workflow,
  Code2,
  ArrowLeft,
} from "lucide-react";
import { HoverEffect } from "@/app/[locale]/components/ui/card-hover-effect";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function IT_ConsultancyFeatures() {
  const { t, i18n } = useTranslation();

  const services = [
    {
      title: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.0.title",
      ),
      description: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.0.description",
      ),
      link: "#it-strategy",
      icon: <Workflow className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.1.title",
      ),
      description: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.1.description",
      ),
      link: "#infrastructure",
      icon: <Server className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.2.title",
      ),
      description: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.2.description",
      ),
      link: "#cybersecurity",
      icon: <ShieldCheck className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.3.title",
      ),
      description: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.3.description",
      ),
      link: "#cloud",
      icon: <Cloud className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.4.title",
      ),
      description: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.4.description",
      ),
      link: "#integration",
      icon: <Code2 className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.5.title",
      ),
      description: t(
        "servicesPage.itConsultancy.ITConsultancyFeatures.features.5.description",
      ),
      link: "#support",
      icon: <Settings2 className="h-10 w-10 text-[#eccc68]" />,
    },
  ];

  return (
    <div className="bg-black px-4 py-16 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-16 text-center text-4xl font-bold max-sm:text-2xl">
          {t("servicesPage.itConsultancy.ITConsultancyFeatures.title")}
        </h1>

        <HoverEffect items={services} />

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center text-lg font-medium text-[#eccc68] hover:text-white"
          >
            {t("servicesPage.ContactUsServices.contact")}
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
