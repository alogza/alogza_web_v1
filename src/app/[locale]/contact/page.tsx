"use client";
import React from "react";
import HeroHeader from "../components/HeroHeader";
import Contacts from "../components/Contacts";
import { useTranslation } from "react-i18next";
import SuspenseWrapper from "../components/SuspenseWrapper";
import StructuredData from "@/components/StructuredData";

const ContactPage = () => {
  const { t } = useTranslation();
  
  return (
    <SuspenseWrapper>
      <StructuredData 
    type="ContactPage" 
    pageData={{
        name: "Contact Alogza - Get in Touch",
        description: "Contact Alogza for your digital transformation needs. We're here to help with web development, mobile apps, AI solutions, and more.",
        url: "https://www.alogza.com/contact"
    }} 
/>
      <main>
        <HeroHeader
          backgroundImage="/images/YellowBG.png"
          heading={{
            main: t("contactUs.intro.title"),
          }}
          subheading={t("contactUs.intro.description")}
          laptopImage="/labels/ContactUs.png"
        />
        <Contacts />
      </main>
    </SuspenseWrapper>
  );
};

export default ContactPage;