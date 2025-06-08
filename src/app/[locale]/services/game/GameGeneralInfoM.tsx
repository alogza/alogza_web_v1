import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function GameStaircaseConcept() {
    const { t } = useTranslation();
  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center py-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src="/services/Gamecycle.png"
            alt="Innovative Solutions"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 px-4 md:px-8 w-full">
          <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold mb-4 w-[80%]">
            {t("servicesPage.gameDevelopment.smartSolutions.title")}
          </h2>
          <p className="text-base text-justify md:text-base w-[80%]">
            {t("servicesPage.gameDevelopment.smartSolutions.content")}
          </p>
        </div>
      </div>
    </div>
  );
}
