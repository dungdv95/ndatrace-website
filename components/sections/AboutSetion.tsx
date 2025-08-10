"use client";

import { Icons } from "../icons";

export default function AboutSection() {
  return (
    <div className="mt-[161px] mb-[26px] ">
      <div className="h-[728px] bg-about flex flex-col gap-[25px]">
        <span className="text-center text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px]">
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
        <div className="z-10 mt-[13px] flex justify-center">
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
              <div className="h-[441px] w-[218px] ">
                <img
                  src="images/ip16Plus.png"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 mt-[63px] container mx-auto 2xl:px-[123px] xl:px-[90px]">
        <div className="flex justify-between">
          <div className="flex gap-[11px] items-center">
            <div className="min-w-[241px] flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-[30px] leading-[38px] font-semibold">
                30+
              </span>
              <span className="text-center text-[#002D87] text-xl leading-[30px]">
                Doanh nghiệp trong và
                <br />
                ngoài nước đồng hành
              </span>
            </div>
            <div className="min-w-[241px] flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-[30px] leading-[38px] font-semibold">
                400+
              </span>
              <span className="text-center text-[#002D87] text-xl leading-[30px]">
                Loại mặt hàng được
                <br />
                định danh và xác thực
              </span>
            </div>
          </div>
          <div className="flex gap-[11px] items-center">
            <div className="min-w-[241px] flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-[30px] leading-[38px] font-semibold">
                25,000+
              </span>
              <span className="text-center text-[#002D87] text-xl leading-[30px]">
                Tem/mã định danh đã
                <br />
                được phát hành
              </span>
            </div>
            <div className="min-w-[241px] flex flex-col gap-[10px] items-center">
              <span className="text-[#002D87] text-[30px] leading-[38px] font-semibold">
                80,000+
              </span>
              <span className="text-center text-[#002D87] text-xl leading-[30px]">
                Lượt xác thực trên
                <br />
                hệ thống
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
