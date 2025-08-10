"use client";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import HeaderSection from "./header-section";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutPage({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white overflow-hidden font-display selection:bg-blue-300">
      <HeaderSection />

      {children}
    </div>
  );
}
