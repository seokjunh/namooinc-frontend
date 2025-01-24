import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="bg-gray-50 py-16 lg:pb-10 lg:pt-[6.25rem]">
      <div className="mx-auto max-w-sm space-y-6 md:max-w-xl lg:max-w-6xl">
        <div className="text-2xl font-black md:text-3xl lg:text-4xl">
          {t("companyName")}
        </div>
        <div>
          <div className="text-sm md:text-base lg:text-lg">{t("address")}</div>
          <div className="text-sm md:text-base lg:text-lg">{t("content")}</div>
        </div>
        <div className="text-sm md:text-base lg:text-lg">
          © {new Date().getFullYear()} NAMOO I&C. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
export default Footer;
