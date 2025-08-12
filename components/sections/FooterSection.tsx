import Link from "next/link";
import { Icons } from "../icons";
import { useIsMobile } from "../hooks/use-mobile";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";

const wait = () => new Promise((resolve) => setTimeout(resolve, 300));

const navs = [
  {
    id: 1,
    title: "Giới thiệu",
    idSection: "about",
  },
  {
    id: 2,
    title: "Lĩnh vực",
    idSection: "field",
  },
  {
    id: 3,
    title: "Lợi ích",
    idSection: "benefit",
  },
  {
    id: 4,
    title: "Tính năng",
    idSection: "feature",
  },
  {
    id: 5,
    title: "Công nghệ",
    idSection: "technology",
  },
  {
    id: 6,
    title: "Blog",
    idSection: "inquiry",
  },
];

export default function FooterSection() {
  const isMobile = useIsMobile();

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
                Minh bạch Chuỗi cung ứng
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
                Nâng tầm hàng Việt
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
                NDATrace - Nền tảng chiến lược kiến tạo hạ tầng thương mại số
                quốc gia, hướng tới một nền kinh tế hiện đại, nơi mỗi sản phẩm
                có danh tính số và mọi giao dịch đều minh bạch, đáng tin cậy.
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
                Liên hệ
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
                37 Trần Bình Trọng, Phường Cửa Nam, Hà Nội
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
                Sản phẩm
              </motion.span>
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="mt-1.5 text-[#194185] text-base leading-6"
              >
                NDAChain - Nền tảng Blockchain quốc gia
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
                NDADID - Hệ thống Định danh phi tập trung
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
                NDATrace - Nền tảng quốc gia về Định danh, Xác thực và Truy xuất
                nguồn gốc hàng hoá
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
                NDAKey - Ứng dụng định danh phi tập trung
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
                    className="cursor-pointer text-[#194185] text-base leading-normal font-medium tracking-[-0.6px]"
                    key={index}
                  >
                    {item.title}
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
                  <span className="text-[#194185] text-2xl leading-8 font-semibold max-xl:text-xl max-lg:text-lg">
                    Minh bạch Chuỗi cung ứng
                    <br />
                    Nâng tầm hàng Việt
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
                    Liên hệ
                  </span>
                  <span className="w-[45%] text-[#194185] text-2xl leading-8 font-semibold max-xl:text-xl max-lg:text-lg">
                    Sản phẩm
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
                    NDATrace - Nền tảng chiến lược kiến tạo hạ tầng thương mại
                    số quốc gia, hướng tới một nền kinh tế hiện đại, nơi mỗi sản
                    phẩm có danh tính số và mọi giao dịch đều minh bạch, đáng
                    tin cậy.
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
                      {`37 Trần Bình Trọng, Phường Cửa Nam, Hà Nội`}
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
                      className="text-[#194185] text-base leading-6 max-lg:text-sm "
                    >
                      NDAChain - Nền tảng Blockchain quốc gia
                    </motion.span>

                    <motion.span
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.1,
                      }}
                      className="text-[#194185] text-base leading-6 max-lg:text-sm "
                    >
                      NDADID - Hệ thống Định danh phi tập trung
                    </motion.span>

                    <motion.span
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.1,
                      }}
                      className="text-[#194185] text-base leading-6 max-lg:text-sm "
                    >
                      NDATrace - Nền tảng quốc gia về Định danh, Xác thực và
                      Truy xuất nguồn gốc hàng hoá
                    </motion.span>
                    <motion.span
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.1,
                      }}
                      className="text-[#194185] text-base leading-6 max-lg:text-sm "
                    >
                      NDAKey - Ứng dụng định danh phi tập trung
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
