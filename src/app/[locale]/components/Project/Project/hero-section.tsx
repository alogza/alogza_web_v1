import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black z-10"></div>
      <div className="relative h-full w-full">
        <Image
          src="/images/asd8.png"
          alt="Certificate Templates Background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>
      <div className="absolute bottom-16 left-0 right-0 z-20 px-4 md:px-8 lg:px-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Automated Certificate Generation –
          <br />
          Seamless & Efficient Digital Certification
        </h1>
      </div>
    </section>
  )
}
