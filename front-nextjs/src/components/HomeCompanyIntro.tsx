import { useTranslations } from "next-intl";

const HomeCompanyIntro = () => {
  const t = useTranslations("CompanyIntro");
  return (
    <div className="mx-auto max-w-sm md:max-w-xl lg:max-w-5xl">
      <div className="mb-8 text-3xl font-black md:mb-16 md:text-5xl lg:text-6xl">
        About
        <br />
        NAMOO I&C
      </div>
      <div className="mb-8 flex flex-col gap-y-2 text-xl md:mb-14 md:gap-y-3 md:text-2xl lg:text-4xl">
        <div>{t("line1")}</div>
        <div className="break-keep">{t("line2")}</div>
        <div className="flex flex-wrap">
          <div className="text-[#78b237]">{t("line3")}</div>
          <div>{t("line3Suffix")}</div>
        </div>
      </div>
      <div className="mb-8 flex flex-col gap-y-2 text-xl md:mb-14 md:gap-y-3 md:text-2xl lg:text-4xl">
        <div className="break-keep">{t("line4")}</div>
        <div className="break-keep">{t("line5")}</div>
        <div>{t("line6")}</div>
      </div>
      <div className="flex flex-col gap-y-2 text-xl md:gap-y-3 md:text-2xl lg:text-4xl">
        <div>{t("line7")}</div>
        <div className="break-keep">{t("line8")}</div>
        <div>{t("line9")}</div>
        <div>{t("line10")}</div>
      </div>
    </div>
  );
};
export default HomeCompanyIntro;
