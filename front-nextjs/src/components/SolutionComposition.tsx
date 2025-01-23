import Image from "next/image";

const SolutionComposition = () => {
  return (
    <div className="space-y-8">
      <div className="text-3xl font-bold sm:text-5xl">Product Composition</div>
      <div>
        <div>
          ㆍ 장비 및 시스템 연계 시, 손쉽게 인터페이스를 개발할 수 있도록
          Modeling 기반의 다양한 Tool과 각종 산업용 Built-In Adapter를
          제공합니다
        </div>
        <div>
          ㆍ Framework 기반의 Adapter SDK를 제공함으로써 개발자가 빠르고 손쉽게
          장비 연계 인터페이스를 개발할 수 있도록 지원합니다.
        </div>
        <div>
          ㆍ Modeling, 시험, 디버깅, 배포 등에 이르는 전체 개발 과정을 단일화된
          환경에서 진행할 수 있도록 통합 개발 환경을 제공하여 개발 편의성을
          제공합니다.
        </div>
      </div>
      <Image
        src={"/image/corecode_img6.png"}
        alt="img6"
        width={1000}
        height={1000}
      />
    </div>
  );
};
export default SolutionComposition;
