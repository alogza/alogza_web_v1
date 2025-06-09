"use client";

import { useEffect, useState } from "react";
import { AlogzaLogo } from "./AlogzaLogo";
import Link from "next/link";
import { PopupButton } from "react-calendly";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import LinkWithLoading from "./LinkWithLoading";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChanger";

export default function Header() {
  const { t } = useTranslation();
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1]; // 'en' or 'ar'

  useEffect(() => {
    if (typeof document !== "undefined") {
      setRootElement(document.body);
    }
  }, []);

  // Helper function to check if a path is active
  const isActivePath = (path: string) => {    // Get locale from current path
    const locale = pathname.match(/^\/(en|ar)/)?.[0] || "";

    // Normalize paths with trailing slashes removed and lowercase
    const currentPath = pathname.replace(/\/$/, "").toLowerCase();
    const navPath = (locale + path).replace(/\/$/, "").toLowerCase();

    // Handle root path specially
    if (path === "/") {
      return currentPath === locale || currentPath === locale + "/";
    }

    // Match if currentPath is exactly navPath
    return currentPath === navPath;
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLabels = t("header.nav", { returnObjects: true }) as string[];
  const hrefs = ["/", "/services", "/projects", "/aboutus", "/contact"];

  const navigationItems = navLabels.map((label, i) => ({
    href: `/${currentLocale}${hrefs[i] === "/" ? "" : hrefs[i]}`,
    label,
  }));
  // The loading state is now handled by LinkWithLoading

  return (
    <>
      <header className="sticky top-0 z-100 bg-black/10 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <LinkWithLoading href="/" className="flex items-center">
            <div className="text-2xl font-bold text-[#eccc68]">
              <AlogzaLogo className="z-10 w-40 cursor-pointer" size={40} />
            </div>
            <span className="font-alogza absolute mt-5 ml-10 text-3xl text-[#ebcb68]">
              LOGZA
            </span>
          </LinkWithLoading>

          <nav className="border-opacity-20 hidden items-center gap-8 rounded-full border-[1px] border-[#eccc68]/50 px-4 py-2 lg:flex">
            {navigationItems.map((item) => (
              <LinkWithLoading
                key={item.href}
                prefetch={true}
                href={item.href}
                className={`transition hover:text-white ${
                  isActivePath(item.href)
                    ? "font-semibold text-[#eccc68] underline underline-offset-4"
                    : "text-amber-100"
                }`}
              >
                {item.label}
              </LinkWithLoading>
            ))}
          </nav>

          <div className="z-10 hidden items-center space-x-4 lg:flex">
            {rootElement && (
              <PopupButton
                url="https://calendly.com/alogza-info/30min"
                rootElement={rootElement}
                text={t("header.appointment")}
                className="w-full rounded-full border border-yellow-500/50 bg-yellow-500/20 px-3 py-2 font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#eccc68]"
              />
            )}
            <LanguageChanger />
          </div>

          <button
            onClick={toggleMobileMenu}
            className="relative z-50 p-2 text-[#eccc68] transition-colors hover:text-white lg:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="transition-transform duration-200" />
            ) : (
              <Menu size={24} className="transition-transform duration-200" />
            )}
          </button>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="mobile-menu-container absolute top-0 right-0 h-full w-80 max-w-[85vw] transform border-l border-[#eccc68]/20 bg-black/95 backdrop-blur-md transition-transform duration-300 ease-in-out">
            <div className="flex h-full flex-col px-6 pt-20">
              <nav className="flex flex-col space-y-6">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`transform border-b border-[#eccc68]/10 py-2 text-lg font-medium transition transition-all duration-200 hover:border-white/30 ${
                      isActivePath(item.href)
                        ? "font-semibold text-[#eccc68]"
                        : "text-white hover:text-[#eccc68]"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen
                        ? "slideInRight 0.3s ease-out forwards"
                        : "none",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 border-t border-amber-500/20 pt-6">
                {rootElement && (
                  <PopupButton
                    url="https://calendly.com/alihefnawey"
                    rootElement={rootElement}
                    text={t("header.appointment")}
                    className="w-full rounded-full border border-yellow-500/50 bg-yellow-500/20 px-3 py-2 font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#eccc68]"
                  />
                )}
                <div className="mt-4 flex justify-center">
                  <LanguageChanger />
                </div>
              </div>

              <div className="mt-auto mb-8 text-center">
                <p className="text-sm text-amber-100/60">
                  Tap outside or press ESC to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
