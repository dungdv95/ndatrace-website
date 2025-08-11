"use client";

import { useIsMobile } from "../hooks/use-mobile";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import FieldSection from "./FieldSection";

export default function AboutSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section id="about" className="mb-bg-about pt-[90px] pb-[22px] ">
        <div className="flex flex-col gap-4 ">
          <span className="px-4 text-center text-[#0057D6] text-xl leading-[30px] font-semibold">
            Nền tảng Quốc gia về Định danh, Xác thực và Truy xuất nguồn gốc hàng
            hoá
          </span>
          <span className="px-4 text-center text-[#194185] text-sm leading-[25px]">
            NDATrace là giải pháp truy xuất nguồn gốc hàng hoá toàn diện, giúp
            theo dõi minh bạch toàn bộ hành trình sản phẩm trong chuỗi cung ứng,
            từ sản xuất đến tay người tiêu dùng.
          </span>
          <div className="mt-9 relative flex justify-center">
            <div className="w-[400px] h-[286px]">
              <img
                src="images/about-bg.png"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute bottom-[-80px]">
              <div className="w-[106px] h-[215px]">
                <img
                  src="images/ip16Plus.png"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div className="absolute top-[-38px] left-[-20px]">
              <Icons.aboutLeft className="w-[234px] h-[123px]" />
            </div>
            <div className="absolute top-[-38px] right-[-20px]">
              <Icons.aboutRight className="w-[234px] h-[123px]" />
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
