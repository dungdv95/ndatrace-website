import { Icons } from "../icons";

export default function FeatureSection() {
  return (
    <div className="mt-[93px] bg-[#F7FCFC] pt-[53px] pb-[86px]">
      <div className="container mx-auto 2xl:px-[123px] xl:px-[90px]">
        <div className="flex flex-col gap-6">
          <span className="text-center text-[#0057D6] text-4xl leading-11 font-semibold tractking-[-0.72px]">
            Tính năng của NDATrace
          </span>
          <span className="text-center text-[#194185] text-sm leading-[25px]">
            NDATrace giúp các tổ chức, doanh nghiệp, cơ quan quản lý, người tiêu
            dùng dễ dàng lưu trữ, theo dõi, xác minh
            <br />
            và truy xuất thông tin của toàn bộ hành trình sản phẩm từ sản xuất,
            vận hành cho tới phân phối một cách minh
            <br /> bạch, an toàn và hiệu quả
          </span>
          <div className="mt-[33px] flex justify-between gap-[30px]">
            <div className="w-full bg-white rounded-[12px] px-6 pt-[65px] pb-4">
              <div className="flex flex-col gap-6">
                <div className="flex justify-center">
                  <Icons.featureIdentify />
                </div>
                <div className="flex flex-col">
                  <span className="text-center text-[#194185] text-sm leading-5">
                    NDATrace UID
                  </span>
                  <span className="mt-1 text-center text-[#194185] text-2xl leading-8 font-semibold">
                    Định danh
                  </span>
                  <span className="mt-4 text-center text-[#194185] text-base leading-6">
                    Mỗi sản phẩm sẽ được phát hành mã định danh phi tập trung
                    (DID) theo chuẩn W3C được thể hiện dưới dạng QR hoặc chip
                    định danh, đáp ứng tiêu chuẩn mã vạch GS1 Digital Link. Từ
                    đó giúp hàng hóa được lưu thông thuận lợi với tiêu chuẩn
                    toàn cầu.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full bg-white shadow-lg rounded-[12px] px-6 pt-[65px] pb-4">
              <div className="flex flex-col gap-6">
                <div className="flex justify-center">
                  <Icons.featureRetrieval />
                </div>
                <div className="flex flex-col">
                  <span className="text-center text-[#194185] text-sm leading-5">
                    NDATrace Website
                  </span>
                  <span className="mt-1 text-center text-[#194185] text-2xl leading-8 font-semibold">
                    Truy xuất
                  </span>
                  <span className="mt-4 text-center text-[#194185] text-base leading-6">
                    Hiển thị các thông tin, nguồn gốc và hoạt động xác thực
                    trong vòng đời sản phẩm. Cho phép người dùng đánh giá, phản
                    hồi và tích điểm sản phẩm sau khi mua hàng.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full bg-white rounded-[12px] px-6 pt-[65px] pb-4">
              <div className="flex flex-col gap-6">
                <div className="flex justify-center">
                  <Icons.featureVerify />
                </div>
                <div className="flex flex-col">
                  <span className="text-center text-[#194185] text-sm leading-5">
                    NDATrace Portal
                  </span>
                  <span className="mt-1 text-center text-[#194185] text-2xl leading-8 font-semibold">
                    Xác thực
                  </span>
                  <span className="mt-4 text-center text-[#194185] text-base leading-6">
                    Công cụ cho phép tổ chức, doanh nghiệp (Bên cấp phát) đăng
                    ký tài khoản, khởi tạo DID sản phẩm và cấp phép phát hành
                    bằng chứng xác thực VC cho các bên xác minh trong chuỗi cung
                    ứng. Từ đó kiểm soát và giám sát toàn bộ vòng đời sản phẩm,
                    quản trị quy trình sản xuất và vận hành tới tay người dùng.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
