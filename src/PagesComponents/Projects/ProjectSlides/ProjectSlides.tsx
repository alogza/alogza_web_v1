"use client"
import OverviewSection, {
  CarouselImage,
} from "@/app/[locale]/components/Project/Project/overview-section";
import { useTranslation } from "react-i18next";

interface ProjectSlidesProps {
  image: {
    url: string;
    alt: string;
  }[];
  title: string;
  description: string;
}

const ProjectSlides = ({image, title, description}:ProjectSlidesProps) => {
    const { t } = useTranslation();

  const images: CarouselImage[] =
    image.map((item) => ({
      src: item.url ?? "/placeholder.svg",
      alt: item.alt ?? "",
    })) || [];

  return (
    <OverviewSection
      title={t(title) || "Overview"}
      description={t(description)}
      images={images}
    />
  );
};

export default ProjectSlides;
