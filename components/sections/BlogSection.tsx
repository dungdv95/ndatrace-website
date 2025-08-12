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
import { useIsMobile } from "../hooks/use-mobile";
import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import apis from "@/lib/apis/blogs/index";
import ErrorNotice from "../notice/notice-error";
import { Skeleton } from "../ui/skeleton";
import { useRouter } from "next/navigation";
import moment from "moment";

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
  const isMobile = useIsMobile();

  const {
    data: data,
    error,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["/blogs/list", {}],
    queryFn: () =>
      apis.getBlogPost({
        pageIndex: 1,
        pageSize: 10,
        applicationFilter: "ndatrace",
      }),
    retry: 0,
    // keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return <>{isMobile ? <LoadMobile /> : <LoadDesktop />}</>;
  }
  if (isError) {
    return <ErrorNotice error={error as Error} />;
  }

  if (data === undefined || data === null) {
    return null;
  }

  if (isMobile) {
    return <MoblieBlog data={data} />;
  }
  return <DesktopBlog data={data} />;
}

function LoadDesktop() {
  return (
    <div className="pt-[100px] container mx-auto 2xl:px-[123px] xl:px-[60px]">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <Skeleton className="h-11 w-[300px] " />
        </div>

        <div className="flex justify-between gap-[29px] max-lg:gap-5">
          <div className="w-1/2 flex flex-col gap-2">
            <Skeleton className="h-[319px] w-full " />
            <Skeleton className="h-[22px] w-[55px] " />
            <Skeleton className="h-8 w-full " />
            <Skeleton className="h-[20px] w-[100px] " />
            <Skeleton className="h-12 w-full " />
          </div>
          <div className="w-1/2 flex flex-col gap-[30px]">
            <div className="flex gap-[30px]">
              <Skeleton className="h-[130px] w-[169px] flex-shrink-0" />
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-[22px] w-[55px] " />
                <Skeleton className="h-8 w-full " />
                <Skeleton className="h-[20px] w-[100px] " />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <Skeleton className="h-[130px] w-[169px] flex-shrink-0" />
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-[22px] w-[55px] " />
                <Skeleton className="h-8 w-full " />
                <Skeleton className="h-[20px] w-[100px] " />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <Skeleton className="h-[130px] w-[169px] flex-shrink-0" />
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-[22px] w-[55px] " />
                <Skeleton className="h-8 w-full " />
                <Skeleton className="h-[20px] w-[100px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopBlog({ data }: { data: any }) {
  console.log("data", data);
  const router = useRouter();
  const [qaValue, setQaValue] = useState("ndaTrace");

  return (
    <section
      id="inquiry"
      className="pt-[100px] container mx-auto 2xl:px-[123px] xl:px-[60px]"
    >
      <div className="flex flex-col gap-[94px]">
        <div className="flex flex-col gap-10">
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-center text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px]"
          >
            Blog
          </motion.span>

          <div className="flex justify-between gap-[29px] max-lg:gap-5">
            <div className="w-1/2 flex flex-col gap-2">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="w-full h-[320px]"
              >
                <img
                  src={data[0]?.thumbnail}
                  className="object-cover h-full w-full rounded-[16px]"
                />
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
              >
                <Button
                  onClick={() => {
                    router.push(
                      `https://www.ndatrace.vn/vn/blogs/${data[0]?.slug}`
                    );
                  }}
                  className="cursor-pointer mt-1 w-[55px] h-[22px] bg-[#194185] hover:bg-[#194185]/80 rounded-[4px] text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
                >
                  Tin tức
                </Button>
              </motion.div>

              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#194185] text-xl leading-[30px] font-semibold max-lg:text-lg"
              >
                {data[0]?.name}
              </motion.span>

              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#194185] text-sm leading-5 "
              >
                {moment(data[0]?.createdAt).format("DD/MM/YYYY")}
              </motion.span>
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="mt-2 text-[#194185] text-sm leading-5 "
              >
                {data[0]?.description}
              </motion.span>
            </div>
            <div className="w-1/2 flex flex-col gap-[30px]">
              {data.slice(1, 4).map((item: any, index: number) => (
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  key={index}
                  className="flex gap-[30px] max-xl:gap-6 max-lg:gap-4"
                >
                  <div className="w-[191px] h-[147px] flex-shrink-0 max-lg:w-[169px] max-lg:h-[130px]">
                    <img
                      src={item.thumbnail}
                      className="object-cover h-full w-full  rounded-[10px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={() => {
                        router.push(
                          `https://www.ndatrace.vn/vn/blogs/${item?.slug}`
                        );
                      }}
                      className="cursor-pointer w-[55px] h-[22px] bg-[#194185] hover:bg-[#194185]/80 text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
                    >
                      Tin tức
                    </Button>
                    <span className="text-[#194185] text-xl leading-[30px] font-semibold max-xl:text-lg max-lg:text-base">
                      {item.name}
                    </span>
                    <span className="text-[#194185] text-sm leading-5 ">
                      {moment(item?.createdAt).format("DD/MM/YYYY")}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div className="relative w-1/2">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px]"
            >
              Câu hỏi thường gặp
            </motion.span>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="absolute top-[86px] left-[-180px] max-lg:top-[120px]"
            >
              <Icons.blogQaIcon className="max-lg:w-[535px] max-lg:h-[280px]" />
            </motion.div>
          </div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="w-1/2"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LoadMobile() {
  return (
    <div className="px-4 pt-[50px] flex flex-col gap-4">
      <div className="flex justify-center">
        <Skeleton className="h-[30px] w-[200px]" />
      </div>
      <Skeleton className="h-[228px] w-full" />
      <Skeleton className="h-[22px] w-[55px]" />
      <Skeleton className="h-[30px] w-full" />
      <Skeleton className="h-[20px] w-[100px]" />
      <Skeleton className="h-[50px] w-full" />
      <div className="flex gap-[30px]">
        <Skeleton className="h-[91px] w-[118px] flex-shrink-0" />
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-[22px] w-[55px] " />
          <Skeleton className="h-8 w-full " />
          <Skeleton className="h-[20px] w-[100px] " />
        </div>
      </div>
      <div className="flex gap-[30px]">
        <Skeleton className="h-[91px] w-[118px] flex-shrink-0" />
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-[22px] w-[55px] " />
          <Skeleton className="h-8 w-full " />
          <Skeleton className="h-[20px] w-[100px] " />
        </div>
      </div>
      <div className="flex gap-[30px]">
        <Skeleton className="h-[91px] w-[118px] flex-shrink-0" />
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-[22px] w-[55px] " />
          <Skeleton className="h-8 w-full " />
          <Skeleton className="h-[20px] w-[100px] " />
        </div>
      </div>
    </div>
  );
}

function MoblieBlog({ data }: { data: any }) {
  const router = useRouter();
  console.log("data", data);
  const [qaValue, setQaValue] = useState("ndaTrace");
  return (
    <section id="inquiry" className="px-4 pt-[50px] flex flex-col gap-[62px]">
      <div className="flex flex-col gap-6 items-center">
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="text-[#0057D6] text-xl leading-[30px] font-semibold"
        >
          Blog
        </motion.span>

        <div className="flex flex-col gap-2">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="w-full h-full"
          >
            <img
              src={data[0]?.thumbnail}
              className="object-cover h-full w-full rounded-[16px]"
            />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
          >
            <Button
              onClick={() => {
                router.push(
                  `https://www.ndatrace.vn/vn/blogs/${data[0]?.slug}`
                );
              }}
              className="mt-1 bg-[#194185] hover:bg-[#194185]/80 rounded-[4px] w-[55px] h-[22px] text-[#EFF8FF]  text-xs leading-[18px] tracking-[-0.24px]"
            >
              Tin tức
            </Button>
          </motion.div>

          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-[#194185] text-xl leading-[30px] font-semibold max-[28.125rem]:whitespace-pre-line"
          >
            {data[0]?.name}
          </motion.span>

          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-[#194185] text-xs leading-5"
          >
            {moment(data[0]?.createdAt).format("DD/MM/YYYY")}
          </motion.span>

          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-[#194185] text-xs leading-5"
          >
            {data[0]?.description}
          </motion.span>
        </div>
        <div className="flex flex-col gap-6">
          {data.slice(1, 4).map((item: any, index: number) => (
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              key={index}
              className="flex gap-4 items-start"
            >
              <div className="w-[118px] h-[91px] flex-shrink-0">
                <img
                  src={item.thumbnail}
                  className="object-cover h-full w-full  rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => {
                    router.push(
                      `https://www.ndatrace.vn/vn/blogs/${item?.slug}`
                    );
                  }}
                  className="mt-1 bg-[#194185] hover:bg-[#194185]/80 rounded-[4px] w-[55px] h-[22px] text-[#EFF8FF]  text-xs leading-[18px] tracking-[-0.24px]"
                >
                  Tin tức
                </Button>
                <span className="text-[#194185] text-sm leading-6 font-semibold">
                  {item.name}
                </span>
                <span className="text-[#194185] text-sm leading-5">
                  {moment(item?.createdAt).format("DD/MM/YYYY")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="text-[#0057D6] text-xl leading-[30px] font-semibold"
        >
          Câu hỏi thường gặp
        </motion.span>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="w-full"
        >
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
                <AccordionTrigger className="cursor-pointer hover:no-underline p-4 text-[#194185] text-xl leading-[30px] font-semibold items-center gap-0 max-xl:text-lg">
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
        </motion.div>
      </div>
    </section>
  );
}
