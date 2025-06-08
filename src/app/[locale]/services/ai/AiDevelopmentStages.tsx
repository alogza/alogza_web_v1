"use client";

import React, { useEffect, useState } from "react";
import {
  Code,
  Repeat2,
  MessageSquare,
  Brain,
  Lightbulb,
} from "lucide-react";
import { CardSpotlight } from "@/app/[locale]/components/ui/card-spotlight";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function AiDevelopmentProcess() {
  const { t } = useTranslation();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stages = [
    {
      title: t("servicesPage.aiSolutions.process.steps.discovery.title"),
      description: t("servicesPage.aiSolutions.process.steps.discovery.desc"),
      icon: Lightbulb,
      image: "/assets/bg.png",
    },
    {
      title: t("servicesPage.aiSolutions.process.steps.preparation.title"),
      description: t("servicesPage.aiSolutions.process.steps.preparation.desc"),
      icon: Brain,
      image: "/assets/bg.png",
    },
    {
      title: t("servicesPage.aiSolutions.process.steps.model.title"),
      description: t("servicesPage.aiSolutions.process.steps.model.desc"),
      icon: Code,
      image: "/assets/bg.png",
    },
    {
      title: t("servicesPage.aiSolutions.process.steps.testing.title"),
      description: t("servicesPage.aiSolutions.process.steps.testing.desc"),
      icon: MessageSquare,
      image: "/assets/bg.png",
    },
    {
      title: t("servicesPage.aiSolutions.process.steps.deployment.title"),
      description: t("servicesPage.aiSolutions.process.steps.deployment.desc"),
      icon: Repeat2,
      image: "/assets/bg.png",
    },
  ];
  const firstThreeStages = stages.slice(0, 3);
  const lastTwoStages = stages.slice(3, 5);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black px-4 py-10 text-white sm:px-6 md:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center text-2xl font-bold sm:mb-12 sm:text-2xl md:mb-16 md:text-4xl lg:mb-20 lg:text-4xl"
        >
          {t("servicesPage.aiSolutions.process.title")}
        </motion.h1>

        {/* First three stages */}
        <div className="mb-8 grid grid-cols-1 gap-8 sm:mb-10 sm:grid-cols-2 sm:gap-10 md:mb-12 md:gap-12 lg:mb-16 lg:grid-cols-3 lg:gap-16">
          {firstThreeStages.map((stage, index) => (
            <StageCard key={index} stage={stage} index={index} />
          ))}
        </div>

        {/* Last two stages - centered */}
        <div className="flex flex-col justify-center gap-8 sm:flex-row sm:gap-10 md:gap-12 lg:gap-16">
          {lastTwoStages.map((stage, index) => (
            <StageCard key={index + 3} stage={stage} index={index + 3} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Stage {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

function StageCard({ stage, index }: { stage: Stage; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="h-full"
    >
      <CardSpotlight
        className="flex h-full flex-col rounded-lg border border-[#eccc68] p-5 sm:p-6 md:p-8"
        color="rgba(66, 32, 6, 0.3)" // Semi-transparent amber for the spotlight effect
        radius={250}
        imageUrl={stage.image}
      >
        <motion.div
          className="mb-4 flex justify-center sm:mb-5"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {React.createElement(stage.icon, {
            className: "w-10 h-10 sm:w-12 sm:h-12 text-[#eccc68]",
            strokeWidth: 1.5,
          })}
        </motion.div>
        <h2 className="mb-3 text-center text-xl font-bold text-white sm:mb-4 sm:text-2xl md:mb-5">
          {stage.title}
        </h2>
        <p className="flex-grow text-center text-sm text-neutral-200 sm:text-base">
          {stage.description}
        </p>
      </CardSpotlight>
    </motion.div>
  );
}
