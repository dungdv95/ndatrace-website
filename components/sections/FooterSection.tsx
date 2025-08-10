import { Icons } from "../icons";

const navs = [
  "Giới thiệu",
  "Lợi ích",
  "Tính năng",
  "Công nghệ",
  "Hỏi đáp",
  "Liên hệ",
];

export default function FooterSection() {
  return (
    <div className="mt-[64px] bg-footer flex flex-col gap-8">
      <div className="container mx-auto mt-[77px] 2xl:px-[123px] xl:px-[90px]">
        <div className="flex flex-col gap-[80px]">
          <div className="flex gap-[140px] items-center">
            <div className="w-[32%] flex-shrink-0">
              <Icons.logoFooter />
            </div>
            <div className="w-full flex justify-between items-center">
              {navs.map((item, index) => (
                <span
                  className="text-[#194185] text-base leading-normal font-medium tracking-[-0.6px]"
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="flex gap-[140px]">
              <div className="w-[32%] flex-shrink-0">
                <span className="text-[#194185] text-2xl leading-8 font-semibold">
                  Minh bạch Chuỗi cung ứng
                  <br />
                  Nâng tầm hàng Việt
                </span>
              </div>
              <div className="w-full flex gap-[30px]">
                <span className="w-[45%] text-[#194185] text-2xl leading-8 font-semibold">
                  Liên hệ
                </span>
                <span className="w-[45%] text-[#194185] text-2xl leading-8 font-semibold">
                  Sản phẩm
                </span>
              </div>
            </div>
            <div className="flex gap-[140px]">
              <div className="w-[32%] flex-shrink-0">
                <span className="text-[#194185] text-lg leading-7 text-balance">
                  NDATrace - Nền tảng chiến lược kiến tạo hạ tầng thương mại số
                  quốc gia, hướng tới một nền kinh tế hiện đại, nơi mỗi sản phẩm
                  có danh tính số và mọi giao dịch đều minh bạch, đáng tin cậy.
                </span>
              </div>
              <div className="w-full flex gap-[30px]">
                <div className="w-[45%] flex flex-col gap-6">
                  <span className="text-[#194185] text-base leading-6">
                    info@ndatrace.vn
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    37 Trần Bình Trọng, Phường Cửa Nam,
                    <br />
                    Hà Nội
                  </span>
                  <div className="mt-1.5 flex gap-6">
                    <div>
                      <Icons.footerFacebook />
                    </div>
                    <div>
                      <Icons.footerTiktok />
                    </div>
                    <div>
                      <Icons.footerYoutube />
                    </div>
                  </div>
                </div>
                <div className="w-[55%] flex flex-col gap-6">
                  <span className="text-[#194185] text-base leading-6">
                    NDAChain - Nền tảng Blockchain quốc gia
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    NDADID - Hệ thống Định danh phi tập trung
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    NDATrace - Nền tảng quốc gia về Định danh, Xác thực và Truy
                    xuất nguồn gốc hàng hoá
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    NDAKey - Ứng dụng định danh phi tập trung
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2.5 flex justify-center border-t border-t-[#D1E9FF]">
        <span className="text-[#194185] text-base leading-2">
          © 2025 Copyright by NDATrace
        </span>
      </div>
    </div>
  );
}
