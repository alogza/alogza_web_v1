"use client";
import LinkWithLoading from "@/app/[locale]/components/LinkWithLoading";
import clsx from "clsx";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  type: "mobile" | "web";
  featured?: boolean;
}

export default function RelatedProjectsStandalone() {
  const { t } = useTranslation();
  const projects: Project[] = [
    {
      id: "sfa-app",
      title: t("projectsPage.projects.sfaapp.title"),
      description: t("projectsPage.projects.sfaapp.description"),
      image: "/projects/sfa.png",
      url: "/projects/salesmobile",
      type: "mobile", // Mobile app project
      featured: false,
    },
  ];

  const getProjectClasses = (project: Project) => {
    const baseClasses =
      "relative flex-shrink-0 snap-start overflow-hidden rounded-xl border border-white/15";

    if (project.featured) {
      // Featured project sizing based on type
      if (project.type === "mobile") {
        return clsx(
          baseClasses,
          "h-[400px] w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px]" // Taller, narrower for mobile
        );
      } else {
        return clsx(
          baseClasses,
          "h-[350px] w-[90%] sm:w-[90%] md:w-[500px] lg:w-[48%]" // Wider for web
        );
      }
    } else {
      // Non-featured project sizing based on type
      if (project.type === "mobile") {
        return clsx(
          baseClasses,
          "h-[380px] w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] bg-black/10" // Mobile aspect ratio
        );
      } else {
        return clsx(
          baseClasses,
          "h-[350px] w-[85%] bg-black/10 sm:w-[85%] md:w-[400px] lg:w-[48%]" // Web aspect ratio
        );
      }
    }
  };

  // Function to get image container classes based on project type
  const getImageClasses = (project: Project) => {
    if (project.type === "mobile") {
      return "relative h-[200px] w-full bg-black/20"; // Adjusted height for mobile
    } else {
      return "relative h-[180px] w-full bg-black/20"; // Standard height for web
    }
  };

  return (
    <div className="w-full bg-black px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold max-sm:text-2xl">
          {t("projectsPage.relatedProjects")}{" "}
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <div key={project.id} className={getProjectClasses(project)}>
              {project.featured ? (
                <div className="relative h-full w-full">
                  {/* Background Image */}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 z-20 flex w-full items-end justify-between p-6 max-sm:flex-col">
                    <div
                      className={clsx(
                        "space-y-3",
                        project.type === "mobile"
                          ? "max-w-[85%]"
                          : "max-w-[100%]"
                      )}
                    >
                      <h3
                        className={clsx(
                          "leading-tight font-bold",
                          project.type === "mobile" ? "text-lg" : "text-2xl"
                        )}
                      >
                        {project.title}
                      </h3>
                      {/* <p className="line-clamp-3 text-justify text-sm leading-snug text-gray-200">
                        {project.description}
                      </p> */}
                    </div>
                    <LinkWithLoading
                      href={project.url}
                      className="ml-4 inline-block shrink-0 rounded-full bg-[#eccc68] px-5 py-2 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-white max-sm:mt-4 max-sm:w-full max-sm:rounded-xl max-sm:text-center"
                    >
                      {t("home.projects.items.readMore")}
                    </LinkWithLoading>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col">
                  <div className={getImageClasses(project)}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <h3 className="mb-2 text-xl font-bold">
                        {project.title}
                      </h3>
                      {/* <p className="line-clamp-3 text-justify text-sm text-gray-300">
                        {project.description}
                      </p> */}
                    </div>
                    <LinkWithLoading
                      href={project.url}
                      className="mt-4 w-full rounded-xl bg-[#eccc68] py-2 text-center text-sm font-medium text-black transition-all hover:scale-105 hover:bg-gray-200"
                    >
                      {t("home.projects.items.readMore")}
                    </LinkWithLoading>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
         
    </div>
  );
}
