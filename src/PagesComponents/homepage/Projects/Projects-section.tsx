"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useProjectCategories } from "@/app/[locale]/projects/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LinkWithLoading from "@/app/[locale]/components/LinkWithLoading";
import { useTranslation } from "react-i18next";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
  featured?: boolean;
}

// Add global style to hide horizontal scrollbars
const globalStyles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-none {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

// Horizontal Project Slider component
const HorizontalProjectSlider = ({ projects }: { projects: Project[] }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  // Calculate if content is scrollable
  useEffect(() => {
    const checkScrollRight = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        setIsScrollable(container.scrollWidth > container.clientWidth + 10);
      }
    };

    checkScrollRight();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollRight);
      return () => container.removeEventListener("scroll", checkScrollRight);
    }
  }, [projects]);

  // Calculate dynamic spacing between cards
  const getSpacing = () => {
    if (!scrollContainerRef.current) return "gap-4";
    const containerWidth = scrollContainerRef.current.clientWidth;

    // Adjust spacing based on container width
    if (containerWidth < 640) return "gap-3"; // Mobile
    if (containerWidth < 1024) return "gap-4"; // Tablet
    return "gap-6"; // Desktop
  };

  // Handle scroll navigation
  const scrollTo = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Calculate scroll amount based on container width
      const scrollAmount =
        direction === "left"
          ? -container.clientWidth * 0.9
          : container.clientWidth * 0.9;

      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const { t, i18n } = useTranslation();

  return (
    <div className="relative w-full">
      {/* LEFT side arrow */}
      {isScrollable && (
        <button
          onClick={() => scrollTo(i18n.language === "ar" ? "left" : "left")}
          className="absolute top-1/2 left-0 z-30 -translate-y-1/2 rounded-xl bg-white/20 p-2 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label="Scroll left"
        >
          <ArrowLeft />
        </button>
      )}

      {/* RIGHT side arrow */}
      {isScrollable && (
        <button
          onClick={() => scrollTo(i18n.language === "ar" ? "right" : "right")}
          className="absolute top-1/2 right-0 z-30 -translate-y-1/2 rounded-xl bg-white/20 p-2 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label="Scroll right"
        >
          <ArrowRight />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className={clsx(
          "scrollbar-none flex snap-x snap-mandatory overflow-x-auto pb-6",
          getSpacing()
        )}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={clsx(
              "relative flex-shrink-0 snap-start overflow-hidden rounded-xl border border-white/15",
              project.featured
                ? "h-[350px] w-[95%] sm:w-[90%] md:w-[500px] lg:w-[65%]"
                : "h-[350px] w-[80%] bg-black/10 sm:w-[85%] md:w-[260px] lg:w-[30%]"
            )}
          >
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
                  <div className="w-[75%] space-y-3 max-sm:w-full">
                    <h3 className="text-xl leading-tight font-bold">
                      {project.title}
                    </h3>
                  </div>
                  <LinkWithLoading
                    href={project.url}
                    className={clsx(
                      "ml-4 inline-block shrink-0 rounded-xl bg-[#eccc68] px-5 py-2 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-gray-200",
                      "max-sm:ml-0 max-sm:mt-4 max-sm:w-full max-sm:text-center"
                    )}
                  >
                    {t("home.projects.items.readMore")}
                  </LinkWithLoading>
                </div>
              </div>
            ) : (
              <div className="flex h-full flex-col">
                <div className="relative h-[180px] w-full bg-black/20">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`${project.featured ? "object-cover" : "object-contain"}`}
                    priority
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <LinkWithLoading
                    href={project.url}
                    className="w-full rounded-xl bg-[#eccc68] py-2 text-center text-sm font-medium text-black transition-all hover:scale-105 hover:bg-gray-200  max-sm:mt-4 max-sm:w-full "
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
  );
};

export default function ProjectsSection() {
  const { t, i18n } = useTranslation();
  const projectCategories = useProjectCategories();

  return (
    <section className="w-full overflow-x-hidden py-40 text-white">
      <style jsx global>
        {globalStyles}
      </style>
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold max-sm:text-2xl">
          {t("home.projects.heading")}
        </h2>

        <div className="space-y-32">
          {projectCategories.map((category, index) => (
            <div
              key={category.id}
              className={clsx(
                "grid grid-cols-1 items-center gap-8",
                index % 2 === 0
                  ? "xl:grid-cols-[1fr_2fr]"
                  : "xl:grid-cols-[2fr_1fr]",
                "flex flex-col xl:grid"
              )}
            >
              <div
                className={clsx(
                  "flex flex-col items-center space-y-6 rounded-xl border border-white/15 bg-black/10 p-6 text-center",
                  "mx-auto h-[300px] w-full max-w-[300px]",
                  "order-1",
                  index % 2 === 0 ? "xl:order-1" : "xl:order-2"
                )}
              >
                <div className="relative h-[70%] w-[90%] overflow-hidden">
                  {/* Yellow gradient circle background */}
                  <div className="absolute top-5 right-9 z-0 h-[75%] w-[65%] rounded-full bg-gradient-to-tr from-[#eccc68] to-[#FFC100]/70 opacity-70 blur-md" />

                  {/* Project category image */}
                  <div className="relative z-10 h-full w-full">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div
                className={clsx(
                  "relative w-full",
                  "order-2",
                  index % 2 === 0 ? "xl:order-2" : "xl:order-1"
                )}
              >
                <HorizontalProjectSlider
                  projects={category.projects.map((project) => ({
                    ...project,
                    category: category.id,
                  }))}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <LinkWithLoading
            href="/projects"
            className="group inline-flex items-center text-lg font-medium text-[#eccc68] hover:text-white"
          >
            {t("home.projects.ViewAllProjects")}
            {i18n.language === "ar" ? (
              <ArrowLeft className="ml-2 h-5 w-5 transition-transform group-hover:-translate-x-1 hover:bg-white" />
            ) : (
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 hover:bg-white" />
            )}
          </LinkWithLoading>
        </div>
      </div>
    </section>
  );
}
