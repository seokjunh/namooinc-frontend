import Image from "next/image";

const CompanyVision = () => {
  return (
    <div className="py-[6.25rem]">
      <div className="relative flex h-64 items-center justify-center bg-slate-700">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
          비전
        </div>
      </div>
      <div className="mx-auto max-w-xs mt-16 text-center md:max-w-xl lg:max-w-5xl space-y-10 sm:space-y-20">
        <div className="space-y-4 sm:space-y-8">
          <div className="sm:text-3xl text-xl font-bold">
            새 시대 글로벌 나무아이앤씨를 향한 비전
          </div>
          <Image
            src={"/image/vision_img1.png"}
            alt={"vision_img1"}
            width={960}
            height={164}
          />
          <div className="sm:text-xl text-xs">
            <div>
              데이터를 가장 잘 이해하고 가장 잘 다룰 수 있는 기업, 나무아이앤씨
            </div>
            <div>
              <div>
                나무아이앤씨는 20년간의 데이터 기술 역량을 바탕으로 제조
                현장부터 통합 물류, 고객 접점 및 업무 효율까지,
              </div>
              <div>
                Digitalization을 통한 차별적 가치를 선도하는 기업입니다.
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-8">
          <div className="sm:text-3xl text-xl font-bold">제공가치</div>
          <Image
            src={"/image/vision_img2.png"}
            alt={"vision_img2"}
            width={960}
            height={371}
          />
          <div className="sm:space-y-2 sm:text-xl text-[0.7rem] space-y-1">
            <div>
              고객에게는 디지털 혁신을 통해 비즈니스 성장을 견인하는 회사
            </div>
            <div>
              임직원에게는 역량 강화를 통해 전문가로 성장할 기회를 제공하는 회사
            </div>
            <div>
              파트너에게는 시너지 창출을 통해 생태계를 함께 성장시켜 나가는 회사
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyVision;
