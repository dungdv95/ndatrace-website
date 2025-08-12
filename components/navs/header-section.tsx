"use client";

import { cn } from "@/lib/utils";
import { useIsMobile } from "../hooks/use-mobile";
import { Icons } from "../icons";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const lisNavs = [
  {
    id: 1,
    name: "Trang chủ",
    href: "#about",
    idSection: "about",
  },
  {
    id: 2,
    name: "Lĩnh vực",
    href: "#field",
    idSection: "field",
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
    name: "Blog",
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

export default function HeaderSection({
  isScrolledToTop,
}: {
  isScrolledToTop: boolean;
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileHeader isScrolledToTop={isScrolledToTop} />;
  }

  return <DesktopHeader />;
}

function DesktopHeader() {
  const [isVie, setIsVie] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Khi có action scroll → ẩn navbar
  //     setIsVisible(false);

  //     // Nếu đang có timer cũ → xóa
  //     if (scrollTimeout.current) {
  //       clearTimeout(scrollTimeout.current);
  //     }

  //     // Sau khi dừng scroll 200ms → hiện lại navbar
  //     scrollTimeout.current = setTimeout(() => {
  //       setIsVisible(true);
  //     }, 400);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     if (scrollTimeout.current) {
  //       clearTimeout(scrollTimeout.current);
  //     }
  //   };
  // }, []);

  return (
    <header
      className={cn(
        "fixed top-[45px] z-50 w-full transition-transform duration-700 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-[calc(100%+45px)]"
      )}
    >
      <div className="container mx-auto 2xl:px-[123px] xl:px-[60px]">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="flex items-center gap-[82px] py-2 max-xl:gap-[50px] max-lg:gap-[10px] bg-white rounded-4xl header-shadow"
        >
          <div className="grow px-4 flex justify-between items-center max-lg:px-5">
            {lisNavs.slice(0, 4).map((item, index) => (
              <span
                key={index}
                className={cn(
                  "cursor-pointer text-base leading-normal tracking-[-0.6px] max-lg:text-xs",
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
            <Icons.ndaTraceLogoIcons className="max-lg:w-[180px]" />
          </div>
          <div className="grow px-4 flex justify-between items-center max-lg:px-5">
            {lisNavs.slice(4, 7).map((item, index) => (
              <span
                key={index}
                className={cn(
                  "cursor-pointer text-[#194185] font-medium text-base leading-normal tracking-[-0.6px] max-lg:text-xs",
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
            <div className="p-1 border border-[#1849A9] rounded-[4px] flex gap-1 items-center max-lg:hidden">
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
        </motion.div>
      </div>
    </header>
  );
}

function MobileHeader({ isScrolledToTop }: { isScrolledToTop: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVie, setIsVie] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-700 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.1,
        }}
        className={cn(
          "py-6 px-4 max-[32rem]:py-4",
          isScrolledToTop ? "bg-transparent" : "bg-white/90 shadow-sm"
        )}
      >
        <div className="flex justify-between items-center">
          <div
            onClick={(event) => {
              setMobileMenuOpen(false);
              wait().then(() => {
                const el = document.getElementById("about");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              });
              event.preventDefault();
            }}
            className="flex items-center gap-2"
          >
            <div>
              <Icons.mobileLogoIcon />
            </div>
          </div>
          <Sheet
            open={mobileMenuOpen}
            onOpenChange={setMobileMenuOpen}
            // modal={true}
          >
            <SheetTrigger asChild>
              <Button
                variant="default"
                size="icon"
                className="bg-white h-10 w-10 rounded-full"
              >
                <Icons.mobileListMenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              onOpenAutoFocus={(e) => e.preventDefault()}
              className="pt-[27px] px-4 border-0 mb-bg-menu rounded-l-2xl"
            >
              <SheetHeader className="hidden space-y-0">
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="h-full flex flex-col justify-between">
                <div className="relative flex flex-col gap-4">
                  <div className="flex justify-end">
                    <Button
                      className="h-10 w-10 bg-white hover:bg-white shadow-xl rounded-full"
                      size="icon"
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                    >
                      <X className="size-6 text-black stroke-2" />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-6">
                    {lisNavs.map((item, index) => (
                      <span
                        key={index}
                        className={cn(
                          "text-[#1849A9] text-xl leading-[30px] font-medium",
                          activeSection === item.idSection && "font-semibold"
                        )}
                        onClick={(event) => {
                          setMobileMenuOpen(false);
                          wait().then(() => {
                            const el = document.getElementById(item.idSection);
                            if (el) {
                              const rect = el.getBoundingClientRect();
                              const scrollTop =
                                window.pageYOffset ||
                                document.documentElement.scrollTop;
                              const offset = 90; // số px muốn dịch xuống thêm
                              const targetY = rect.top + scrollTop - offset;
                              window.scrollTo({
                                top: targetY,
                                behavior: "smooth",
                              });
                            }
                          });
                          event.preventDefault();
                        }}
                      >
                        {item.name}
                      </span>
                    ))}
                    <div className="p-1 border border-[#1849A9] rounded-[4px] flex gap-1 items-center w-fit">
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
                <div className="relative mb-[55px] flex justify-center">
                  <div className="absolute bottom-0">
                    <Icons.mobileMenuStack className="w-[420px] h-[220px]" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}
