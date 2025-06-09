import Contact from "@/PagesComponents/homepage/Contact/Contact";
import Hero from "@/PagesComponents/homepage/Hero/Hero";
import Projects from "@/PagesComponents/homepage/Projects/Projects";
import Services from "@/PagesComponents/homepage/Services/Services";
import WhyUs from "@/PagesComponents/homepage/Whyus/WhyUs";
import React from "react";
import StructuredData from "@/components/StructuredData";

const page = () => {
  const pageData = {
    name: "Alogza - Digital Solutions & Technology Services",
    description: "Alogza is a cutting-edge tech startup offering professional web development, mobile app creation, AI solutions, and digital design services to help businesses thrive in the digital era.",
    url: "https://www.alogza.com"
  };

  return (
    <div>
      <StructuredData type="WebPage" pageData={pageData} />
      <Hero />
      <WhyUs />
      <Services />
      <Projects />
      <Contact/>
    </div>
  );
};

export default page;
