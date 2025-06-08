import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";
import ViewCanvas from "./components/ViewCanvas";
import Footer from "./components/Footer";
import { getHTMLTextDir } from "intlayer";
import { NextLayoutIntlayer } from "next-intlayer";
import initTranslations from "../i18n";
import TranslationsProvider from "./components/TranslationsProvider";
import { SuspenseLayout } from "./components/SuspenseLayout";
import { Suspense } from "react";

export { generateStaticParams } from "next-intlayer";

const alogza = localFont({
  src: "../../../public/fonts/Azonix.otf",
  display: "swap",
  variable: "--font-alogza",
});

const inter = localFont({
  src: "../../../public/fonts/Inter-VariableFont_opsz,wght.ttf",
  display: "swap",
  weight: "100 700",
  variable: "--font-inter",
});

const namespaces = ["content"];

import LoadingOverlay from "./components/LoadingOverlay";

const LocalLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <html
      lang={locale}
      dir={getHTMLTextDir(locale)}
      className={`${inter.variable} ${alogza.variable} font-inter`}
    >
      <body className="overflow-x-hidden bg-black text-white">
        <Suspense>
          <LoadingOverlay />
        </Suspense>
        <TranslationsProvider
          locale={locale}
          namespaces={namespaces}
          resources={resources}
        >
          {/* Header is outside the Bounded component */}
          <Header />
          <main>
            <SuspenseLayout>
              {children}
              <ViewCanvas></ViewCanvas>
            </SuspenseLayout>
          </main>
          <Footer footerContent={t("footer", { returnObjects: true })} />{" "}
        </TranslationsProvider>
      </body>
    </html>
  );
};

export default LocalLayout;
