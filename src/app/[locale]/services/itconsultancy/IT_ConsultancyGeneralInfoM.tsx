import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function IT_ConsultancyStaircaseConcept() {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black py-8 text-white">
      <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
        {/* Image Section */}
        <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl md:w-1/2">
          <Image
            src="/services/ITcycle.png"
            alt="Innovative Solutions"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl object-cover"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="w-full px-4 md:w-1/2 md:px-8">
          <h2 className="mb-4 text-2xl font-bold sm:text-2xl md:text-4xl lg:text-4xl w-[80%]">
            {t("servicesPage.itConsultancy.smartSolutions.title")}
          </h2>
          <p className="text-base text-justify md:text-base w-[80%]">
            {t("servicesPage.itConsultancy.smartSolutions.content")}
          </p>
        </div>
      </div>
    </div>
  );
}
