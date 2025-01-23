import HomeBusinessItem from "./HomeBusinessItem";

const gridItems = [
  {
    href: "/solution/corecode",
    imgSrc: "/image/img1.png",
    title: "CoreCode1",
    isLarge: true,
  },
  { href: "/solution/p2e", imgSrc: "/image/img1.png", title: "CoreCode2" },
  { href: "/solution/q2e", imgSrc: "/image/img1.png", title: "CoreCode3" },
  { href: "/solution/s2e", imgSrc: "/image/img1.png", title: "CoreCode4" },
  { href: "/solution/u2e", imgSrc: "/image/img1.png", title: "CoreCode5" },
];

const HomeBusinessIntro = () => {
  return (
    <div className="mx-auto max-w-xs md:max-w-xl lg:max-w-5xl">
      <div className="mb-[3.125rem] text-3xl font-black lg:text-6xl">
        Business
      </div>
      <div className="grid grid-cols-4 gap-1 sm:gap-2">
        {gridItems.map((item, index) => (
          <HomeBusinessItem key={`${item.title}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HomeBusinessIntro;
