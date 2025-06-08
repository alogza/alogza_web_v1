"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import SuspenseWrapper from "./SuspenseWrapper";

export default function LanguageChanger() {
  return (
    <SuspenseWrapper>
      <LanguageChangerContent />
    </SuspenseWrapper>
  );
}

function LanguageChangerContent() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  return (
    <div>
      {i18nConfig.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => {
            i18n.changeLanguage(locale);
            router.push(currentPathname, currentPathname, { locale });
          }}
          disabled={locale === currentLocale}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
