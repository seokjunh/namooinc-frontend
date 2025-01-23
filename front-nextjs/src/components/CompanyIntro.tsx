import Image from "next/image";

const CompanyIntro = () => {
  return (
    <div className="py-[6.25rem]">
      <div className="relative flex h-64 items-center justify-center bg-slate-700">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
          나무I&C 소개
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-xs space-y-12 text-lg md:max-w-xl lg:max-w-5xl">
        <div className="space-y-6 text-center">
          <div className="text-4xl font-bold">Connecting Values</div>
          <div className="font-semibold sm:flex sm:justify-center">
            <div>나무 INC는 고객의 가치를 서로 연계하여</div>
            <div>더 큰 가치를 만드는 기업입니다.</div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            나무아이앤씨는 점점 복잡해 지고 다양해지는 데이터들을 표준화된
            방식으로 서로 소통케 하여 좀더 똑똑하고 편안한 세상을 만들어가기
            위한 솔루션을 개발하고 있습니다.
          </div>
          <div>
            나무아이앤씨의 솔루션은 제조, 스마트시티, 통신, 의료 등 IT융합을
            통해 시너지효과를 극대화 할 수 있는 산업현장에서 IT와 각 산업을
            소통시키기 위한 융합솔루션으로 Smart Factory 실현을 목표로 하고
            있습니다.
          </div>
          <div>
            Smart Factory는 제조현장의 모든 데이터들을 직접
            수집(표준화)-가공-전달의 과정을 통해 전사적으로 모든 정보가 공유되고
            저장/분석되어 민첩하고 유연한 기업운영환경 즉, 스스로 지속적인
            혁신을 가능하게 하는 똑똑한 공장운영 환경입니다.
          </div>
        </div>
        <Image
          src={"/image/about_namoo.png"}
          alt="about_namoo"
          width={1080}
          height={683}
        />
      </div>
    </div>
  );
};
export default CompanyIntro;
