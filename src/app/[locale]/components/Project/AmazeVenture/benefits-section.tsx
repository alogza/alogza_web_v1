"use client";
import { useTranslation } from "react-i18next";

export default function BenefitsSectionAmazeVenture() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-16">
      <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
      {t("projectsPage.ai_chatbot_portal.impact_title")}
      </h2>

      <div className="mx-auto max-w-3xl space-y-4">
        <BenefitItem text={t("projectsPage.amaze_venture.benefits.0")} />
        <BenefitItem text={t("projectsPage.amaze_venture.benefits.1")} />
        <BenefitItem text={t("projectsPage.amaze_venture.benefits.2")} />
        <BenefitItem text={t("projectsPage.amaze_venture.benefits.3")} />
        </div>

      <p className="mx-auto mt-8 max-w-3xl text-justify text-gray-300">
      {t("projectsPage.amaze_venture.conclusion")}
      </p>
    </section>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <span className="mr-2 text-green-500">✅</span>
      <p className="text-gray-200">{text}</p>
    </div>
  );
}
