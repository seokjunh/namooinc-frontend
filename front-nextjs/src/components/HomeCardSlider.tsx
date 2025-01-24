"use client";

import { useTranslations } from "next-intl";
import { useState, useCallback } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sliderImages = [
  {
    src: "/image/slider-img.png",
    alt: "CoreCode Image 1",
    title: "Connecting Value, CoreCode",
  },
  {
    src: "/image/slider-img.png",
    alt: "CoreCode Image 2",
    title: "Connecting Value, CoreCode",
  },
];

const HomeCardSlider = () => {
  const t = useTranslations("CardSlider");
  const [key, setkey] = useState(0);

  const ReSizeHandler = useCallback(() => {
    setkey((prev) => prev + 1);
  }, []);
  return (
    <Swiper
      key={key}
      slidesPerView={1}
      loop={true}
      pagination={{
        type: "bullets",
        clickable: true,
        bulletClass: "swiper-pagination-bullet custom-bullet",
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false, // 사용자 상호작용 후 자동재생 유지
      }}
      speed={1300}
      className="h-[50vh] md:h-screen [&_.custom-bullet]:h-3 [&_.custom-bullet]:w-3 [&_.custom-bullet]:rounded-full [&_.custom-bullet]:bg-white"
      onResize={ReSizeHandler} // 크기 변경 이벤트 핸들러 추가
      resizeObserver={true} // 반응형 옵저버 활성화
    >
      {sliderImages.map((image, index) => (
        <SwiperSlide key={index} className="relative">
          {/* 배경 이미지 */}
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />

          {/* 텍스트 영역 */}
          <div className="absolute left-[15%] top-[40%] flex -translate-y-1/2 transform flex-col text-white">
            <div className="mb-4 text-4xl font-extrabold md:text-6xl lg:text-7xl">
              {image.title}
            </div>
            <div className="text-sm md:text-base lg:text-xl">
              {t("Description")}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HomeCardSlider;
