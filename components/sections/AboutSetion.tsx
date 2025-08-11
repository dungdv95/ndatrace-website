"use client";

import { useIsMobile } from "../hooks/use-mobile";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import FieldSection from "./FieldSection";

export default function AboutSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section id="about" className="flex flex-col">
        <div className="mb-bg-about pt-[90px] pb-[22px] max-[31.25rem]:pb-0">
          <div className="flex flex-col gap-4 ">
            <div className="px-4 flex justify-center">
              <span className="text-center text-[#0057D6] leading-[30px] font-semibold text-2xl max-w-4/5 max-[28.5rem]:text-xl">
                Nền tảng Quốc gia về Định danh, Xác thực và Truy xuất nguồn gốc
                hàng hoá
              </span>
            </div>
            <div className="px-4 flex justify-center ">
              <span className="text-center text-[#194185] text-sm leading-[25px] max-w-4/5">
                NDATrace là giải pháp truy xuất nguồn gốc hàng hoá toàn diện,
                giúp theo dõi minh bạch toàn bộ hành trình sản phẩm trong chuỗi
                cung ứng, từ sản xuất đến tay người tiêu dùng.
              </span>
            </div>
            <div className="mt-9 relative flex justify-center">
              <div className="">
                <img
                  src="images/about-bg.png"
                  className="object-cover h-full w-full"
                />
              </div>
              <div
                className="absolute bottom-[-140px] max-[43.75rem]:bottom-[-160px]
            max-[40.625rem]:bottom-[-150px] max-[37.5rem]:bottom-[-140px]
            max-[34.375rem]:bottom-[-130px] max-[31.25rem]:bottom-[-106px]
            max-[28.125rem]:bottom-[-97px] max-[25rem]:bottom-[-85px]"
              >
                <div
                  className="w-[175px] h-[355px] max-[40.625rem]:w-[165px] max-[40.625rem]:h-[335px]
                max-[37.5rem]:w-[150px] max-[37.5rem]:h-[304px]
                max-[34.375rem]:w-[140px] max-[34.375rem]:h-[284px]
                max-[31.25rem]:w-[122px] max-[31.25rem]:h-[247px]
                max-[28.125rem]:w-[110px] max-[28.125rem]:h-[223px]
                max-[25rem]:w-[100px] max-[25rem]:h-[203px]
              "
                >
                  <img
                    src="images/ip16Plus.png"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div
                className="absolute top-[-38px] left-[-25px] max-[43.75rem]:left-[-50px]
            max-[40.625rem]:left-[-75px] max-[37.5rem]:left-[-105px]
            max-[34.375rem]:left-[-50px] max-[31.25rem]:left-[-80px]
            max-[28.125rem]:left-[-50px]
            max-[25rem]:left-[-60px]
            "
              >
                <Icons.aboutLeft
                  className="w-[370px] h-[194px] max-[34.375rem]:w-[300px] max-[34.375rem]:h-[158px] 
              max-[28.125rem]:w-[250px] max-[28.125rem]:h-[131px]"
                />
              </div>
              <div
                className="absolute top-[-38px] right-[-10px] max-[43.75rem]:right-[-40px]
            max-[40.625rem]:right-[-65px] max-[37.5rem]:right-[-95px]
            max-[34.375rem]:right-[-50px] max-[31.25rem]:right-[-65px]
            max-[28.125rem]:right-[-50px] max-[25rem]:right-[-60px]"
              >
                <Icons.aboutRight
                  className="w-[370px] h-[194px] max-[34.375rem]:w-[300px] max-[34.375rem]:h-[158px] 
              max-[28.125rem]:w-[250px] max-[28.125rem]:h-[131px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-[170px] max-[43.75rem]:mt-[180px] max-[37.5rem]:mt-[160px] max-[34.375rem]:mt-[150px]
        max-[31.25rem]:mt-[140px] max-[28.125rem]:mt-[130px] max-[25rem]:mt-[120px]
        flex flex-col
        "
        >
          <div className="px-12 flex gap-12 max-[37.5rem]:px-4 max-[37.5rem]:gap-4">
            <div className="w-1/2 pb-[18px] flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-2xl leading-8 font-semibold">
                30+
              </span>
              <span className="text-center text-[#002D87] text-base leading-6">
                Doanh nghiệp trong và ngoài nước đồng hành
              </span>
            </div>
            <div className="w-[1px] bg-[#E9EAEB]" />
            <div className="w-1/2 pb-[18px] flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-2xl leading-8 font-semibold">
                400+
              </span>
              <span className="text-center text-[#002D87] text-base leading-6">
                Loại mặt hàng được định danh và xác thực
              </span>
            </div>
          </div>
          <Separator className="m-0 bg-[#E9EAEB]" />
          <div className="px-12 flex gap-12 max-[37.5rem]:px-4 max-[37.5rem]:gap-4">
            <div className="w-1/2 py-[18px] flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-2xl leading-8 font-semibold">
                25,000+
              </span>
              <span className="text-center text-[#002D87] text-base leading-6">
                Tem/mã định danh đã được phát hành
              </span>
            </div>
            <div className="w-[1px] bg-[#E9EAEB]" />
            <div className="w-1/2 py-[18px] flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-2xl leading-8 font-semibold">
                80,000+
              </span>
              <span className="text-center text-[#002D87] text-base leading-6">
                Lượt xác thực trên hệ thống
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="pt-[161px] mb-[66px]">
      <div className="h-[728px] bg-about flex flex-col gap-[23px]">
        <div className="flex flex-col gap-4">
          <span className="text-center text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px] max-lg:text-3xl">
            Nền tảng Quốc gia về Định danh, Xác thực và
            <br />
            Truy xuất nguồn gốc hàng hoá
          </span>
          <span className="text-center text-[#194185] text-sm leading-[25px]">
            NDATrace là giải pháp truy xuất nguồn gốc hàng hoá toàn diện, giúp
            theo dõi minh bạch toàn bộ hành trình sản
            <br />
            phẩm trong chuỗi cung ứng, từ sản xuất đến tay người tiêu dùng.
          </span>
          <div className="mt-2 flex justify-center">
            <Button className="cursor-pointer w-[180px] h-10 bg-white hover:bg-slate-50 border border-[#84CAFF] rounded-[8px] text-[#175CD3] text-sm leading-5 font-semibold">
              Xem thống kê
            </Button>
          </div>
        </div>
        <div className="z-10 flex justify-center">
          <div className="relative w-[847px] h-[550px]">
            <img
              src="images/about-bg.png"
              className="object-cover h-full w-full"
            />
            <div className="absolute top-[19px] left-[-459px]">
              <Icons.aboutLeft />
            </div>
            <div className="absolute top-[19px] right-[-468px]">
              <Icons.aboutRight />
            </div>
            <div className="absolute bottom-[-175px] w-full flex justify-center">
              <div className="h-[441px] w-[218px]">
                <img
                  src="images/ip16Plus.png"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 mt-[63px] container mx-auto 2xl:px-[123px] xl:px-[60px]">
        <div className="flex justify-between gap-[218px]">
          <div className="w-1/2 flex gap-8 items-center justify-center">
            <div className="flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-[30px] leading-[38px] font-semibold max-2xl:text-2xl">
                30+
              </span>
              <span className="text-center text-[#002D87] text-xl leading-[30px] max-2xl:text-lg">
                Doanh nghiệp trong và
                <br />
                ngoài nước đồng hành
              </span>
            </div>
            <div className="flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-[30px] leading-[38px] font-semibold max-2xl:text-2xl">
                400+
              </span>
              <span className="text-center text-[#002D87] text-xl leading-[30px] max-2xl:text-lg">
                Loại mặt hàng được
                <br />
                định danh và xác thực
              </span>
            </div>
          </div>
          <div className="w-1/2 flex gap-8 items-center justify-center">
            <div className="flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-[30px] leading-[38px] font-semibold max-2xl:text-2xl">
                25,000+
              </span>
              <span className="text-center text-[#002D87] text-xl leading-[30px] max-2xl:text-lg">
                Tem/mã định danh đã
                <br />
                được phát hành
              </span>
            </div>
            <div className="flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-[30px] leading-[38px] font-semibold max-2xl:text-2xl">
                80,000+
              </span>
              <span className="text-center text-[#002D87] text-xl leading-[30px] max-2xl:text-lg">
                Lượt xác thực trên
                <br />
                hệ thống
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
