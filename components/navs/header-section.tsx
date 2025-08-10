"use client";

import { cn } from "@/lib/utils";
import { useIsMobile } from "../hooks/use-mobile";
import { Icons } from "../icons";
import { useState } from "react";

const listNavLeft = [
  {
    id: 1,
    name: "Trang chủ",
    href: "#home",
    idSection: "home",
  },
  {
    id: 2,
    name: "Giới thiệu",
    href: "#about",
    idSection: "about",
  },
  {
    id: 3,
    name: "Lợi ích",
    href: "#benefit",
    idSection: "benefit",
  },
  {
    id: 4,
    name: "Tính năng",
    href: "#feature",
    idSection: "feature",
  },
];

const listNavRight = [
  {
    id: 1,
    name: "Công nghệ",
    href: "#technology",
    idSection: "technology",
  },
  {
    id: 2,
    name: "Hỏi đáp",
    href: "#inquiry",
    idSection: "inquiry",
  },
  {
    id: 3,
    name: "Liên hệ",
    href: "#contact",
    idSection: "contact",
  },
];

const wait = () => new Promise((resolve) => setTimeout(resolve, 300));

export default function HeaderSection() {
  const isMobile = useIsMobile();

  return <DesktopHeader />;
}

function DesktopHeader() {
  const [isVie, setIsVie] = useState(true);
  return (
    <header className={cn("fixed top-[54px] z-50 w-full")}>
      <div className="container mx-auto 2xl:px-[123px] xl:px-[90px]">
        <div className="flex items-center gap-[82px] py-2 max-xl:gap-[50px] max-lg:gap-[10px] bg-white rounded-4xl">
          <div className="grow px-4 flex justify-between items-center max-lg:px-0">
            {listNavLeft.map((item, index) => (
              <span
                key={index}
                className="text-[#194185] font-medium text-base leading-normal tracking-[-0.6px]"
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className="grow-0">
            <Icons.ndaTraceLogoIcons />
          </div>
          <div className="grow px-4 flex justify-between items-center max-lg:px-0">
            {listNavRight.map((item, index) => (
              <span
                key={index}
                className="text-[#194185] font-medium text-base leading-normal tracking-[-0.6px]"
              >
                {item.name}
              </span>
            ))}
            <div className="p-1 border border-[#1849A9] rounded-[4px] flex gap-1 items-center">
              <div
                className={cn(
                  "cursor-pointer rounded-[4px] px-2 py-0.5 ",
                  isVie ? "bg-[#1849A9]" : "bg-transparent"
                )}
                onClick={() => {
                  setIsVie(true);
                }}
              >
                <span
                  className={cn(
                    " text-base leading-6",
                    isVie ? "text-[#FAFAFA]" : "text-[#194185] "
                  )}
                >
                  Vie
                </span>
              </div>
              <div
                className={cn(
                  "cursor-pointer rounded-[4px] px-2 py-0.5 ",
                  !isVie ? "bg-[#1849A9]" : "bg-transparent"
                )}
                onClick={() => {
                  setIsVie(false);
                }}
              >
                <span
                  className={cn(
                    " text-base leading-6",
                    !isVie ? "text-[#FAFAFA]" : "text-[#194185] "
                  )}
                >
                  Eng
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
