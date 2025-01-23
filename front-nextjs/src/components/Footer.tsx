import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="bg-gray-50 py-16 lg:pb-10 lg:pt-[6.25rem]">
      <div className="mx-auto max-w-sm space-y-6 md:max-w-xl lg:max-w-7xl">
        <div className="text-4xl font-black">NAMOO I&C</div>
        <div>
          <div className="text-lg">{t("address")}</div>
          <div className="text-lg">{t("content")}</div>
        </div>
        <div className="text-lg">
          © {new Date().getFullYear()} NAMOOI&C. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
export default Footer;
