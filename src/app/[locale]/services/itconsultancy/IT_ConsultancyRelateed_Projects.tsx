"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function IT_ConsultancyRelatedProjectsStandalone() {
  const { t } = useTranslation();

  const projects = [
    {
      id: "sfa-app-1",
      title: "SFA App - Empowering Sales Teams with Smart Insights",
      description:
        "SFA App is a powerful tool designed to enhance the efficiency of sales teams by providing real-time access to crucial business data.",
      image: "/assests/sfa.png",
    },
    {
      id: "guidex",
      title: "GuideX",
      description:
        "an innovative app for visually impaired individuals, using advanced voice commands, object recognition, location-based guidance, and secure emergencies using AI Technologies.",
      image: "/assests/sfa.png",
    },
    {
      id: "hyrech",
      title: "HyRech",
      description:
        "provides personalized hydration recommendations by considering individual user data and external factors like weather. It also sends timely reminders to encourage consistent hydration.",
      image: "/assests/sfa.png",
    },
    {
      id: "sfa-app-2",
      title: "SFA App - Empowering Sales Teams with Smart Insights",
      description:
        "SFA App is a powerful tool designed to enhance the efficiency of sales teams by providing real-time access to crucial business data.",
      image: "/assests/sfa.png",
    },
    {
      id: "ar-time-traveler",
      title: "AR TIME TRAVELER",
      description:
        "AR learning app for 5th grade students focusing on teaching Malaysian history curriculum subject, it's integrated with AR to gamify the experience and entertain students while learn.",
      image: "/assests/sfa.png",
    },
  ];

  return (
    <div className="w-full bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t("projectsPage.relatedProjects")}{" "}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black border border-gray-800 rounded-lg overflow-hidden flex flex-col h-full"
            >
              <div className="relative flex justify-center p-4 w-[200px] h-[150px] mx-auto">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                <p className="text-sm text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Custom button without importing Button component */}
                <button
                  className="w-full bg-black text-white border border-white hover:bg-gray-900 transition-colors rounded-full py-2 px-4 mt-auto"
                  onClick={() =>
                    console.log(`Read more about ${project.title}`)
                  }
                >
                  {t("home.projects.items.readMore")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
