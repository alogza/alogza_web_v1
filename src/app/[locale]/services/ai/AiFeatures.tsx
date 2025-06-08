import {
  ArrowRight,
  LayoutTemplate,
  CloudCog,
  ActivitySquare,
  MessageSquareCode,
  BrainCircuit,
  Bot,
  ArrowLeft,
} from "lucide-react";
import { HoverEffect } from "@/app/[locale]/components/ui/card-hover-effect";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function AiFeatures() {
  const { t, i18n } = useTranslation();

  const services = [
    {
      title: t("servicesPage.aiSolutions.aiFeatures.features.0.title"),
      description: t(
        "servicesPage.aiSolutions.aiFeatures.features.0.description"
      ),
      link: "#ai-consulting",
      icon: <BrainCircuit className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.aiSolutions.aiFeatures.features.1.title"),
      description: t(
        "servicesPage.aiSolutions.aiFeatures.features.1.description"
      ),
      link: "#chatbot-development",
      icon: <Bot className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.aiSolutions.aiFeatures.features.2.title"),
      description: t(
        "servicesPage.aiSolutions.aiFeatures.features.2.description"
      ),
      link: "#nlp",
      icon: <MessageSquareCode className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.aiSolutions.aiFeatures.features.3.title"),
      description: t(
        "servicesPage.aiSolutions.aiFeatures.features.3.description"
      ),
      link: "#conversational-ux",
      icon: <LayoutTemplate className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.aiSolutions.aiFeatures.features.4.title"),
      description: t(
        "servicesPage.aiSolutions.aiFeatures.features.4.description"
      ),
      link: "#ai-deployment",
      icon: <CloudCog className="h-10 w-10 text-[#eccc68]" />,
    },
    {
      title: t("servicesPage.aiSolutions.aiFeatures.features.5.title"),
      description: t(
        "servicesPage.aiSolutions.aiFeatures.features.5.description"
      ),
      link: "#ai-maintenance",
      icon: <ActivitySquare className="h-10 w-10 text-[#eccc68]" />,
    },
  ];

  return (
    <div className="text-whSite bg-black px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-16 text-center text-2xl font-bold sm:text-2xl md:text-4xl lg:text-4xl">
          {t("servicesPage.aiSolutions.aiFeatures.title")}
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
            )}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
