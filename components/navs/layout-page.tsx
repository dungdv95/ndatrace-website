"use client";
import { useEffect, useState } from "react";
import HeaderSection from "./header-section";
import { getDictionary } from "@/get-dictionary";
import { motion } from "motion/react";
import FooterSection from "../sections/FooterSection";
import { useStore } from "./store";

interface LayoutProps {
  children: React.ReactNode;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const wait = () => new Promise((resolve) => setTimeout(resolve, 100));

export default function LayoutPage({ children, dictionary }: LayoutProps) {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const [isScrolledToTopDesktop, setIsScrolledToTopDesktop] = useState(true);
  const idSection = useStore((state) => state.idSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledToTop(window.scrollY < 10);
    };

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledToTopDesktop(window.scrollY < 120);
    };

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let sectionId = idSection.split("_")[0];
    console.log("sectionId", sectionId);
    wait().then(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const offset = 105; // số px muốn dịch xuống thêm
        const targetY = rect.top + scrollTop - offset;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    });
  }, [idSection]);

  return (
    <div className="min-h-screen bg-white overflow-hidden font-display selection:bg-blue-300">
      <HeaderSection
        dictionary={dictionary}
        isScrolledToTop={isScrolledToTop}
        isScrolledToTopDesktop={isScrolledToTopDesktop}
      />
      {children}
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <FooterSection footerLang={dictionary?.footer} />
      </motion.div>
    </div>
  );
}
