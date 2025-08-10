"use client";

import AboutSection from "@/components/sections/AboutSetion";
import BenefitSection from "@/components/sections/BenefitSection";
import BlogSection from "@/components/sections/BlogSection";
import FeatureSection from "@/components/sections/FeatureSection";
import FieldSection from "@/components/sections/FieldSection";
import FooterSection from "@/components/sections/FooterSection";
import TechSection from "@/components/sections/TechSection";

export default function Page() {
  return (
    <>
      <AboutSection />
      <FieldSection />
      <BenefitSection />
      <FeatureSection />
      <TechSection />
      <BlogSection />
      <FooterSection />
    </>
  );
}
