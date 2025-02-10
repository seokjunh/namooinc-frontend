import { Link } from "@/i18n/rounting";
import { useTranslations } from "next-intl";

interface DetailMenuProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const sections = [
  {
    key: "CompanyIntro",
    contentKeys: ["intro", "greeting", "history", "vision"],
  },
  {
    key: "Solution",
    contentKeys: ["corecode", "p2e", "q2e", "s2e", "u2e"],
  },
  {
    key: "Support",
    contentKeys: ["notice", "download", "visit"],
  },
  {
    key: "Career",
    contentKeys: ["jobs", "inquiry"],
  },
];

const sectionUrl: Record<string, Record<string, string>> = {
  CompanyIntro: {
    intro: "/company/intro",
    greeting: "/company/greeting",
    history: "/company/history",
    vision: "/company/vision",
  },
  Solution: {
    corecode: "/solution/corecode",
    p2e: "/solution/p2e",
    q2e: "/solution/q2e",
    s2e: "/solution/s2e",
    u2e: "/solution/u2e",
  },
  Support: {
    notice: "/support/notice",
    download: "/support/download",
    visit: "/support/visit",
  },
  Career: {
    jobs: "/careers/jobs",
    inquiry: "/careers/inquiry",
  },
};

const DetailMenu = ({ onMouseEnter, onMouseLeave }: DetailMenuProps) => {
  const t = useTranslations("DetailMenu");
  return (
    <div
      className="fixed top-[6.25rem] z-20 w-full border-b border-t bg-white"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex justify-around py-5 lg:px-[25rem]">
        {sections.map((section) => (
          <div key={section.key}>
            <div className="font-pretendard pb-2 text-lg font-bold">
              {t(`${section.key}.title`)}
            </div>
            <div>
              {section.contentKeys.map((contentKey) => (
                <Link
                  key={contentKey}
                  href={sectionUrl[section.key][contentKey]}
                  className="block py-1 hover:text-[#78b237]"
                >
                  {t(`${section.key}.contents.${contentKey}`)}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DetailMenu;
