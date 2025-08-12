"use client";
import { useEffect, useState } from "react";
import HeaderSection from "./header-section";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutPage({ children }: LayoutProps) {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
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

  return (
    <div className="min-h-screen bg-white overflow-hidden font-display selection:bg-blue-300">
      <HeaderSection isScrolledToTop={isScrolledToTop} />
      {children}
    </div>
  );
}
