import { Icons } from "../icons";

export default function BenefitSection() {
  return (
    <section
      id="benefit"
      className="mt-[68px] container mx-auto 2xl:px-[123px] xl:px-[90px]"
    >
      <div className="flex justify-center mb-[47px]">
        <span className=" text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px]">
          Lợi ích của NDATrace
        </span>
      </div>
      <div className="flex gap-[65px]">
        <div className="grow flex flex-col justify-between">
          <div className="w-[440px] p-4 bg-benefit rounded-[16px] flex flex-col gap-6">
            <div className="flex justify-end">
              <Icons.benefitShield />
            </div>
            <span className="text-end text-[#002D87] text-2xl leading-8 font-medium">
              Bảo vệ thương hiệu
            </span>
            <span className="text-end text-[#002D87] text-base leading-6">
              Chống giả mạo và bảo mật tuyệt đối, giúp người dùng dễ dàng nhận
              biết hàng thật hàng giả, bảo vệ thương hiệu và tăng giá trị sản
              phẩm
            </span>
          </div>
          <div className="w-[440px] p-4 bg-benefit-data rounded-[16px] flex flex-col gap-6">
            <div className="flex justify-end">
              <Icons.benefitData />
            </div>
            <span className="text-end text-[#002D87] text-2xl leading-8 font-medium">
              Bảo toàn dữ liệu
            </span>
            <span className="text-end text-[#002D87] text-base leading-6">
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
        <div className="grow flex flex-col justify-between">
          <div className="w-[440px] p-4 bg-benefit rounded-[16px] flex flex-col gap-6">
            <div className="flex justify-start">
              <Icons.benefitCustom />
            </div>
            <span className="text-start text-[#002D87] text-2xl leading-8 font-medium">
              Tăng giá trị với khách hàng
            </span>
            <span className="text-start text-[#002D87] text-base leading-6">
              Dễ dàng tương tác hai chiều với khách hàng, nhận các phản hồi và
              gia tăng tỷ lệ mua lại, sự trung thành của khách hàng thông qua
              các chương trình tích điểm, thành viên, khuyến mãi
            </span>
          </div>
          <div className="w-[440px] p-4 bg-benefit-data rounded-[16px] flex flex-col gap-6">
            <div className="flex justify-start">
              <Icons.benefitGlobal />
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
