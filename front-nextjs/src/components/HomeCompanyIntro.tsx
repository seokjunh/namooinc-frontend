import { useTranslations } from "next-intl";

const HomeCompanyIntro = () => {
  const t = useTranslations("CompanyIntro");
  return (
    <div className="mx-auto max-w-xs md:max-w-2xl lg:max-w-5xl">
      <div className="space-y-14">
        <div className="text-3xl font-black md:text-5xl lg:text-6xl">
          About
          <br />
          NAMOO I&C
        </div>
        <div className="space-y-10 text-xl md:text-2xl lg:text-4xl">
          <div className="leading-normal">
            <div>{t("line1")}</div>
            <div className="flex flex-wrap">
              <div className="text-[#78b237]">{t("line2")}</div>
              <div>{t("line3")}</div>
            </div>
          </div>

          <div className="leading-normal">{t("line4")}</div>
          <div className="leading-normal">{t("line5")}</div>
        </div>
      </div>
    </div>
  );
};
export default HomeCompanyIntro;
