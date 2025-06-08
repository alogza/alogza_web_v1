"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Locale {
  code: string;
  label: string;
  icon: string;
}

const locales: Locale[] = [
  { code: "en", label: "English", icon: "🇺🇸" },
  { code: "ar", label: "العربية", icon: "🇸🇦" },
];

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (newLocale: string) => {
    setOpen(false);

    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    const isProd = typeof window !== "undefined" && window.location.hostname.endsWith("alogza.com");
    const domain = isProd ? ";domain=.alogza.com" : "";
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/${domain}`;
    // Update locale in URL
    const segments = pathname.split("/");
    if (i18nConfig.locales.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join("/") || "/";
    router.push(newPath);
    router.refresh();
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="relative inline-block text-left z-50" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border-yellow-500/50 bg-yellow-500/20  px-4 py-1.5 text-sm text-white shadow-md transition hover:scale-105 hover:bg-[#eccc68] focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-white/10 dark:text-white"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className="text-lg">
          {locales.find((l) => l.code === currentLocale)?.icon}
        </span>
        {locales.find((l) => l.code === currentLocale)?.label}
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute mt-2 w-40 rounded-xl bg-white p-1 shadow-lg ring-1 ring-black/10 dark:bg-gray-800"
        >
          {locales.map(({ code, label, icon }) => (
            <li key={code}>
              <button
                onClick={() => handleChange(code)}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-left transition hover:bg-amber-100 dark:hover:bg-gray-700 ${
                  code === currentLocale
                    ? "font-semibold text-[#eccc68]"
                    : "text-gray-700 dark:text-gray-200"
                }`}
                role="menuitem"
              >
                <span className="text-lg">{icon}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
