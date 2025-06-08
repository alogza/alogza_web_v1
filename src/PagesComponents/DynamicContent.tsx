// app/[locale]/aboutus/DynamicContent.tsx
"use client";

import { useTranslation } from "react-i18next";
import { InfoCard } from "../app/[locale]/components/VnM";

export default function DynamicContent() {
  const { t } = useTranslation();

  return (
    <main className="mb-7 flex w-full items-center justify-center bg-gradient-to-b from-black to-[#1a1500] px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-8 space-y-2 text-center">
          <h1 className="mb-2 bg-gradient-to-r from-white to-gray-50 bg-clip-text text-2xl font-bold text-transparent sm:text-2xl md:text-4xl lg:text-4xl">
            {t("aboutUs.headline")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light text-[#eccc68] md:text-xl">
            {t("aboutUs.subheadline")}
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          <InfoCard
            title={t("aboutUs.vision.title")}
            icon={
              <svg
                className="h-4 w-4 text-[#eccc68]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            hoverBorder="hover:border-[#eccc68]"
          >
            {t("aboutUs.vision.description")}
          </InfoCard>

          <InfoCard
            title={t("aboutUs.mission.title")}
            icon={
              <svg
                className="h-4 w-4 text-[#eccc68]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            hoverBorder="hover:border-[#eccc68]"
          >
            {t("aboutUs.mission.description")}
          </InfoCard>
        </section>
      </div>
    </main>
  );
}
