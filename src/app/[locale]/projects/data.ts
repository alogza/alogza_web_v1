import { useTranslation } from "react-i18next";

// Types
export type ProjectCategory = {
  id: string
  title: string
  image: string
  projects: Project[]
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
  url: string
  featured?: boolean
}

// Hook to return project categories with translated titles
export const useProjectCategories = (): ProjectCategory[] => {
  const { t } = useTranslation()

  const projectCategories: ProjectCategory[] = [
    {
      id: "ai",
      title: t("home.projects.items.ai"),
      image: "/projects/bot.png",
      projects: [
        {
          id: "sfa-chatbot",
          title: t("projectsPage.projects.sfa.title"),
          description:
          t("projectsPage.projects.sfa.description"),
          image: "/projects/sfa_chatbot.png",
          url: "/projects/salesmobile",
        },
        {
          id: "ai-chatbot",
          title: t("projectsPage.projects.aichatbot.title"),
          description:
          t("projectsPage.projects.aichatbot.description"),
          image: "/projects/alogzachatbot.png",
          url: "/projects/chatbot",
          featured: true,
        },
      ],
    },
    {
      id: "web-app",
      title: t("home.projects.items.webApps"), // You can add more translation keys like this
      image: "/projects/websiteapp.png",
      projects: [
        {
          id: "isianpadu",
          title: t("projectsPage.projects.isianpadu.title"),
          description:
            t("projectsPage.projects.isianpadu.description"),
          image: "/projects/businessweb/mockup/main.png",
          url: "/projects/bussinesweb",
          featured: true,
        },
        {
          id: "sfa-app",
          title: t("projectsPage.projects.sfaapp.title"),
          description:
          t("projectsPage.projects.sfaapp.description"),
          image: "/projects/sfa.png",
          url: "/projects/salesmobile",
        },
        {
          id: "sfa-web",
          title: t("projectsPage.projects.sfaweb.title"),
          description:
          t("projectsPage.projects.sfaweb.description"),
          image: "/projects/productweb/main.png",
          url: "/projects/productweb",
          featured: true,
        },
        {
          id: "certificate-app",
          title: t("projectsPage.projects.certificate.title"),
          description:
          t("projectsPage.projects.certificate.description"),
          image: "/projects/Certificate/image.png",
          url: "/projects/certificate",
          featured: true,
        },
      ],
    },
    {
      id: "game-dev",
      title: t("home.projects.items.games"),
      image: "/projects/gamepad.png",
      projects: [
        {
          id: "amaze",
          title: t("projectsPage.projects.amazeventure.title"),
          description:
          t("projectsPage.projects.amazeventure.description"),
          image: "/projects/amazeVenture.png",
          url: "/projects/amazeventure",
          featured: true,
        },
      ],
    },
  ]

  return projectCategories
}
