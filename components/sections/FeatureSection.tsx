import { getDictionary } from "@/get-dictionary";
import { useIsMobile } from "../hooks/use-mobile";
import { Icons } from "../icons";
import { motion } from "motion/react";

export default function FeatureSection({
  featureLang,
}: {
  featureLang: Awaited<ReturnType<typeof getDictionary>>["features"];
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="feature"
        className="px-4 bg-[#F7FCFC] pt-[30px] pb-[38px] flex flex-col items-center gap-6"
      >
        <div className="flex flex-col gap-4">
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-center text-[#0057D6] leading-[30px] font-semibold text-3xl max-[34.375rem]:text-xl"
          >
            {featureLang.title}
          </motion.span>

          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-center text-[#194185] text-base leading-[25px] max-[34.375rem]:text-sm"
          >
            {featureLang.description}
          </motion.span>
        </div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="w-2/3 max-[37.5rem]:w-full p-6 bg-white rounded-[12px] flex flex-col gap-6"
        >
          <div className="flex justify-center">
            <Icons.mobileFeatureIdentify className="w-[153px] h-[177px]" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#194185] text-sm leading-5">
              NDATrace UID
            </span>
            <span className="text-[#194185] text-2xl leading-8 font-semibold">
              {featureLang.identify}
            </span>
            <span className="mt-3 text-center text-[#194185] text-base leading-6">
              {featureLang.identifyDescription}
            </span>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="w-2/3 max-[37.5rem]:w-full p-6 bg-white rounded-[12px] flex flex-col gap-6"
        >
          <div className="flex justify-center">
            <Icons.mobileFeatureRetrieval className="w-[235px] h-[177px]" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#194185] text-sm leading-5">
              NDATrace Website
            </span>
            <span className="text-[#194185] text-2xl leading-8 font-semibold">
              {featureLang.access}
            </span>
            <span className="mt-3 text-center text-[#194185] text-base leading-6">
              {featureLang.accessDescription}
            </span>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="w-2/3 max-[37.5rem]:w-full p-6 bg-white rounded-[12px] flex flex-col gap-6"
        >
          <div className="flex justify-center">
            <Icons.mobileFeatureVerify className="w-[223px] h-[177px]" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#194185] text-sm leading-5">
              NDATrace Portal
            </span>
            <span className="text-[#194185] text-2xl leading-8 font-semibold">
              {featureLang.auth}
            </span>
            <span className="mt-3 text-center text-[#194185] text-base leading-6">
              {featureLang.authDescription}
            </span>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="feature"
      className="mt-[93px] bg-[#F7FCFC] pt-[53px] pb-[86px]"
    >
      <div className="container mx-auto 2xl:px-[123px] xl:px-[60px]">
        <div className="flex flex-col gap-6">
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-center text-[#0057D6] text-4xl leading-11 font-semibold tractking-[-0.72px]"
          >
            {featureLang.title}
          </motion.span>

          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-center text-[#194185] text-sm leading-[25px] whitespace-pre-line"
          >
            {featureLang.description}
          </motion.span>

          <div className="mt-[33px] flex justify-between gap-[30px]">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="w-full bg-white rounded-[12px] px-6 pt-[65px] pb-4 hover:shadow-xl max-xl:pt-[50px]"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-center">
                  <Icons.featureIdentify className="max-xl:w-[200px] max-xl:h-[125px] max-lg:w-[180px] max-lg:h-[113px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-center text-[#194185] text-sm leading-5 max-xl:text-xs">
                    NDATrace UID
                  </span>
                  <span className="mt-1 text-center text-[#194185] text-2xl leading-8 font-semibold max-xl:text-xl">
                    {featureLang.identify}
                  </span>
                  <span className="mt-4 text-center text-[#194185] text-base leading-6 max-xl:text-sm max-lg:text-xs max-lg:mt-2">
                    {featureLang.identifyDescription}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="w-full bg-white rounded-[12px] px-6 pt-[65px] pb-4 hover:shadow-xl max-xl:pt-[50px]"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-center">
                  <Icons.featureRetrieval className="max-xl:w-[164px] max-xl:h-[125px] max-lg:w-[148px] max-lg:h-[113px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-center text-[#194185] text-sm leading-5 max-xl:text-xs">
                    NDATrace Website
                  </span>
                  <span className="mt-1 text-center text-[#194185] text-2xl leading-8 font-semibold max-xl:text-xl">
                    {featureLang.access}
                  </span>
                  <span className="mt-4 text-center text-[#194185] text-base leading-6 max-xl:text-sm max-lg:text-xs max-lg:mt-2">
                    {featureLang.accessDescription}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="w-full bg-white rounded-[12px] px-6 pt-[65px] pb-4 hover:shadow-xl max-xl:pt-[50px]"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-center">
                  <Icons.featureVerify className="max-xl:w-[157px] max-xl:h-[125px] max-lg:w-[142px] max-lg:h-[113px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-center text-[#194185] text-sm leading-5 max-xl:text-xs">
                    NDATrace Portal
                  </span>
                  <span className="mt-1 text-center text-[#194185] text-2xl leading-8 font-semibold max-xl:text-xl">
                    {featureLang.auth}
                  </span>
                  <span className="mt-4 text-center text-[#194185] text-base leading-6 max-xl:text-sm max-lg:text-xs max-lg:mt-2">
                    {featureLang.authDescription}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
