"use client";
import FeatureCard from "./feature-card";
import { useTranslation } from "react-i18next";


interface ProjectsKeyFeaturesProps {
  featuresList: {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    imagePosition: "left" | "right";
  }[];
}

const ProjectsKeyFeatures= ({featuresList}:ProjectsKeyFeaturesProps) => {
  const { t } = useTranslation();
  return (
    <section  
      className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
        {t("projectsPage.ai_chatbot_portal.features_title")}
      </h2>

      <div className="space-y-24">
        {featuresList.map((item, index) => (
          <FeatureCard
            key={index}
            title={item.title || ""}
            description={item.description || ""}
            imageUrl={item.imageUrl || "/fallback-image.png"}
            imageAlt={item.imageAlt || "Default alt text"}
            imagePosition={item.imagePosition || "left"}
          />
        ))}
      </div>
    </section>
  );
};


export default ProjectsKeyFeatures;
