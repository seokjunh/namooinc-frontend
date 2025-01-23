"use client";

import { useEffect, useState } from "react";

interface TabBarProps {
  scrollRef: React.RefObject<HTMLDivElement[]>;
  activeSection: number;
}

const menuItems = [
  "Concept",
  "Overview",
  "Application Stack",
  "Product Composition",
  "Key Features",
];

const SolutionTab = ({ scrollRef, activeSection }: TabBarProps) => {
  const [isFixed, setIsFixed] = useState(false);

  const handleMenuItemClick = (index: number) => {
    if (scrollRef.current && scrollRef.current[index]) {
      scrollRef.current[index].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`grid grid-cols-2 gap-4 bg-black p-4 text-white sm:px-[4.375rem] md:flex md:h-[3.75rem] md:items-center md:gap-6 lg:px-[22.5rem] ${
        isFixed ? "fixed top-[6.25rem] w-full" : ""
      }`}
    >
      {menuItems.map((item, idx) => (
        <div
          key={idx}
          className={`flex cursor-pointer items-center justify-center rounded-3xl p-2 ${
            activeSection == idx ? "bg-white text-black" : ""
          }`}
          onClick={() => handleMenuItemClick(idx)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
export default SolutionTab;
