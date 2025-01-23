"use client";

import { useState } from "react";
import DetailMenu from "./DetailMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import MobileMenu from "./MobileMenu";
import LocaleChangeButton from "./LocaleChangeButton";

const SolidHeader = () => {
  const [showDetailMenu, setShowDetailMenu] = useState(false);

  const handleMouseEnter = () => setShowDetailMenu(true);
  const handleMouseLeave = () => setShowDetailMenu(false);

  return (
    <div>
      <div className="fixed z-10 flex h-[6.25rem] w-full items-center justify-around bg-white">
        <HeaderLogo />
        <div className="flex space-x-[2rem] ">
        <HeaderNav onMouseEnter={handleMouseEnter} />
        <MobileMenu fill="#000000" />
        <LocaleChangeButton />
        </div>
      </div>

      <div
        className={`fixed left-0 top-[6.25rem] z-[5] w-full transition-transform duration-300 ${
          showDetailMenu ? "translate-y-0" : "hidden -translate-y-full"
        }`}
      >
        <DetailMenu
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};
export default SolidHeader;
