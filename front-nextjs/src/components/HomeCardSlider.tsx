"use client";

import { useTranslations } from "next-intl";
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

  return (
    <Swiper
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
        disableOnInteraction: false,
      }}
      speed={1300}
      effect="fade"
      className="h-[50vh] md:h-screen [&_.custom-bullet]:h-3 [&_.custom-bullet]:w-3 [&_.custom-bullet]:rounded-full [&_.custom-bullet]:bg-white"
    >
      {sliderImages.map((image, index) => (
        <SwiperSlide key={index} className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute left-[15%] top-[50%] flex -translate-y-1/2 transform flex-col text-white">
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
