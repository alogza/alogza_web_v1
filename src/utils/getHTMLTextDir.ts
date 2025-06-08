// src/utils/getHTMLTextDir.ts
export function getHTMLTextDir(locale: string): "ltr" | "rtl" {
    // Add any other RTL languages you support here
    return locale === "ar" ? "rtl" : "ltr";
  }