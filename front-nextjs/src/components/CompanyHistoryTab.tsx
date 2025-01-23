"use client";

import { useEffect, useState } from "react";

interface TabProps {
  scrollRef: React.RefObject<(HTMLDivElement | null)[]>;
  activeSection: number;
}

const itemList = ["현재~2015", "2015~2005"];

const CompanyHistoryTab = ({ scrollRef, activeSection }: TabProps) => {
  const [isFixed, setIsFixed] = useState(false);
  const handleClick = (index: number) => {
    const element = scrollRef.current[index];
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`z-10 flex items-center justify-center bg-white ${
        isFixed ? "fixed top-[6.25rem] w-full" : ""
      }`}
    >
      {itemList.map((item, index) => (
        <button
          key={index}
          className={`h-[4rem] w-[10rem] md:h-[4.5rem] md:w-[20rem] lg:h-[5.5rem] lg:w-[30rem] ${
            activeSection === index ? "border-b-4 border-[#78b237]" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <div className="text-2xl font-bold">{item}</div>
        </button>
      ))}
    </div>
  );
};
export default CompanyHistoryTab;
