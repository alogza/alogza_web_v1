"use client";
import Image from "next/image"
import { useTranslation } from "react-i18next"

interface FeatureCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  imagePosition: "left" | "right"
  isIcon?: boolean
}

export default function FeatureCard({
  title,
  description,
  imageUrl,
  imageAlt,
  imagePosition,
  isIcon = false,
}: FeatureCardProps) {
      const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {imagePosition === "left" && (
        <div
          className={`flex justify-center ${isIcon ? "md:justify-start" : ""} order-last md:order-first`}
        >
          <div className={isIcon ? "w-32 h-32" : "w-full max-w-md"}>
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              width={isIcon ? 128 : 600}
              height={isIcon ? 128 : 400}
              className={`${
                isIcon ? "object-contain" : "object-cover rounded-lg"
              } w-full h-auto transition-transform duration-300 hover:scale-105`}
            />
          </div>
        </div>
      )}

      <div className={`${imagePosition === "right" ? "md:order-first" : ""}`}>
        <h3 className="text-xl md:text-2xl font-bold mb-4">{t(title)}</h3>
        <p className="text-gray-300">{t(description)}</p>
      </div>

      {imagePosition === "right" && (
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="object-cover rounded-lg w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      )}
    </div>
  )
}
