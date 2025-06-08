"use client";
import { useTranslation } from "react-i18next";

export default function BenefitsSectionChatbot() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-16">
      <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
        {t("projectsPage.ai_chatbot_portal.impact_title")}
      </h2>

      <div className="mx-auto max-w-3xl space-y-4">
        <BenefitItem text={t("projectsPage.ai_chatbot_portal.impact.0")} />
        <BenefitItem text={t("projectsPage.ai_chatbot_portal.impact.1")} />
        <BenefitItem text={t("projectsPage.ai_chatbot_portal.impact.2")} />
        <BenefitItem text={t("projectsPage.ai_chatbot_portal.impact.3")}/>
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-gray-300">
      {t("projectsPage.ai_chatbot_portal.results")}
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
