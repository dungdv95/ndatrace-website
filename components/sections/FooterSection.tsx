import Link from "next/link";
import { Icons } from "../icons";
import { useIsMobile } from "../hooks/use-mobile";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { getDictionary } from "@/get-dictionary";
import { useStore } from "../navs/store";
import { randomNumber } from "@/lib/utils";

const wait = () => new Promise((resolve) => setTimeout(resolve, 400));
const wait50 = () => new Promise((resolve) => setTimeout(resolve, 50));

const navs = [
  {
    id: 1,
    title: "introduction",
    idSection: "about",
  },
  {
    id: 2,
    title: "benefits",
    idSection: "benefit",
  },

  {
    id: 3,
    title: "features",
    idSection: "feature",
  },
  {
    id: 4,
    title: "technology",
    idSection: "technology",
  },
  {
    id: 5,
    title: "Faqs",
    idSection: "faq",
  },
  {
    id: 6,
    title: "contact",
    idSection: "contact",
  },
];

export default function FooterSection({
  footerLang,
}: {
  footerLang: Awaited<ReturnType<typeof getDictionary>>["footer"];
}) {
  const isMobile = useIsMobile();
  const setSectionId = useStore((state) => state.setSectionId);
  const pathName = usePathname();
  const router = useRouter();

  if (isMobile) {
    return (
      <section id="contact" className="pt-[72px]">
        <div className="mb-bg-footer  flex flex-col gap-[56px]">
          <div className="pt-[54px] px-4 flex flex-col gap-6">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="w-fit cursor-pointer"
              onClick={() => {
                if (inBlogPage(pathName)) {
                  if (pathName.includes("vi")) {
                    router.push("/vi");
                  } else {
                    router.push("/en");
                  }
                  wait().then(() => {
                    setSectionId("about" + "_" + randomNumber(4));
                  });
                } else {
                  wait50().then(() => {
                    setSectionId("about" + "_" + randomNumber(4));
                  });
                }
              }}
            >
              <Icons.logoFooter className="max-xl:w-[301px] max-xl:h-[69px]" />
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
            >
              <Separator className="m-0" />
            </motion.div>

            <div className="flex flex-col gap-1">
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#194185] text-xl leading-[30px] font-semibold"
              >
                {footerLang.transparent.split("\n")[0]}
              </motion.span>
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#194185] text-xl leading-[30px] font-semibold"
              >
                {footerLang.transparent.split("\n")[1]}
              </motion.span>

              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="mt-5 text-[#194185] text-lg leading-7"
              >
                {footerLang.transparentText}
              </motion.span>
            </div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
            >
              <Separator className="m-0" />
            </motion.div>

            <div className="flex flex-col gap-6">
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className=" text-[#194185] text-2xl leading-8 font-semibold"
              >
                {footerLang.contact}
              </motion.span>

              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
              >
                <Link
                  href="mailto:info@ndatrace.vn"
                  className="mt-1.5 text-[#194185] text-base leading-6"
                >
                  info@ndatrace.vn
                </Link>
              </motion.div>

              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#194185] text-base leading-6"
              >
                {footerLang.addr}
              </motion.span>

              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="mt-1.5 flex gap-6"
              >
                <Link
                  target="_blank"
                  href={"https://www.facebook.com/NDATrace"}
                  className="cursor-pointer"
                >
                  <Icons.footerFacebook />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.tiktok.com/@ndatrace"}
                  className="cursor-pointer"
                >
                  <Icons.footerTiktok />
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://www.youtube.com/channel/UC9sncb5QoL2Mlqp67q56ZGQ"
                  }
                  className="cursor-pointer"
                >
                  <Icons.footerYoutube />
                </Link>
              </motion.span>
            </div>
            <Separator className="m-0" />
            <div className="flex flex-col gap-6">
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#194185] text-2xl leading-8 font-semibold"
              >
                {footerLang.product}
              </motion.span>
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="mt-1.5 text-[#194185] text-base leading-6"
                onClick={() => {
                  router.push("https://ndachain.vn/");
                }}
              >
                {footerLang.ndaChain}
              </motion.span>
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#194185] text-base leading-6"
                onClick={() => {
                  router.push("https://ndachain.vn/");
                }}
              >
                {footerLang.ndaDid}
              </motion.span>

              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#194185] text-base leading-6"
              >
                {footerLang.ndaTrace}
              </motion.span>

              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#194185] text-base leading-6"
                onClick={() => {
                  router.push("https://www.ndakey.vn/");
                }}
              >
                {footerLang.ndaKey}
              </motion.span>
            </div>
          </div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="py-[18px] flex justify-center border-t border-t-[#D1E9FF]"
          >
            <span className="text-[#194185] text-base leading-2">
              © 2025 Copyright by NDATrace
            </span>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="pt-[80px] ">
      <div className="bg-footer flex flex-col gap-8">
        <div className="container mx-auto mt-[77px] 2xl:px-[123px] xl:px-[60px]">
          <div className="flex flex-col gap-[80px]">
            <div className="flex gap-[140px] items-center max-xl:gap-[80px] max-lg:gap-[60px]">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="w-[32%] flex-shrink-0"
              >
                <div
                  className="w-fit cursor-pointer"
                  onClick={() => {
                    if (inBlogPage(pathName)) {
                      if (pathName.includes("vi")) {
                        router.push("/vi");
                      } else {
                        router.push("/en");
                      }
                      wait().then(() => {
                        setSectionId("about" + "_" + randomNumber(4));
                      });
                    } else {
                      wait50().then(() => {
                        setSectionId("about" + "_" + randomNumber(4));
                      });
                    }
                  }}
                >
                  <Icons.logoFooter className="max-xl:w-[260px] max-xl:h-[60px]" />
                </div>
              </motion.div>

              <div className="w-full flex justify-between items-center">
                {navs.map((item, index) => (
                  <motion.span
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.1,
                    }}
                    onClick={(event) => {
                      if (inBlogPage(pathName)) {
                        if (pathName.includes("vi")) {
                          router.push("/vi");
                        } else {
                          router.push("/en");
                        }
                        wait().then(() => {
                          setSectionId(item.idSection + "_" + randomNumber(4));
                        });
                      } else {
                        wait50().then(() => {
                          setSectionId(item.idSection + "_" + randomNumber(4));
                        });
                      }
                    }}
                    className="cursor-pointer text-[#194185] hover:text-[#194185]/70 text-base leading-normal font-medium tracking-[-0.6px]"
                    key={index}
                  >
                    {footerLang[item.title as keyof typeof footerLang]}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[30px] max-xl:gap-5">
              <div className="flex gap-[140px] max-xl:gap-[80px] max-lg:gap-[60px]">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="w-[32%] flex-shrink-0"
                >
                  <span className="text-[#194185] text-2xl leading-8 font-semibold max-xl:text-xl max-lg:text-lg whitespace-pre-line">
                    {footerLang.transparent}
                  </span>
                </motion.div>

                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="w-full flex gap-[30px]"
                >
                  <span className="w-[45%] text-[#194185] text-2xl leading-8 font-semibold max-xl:text-xl max-lg:text-lg">
                    {footerLang.contact}
                  </span>
                  <span className="w-[45%] text-[#194185] text-2xl leading-8 font-semibold max-xl:text-xl max-lg:text-lg">
                    {footerLang.product}
                  </span>
                </motion.div>
              </div>
              <div className="flex gap-[140px] max-xl:gap-[80px] max-lg:gap-[60px]">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="w-[32%] flex-shrink-0"
                >
                  <span className="text-[#194185] text-lg leading-7 text-balance max-xl:text-base max-lg:text-sm">
                    {footerLang.transparentText}
                  </span>
                </motion.div>

                <div className="w-full flex gap-[30px] max-xl:gap-7">
                  <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.1,
                    }}
                    className="w-[45%] flex flex-col gap-6 max-xl:gap-4"
                  >
                    <Link
                      href="mailto:info@ndatrace.vn"
                      className="text-[#194185] text-base leading-6 max-lg:text-sm"
                    >
                      info@ndatrace.vn
                    </Link>
                    <span className="text-[#194185] text-base leading-6 max-lg:text-sm ">
                      {footerLang.addr}
                    </span>
                    <div className="mt-1.5 flex gap-6">
                      <Link
                        target="_blank"
                        href={"https://www.facebook.com/NDATrace"}
                        className="cursor-pointer"
                      >
                        <Icons.footerFacebook />
                      </Link>
                      <Link
                        target="_blank"
                        href={"https://www.tiktok.com/@ndatrace"}
                        className="cursor-pointer"
                      >
                        <Icons.footerTiktok />
                      </Link>
                      <Link
                        target="_blank"
                        href={
                          "https://www.youtube.com/channel/UC9sncb5QoL2Mlqp67q56ZGQ"
                        }
                        className="cursor-pointer"
                      >
                        <Icons.footerYoutube />
                      </Link>
                    </div>
                  </motion.div>

                  <div className="w-[55%] flex flex-col gap-6 max-xl:gap-4">
                    <motion.span
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.1,
                      }}
                      className="cursor-pointer text-[#194185] hover:text-[#194185]/70 text-base leading-6 max-lg:text-sm "
                      onClick={() => {
                        router.push("https://ndachain.vn/");
                      }}
                    >
                      {footerLang.ndaChain}
                    </motion.span>

                    <motion.span
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.1,
                      }}
                      className="cursor-pointer text-[#194185] text-base hover:text-[#194185]/70 leading-6 max-lg:text-sm "
                      onClick={() => {
                        router.push("https://ndachain.vn/");
                      }}
                    >
                      {footerLang.ndaDid}
                    </motion.span>

                    <motion.span
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.1,
                      }}
                      className="cursor-pointer text-[#194185] hover:text-[#194185]/70 text-base leading-6 max-lg:text-sm "
                    >
                      {footerLang.ndaTrace}
                    </motion.span>
                    <motion.span
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.1,
                      }}
                      className="cursor-pointer text-[#194185] text-base hover:text-[#194185]/70 leading-6 max-lg:text-sm "
                      onClick={() => {
                        router.push("https://www.ndakey.vn/");
                      }}
                    >
                      {footerLang.ndaKey}
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="py-2.5 flex justify-center border-t border-t-[#D1E9FF]"
        >
          <span className="text-[#194185] text-base leading-2">
            © 2025 Copyright by NDATrace
          </span>
        </motion.div>
      </div>
    </section>
  );
}

const inBlogPage = (pathName: string) => {
  return pathName.includes("/blogs");
};
