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

const listBenefit = [
  {
    id: 1,
    icon: <Icons.benefitShield />,
    title: "Bảo vệ thương hiệu",
    description:
      "Chống giả mạo và bảo mật tuyệt đối, giúp người dùng dễ dàng nhận biết hàng thật hàng giả, bảo vệ thương hiệu và tăng giá trị sản phẩm",
  },
  {
    id: 2,
    icon: <Icons.benefitData />,
    title: "Bảo toàn dữ liệu",
    description:
      "Doanh nghiệp và người dùng có toàn quyền kiểm soát dữ liệu của mình, chỉ chia sẻ thông tin cần thiết với các bên liên quan",
  },
  {
    id: 3,
    icon: <Icons.benefitCustom />,
    title: "Tăng giá trị với khách hàng",
    description:
      "Dễ dàng tương tác hai chiều với khách hàng, nhận các phản hồi và gia tăng tỷ lệ mua lại, sự trung thành của khách hàng thông qua các chương trình tích điểm, thành viên, khuyến mãi",
  },
  {
    id: 4,
    icon: <Icons.benefitGlobal />,
    title: "Tích hợp toàn cầu",
    description:
      "NDATrace tuân thủ các tiêu chuẩn toàn cầu như W3C DID và GS1, cho phép liên kết dễ dàng với các hệ thống truy xuất quốc tế. Điều này đặc biệt quan trọng cho các ngành xuất nhập khẩu",
  },
];

export default function BenefitSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="benefit"
        className="px-4 flex flex-col items-center py-[52px]"
      >
        <span className="text-[#0057D6] text-xl leading-[30px] font-semibold">
          Lợi ích của NDATrace
        </span>
        <div className="mt-[27px] h-[441px] w-[218px]">
          <img
            src="images/ip16Plus.png"
            className="object-cover h-full w-full"
          />
        </div>
        <BenefitSlide />
      </section>
    );
  }

  return (
    <section
      id="benefit"
      className="container mx-auto 2xl:px-[123px] xl:px-[60px]"
    >
      <div className="flex justify-center mb-[47px]">
        <span className=" text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px]">
          Lợi ích của NDATrace
        </span>
      </div>
      <div className="flex gap-[65px] max-2xl:gap-[45px] max-xl:gap-[30px]">
        <div className="w-1/2 grow flex flex-col justify-between">
          <div className=" p-4 bg-benefit rounded-[16px] flex flex-col gap-6 max-xl:gap-4">
            <div className="flex justify-end">
              <Icons.benefitShield className="max-xl:h-10 max-xl:w-10" />
            </div>
            <span className="text-end text-[#002D87] text-2xl leading-8 font-medium max-xl:text-xl">
              Bảo vệ thương hiệu
            </span>
            <span className="text-end text-[#002D87] text-base leading-6 max-xl:text-sm">
              Chống giả mạo và bảo mật tuyệt đối, giúp người dùng dễ dàng nhận
              biết hàng thật hàng giả, bảo vệ thương hiệu và tăng giá trị sản
              phẩm
            </span>
          </div>
          <div className=" p-4 bg-benefit-data rounded-[16px] flex flex-col gap-6 max-xl:gap-4">
            <div className="flex justify-end">
              <Icons.benefitData className="max-xl:h-10 max-xl:w-10" />
            </div>
            <span className="text-end text-[#002D87] text-2xl leading-8 font-medium max-xl:text-xl">
              Bảo toàn dữ liệu
            </span>
            <span className="text-end text-[#002D87] text-base leading-6 max-xl:text-sm">
              Doanh nghiệp và người dùng có toàn quyền kiểm soát dữ liệu của
              mình, chỉ chia sẻ thông tin cần thiết với các bên liên quan
            </span>
          </div>
        </div>
        <div className="grow-0">
          <div className="h-[566px] w-[279px]">
            <img
              src="images/ip16Plus.png"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="w-1/2 grow flex flex-col justify-between">
          <div className="p-4 bg-benefit rounded-[16px] flex flex-col gap-6 max-xl:gap-4">
            <div className="flex justify-start">
              <Icons.benefitCustom className="max-xl:h-10 max-xl:w-10" />
            </div>
            <span className="text-start text-[#002D87] text-2xl leading-8 font-medium max-xl:text-xl">
              Tăng giá trị với khách hàng
            </span>
            <span className="text-start text-[#002D87] text-base leading-6 max-xl:text-sm">
              Dễ dàng tương tác hai chiều với khách hàng, nhận các phản hồi và
              gia tăng tỷ lệ mua lại, sự trung thành của khách hàng thông qua
              các chương trình tích điểm, thành viên, khuyến mãi
            </span>
          </div>
          <div className="p-4 bg-benefit-data rounded-[16px] flex flex-col gap-6 max-xl:gap-4">
            <div className="flex justify-start">
              <Icons.benefitGlobal className="max-xl:h-10 max-xl:w-10" />
            </div>
            <span className="text-start text-[#002D87] text-2xl leading-8 font-medium">
              Tích hợp toàn cầu
            </span>
            <span className="text-start text-[#002D87] text-base leading-6">
              NDATrace tuân thủ các tiêu chuẩn toàn cầu như W3C DID và GS1, cho
              phép liên kết dễ dàng với các hệ thống truy xuất quốc tế. Điều này
              đặc biệt quan trọng cho các ngành xuất nhập khẩu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitSlide() {
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
    <div className="mt-5 flex flex-col gap-[17px]">
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
                  {listBenefit[index].title}
                </span>
                <span className="text-center text-[#002D87] text-base leading-6">
                  {listBenefit[index].description}
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
    </div>
  );
}
