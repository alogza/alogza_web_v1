import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function StaircaseConcept() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center py-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src="/services/Mobilecycle.png"
            alt="Innovative Solutions"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl object-cover"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 px-4 md:px-8 w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 w-[80%]">
            {t("servicesPage.mobileApp.smartSolutions.title")}
          </h2>
          <p className="text-base text-justify md:text-base w-[80%]">
            {t("servicesPage.mobileApp.smartSolutions.content")}
          </p>
        </div>
      </div>
    </div>
  );
}
