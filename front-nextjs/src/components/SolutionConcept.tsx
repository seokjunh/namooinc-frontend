import Image from "next/image";

const SolutionConcept = () => {
  return (
    <div className="space-y-8">
      <div className="sm:text-5xl font-bold text-3xl">Concept</div>
      <div>CoreCode &ldquo;Manufacturing Message Bus Framework&rdquo;</div>
      <div>
        <div>
          CoreCode는 Plant Floor에서 발생하는 모든 데이터들을 실시간으로 장비로
          부터 직접 수집하여 IT 시스템에 표준화된 방식으로
        </div>
        <div>
          연계 시켜주는 Manufacturing Message Bus로, Smart Factory를 실현시켜
          주는 표준 프레임워크를 제공합니다.
        </div>
        <div>
          Smart Factory는 Plant Floor의 Data Visibility를 확보하여 Business
          Floor에서 모든 상황을 모니터링 및 통제가 가능하게 됩니다.
        </div>
      </div>
      <div>
        <Image
          src={"/image/corecode_img1.png"}
          alt="img1"
          width={1000}
          height={1000}
        />
        <Image
          src={"/image/corecode_img2.png"}
          alt="img2"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};
export default SolutionConcept;
