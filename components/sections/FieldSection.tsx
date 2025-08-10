import { Icons } from "../icons";

export default function FieldSection() {
  return (
    <div className="pt-[42px] flex justify-center">
      <div className="relative h-[811px] w-[811px]">
        <img
          src="images/benefit-circle.png"
          className="object-cover h-full w-full"
        />
        <div className="absolute w-full flex justify-center top-[93px]">
          <span className=" text-[#0057D6] text-4xl font-semibold leading-11 tracking-[-0.72px]">
            Lĩnh vực áp dụng
          </span>
        </div>

        <div className="absolute top-0 h-full w-full flex justify-center items-center">
          <div className="h-[441px] w-[218px] ">
            <img
              src="images/ip16Plus.png"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="absolute top-[25%] left-[-44px]">
          <div className="animate-pulse bg-[#EFF8FF] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitMilk />
            </div>
            <span className="text-[#1570EF] text-lg leading-7 font-semibold">
              Dược phẩm & y tế
            </span>
          </div>
        </div>
        <div className="h-full absolute top-0 left-[-146px] flex items-center">
          <div className="animate-pulse bg-[#EDFCF2] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitFood />
            </div>
            <span className="text-[#087443] text-lg leading-7 font-semibold">
              Thực phẩm & nông nghiệp
            </span>
          </div>
        </div>
        <div className="absolute top-[75%] left-[51px]">
          <div className="animate-pulse bg-[#FEFBE8] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitDress />
            </div>
            <span className="text-[#EAAA08] text-lg leading-7 font-semibold">
              Thời trang
            </span>
          </div>
        </div>
        <div className="absolute bottom-[86px] flex justify-center w-full">
          <div className="animate-pulse bg-[#FEF3F2] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitSetting />
            </div>
            <span className="text-[#F97066] text-lg leading-7 font-semibold">
              Công nghiệp sản xuất
            </span>
          </div>
        </div>
        <div className="absolute top-[75%] right-[-12px]">
          <div className="animate-pulse bg-[#FFF4ED] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitLogistic />
            </div>
            <span className="text-[#FF9C66] text-lg leading-7 font-semibold">
              Logistic & vận tải
            </span>
          </div>
        </div>
        <div className="h-full absolute top-0 right-[-146px] flex items-center">
          <div className="animate-pulse bg-[#EEF4FF] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitDiamond />
            </div>
            <span className="text-[#6172F3] text-lg leading-7 font-semibold">
              Kim cương & Đá quý
            </span>
          </div>
        </div>
        <div className="absolute top-[25%] right-[-8px]">
          <div className="animate-pulse bg-[#EFF4FF] px-2 py-1 rounded-[8px] flex gap-[10px] items-center">
            <div>
              <Icons.benefitCosmetics />
            </div>
            <span className="text-[#0BA5EC] text-lg leading-7 font-semibold">
              Hoá mỹ phẩm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
