import Image from "next/image";

const SolutionStack = () => {
  return (
    <div className="space-y-8">
      <div className="text-3xl font-bold sm:text-5xl">Application Stack</div>
      <div>
        <div>
          CoreCode의 프레임 웍은 Fan-in, Fan-out, Branching and merging등의
          유연성을 갖춘 Router를 통해
        </div>
        <div>
          자유롭게 비즈니스 로직을 설계와 변경이 가능하여 재활용성과 생상성이
          높은 개발 툴입니다.
        </div>
        <div>
          또한, 필요에 따라 level 1,2 단을 한번에 아우를 수 있는 구조로 속도와
          성능에서 매우 뛰어난 품질을 보여줍니다.
        </div>
      </div>
      <Image
        src={"/image/corecode_img5.png"}
        alt="img5"
        width={688}
        height={596}
        className="w-full"
      />
    </div>
  );
};
export default SolutionStack;
