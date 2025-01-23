import Image from "next/image";
import Link from "next/link";

interface GridItem {
  href: string;
  imgSrc: string;
  title: string;
  isLarge?: boolean;
}

const HomeBusinessItem = ({ href, imgSrc, title, isLarge }: GridItem) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${
        isLarge
          ? "col-span-2 row-span-2 h-[10rem] md:h-[20rem] lg:h-[29.75rem]"
          : ""
      }`}
    >
      <Link href={href}>
        <div className="relative h-full w-full">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
            className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          />
          <div
            className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-white ${isLarge ? "text-xl md:text-3xl" : "text-xs md:text-xl"}`}
          >
            {title}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default HomeBusinessItem;
