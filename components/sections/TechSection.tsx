import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export default function TechSection() {
  return (
    <section
      id="technology"
      className="mt-[46px] container mx-auto 2xl:px-[123px] xl:px-[60px] max-xl:mt-[54px]"
    >
      <div className="flex flex-col gap-8">
        <span className="text-center text-[#0057D6] text-4xl leading-11 font-semibold">
          Công nghệ của NDATrace
        </span>
        <div className="mt-5 flex justify-center max-xl:mt-0">
          <img src="images/tech.png" className="object-cover h-full w-full" />
        </div>
        <div className="flex justify-between gap-[30px] max-xl:gap-7">
          <div className="p-6 w-full bg-tech rounded-[12px]">
            <div className="flex flex-col gap-6 max-xl:gap-4">
              <div className="flex justify-center">
                <Icons.techNdaDid />
              </div>
              <span className="text-center text-[#194185] text-base leading-6 font-semibold max-xl:text-sm">
                Hệ thống Định danh Phi tập trung
                <br />
                Quốc gia
              </span>
              <span className="text-[#194185] text-base leading-6 max-xl:text-sm">
                Xác minh danh tính, bảo vệ quyền riêng tư, phát hành và quản lý
                DIDs/VCs theo chuẩn W3C.
              </span>
            </div>
          </div>
          <div className="p-6 w-full bg-tech rounded-[12px]">
            <div className="flex flex-col gap-6 max-xl:gap-4">
              <div className="flex justify-center">
                <Icons.techNdaTrace />
              </div>
              <span className="text-center text-[#194185] text-base leading-6 font-semibold max-xl:text-sm">
                Nền tảng quốc gia về Định danh, Xác thực, Truy xuất nguồn gốc
                hàng hoá
              </span>
              <span className="text-[#194185] text-base leading-6 max-xl:text-sm">
                Định danh từng món hàng với tiêu chuẩn mã vạch GS1 Data Link.
                Cung cấp công cụ quản lý, giám sát dòng đời sản phẩm từ đó tăng
                tính tương tác và độ tin cậy với người tiêu dùng.
              </span>
            </div>
          </div>
          <div className="p-6 w-full bg-tech rounded-[12px]">
            <div className="flex flex-col gap-6 max-xl:gap-4">
              <div className="flex justify-center">
                <Icons.techNdaChain />
              </div>
              <span className="text-center text-[#194185] text-base leading-6 font-semibold max-xl:text-sm">
                Nền tảng Chuỗi khối
                <br />
                Quốc gia
              </span>
              <span className="text-[#194185] text-base leading-6 max-xl:text-sm">
                Đảm bảo tính bất biến, minh bạch, hỗ trợ hợp đồng thông minh để
                tự động hóa quy trình
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[104px] bg-tech-about rounded-[24px] px-[109px] pt-[63px] pb-[135px] max-xl:px-[60px] max-xl:pt-[50px] max-xl:pb-[120px]">
          <div className="flex gap-[30px] max-xl:gap-[20px]">
            <div className="flex flex-col gap-7">
              <span className="text-[#194185] text-xl leading-7 font-semibold whitespace-pre-line max-xl:text-lg">
                {`NDATrace đồng hành cùng doanh nghiệp xây dựng hệ thống
                truy xuất an toàn, minh bạch, đạt chuẩn quốc gia.`}
              </span>
              <Link
                href="mailto:info@ndatrace.vn"
                className="cursor-pointer flex justify-center items-center h-10 w-[190px] bg-[#3176EE] hover:bg-[#3176EE]/80 rounded-[8px] text-white text-lg leading-7 font-semibold"
              >
                Liên hệ ngay
              </Link>
            </div>
            <div className="relative">
              <div className="absolute top-[-143px] max-xl:top-[-122px]">
                <div className="h-[384px] w-[404px] max-xl:h-[333px] max-xl:w-[350px]">
                  <img
                    src="images/tech-about.png"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
