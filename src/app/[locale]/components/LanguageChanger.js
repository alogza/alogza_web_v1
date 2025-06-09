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
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || "/";
  }

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
              onClick={() => {
                i18n.changeLanguage(locale);
                const newPath = getPathWithLocale(currentPathname, locale);
                router.push(newPath);
                setIsOpen(false);
              }}
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
