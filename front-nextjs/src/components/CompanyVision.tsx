import Image from "next/image";

const CompanyVision = () => {
  return (
    <div className="pt-[6.25rem]">
      <div className="relative flex h-44 items-center justify-center bg-slate-700 sm:h-64">
        <div className="text-2xl font-bold text-white md:text-4xl">비전</div>
      </div>
      <div className="mx-auto max-w-xs space-y-6 py-14 text-center text-lg sm:py-28 md:max-w-xl lg:max-w-5xl">
        <div className="space-y-4 sm:space-y-8">
          <div className="text-sm font-bold md:text-xl lg:text-3xl">
            새 시대 글로벌 나무아이앤씨를 향한 비전
          </div>
          <Image
            src={"/image/vision_img1.png"}
            alt={"vision_img1"}
            width={960}
            height={164}
          />
          <div className="text-xs leading-normal sm:leading-normal md:text-base lg:text-xl">
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
          <div className="text-base font-bold md:text-xl lg:text-3xl">
            제공가치
          </div>
          <Image
            src={"/image/vision_img2.png"}
            alt={"vision_img2"}
            width={960}
            height={371}
          />
          <div className="text-[0.7rem] leading-5 md:text-base md:leading-8 lg:text-xl lg:leading-10">
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
