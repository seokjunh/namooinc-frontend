import Image from "next/image";

const SolutionImg = () => {
  return (
    <div className="relative w-full">
      <Image
        src={"/image/corecode_img.png"}
        alt="img2"
        width={1080}
        height={608}
        className="h-[16rem] w-full sm:h-[30rem]"
      />
      <div className="absolute inset-0 flex items-center justify-center text-xl text-white md:text-2xl lg:text-5xl">
        <div>제조 현장의 시스템과 장비 연계의 표준화</div>
      </div>
    </div>
  );
};
export default SolutionImg;
