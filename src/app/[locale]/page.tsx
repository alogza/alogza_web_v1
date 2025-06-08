import Contact from "@/PagesComponents/homepage/Contact/Contact";
import Hero from "@/PagesComponents/homepage/Hero/Hero";
import Projects from "@/PagesComponents/homepage/Projects/Projects";
import Services from "@/PagesComponents/homepage/Services/Services";
import WhyUs from "@/PagesComponents/homepage/Whyus/WhyUs";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Services />
      <Projects />
      <Contact/>
    </div>
  );
};

export default page;
