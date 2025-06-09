"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useState, useEffect, useRef } from "react";
import { Globe, Type, Languages } from "lucide-react";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = i18n.language;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function getPathWithLocale(pathname, locale) {
    // Handle root path
    if (pathname === "/" || pathname === "/ar" || pathname === "/en") {
      return `/${locale}`;
    }

    // Split the path and ensure we have at least 2 segments
    const segments = pathname.split("/").filter(Boolean);
    
    // If the first segment is a locale, replace it
    if (i18nConfig.locales.includes(segments[0])) {
      segments[0] = locale;
    } else {
      // If no locale in path, add it at the beginning
      segments.unshift(locale);
    }

    return `/${segments.join("/")}`;
  }

  const handleLanguageChange = async (locale) => {
    try {
      // Set cookie for next-i18n-router
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = date.toUTCString();
      const isProd = typeof window !== "undefined" && window.location.hostname.endsWith("alogza.com");
      const domain = isProd ? ";domain=.alogza.com" : "";
      document.cookie = `NEXT_LOCALE=${locale};expires=${expires};path=/${domain}`;

      // Change language first
      await i18n.changeLanguage(locale);

      // Then update the path
      const newPath = getPathWithLocale(currentPathname, locale);
      router.push(newPath);
      setIsOpen(false);
    } catch (error) {
      console.error("Error changing language:", error);
      // Fallback to default locale if there's an error
      router.push(`/${i18nConfig.defaultLocale}`);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-lg bg-black/10 px-3 py-2 text-sm font-medium text-white backdrop-blur-lg transition hover:bg-black/20"
      >
        <Globe className="h-4 w-4 text-amber-500" />
        <span className="font-medium">{currentLocale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg border border-white/10 bg-black/80 p-1 backdrop-blur-lg">
          {i18nConfig.locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm transition ${locale === currentLocale ? "bg-amber-500/10 text-amber-500" : "text-white hover:bg-white/10"}`}
              disabled={locale === currentLocale}
            >
              {locale === "en" ? (
                <Type className="h-4 w-4 text-amber-500" />
              ) : (
                <Languages className="h-4 w-4 text-amber-500" />
              )}
              <span className="font-medium">
                {locale === "en" ? "English" : "العربية"}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
