"use client";

import { useEffect } from "react";
import CompanyHistoryItem1 from "./CompanyHistoryItem1";
import CompanyHistoryItem2 from "./CompanyHistoryItem2";

interface ItemsProps {
  scrollRef: React.RefObject<(HTMLDivElement | null)[]>;
  setActiveSection: (idx: number) => void;
}

const CompanyHistoryItems = ({ scrollRef, setActiveSection }: ItemsProps) => {
  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      scrollRef.current[index] = el;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = scrollRef.current.findIndex(
              (el) => el === entry.target,
            );
            if (idx !== -1) {
              setActiveSection(idx);
            }
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    scrollRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [scrollRef, setActiveSection]);

  return (
    <div className="mx-auto mt-14 max-w-xs space-y-7 sm:max-w-xl sm:space-y-14">
      <div ref={setRef(0)} className="scroll-mt-60">
        <CompanyHistoryItem1 />
      </div>
      <div ref={setRef(1)} className="scroll-mt-72">
        <CompanyHistoryItem2 />
      </div>
    </div>
  );
};
export default CompanyHistoryItems;
