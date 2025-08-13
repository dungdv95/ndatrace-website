"use client";
import { useEffect, useState } from "react";
import HeaderSection from "./header-section";
import { getDictionary } from "@/get-dictionary";

interface LayoutProps {
  children: React.ReactNode;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export default function LayoutPage({ children, dictionary }: LayoutProps) {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const [isScrolledToTopDesktop, setIsScrolledToTopDesktop] = useState(true);
  const [show, setShow] = useState(false);

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

  return (
    <div className="min-h-screen bg-white overflow-hidden font-display selection:bg-blue-300">
      <HeaderSection
        dictionary={dictionary}
        isScrolledToTop={isScrolledToTop}
        isScrolledToTopDesktop={isScrolledToTopDesktop}
      />
      {children}
    </div>
  );
}
