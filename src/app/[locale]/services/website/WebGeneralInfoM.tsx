import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function WebStaircaseConcept() {
  const { t } = useTranslation();
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black py-8 text-white">
      <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src="/services/Webcycle.png"
            alt="Innovative Solutions"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl object-cover"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="px-4 md:w-1/2 md:px-8 w-full">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl w-[80%]">
            {t("servicesPage.webDevelopment.smartSolutions.title")}
          </h2>
          <p className="text-base text-justify md:text-base w-[80%]">
            {t("servicesPage.webDevelopment.smartSolutions.content")}
          </p>
        </div>
      </div>
    </div>
  );
}
