import { useIsMobile } from "../hooks/use-mobile";
import { Icons } from "../icons";
import { motion } from "motion/react";

export default function FieldSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section id="field" className="flex flex-col gap-[39px]">
        <div className="relative flex justify-center min-h-[609px]">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="z-0 absolute top-[-58px] "
          >
            <div className="h-[667px] w-[667px]">
              <img
                src="images/benefit-circle.png"
                className="object-cover h-full w-full"
              />
            </div>
          </motion.div>

          <div className="relative z-10 mt-[80px] flex flex-col justify-between items-center">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#0057D6] text-xl leading-[30px] font-semibold"
            >
              Lĩnh vực áp dụng
            </motion.span>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="h-[441px] w-[218px]"
            >
              <img
                src="images/ip16Plus.png"
                className="object-cover h-full w-full"
              />
            </motion.div>
          </div>
        </div>
        <div className="px-4 grid grid-cols-3 gap-4 max-[43.75rem]:grid-cols-2">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="animate-pulse bg-[#EFF8FF] px-2 py-1 rounded-[8px] flex gap-[8px] items-center"
          >
            <div>
              <Icons.benefitMilk className="w-[30px] h-[30px]" />
            </div>
            <span className="text-[#1570EF] text-xs leading-[18px] font-semibold">
              Dược phẩm & y tế
            </span>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="animate-pulse bg-[#EFF4FF] px-2 py-1 rounded-[8px] flex gap-[8px] items-center"
          >
            <div>
              <Icons.benefitCosmetics className="w-[30px] h-[30px]" />
            </div>
            <span className="text-[#0BA5EC] text-xs leading-[18px] font-semibold">
              Hoá mỹ phẩm
            </span>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="animate-pulse bg-[#EDFCF2] px-2 py-1 rounded-[8px] flex gap-[8px] items-center"
          >
            <div>
              <Icons.benefitFood className="w-[30px] h-[30px]" />
            </div>
            <span className="text-[#087443] text-xs leading-[18px] font-semibold">
              Thực phẩm & nông nghiệp
            </span>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="animate-pulse bg-[#EEF4FF] px-2 py-1 rounded-[8px] flex gap-[8px] items-center"
          >
            <div>
              <Icons.benefitDiamond className="w-[30px] h-[30px]" />
            </div>
            <span className="text-[#6172F3] text-xs leading-[18px] font-semibold ">
              {`Kim cương & Đá quý`}
            </span>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="animate-pulse bg-[#FEFBE8] px-2 py-1 rounded-[8px] flex gap-[8px] items-center"
          >
            <div>
              <Icons.benefitDress className="w-[30px] h-[30px]" />
            </div>
            <span className="text-[#EAAA08] text-xs leading-[18px] font-semibold">
              Thời trang
            </span>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="animate-pulse bg-[#FFF4ED] px-2 py-1 rounded-[8px] flex gap-[8px] items-center"
          >
            <div>
              <Icons.benefitLogistic className="w-[30px] h-[30px]" />
            </div>
            <span className="text-[#FF9C66] text-xs leading-[18px] font-semibold">
              Logistic & vận tải
            </span>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="col-start-2 max-[43.75rem]:gap-3 max-[43.75rem]:col-span-2 max-[43.75rem]:justify-self-center  animate-pulse bg-[#FEF3F2] px-2 py-1 rounded-[8px] flex gap-[8px] items-center"
          >
            <div>
              <Icons.benefitSetting className="w-[30px] h-[30px]" />
            </div>
            <span className="text-[#F97066] text-xs leading-[18px] font-semibold">
              Công nghiệp sản xuất
            </span>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <div id="field" className="pb-[68px] pt-[42px] flex justify-center">
      <div className="relative h-[811px] w-[811px]">
        <img
          src="images/benefit-circle.png"
          className="object-cover h-full w-full"
        />
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="z-10 absolute w-full flex justify-center top-[93px]"
        >
          <span className=" text-[#0057D6] text-4xl font-semibold leading-11 tracking-[-0.72px]">
            Lĩnh vực áp dụng
          </span>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="absolute top-0 h-full w-full flex justify-center items-center"
        >
          <div className="h-[441px] w-[218px] ">
            <img
              src="images/ip16Plus.png"
              className="object-cover h-full w-full"
            />
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
          }}
          className="z-10 absolute top-[25%] left-[-44px] max-lg:left-[30px]"
        >
          <div className="animate-pulse bg-[#EFF8FF] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitMilk className="max-xl:w-10 max-xl:h-10 max-lg:w-8 max-lg:h-8" />
            </div>
            <span className="text-[#1570EF] text-lg leading-7 font-semibold max-lg:text-base">
              Dược phẩm & y tế
            </span>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
          }}
          className="h-full absolute top-0 left-[-146px] flex items-center max-xl:left-[-105px] max-lg:left-[5px]"
        >
          <div className="animate-pulse bg-[#EDFCF2] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitFood className="max-xl:w-10 max-xl:h-10 max-lg:w-8 max-lg:h-8" />
            </div>
            <span className="text-[#087443] text-lg leading-7 font-semibold max-lg:text-base">
              Thực phẩm & nông nghiệp
            </span>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
          }}
          className="absolute top-[75%] left-[51px] max-lg:left-[30px]"
        >
          <div className="animate-pulse bg-[#FEFBE8] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitDress className="max-xl:w-10 max-xl:h-10 max-lg:w-8 max-lg:h-8" />
            </div>
            <span className="text-[#EAAA08] text-lg leading-7 font-semibold max-lg:text-base">
              Thời trang
            </span>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
          }}
          className="absolute bottom-[86px] flex justify-center w-full"
        >
          <div className="animate-pulse bg-[#FEF3F2] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitSetting className="max-xl:w-10 max-xl:h-10 max-lg:w-8 max-lg:h-8" />
            </div>
            <span className="text-[#F97066] text-lg leading-7 font-semibold max-lg:text-base">
              Công nghiệp sản xuất
            </span>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
          }}
          className="z-10 absolute top-[75%] right-[-12px] max-lg:right-[20px]"
        >
          <div className="animate-pulse bg-[#FFF4ED] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitLogistic className="max-xl:w-10 max-xl:h-10 max-lg:w-8 max-lg:h-8" />
            </div>
            <span className="text-[#FF9C66] text-lg leading-7 font-semibold max-lg:text-base">
              Logistic & vận tải
            </span>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
          }}
          className="h-full absolute top-0 right-[-146px] flex items-center max-xl:right-[-105px] max-lg:right-[-5px]"
        >
          <div className="animate-pulse bg-[#EEF4FF] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitDiamond className="max-xl:w-10 max-xl:h-10 max-lg:w-8 max-lg:h-8" />
            </div>
            <span className="text-[#6172F3] text-lg leading-7 font-semibold max-lg:text-base">
              Kim cương & Đá quý
            </span>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
          }}
          className="absolute top-[25%] right-[-8px] max-lg:right-[20px]"
        >
          <div className="animate-pulse bg-[#EFF4FF] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitCosmetics className="max-xl:w-10 max-xl:h-10 max-lg:w-8 max-lg:h-8" />
            </div>
            <span className="text-[#0BA5EC] text-lg leading-7 font-semibold max-lg:text-base">
              Hoá mỹ phẩm
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
