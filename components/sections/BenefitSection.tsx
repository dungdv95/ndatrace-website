import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import { Icons } from "../icons";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { getDictionary } from "@/get-dictionary";

const listBenefit = [
  {
    id: 1,
    icon: <Icons.benefitShield />,
    title: "protect",
    description: "protectDescription",
  },
  {
    id: 2,
    icon: <Icons.benefitData />,
    title: "preserve",
    description: "preserveDescription",
  },
  {
    id: 3,
    icon: <Icons.benefitCustom />,
    title: "custom",
    description: "customDescription",
  },
  {
    id: 4,
    icon: <Icons.benefitGlobal />,
    title: "integrated",
    description: "integratedDescription",
  },
];

export default function BenefitSection({
  benefitLang,
}: {
  benefitLang: Awaited<ReturnType<typeof getDictionary>>["benefits"];
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="benefit"
        className="px-4 flex flex-col items-center py-[52px]"
      >
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="text-[#0057D6] text-xl leading-[30px] font-semibold"
        >
          {benefitLang.title}
        </motion.span>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="mt-[27px] h-[441px] w-[218px]"
        >
          <img
            src="/images/ip16Plus.png"
            className="object-cover h-full w-full"
          />
        </motion.div>

        <BenefitSlide benefitLang={benefitLang} />
      </section>
    );
  }

  return (
    <section
      id="benefit"
      className="container mx-auto 2xl:px-[123px] xl:px-[60px]"
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.1,
        }}
        className="flex justify-center mb-[47px]"
      >
        <span className=" text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px]">
          {benefitLang.title}
        </span>
      </motion.div>

      <div className="flex gap-[65px] max-2xl:gap-[45px] max-xl:gap-[30px] max-lg:gap-3">
        <div className="w-1/2 grow flex flex-col justify-between">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="p-4 bg-benefit rounded-[16px] flex flex-col gap-6 max-xl:gap-4 max-lg:gap-2"
          >
            <div className="flex justify-end">
              <Icons.benefitShield className="max-xl:h-10 max-xl:w-10 max-lg:w-8 max-lg:h-8" />
            </div>
            <span className="text-end text-[#002D87] text-2xl leading-8 font-medium max-xl:text-xl max-lg:text-lg">
              {benefitLang.protect}
            </span>
            <span className="text-end text-[#002D87] text-base leading-6 max-xl:text-sm max-lg:text-xs">
              {benefitLang.protectDescription}
            </span>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="p-4 bg-benefit-data rounded-[16px] flex flex-col gap-6 max-xl:gap-4 max-lg:gap-2"
          >
            <div className="flex justify-end">
              <Icons.benefitData className="max-xl:h-10 max-xl:w-10 max-lg:w-8 max-lg:h-8" />
            </div>
            <span className="text-end text-[#002D87] text-2xl leading-8 font-medium max-xl:text-xl max-lg:text-lg">
              {benefitLang.preserve}
            </span>
            <span className="text-end text-[#002D87] text-base leading-6 max-xl:text-sm max-lg:text-xs">
              {benefitLang.preserveDescription}
            </span>
          </motion.div>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="grow-0"
        >
          <div className="h-[566px] w-[279px]">
            <img
              src="/images/ip16Plus.png"
              className="object-cover h-full w-full"
            />
          </div>
        </motion.div>

        <div className="w-1/2 grow flex flex-col justify-between">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="p-4 bg-benefit rounded-[16px] flex flex-col gap-6 max-xl:gap-4 max-lg:gap-2"
          >
            <div className="flex justify-start">
              <Icons.benefitCustom className="max-xl:h-10 max-xl:w-10 max-lg:w-8 max-lg:h-8" />
            </div>
            <span className="text-start text-[#002D87] text-2xl leading-8 font-medium max-xl:text-xl max-lg:text-lg line-clamp-1">
              {benefitLang.custom}
            </span>
            <span className="text-start text-[#002D87] text-base leading-6 max-xl:text-sm max-lg:text-xs">
              {benefitLang.customDescription}
            </span>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="p-4 bg-benefit-data rounded-[16px] flex flex-col gap-6 max-xl:gap-4 max-lg:gap-2"
          >
            <div className="flex justify-start">
              <Icons.benefitGlobal className="max-xl:h-10 max-xl:w-10 max-lg:w-8 max-lg:h-8" />
            </div>
            <span className="text-start text-[#002D87] text-2xl leading-8 font-medium max-xl:text-xl max-lg:text-lg line-clamp-1">
              {benefitLang.integrated}
            </span>
            <span className="text-start text-[#002D87] text-base leading-6 max-xl:text-sm max-lg:text-xs">
              {benefitLang.integratedDescription}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BenefitSlide({
  benefitLang,
}: {
  benefitLang: Awaited<ReturnType<typeof getDictionary>>["benefits"];
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
      className="mt-5 flex flex-col gap-[17px]"
    >
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-[450px] max-[31.25rem]:max-w-[350px]"
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index} className="">
              <div className="h-full p-4 bg-benefit rounded-[16px] flex flex-col items-center gap-6">
                <div>{listBenefit[index].icon}</div>
                <span className="text-[#002D87] text-2xl leading-8 font-medium">
                  {
                    benefitLang[
                      listBenefit[index].title as keyof typeof benefitLang
                    ]
                  }
                </span>
                <span className="text-center text-[#002D87] text-base leading-6">
                  {
                    benefitLang[
                      listBenefit[index].description as keyof typeof benefitLang
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
