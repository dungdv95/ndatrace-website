"use client";

import { useStore } from "@/components/navs/store";
import AboutSection from "@/components/sections/AboutSetion";
import BenefitSection from "@/components/sections/BenefitSection";
import BlogSection from "@/components/sections/BlogSection";
import FeatureSection from "@/components/sections/FeatureSection";
import FieldSection from "@/components/sections/FieldSection";
import FooterSection from "@/components/sections/FooterSection";
import TechSection from "@/components/sections/TechSection";
import { getDictionary } from "@/get-dictionary";
import { motion } from "motion/react";
import { useEffect } from "react";

const wait = () => new Promise((resolve) => setTimeout(resolve, 100));

export default function MainPage({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  return (
    <>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <AboutSection aboutLang={dictionary?.about} />
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <FieldSection fieldLang={dictionary?.fields} />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <BenefitSection benefitLang={dictionary?.benefits} />
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <FeatureSection featureLang={dictionary?.features} />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <TechSection techLang={dictionary?.techlonogy} />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <BlogSection blogLang={dictionary?.blogs} />
      </motion.div>
      {/* <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <FooterSection footerLang={dictionary?.footer} />
      </motion.div> */}
    </>
  );
}
