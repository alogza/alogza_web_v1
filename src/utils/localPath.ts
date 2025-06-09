"use client"
// src/utils/localePath.ts
import { usePathname } from "next/navigation";

export function useLocalePath() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en"; // fallback to 'en'
  return (path: string) => {
    // Avoid double locale prefix
    if (path.startsWith(`/${currentLocale}/`) || path === `/${currentLocale}`) {
      return path;
    }
    // Remove leading slash for joining
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `/${currentLocale}/${cleanPath}`.replace(/\/+$/, "");
  };
}