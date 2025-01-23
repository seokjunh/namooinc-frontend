import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/image/namoo.png"}
        width={200}
        height={200}
        alt="logo"
        className="h-[2rem] w-[8rem] xl:h-[2.5rem] xl:w-[10rem]"
        priority={true}
      />
      <div className="text-[0.55rem] text-[#78b237] xl:text-[0.688rem]">
        Conneting Value
      </div>
    </Link>
  );
};
export default HeaderLogo;
