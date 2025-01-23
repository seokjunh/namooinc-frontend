"use client";

import { useEffect, useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import MobileMenu from "./MobileMenu";
import DetailMenu from "./DetailMenu";
import LocaleChangeButton from "./LocaleChangeButton";

const TransHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDetailMenu, setShowDetailMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => setShowDetailMenu(true);
  const handleMouseLeave = () => setShowDetailMenu(false);

  return (
    <div>
      <div
        className={`fixed z-10 flex h-[6.25rem] w-full items-center justify-around ${
          isScrolled || showDetailMenu
            ? "bg-white"
            : "bg-transparent text-white"
        }`}
      >
        <HeaderLogo />
        <div className="flex space-x-[2rem]">
          <HeaderNav onMouseEnter={handleMouseEnter} />
          {!isScrolled ? (
            <MobileMenu fill={"#ffffff"} />
          ) : (
            <MobileMenu fill={"#000000"} />
          )}
          <LocaleChangeButton />
        </div>
      </div>

      <div
        className={`fixed top-[6.25rem] z-10 w-full transition-transform duration-300 ${
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
export default TransHeader;
