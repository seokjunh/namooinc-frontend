import Image from "next/image";

const SolutionOverview = () => {
  return (
    <div className="space-y-8">
      <div className="text-3xl font-bold sm:text-5xl">Overview</div>
      <div>
        <div>
          현재 제조현장은 개별적/수직적인 1:N 방식의 인터페이스 연계로 복잡도가
          날로 증가하고 있으며,
        </div>
        <div>
          신규 시스템 도입 시 복잡도가 더욱 증가하여 막대한 시간, 인력, 비용을
          요구하고 있습니다.
        </div>
        <div>
          따라서, 장비별 연계를 위해 장비업체나 개발인력에 종속되어 변화에 따른
          민첩한 대응이 불가합니다.
        </div>
      </div>
      <Image
        src={"/image/corecode_img3.png"}
        alt="img3"
        width={1000}
        height={1000}
      />
      <div>
        <div>
          CoreCode는 하나의 표준화된 Manufacturing Message Bus로 레고블럭처럼
          손쉽게 장비나 시스템의 변경 및 추가가 가능합니다.
        </div>
        <div>
          또한, 현장에서 검증된 다양한 내장 컨포넌트(어댑터)를 제공하며, Custom
          컴포넌트 개발을 위한 API를 제공합니다.
        </div>
        <div>
          이러한 CoreCode 엔진의 핵심 기능은 국내 특허와 미국, 일본 특허를 모두
          보유하고 있습니다.
        </div>
      </div>
      <Image
        src={"/image/corecode_img4.png"}
        alt="img5"
        width={1000}
        height={1000}
      />
    </div>
  );
};
export default SolutionOverview;
