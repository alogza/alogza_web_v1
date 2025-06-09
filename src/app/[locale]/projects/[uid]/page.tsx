"use client";
import { useTranslation } from "react-i18next";
import { use } from "react";
import ProjectsKeyFeatures from "@/PagesComponents/Projects/ProjectsKeyFeatures/ProjectsKeyFeatures";
import ProjectHero from "@/PagesComponents/Projects/ProjectHero/ProjectHero";
import ProjectSlides from "@/PagesComponents/Projects/ProjectSlides/ProjectSlides";
import BenefitsSectionSFAWeb from "../../components/Project/sfaWebsite/benefits-section";
import ProjectsSection from "@/PagesComponents/homepage/Projects/Projects-section";
import BenefitsSectionChatbot from "../../components/Project/chatbot/benefits-section";
import BenefitsSectionSFAMobile from "../../components/Project/sfaMobile/benefits-section";
import BenefitsSectionCertificate from "../../components/Project/certificate/benefits-section";
import BenefitsSectionAmazeVenture from "../../components/Project/AmazeVenture/benefits-section";
import BenefitsSectionIsianpaduWeb from "../../components/Project/isianpaduWebsite copy/benefits-section";
import SuspenseWrapper from "../../components/SuspenseWrapper";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  return (
    <SuspenseWrapper>
      <ProjectPageContent params={params} />
    </SuspenseWrapper>
  );
}

function ProjectPageContent({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = use(params);
  const { i18n } = useTranslation();

  if (uid === "salesmobile") {
    return (
      <div>
        <ProjectHero
          header={"projectsPage.sfa_mobile_app.title"}
          scr={"/projects/mobileapp/sfa.png"}
        ></ProjectHero>
        <ProjectSlides
          image={[
            {
              url: "/projects/mobileapp/sfa.png",
              alt: "Chatbot Overview Image",
            },
            {
              url: "/projects/mobileapp/5.png",
              alt: "Chatbot Features",
            },
            {
              url: "/projects/mobileapp/2.png",
              alt: "Chatbot Features",
            },
            {
              url: "/projects/mobileapp/3.png",
              alt: "Chatbot Feature",
            },
            {
              url: "/projects/mobileapp/1.png",
              alt: "Chatbot Features Ime",
            },
          ]}
          title={"projectsPage.ai_chatbot_portal.overview_title"}
          description={"projectsPage.sfa_mobile_app.overview"}
        ></ProjectSlides>
        <ProjectsKeyFeatures
          featuresList={[
            {
              title:
                "projectsPage.sfa_mobile_app.key_features.target_performance.title",
              description:
                "projectsPage.sfa_mobile_app.key_features.target_performance.description",
              imageUrl: "/projects/mobileapp/sfa.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
            {
              title:
                "projectsPage.sfa_mobile_app.key_features.exportable_reports.title",
              description:
                "projectsPage.sfa_mobile_app.key_features.exportable_reports.description",
              imageUrl: "/projects/mobileapp/1.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "right" : "left",
            },
            {
              title:
                "projectsPage.sfa_mobile_app.key_features.calendar_event_planner.title",
              description:
                "projectsPage.sfa_mobile_app.key_features.calendar_event_planner.description",
              imageUrl: "/projects/mobileapp/7.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
            {
              title:
                "projectsPage.sfa_mobile_app.key_features.ai_chatbot.title",
              description:
                "projectsPage.sfa_mobile_app.key_features.ai_chatbot.description",
              imageUrl: "/projects/mobileapp/3.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "right" : "left",
            },
            {
              title:
                "projectsPage.sfa_mobile_app.key_features.responsive_tables.title",
              description:
                "projectsPage.sfa_mobile_app.key_features.responsive_tables.description",
              imageUrl: "/projects/mobileapp/6.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
          ]}
        ></ProjectsKeyFeatures>
        <BenefitsSectionSFAMobile />
        <ProjectsSection />
      </div>
    );
  }
  if (uid === "chatbot") {
    return (
      <div>
        <ProjectHero
          header={"projectsPage.ai_chatbot_portal.title"}
          scr={"/projects/alogzachatbot.png"}
        ></ProjectHero>
        <ProjectSlides
          image={[
            {
              url: "/projects/chatbot/Header.png",
              alt: "Chatbot Overview Image",
            },
          ]}
          title={"projectsPage.ai_chatbot_portal.overview_title"}
          description={"projectsPage.ai_chatbot_portal.overview"}
        ></ProjectSlides>
        <ProjectsKeyFeatures
          featuresList={[
            {
              title:
                "projectsPage.ai_chatbot_portal.features.model_selection.title",
              description:
                "projectsPage.ai_chatbot_portal.features.model_selection.desc",
              imageUrl: "/projects/chatbot/Project1.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
            {
              title:
                "projectsPage.ai_chatbot_portal.features.prompt_generator.title",
              description:
                "projectsPage.ai_chatbot_portal.features.prompt_generator.desc",
              imageUrl: "/projects/chatbot/Project3.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "right" : "left",
            },
            {
              title:
                "projectsPage.ai_chatbot_portal.features.conversation_access.title",
              description:
                "projectsPage.ai_chatbot_portal.features.conversation_access.desc",
              imageUrl: "/projects/chatbot/Project4.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
            {
              title:
                "projectsPage.ai_chatbot_portal.features.token_tracking.title",
              description:
                "projectsPage.ai_chatbot_portal.features.token_tracking.desc",
              imageUrl: "/projects/chatbot/Project5.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "right" : "left",
            },
          ]}
        ></ProjectsKeyFeatures>
        <BenefitsSectionChatbot />
        <ProjectsSection />
      </div>
    );
  }
  if (uid === "bussinesweb") {
    return (
      <div>
        <ProjectHero
          header={"projectsPage.isianpadu_system.title"}
          scr={"/projects/businessweb/mockup/main.png"}
        ></ProjectHero>
        <ProjectSlides
          image={[
            {
              url: "/projects/businessweb/mockup/main.png",
              alt: "Isianpadu Overview Image",
            },
            {
              url: "/projects/businessweb/mockup/project1.png",
              alt: "Isianpadu Features",
            },
            {
              url: "/projects/businessweb/mockup/project2.png",
              alt: "Isianpadu Features",
            },
            {
              url: "/projects/businessweb/mockup/project3.png",
              alt: "Isianpadu Feature",
            },
          ]}
          title={"projectsPage.ai_chatbot_portal.overview_title"}
          description={"projectsPage.isianpadu_system.overview"}
        ></ProjectSlides>
        <ProjectsKeyFeatures
          featuresList={[
            {
              title:
                "projectsPage.isianpadu_system.features.modern_website.title",
              description:
                "projectsPage.isianpadu_system.features.modern_website.desc",
              imageUrl: "/projects/businessweb/mockup/project1.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
            {
              title:
                "projectsPage.isianpadu_system.features.cms_table_view.title",
              description:
                "projectsPage.isianpadu_system.features.cms_table_view.desc",
              imageUrl: "/projects/businessweb/mockup/project2.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "right" : "left",
            },
            {
              title:
                "projectsPage.isianpadu_system.features.content_entry_form.title",

              description:
                "projectsPage.isianpadu_system.features.content_entry_form.desc",
              imageUrl: "/projects/businessweb/mockup/project3.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
            // {
            //   title:
            //     "projectsPage.sfa_mobile_app.key_features.ai_chatbot.title",
            //   description:
            //     "projectsPage.sfa_mobile_app.key_features.ai_chatbot.description",
            //   imageUrl: "",
            //   imageAlt: "",
            //   imagePosition: i18n.language === "en" ? "right" : "left",
            // },
          ]}
        ></ProjectsKeyFeatures>
        <BenefitsSectionIsianpaduWeb />
        <ProjectsSection />
      </div>
    );
  }
  if (uid === "productweb") {
    return (
      <div>
        <ProjectHero
          header={"projectsPage.sfa_website.title"}
          scr={"/projects/productweb/main.png"}
        ></ProjectHero>
        <ProjectSlides
          image={[
            {
              url: "/projects/productweb/main.png",
              alt: "SFA Website Overview Image",
            },
            {
              url: "/projects/productweb/product1.png",
              alt: "SFA Website Features",
            },
            {
              url: "/projects/productweb/product2.png",
              alt: "SFA Website Features",
            },
            {
              url: "/projects/productweb/product3.png",
              alt: "SFA Website Feature",
            },
          ]}
          title={"projectsPage.ai_chatbot_portal.overview_title"}
          description={"projectsPage.sfa_website.overview"}
        ></ProjectSlides>
        <ProjectsKeyFeatures
          featuresList={[
            {
              title:
                "projectsPage.sfa_website.key_features.product_showcase.title",
              description:
                "projectsPage.sfa_website.key_features.product_showcase.desc",
              imageUrl: "/projects/productweb/product2.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
            {
              title:
                "projectsPage.sfa_website.key_features.demo_booking_form.title",
              description:
                "projectsPage.sfa_website.key_features.demo_booking_form.desc",
              imageUrl: "/projects/productweb/product3.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "right" : "left",
            },
            {
              title: "projectsPage.sfa_website.key_features.admin_panel.title",
              description:
                "projectsPage.sfa_website.key_features.admin_panel.desc",
              imageUrl: "/projects/productweb/product1.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
          ]}
        ></ProjectsKeyFeatures>
        <BenefitsSectionSFAWeb />
        <ProjectsSection />
      </div>
    );
  }
  if (uid === "certificate") {
    return (
      <div>
        <ProjectHero
          header={"projectsPage.certificate_system.title"}
          scr={"/projects/Certificate/image.png"}
        ></ProjectHero>
        <ProjectSlides
          image={[
            {
              url: "/projects/Certificate/image.png",
              alt: "Certificate System Overview Image",
            },
            {
              url: "/projects/Certificate/image1.png",
              alt: "Certificate System Features",
            },
            {
              url: "/projects/Certificate/image3.png",
              alt: "Certificate System Features",
            },
          ]}
          title={"projectsPage.ai_chatbot_portal.overview_title"}
          description={"projectsPage.certificate_system.overview"}
        ></ProjectSlides>
        <ProjectsKeyFeatures
          featuresList={[
            {
              title:
                "projectsPage.certificate_system.key_features.template_provision.title",
              description:
                "projectsPage.certificate_system.key_features.template_provision.desc",
              imageUrl: "/projects/Certificate/image1.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
            {
              title:
                "projectsPage.certificate_system.key_features.google_drive_integration.title",
              description:
                "projectsPage.certificate_system.key_features.google_drive_integration.desc",
              imageUrl: "/projects/Certificate/image 54.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "right" : "left",
            },
            {
              title:
                "projectsPage.certificate_system.key_features.csv_data.title",
              description:
                "projectsPage.certificate_system.key_features.csv_data.desc",
              imageUrl: "/projects/Certificate/image3.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
            {
              title:
                "projectsPage.certificate_system.key_features.auto_dynamic_generation.title",
              description:
                "projectsPage.certificate_system.key_features.auto_dynamic_generation.desc",
              imageUrl: "/projects/Certificate/image4.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "right" : "left",
            },
            {
              title:
                "projectsPage.certificate_system.key_features.email_notifications.title",
              description:
                "projectsPage.certificate_system.key_features.email_notifications.desc",
              imageUrl: "/projects/Certificate/image2.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
          ]}
        ></ProjectsKeyFeatures>
        <BenefitsSectionCertificate />
        <ProjectsSection />
      </div>
    );
  }
  if (uid === "amazeventure") {
    return (
      <div>
        <ProjectHero
          header={"projectsPage.amaze_venture.title"}
          scr={"/projects/amazeventure/header.jpeg"}
        ></ProjectHero>
        <ProjectSlides
          image={[
            {
              url: "/projects/amazeventure/header.jpeg",
              alt: "Amaze Venture Overview Image",
            },
            {
              url: "/projects/amazeventure/1.png",
              alt: "Amaze Venture Features",
            },
            {
              url: "/projects/amazeventure/3.png",
              alt: "Amaze Venture Features",
            },
            {
              url: "/projects/amazeventure/7.png",
              alt: "Amaze Venture Feature",
            },
            {
              url: "/projects/amazeventure/11.png",
              alt: "Amaze Venture Features Image",
            },
          ]}
          title={"projectsPage.ai_chatbot_portal.overview_title"}
          description={"projectsPage.amaze_venture.overview"}
        ></ProjectSlides>
        <ProjectsKeyFeatures
          featuresList={[
            {
              title:
                "projectsPage.amaze_venture.key_features.voice_recognition.title",
              description:
                "projectsPage.amaze_venture.key_features.voice_recognition.desc",
              imageUrl: "/projects/amazeventure/1.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
            {
              title:
                "projectsPage.amaze_venture.key_features.color_ball_shooting.title",
              description:
                "projectsPage.amaze_venture.key_features.color_ball_shooting.desc",
              imageUrl: "/projects/amazeventure/7.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "right" : "left",
            },
            {
              title: "projectsPage.amaze_venture.key_features.car_racing.title",
              description:
                "projectsPage.amaze_venture.key_features.car_racing.desc",
              imageUrl: "/projects/amazeventure/3.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "left" : "right",
            },
            {
              title:
                "projectsPage.amaze_venture.key_features.quiz_ai_voice.title",
              description:
                "projectsPage.amaze_venture.key_features.quiz_ai_voice.desc",
              imageUrl: "/projects/amazeventure/6.png",
              imageAlt: "",
              imagePosition: i18n.language === "en" ? "right" : "left",
            },
          ]}
        ></ProjectsKeyFeatures>
        <BenefitsSectionAmazeVenture />
        <ProjectsSection />
      </div>
    );
  }

  // Optional: show 404 if uid is invalid
  // notFound();

  return <div>Project: {uid}</div>;
}
