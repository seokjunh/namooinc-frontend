import Image from "next/image";
import KakaoMap from "./KakakoMap";

const RouteGuide = () => {
  return (
    <div className="pt-[6.25rem]">
      <div className="relative flex h-44 items-center justify-center sm:h-64">
        <div className="text-2xl font-bold underline underline-offset-[1rem] md:text-4xl">
          오시는 길
        </div>
      </div>
      <div className="mx-auto max-w-xs pb-14 sm:pb-28 md:max-w-xl lg:max-w-6xl">
        <KakaoMap />
        <div className="border-b py-[2rem] lg:flex lg:justify-between">
          <div className="w-full justify-between space-y-4 lg:flex">
            <div className="flex items-center justify-center gap-4">
              <Image
                src={"/image/map_ic.png"}
                alt={"map_ic"}
                width={24}
                height={32}
              />
              <div className="text-[1.1rem] font-medium sm:text-xl">
                서울특별시 강남구 도산대로30길 33-8 (대경빌딩 3층)
              </div>
            </div>
            <div className="flex justify-around gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={"/image/tel_ic1.png"}
                  alt={"tel_ic"}
                  width={70}
                  height={70}
                  className="h-[2.5rem] w-[2.5rem] sm:h-[4.5rem] sm:w-[4.5rem]"
                />
                <div className="text-xs sm:text-base">
                  <div className="text-xl font-medium">TEL</div>
                  <div>02-3018-5114</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={"/image/tel_ic2.png"}
                  alt={"tel_ic1"}
                  width={70}
                  height={70}
                  className="h-[2.5rem] w-[2.5rem] sm:h-[4.5rem] sm:w-[4.5rem]"
                />
                <div className="text-xs sm:text-base">
                  <div className="text-xl font-medium">FAX</div>
                  <div>02-3018-3026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[1.25rem] text-xl font-normal sm:text-2xl">
          교통편
        </div>
        <div className="justify-between gap-4 space-y-6 lg:flex">
          <div className="flex items-center gap-4">
            <Image
              src={"/image/tel_ic3.png"}
              alt={"tel_ic3"}
              width={90}
              height={90}
              className="h-[2.5rem] w-[2.5rem] sm:h-[4.5rem] sm:w-[4.5rem]"
            />
            <div className="text-sm sm:text-base">
              <div className="text-xl font-medium">버스</div>
              <div>학동역, 강남을지병원 하차</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={"/image/tel_ic4.png"}
              alt={"tel_ic4"}
              width={90}
              height={90}
              className="h-[2.5rem] w-[2.5rem] sm:h-[4.5rem] sm:w-[4.5rem]"
            />
            <div className="text-sm sm:text-base">
              <div className="text-xl font-medium">지하철</div>
              <div>학동역 7번 출구 도보로 5분, 신사역 1번 출구 도보로 14분</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteGuide;
