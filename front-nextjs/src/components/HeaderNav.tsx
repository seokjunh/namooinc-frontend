import { useTranslations } from "next-intl";

const HeaderNav = ({ onMouseEnter }: { onMouseEnter: () => void }) => {
  const t = useTranslations("Navigation");
  return (
    <div
      className="font-pretendard hidden space-x-[4rem] text-xl font-semibold md:flex"
      onMouseEnter={onMouseEnter}
    >
      <div className="cursor-default hover:text-[#78b237] hover:underline hover:decoration-4 hover:underline-offset-[2.5rem]">
        {t("CompanyIntro")}
      </div>
      <div className="cursor-default hover:text-[#78b237] hover:underline hover:decoration-4 hover:underline-offset-[2.5rem]">
        {t("Solution")}
      </div>
      <div className="cursor-default hover:text-[#78b237] hover:underline hover:decoration-4 hover:underline-offset-[2.5rem]">
        {t("Support")}
      </div>
      <div className="cursor-default hover:text-[#78b237] hover:underline hover:decoration-4 hover:underline-offset-[2.5rem]">
        {t("Career")}
      </div>
    </div>
  );
};
export default HeaderNav;
