import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";
import ViewCanvas from "./components/ViewCanvas";
import Footer from "./components/Footer";
import initTranslations from "../i18n";
import TranslationsProvider from "./components/TranslationsProvider";
import { SuspenseLayout } from "./components/SuspenseLayout";
import { Suspense } from "react";
import { ReactNode } from "react";
import { getHTMLTextDir } from "@/utils/getHTMLTextDir";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
import { Metadata } from "next";
interface LocalLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export const metadata: Metadata ={
  title:{
    default:"Alogza Official",
    template:"%s - Alogza Official"
  },
  description:"Alogza is a cutting-edge tech startup offering professional web development, mobile app creation, AI solutions, and digital design services to help businesses thrive in the digital era.",
  twitter:{
    card:"summary_large_image"
  }
}

const LocalLayout = async ({ children, params }: LocalLayoutProps) => {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <html
      lang={locale}
      dir={getHTMLTextDir(locale)}
      className={`${inter.variable} ${alogza.variable} font-inter`}
    >

      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />

        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
      </head>
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
              <Analytics/>
              <SpeedInsights/>
              <ViewCanvas></ViewCanvas>
            </SuspenseLayout>
          </main>
          <Footer footerContent={t("footer", { returnObjects: true })} locale={locale} />{" "}
        </TranslationsProvider>
      </body>
    </html>
  );
};

export default LocalLayout;
