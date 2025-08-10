"use client";

import { cn } from "@/lib/utils";
import { useIsMobile } from "../hooks/use-mobile";
import { Icons } from "../icons";
import { useEffect, useRef, useState } from "react";

const lisNavs = [
  {
    id: 1,
    name: "Trang chủ",
    href: "#about",
    idSection: "about",
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
  {
    id: 5,
    name: "Công nghệ",
    href: "#technology",
    idSection: "technology",
  },
  {
    id: 6,
    name: "Hỏi đáp",
    href: "#inquiry",
    idSection: "inquiry",
  },
  {
    id: 7,
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
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    lisNavs.forEach((nav) => {
      const element = document.getElementById(nav.idSection);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Khi có action scroll → ẩn navbar
      setIsVisible(false);

      // Nếu đang có timer cũ → xóa
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Sau khi dừng scroll 200ms → hiện lại navbar
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-[45px] z-50 w-full transition-transform duration-700 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-[calc(100%+45px)]"
      )}
    >
      <div className="container mx-auto 2xl:px-[123px] xl:px-[90px]">
        <div className="flex items-center gap-[82px] py-2 max-xl:gap-[50px] max-lg:gap-[10px] bg-white rounded-4xl">
          <div className="grow px-4 flex justify-between items-center max-lg:px-0">
            {lisNavs.slice(0, 4).map((item, index) => (
              <span
                key={index}
                className={cn(
                  "cursor-pointer  text-base leading-normal tracking-[-0.6px]",
                  activeSection === item.idSection
                    ? "text-[#0057D6] font-bold"
                    : "text-[#194185] font-medium"
                )}
                onClick={(event) => {
                  wait().then(() => {
                    const el = document.getElementById(item.idSection);
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      const offset = 105; // số px muốn dịch xuống thêm
                      const targetY = rect.top + scrollTop - offset;
                      window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                  });
                  event.preventDefault();
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div
            className="cursor-pointer grow-0"
            onClick={(event) => {
              wait().then(() => {
                const el = document.getElementById("about");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              });
              event.preventDefault();
            }}
          >
            <Icons.ndaTraceLogoIcons />
          </div>
          <div className="grow px-4 flex justify-between items-center max-lg:px-0">
            {lisNavs.slice(4, 7).map((item, index) => (
              <span
                key={index}
                className={cn(
                  "cursor-pointer text-[#194185] font-medium text-base leading-normal tracking-[-0.6px]",
                  activeSection === item.idSection
                    ? "text-[#0057D6] font-bold"
                    : "text-[#194185] font-medium"
                )}
                onClick={(event) => {
                  wait().then(() => {
                    const el = document.getElementById(item.idSection);
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      const offset = 105; // số px muốn dịch xuống thêm
                      const targetY = rect.top + scrollTop - offset;
                      window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                  });
                  event.preventDefault();
                }}
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
