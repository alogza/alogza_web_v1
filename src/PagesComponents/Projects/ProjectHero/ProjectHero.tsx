"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ProjectHeroProps {
  header: string;
  scr: string;
}

const ProjectHero = ({ header, scr }: ProjectHeroProps) => {
  const { t } = useTranslation();
  return (
    <section className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      <div className="relative h-full w-full">
        <Image
          src={scr}
          alt="Project Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute right-0 bottom-16 left-0 z-20 px-4 text-center md:px-8 lg:px-16">
        <div className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
          {t(header)}
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
