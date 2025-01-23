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
      className={`flex items-center justify-center bg-white ${
        isFixed ? "fixed top-[6.25rem] w-full" : ""
      }`}
    >
      {itemList.map((item, index) => (
        <button
          key={index}
          className={`h-[5.5rem] w-[30rem] ${
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
