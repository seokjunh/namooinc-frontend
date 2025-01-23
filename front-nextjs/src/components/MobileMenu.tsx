"use client";

import { useState } from "react";
import Menu from "../../public/svg/Menu";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/rounting";

const sections = [
  {
    key: "CompanyIntro",
    contentKeys: ["intro", "ceo", "history", "vision"],
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
    ceo: "/company/ceo",
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

const MobileMenu = ({ fill }: { fill: string }) => {
  const t = useTranslations("DetailMenu");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSubMenu = (sectionKey: string) => {
    setIsSubMenuOpen((prev) => (prev === sectionKey ? null : sectionKey));
  };
  return (
    <div>
      <button className="md:hidden" onClick={toggleMenu}>
        <Menu fill={fill} />
      </button>

      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full space-y-2 bg-white py-3 text-black shadow-xl md:hidden">
          {sections.map((section) => (
            <div
              key={section.key}
              className="flex flex-col items-center justify-center"
            >
              <button
                className="font-pretendard w-full pb-2 text-lg font-bold"
                onClick={() => toggleSubMenu(section.key)}
              >
                {t(`${section.key}.title`)}
              </button>
              {isSubMenuOpen === section.key && (
                <div className="flex w-full flex-col items-center justify-center">
                  {section.contentKeys.map((contentKey) => (
                    <Link
                      key={contentKey}
                      href={sectionUrl[section.key][contentKey]}
                      className="block w-full py-1 text-center hover:bg-gray-50 hover:text-[#78b237]"
                    >
                      {t(`${section.key}.contents.${contentKey}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MobileMenu;
