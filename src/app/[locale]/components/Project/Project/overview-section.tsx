"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export type CarouselImage = {
  src: string;
  alt?: string;
};

type OverviewSectionProps = {
  title: string;
  description: string;
  images: CarouselImage[];
};

export default function OverviewSection({
  title,
  description,
  images,
}: OverviewSectionProps) {
  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        {title}
      </h2>
      <div className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
        {description}
      </div>

      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-3xl mx-auto relative min-h-[600px]">
            {" "}
            {/* Added min-h-[600px] */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="rounded-lg overflow-hidden h-full">
                  <div className="h-[500px] md:h-[600px] relative">
                    {" "}
                    {/* Increased height */}
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt || "Slide image"}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      priority={index === currentIndex}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={i18n.language === "en" ? previousSlide : nextSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={i18n.language === "en" ? nextSlide : previousSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors z-20"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    currentIndex === index ? "bg-white" : "bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
