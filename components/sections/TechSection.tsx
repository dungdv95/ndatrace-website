import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { useIsMobile } from "../hooks/use-mobile";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { Expand, Maximize, Minimize } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { getDictionary } from "@/get-dictionary";

const listTech = [
  {
    id: 1,
    icon: <Icons.techNdaDid className="max-lg:w-[74px] max-lg:h-[75px]" />,
    title: "ndaDid",
    description: "ndaDidDescription",
  },
  {
    id: 2,
    icon: <Icons.techNdaTrace className="max-lg:w-[90px] max-lg:h-[75px]" />,
    title: "ndaTrace",
    description: "ndaTraceDescription",
  },
  {
    id: 3,
    icon: <Icons.techNdaChain className="max-lg:w-[74px] max-lg:h-[75px]" />,
    title: "ndaChain",
    description: "ndaChainDescription",
  },
];

export default function TechSection({
  techLang,
}: {
  techLang: Awaited<ReturnType<typeof getDictionary>>["techlonogy"];
}) {
  const [isExpand, setIsExpand] = useState(false);
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section id="technology" className="pt-[35px] flex flex-col">
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="text-center text-[#0057D6] text-xl leading-[30px] font-semibold"
        >
          {techLang.title}
        </motion.span>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="mt-[29px] px-4 flex flex-col"
        >
          <ScrollArea type="always" className={cn("w-full")}>
            <div className="w-[1100px] h-[576px] mb-3">
              <img src={techLang.img} className="object-cover h-full w-full" />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </motion.div>

        <div className={cn("mt-[7px]")}>
          <Dialog open={open} onOpenChange={setOpen}>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="w-full flex justify-center "
            >
              <DialogTrigger asChild>
                <Button
                  className="h-5 p-0 cursor-pointer text-center text-[#1570EF] text-sm leading-5 underline focus-visible:ring-0"
                  variant="ghost"
                >
                  {techLang.seeImg}
                </Button>
              </DialogTrigger>
            </motion.div>

            <DialogContent
              className="min-w-[98%] py-3 px-2"
              showCloseButton={false}
            >
              <DialogHeader className="hidden">
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3">
                <div className="h-full w-full flex justify-center items-center">
                  <img
                    src={techLang.img}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    className="h-9 w-[100px] bg-[#3176EE] hover:bg-[#3176EE]/80 rounded-[8px] text-white text-base leading-6 font-medium
                  max-[31.25rem]:text-sm max-[31.25rem]:h-7 max-[31.25rem]:w-[80px]
                  "
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    OK
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <SlideTech techLang={techLang} />
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="relative mt-[236px] h-[460px] bg-tech-about"
          >
            <div className="absolute w-full px-4 bottom-[85px] flex flex-col items-center gap-[33px]">
              <div className="h-[326px] w-[343px]">
                <img
                  src="/images/tech-about.png"
                  className="object-cover h-full w-full"
                />
              </div>
              <span className="text-center text-[#194185] text-xl leading-7 font-semibold min-[31.25rem]:whitespace-pre-line">
                {techLang.contactText}
              </span>
              <Link
                href="mailto:info@ndatrace.vn"
                className="flex items-center justify-center h-11 w-[200px] bg-[#3176EE] hover:bg-[#3176EE]/80 rounded-[8px] text-white text-lg leading-7 font-semibold"
              >
                {techLang.contactButton}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="technology"
      className="pt-[46px] container mx-auto 2xl:px-[123px] xl:px-[60px] max-xl:mt-[54px]"
    >
      <div className="flex flex-col gap-8">
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="text-center text-[#0057D6] text-4xl leading-11 font-semibold"
        >
          {techLang.title}
        </motion.span>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="mt-5 flex justify-center max-xl:mt-0"
        >
          <img src={techLang.img} className="object-cover h-full w-full" />
        </motion.div>

        <div className="flex justify-between gap-[30px] max-xl:gap-7 max-lg:gap-4">
          {listTech.map((item, index) => (
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              key={index}
              className="p-6 w-full bg-tech rounded-[12px]"
            >
              <div className="flex flex-col gap-6 max-xl:gap-4 max-lg:gap-3">
                <div className="flex justify-center">{item.icon}</div>
                <span className="text-center text-[#194185] text-base leading-6 font-semibold max-xl:text-sm min-lg:whitespace-pre-line">
                  {techLang[item.title as keyof typeof techLang]}
                </span>
                <span className="text-[#194185] text-base leading-6 max-xl:text-sm max-lg:text-xs">
                  {techLang[item.description as keyof typeof techLang]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-[104px] bg-tech-about rounded-[24px] px-[109px] pt-[63px] pb-[135px] max-xl:px-[60px] max-xl:pt-[50px] max-xl:pb-[120px] max-lg:pb-[100px]">
          <div className="flex gap-[30px] max-xl:gap-[20px]">
            <div className="flex flex-col gap-7 max-w-[55%] max-lg:max-w-[50%]">
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#194185] text-xl leading-7 font-semibold whitespace-pre-line max-xl:text-lg max-lg:text-base"
              >
                {techLang.contactText}
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
                  className="cursor-pointer flex justify-center items-center h-10 w-[190px] bg-[#3176EE] hover:bg-[#3176EE]/80 rounded-[8px] text-white text-lg leading-7 font-semibold"
                >
                  {techLang.contactButton}
                </Link>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="absolute top-[-143px] max-xl:top-[-122px] max-lg:top-[-110px]"
              >
                <div className="h-[384px] w-[404px] max-xl:h-[333px] max-xl:w-[350px] max-lg:h-[285px] max-lg:w-[300px]">
                  <img
                    src="/images/tech-about.png"
                    className="object-cover h-full w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideTech({
  techLang,
}: {
  techLang: Awaited<ReturnType<typeof getDictionary>>["techlonogy"];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    // Lắng nghe sự kiện "select" để cập nhật slide hiện tại
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Lắng nghe sự kiện "reInit" trong trường hợp carousel được khởi tạo lại (ví dụ: thay đổi kích thước)
    api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.1,
      }}
      className="px-4 mt-5 flex flex-col gap-[17px] items-center"
    >
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-[450px] max-[31.25rem]:max-w-[350px]"
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="">
              <div className="h-full bg-tech p-6 rounded-[12px] flex flex-col items-center gap-6">
                <div>{listTech[index].icon}</div>
                <span className="text-center text-[#194185] text-base leading-6 font-semibold max-[31.25rem]:whitespace-pre-line">
                  {techLang[listTech[index].title as keyof typeof techLang]}
                </span>
                <span className=" text-[#194185] text-base leading-6">
                  {
                    techLang[
                      listTech[index].description as keyof typeof techLang
                    ]
                  }
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <Button
            key={index}
            variant="ghost" // Sử dụng variant ghost hoặc icon cho nút chấm
            size="icon"
            className={`h-2 rounded-full p-0 transition-colors duration-200 ${
              index === current - 1 ? "bg-[#005FEB] w-4" : "bg-[#A7ABC3] w-2"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
