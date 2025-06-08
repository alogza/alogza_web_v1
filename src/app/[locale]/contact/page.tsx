"use client";
import React from "react";
import HeroHeader from "../components/HeroHeader";
import Contacts from "../components/Contacts";
import { useTranslation } from "react-i18next";
import SuspenseWrapper from "../components/SuspenseWrapper";

const ContactPage = () => {
  const { t } = useTranslation();
  
  return (
    <SuspenseWrapper>
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