"use client";

import AboutSection from "@/components/sections/AboutSetion";
import BenefitSection from "@/components/sections/BenefitSection";
import BlogSection from "@/components/sections/BlogSection";
import FeatureSection from "@/components/sections/FeatureSection";
import FieldSection from "@/components/sections/FieldSection";
import FooterSection from "@/components/sections/FooterSection";
import TechSection from "@/components/sections/TechSection";
import { motion } from "motion/react";

export default function Page() {
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
        <AboutSection />
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <FieldSection />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <BenefitSection />
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <FeatureSection />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <TechSection />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <BlogSection />
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <FooterSection />
      </motion.div>
    </>
  );
}
