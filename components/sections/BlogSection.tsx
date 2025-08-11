import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

const listNews = [
  {
    id: 1,
    link: "",
    img: "images/blog-1.png",
    title: "Động lực phát triển kinh tế số",
    date: "24/07/2025",
  },
  {
    id: 2,
    link: "",
    img: "images/blog-2.png",
    title:
      "Việt Nam sắp trình làng nền tảng xác thực, định danh hàng hóa xuyên biên giới",
    date: "24/07/2025",
  },
  {
    id: 3,
    link: "",
    img: "images/blog-3.png",
    title:
      "Từ mã QR đến blockchain: Công nghệ đang định hình cuộc chiến chống hàng giả tại Việt Nam",
    date: "24/07/2025",
  },
];

const listQa = [
  {
    id: 1,
    code: "ndaTrace",
    title: "NDATrace là gì?",
    answer:
      "NDATrace là Nền tảng quốc gia về Định danh, Xác thực, Truy xuất nguồn gốc hàng hoá, ứng dụng công nghệ blockchain trên nền tảng sử dụng NDADID (Hệ thống định danh phi tập trung quốc gia) và NDAChain (Nền tảng Chuỗi khối Quốc gia) để đảm bảo tính minh bạch, an toàn và chống giả mạo cho tất cả các bên liên quan.",
  },
  {
    id: 2,
    code: "ndaTraceUid",
    title: "NDATrace UID là gì?",
    answer:
      "NDATrace UID là thông tin định danh duy nhất, liên kết với mã định danh phi tập trung (DID) theo chuẩn W3C và được thể hiện dưới dạng mã QR hoặc chip định danh, đáp ứng tiêu chuẩn mã vạch Quốc Tế GS1 Data Link.",
  },
  {
    id: 3,
    code: "custom",
    title:
      "Khách hàng sử dụng NDATrace để truy xuất xác thực nguồn gốc hàng hoá như thế nào?",
    answer:
      "Các tổ chức (Bên cấp phát - Issuer) đăng ký tài khoản trên NDATrace Portal để khởi tạo mã định danh (DID) sản phẩm và thực hiện xác thực cho các hoạt động trong chuỗi cung ứng (phát hành VC). \nCác bên tham gia trong chuỗi cung ứng (từ nhà sản xuất, cơ quan kiểm định, đơn vị vận chuyển - phân phối đến người tiêu dùng) có thể dễ dàng kiểm tra thông tin, nguồn gốc và hoạt động xác thực trong vòng đời sản phẩm thông qua NDATrace UID (dưới dạng mã QR hoặc chip định danh) mà không cần đăng ký tài khoản. Ứng dụng còn cho phép người dùng đánh giá, phản hồi và tích điểm sản phẩm sau khi mua hàng.",
  },
  {
    id: 4,
    code: "object",
    title: "Những đối tượng nào có thể sử dụng NDATrace?",
    answer:
      "Tất cả mọi đối tượng trong chuỗi cung ứng đều có thể truy xuất nguồn gốc thông qua NDATrace UID. Tuy nhiên, chỉ có các Bên cấp phát (Issuer) đã đăng ký tài khoản trên NDATrace Portal mới có thể khởi tạo DID sản phẩm và xác thực hoạt động (phát hành VC).",
  },
  {
    id: 5,
    code: "why",
    title:
      "Tại sao NDATrace tối ưu hơn các giải pháp truy xuất nguồn gốc thông thường?",
    answer:
      "Hoạt động trên nền tảng quốc gia NDAChain và NDADID, NDATrace vượt trội nhờ ứng dụng công nghệ chuỗi khối (blockchain) và định danh phi tập trung (DID) đáp ứng các chuẩn quốc tế, giúp đảm bảo minh bạch và không thể làm giả. Không chỉ truy xuất nguồn gốc, NDATrace còn mang đến trải nghiệm cho người dùng cuối như tích điểm, đánh giá sản phẩm và phản hồi sau mua - tạo vòng đời tương tác số toàn diện so với các giải pháp khác.",
  },
];

export default function BlogSection() {
  const [qaValue, setQaValue] = useState("ndaTrace");
  return (
    <section
      id="inquiry"
      className="mt-[94px] container mx-auto 2xl:px-[123px] xl:px-[60px]"
    >
      <div className="flex flex-col gap-[94px]">
        <div className="flex flex-col gap-10">
          <span className="text-center text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px]">
            Blog
          </span>
          <div className="flex justify-between gap-[29px]">
            <div className="w-1/2 flex flex-col gap-2">
              <div className="w-full h-[320px]">
                <img
                  src="images/blog.png"
                  className="object-cover h-full w-full rounded-[16px]"
                />
              </div>

              <Button className="mt-1 w-[55px] h-[22px] bg-[#194185] hover:bg-[#194185]/80 rounded-[4px] text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]">
                Tin tức
              </Button>
              <span className="text-[#194185] text-xl leading-[30px] font-semibold">
                {`Việt Nam sắp trình làng nền tảng xác thực, định danh hàng hóa xuyên biên giới`}
              </span>
              <span className="text-[#194185] text-sm leading-5 ">
                24/07/2025
              </span>
              <span className="mt-2 text-[#194185] text-sm leading-5 ">
                NDA Trace đáp ứng chuẩn quốc tế GS1 và tương thích với hệ thống
                xác thực, truy xuất toàn cầu EBSI, hỗ trợ toàn diện cho doanh
                nghiệp kết nối chuỗi cung ứng xuyên biên giới.
              </span>
            </div>
            <div className="w-1/2 flex flex-col gap-[30px]">
              {listNews.map((item, index) => (
                <div key={index} className="flex gap-[30px] max-xl:gap-6">
                  <div className="w-[191px] h-[147px] flex-shrink-0">
                    <img
                      src={item.img}
                      className="object-contain h-full w-full  rounded-[10px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="w-[55px] h-[22px] bg-[#194185] hover:bg-[#194185]/80 text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]">
                      Tin tức
                    </Button>
                    <span className="text-[#194185] text-xl leading-[30px] font-semibold max-xl:text-lg">
                      {item.title}
                    </span>
                    <span className="text-[#194185] text-sm leading-5 ">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div className="relative w-1/2">
            <span className="text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px]">
              Câu hỏi thường gặp
            </span>
            <div className="absolute top-[86px] left-[-180px]">
              <Icons.blogQaIcon />
            </div>
          </div>
          <div className="w-1/2">
            <Accordion
              type="single"
              collapsible
              className="w-full bg-[#EFF8FF] rounded-[12px]"
              value={qaValue}
              onValueChange={setQaValue}
            >
              {listQa.map((item, index) => (
                <AccordionItem
                  key={item.code}
                  value={item.code}
                  className={cn(
                    qaValue === item.code
                      ? "border-b-[#E9EAEB]"
                      : "border-b-white"
                  )}
                >
                  <AccordionTrigger className="cursor-pointer hover:no-underline px-6 py-4 text-[#194185] text-xl leading-[30px] font-semibold items-center gap-0 max-xl:text-lg">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent
                    className={cn(
                      "bg-white border-t border-x border-t-[#E9EAEB] border-x-[#E9EAEB] p-6",
                      index === listQa.length - 1 &&
                        "border-b border-b-[#E9EAEB] rounded-b-[12px]"
                    )}
                  >
                    <p className="text-[#194185] text-base leading-6 whitespace-pre-line max-xl:text-sm">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
