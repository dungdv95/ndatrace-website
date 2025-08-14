"use client";

import { cn, randomNumber } from "@/lib/utils";
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
import { getDictionary } from "@/get-dictionary";
import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";
import Link from "next/link";
import { useStore } from "./store";

const lisNavs = [
  {
    id: 1,
    name: "homePage",
    href: "#about",
    idSection: "about",
  },
  {
    id: 2,
    name: "fields",
    href: "#field",
    idSection: "field",
  },
  {
    id: 3,
    name: "benefits",
    href: "#benefit",
    idSection: "benefit",
  },
  {
    id: 4,
    name: "features",
    href: "#feature",
    idSection: "feature",
  },
  {
    id: 5,
    name: "technology",
    href: "#technology",
    idSection: "technology",
  },
  {
    id: 6,
    name: "blog",
    href: "#inquiry",
    idSection: "inquiry",
  },
  {
    id: 7,
    name: "contact",
    href: "#contact",
    idSection: "contact",
  },
];

const wait = () => new Promise((resolve) => setTimeout(resolve, 300));

export default function HeaderSection({
  isScrolledToTop,
  isScrolledToTopDesktop,
  dictionary,
}: {
  isScrolledToTop: boolean;
  isScrolledToTopDesktop: boolean;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <MobileHeader
        headerTitle={dictionary?.header}
        isScrolledToTop={isScrolledToTop}
      />
    );
  }

  return (
    <DesktopHeader
      headerTitle={dictionary?.header}
      isScrolledToTopDesktop={isScrolledToTopDesktop}
    />
  );
}

function DesktopHeader({
  isScrolledToTopDesktop,
  headerTitle,
}: {
  isScrolledToTopDesktop: boolean;
  headerTitle: Awaited<ReturnType<typeof getDictionary>>["header"];
}) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const idSection = useStore((state) => state.idSection);
  const setSectionId = useStore((state) => state.setSectionId);
  const pathName = usePathname();

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
          className={cn(
            "flex items-center gap-[82px] py-2 max-xl:gap-[50px] max-lg:gap-[10px] bg-white rounded-4xl ",
            !isScrolledToTopDesktop && "header-shadow"
          )}
        >
          <div className="grow px-4 flex justify-between items-center max-lg:px-5">
            {lisNavs.slice(0, 4).map((item, index) => (
              <span
                key={index}
                className={cn(
                  "cursor-pointer text-base leading-normal tracking-[-0.6px] max-lg:text-xs",
                  getColorActive(
                    idSection.split("_")[0],
                    pathName,
                    item.idSection
                  )
                )}
                onClick={() => {
                  if (inBlogPage(pathName)) {
                    if (pathName.includes("vi")) {
                      router.push("/vi");
                    } else {
                      router.push("/en");
                    }
                  }
                  setSectionId(item.idSection + "_" + randomNumber(4));
                }}
              >
                {headerTitle[item.name as keyof typeof headerTitle]}
              </span>
            ))}
          </div>
          <div
            className="cursor-pointer grow-0"
            onClick={() => {
              if (inBlogPage(pathName)) {
                if (pathName.includes("vi")) {
                  router.push("/vi");
                } else {
                  router.push("/en");
                }
              }
              setSectionId("about" + "_" + randomNumber(4));
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
                  getColorActive(
                    idSection.split("_")[0],
                    pathName,
                    item.idSection
                  )
                )}
                onClick={() => {
                  if (item.name === "blog") {
                    if (pathName.includes("vi")) {
                      router.push("/vi/blogs");
                    } else {
                      router.push("/en/blogs");
                    }
                    // setSectionId(item.idSection + "_" + randomNumber(4));
                  } else {
                    if (inBlogPage(pathName)) {
                      if (item.name !== "contact") {
                        if (pathName.includes("vi")) {
                          router.push("/vi");
                        } else {
                          router.push("/en");
                        }
                      }
                    }
                    setSectionId(item.idSection + "_" + randomNumber(4));
                  }
                }}
              >
                {headerTitle[item.name as keyof typeof headerTitle]}
              </span>
            ))}

            <LocalSwitch />
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function MobileHeader({
  isScrolledToTop,
  headerTitle,
}: {
  isScrolledToTop: boolean;
  headerTitle: Awaited<ReturnType<typeof getDictionary>>["header"];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const setSectionId = useStore((state) => state.setSectionId);
  const idSection = useStore((state) => state.idSection);
  const pathName = usePathname();
  const router = useRouter();

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
                <div className="z-10 relative flex flex-col gap-4">
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
                          "text-[#1849A9] text-xl leading-[30px] ",
                          getColorActiveMobile(
                            idSection.split("_")[0],
                            pathName,
                            item.idSection
                          )
                        )}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (item.name === "blog") {
                            if (pathName.includes("vi")) {
                              router.push("/vi/blogs");
                            } else {
                              router.push("/en/blogs");
                            }
                          } else {
                            if (inBlogPage(pathName)) {
                              if (item.name !== "contact") {
                                if (pathName.includes("vi")) {
                                  router.push("/vi");
                                } else {
                                  router.push("/en");
                                }
                              }
                            }
                            setSectionId(
                              item.idSection + "_" + randomNumber(4)
                            );
                          }
                        }}
                      >
                        {headerTitle[item.name as keyof typeof headerTitle]}
                      </span>
                    ))}
                    <LocalSwitchMobile />
                  </div>
                </div>
                <div className="z-0 relative mb-[55px] flex justify-center">
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

function LocalSwitch() {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="p-1 border border-[#1849A9] rounded-[4px] flex gap-1 items-center max-lg:hidden">
      {i18n.locales.map((locale) => {
        return (
          <Link
            key={locale}
            href={redirectedPathname(locale)}
            className={cn(
              "cursor-pointer rounded-[4px] px-2 py-0.5 ",
              pathname.includes(locale) ? "bg-[#1849A9]" : "bg-transparent"
            )}
          >
            <span
              className={cn(
                " text-base leading-6",
                pathname.includes(locale) ? "text-[#FAFAFA]" : "text-[#194185] "
              )}
            >
              {isEnglish(locale) ? "Eng" : "Vie"}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function LocalSwitchMobile() {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="p-1 border border-[#1849A9] rounded-[4px] flex gap-1 items-center w-fit">
      {i18n.locales.map((locale) => {
        return (
          <Link
            key={locale}
            href={redirectedPathname(locale)}
            className={cn(
              "cursor-pointer rounded-[4px] px-2 py-0.5 ",
              pathname.includes(locale) ? "bg-[#1849A9]" : "bg-transparent"
            )}
          >
            <span
              className={cn(
                " text-base leading-6",
                pathname.includes(locale) ? "text-[#FAFAFA]" : "text-[#194185] "
              )}
            >
              {isEnglish(locale) ? "Eng" : "Vie"}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

const isEnglish = (locale: string) => {
  if (locale == "en") {
    return true;
  }
  return false;
};

const inBlogPage = (pathName: string) => {
  return pathName.includes("/blogs");
};

const getColorActive = (
  sectionId: string,
  pathName: string,
  itemSectionId: string
) => {
  if (pathName.includes("/blog")) {
    if (itemSectionId === "inquiry") {
      return "text-[#0057D6] font-bold hover:text-[#0057D6]/70";
    } else {
      return "text-[#194185] font-medium hover:text-[#194185]/70";
    }
  } else {
    if (sectionId === itemSectionId) {
      return "text-[#0057D6] font-bold hover:text-[#0057D6]/70";
    } else {
      return "text-[#194185] font-medium hover:text-[#194185]/70";
    }
  }
};

const getColorActiveMobile = (
  sectionId: string,
  pathName: string,
  itemSectionId: string
) => {
  if (pathName.includes("/blog")) {
    if (itemSectionId === "inquiry") {
      return "font-bold";
    } else {
      return "font-medium";
    }
  } else {
    if (sectionId === itemSectionId) {
      return "font-bold";
    } else {
      return "font-medium";
    }
  }
};
