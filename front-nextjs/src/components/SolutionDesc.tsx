"use client";

import { useCallback, useEffect } from "react";
import SolutionConcept from "./SolutionConcept";
import SolutionOverview from "./SolutionOverview";
import SolutionStack from "./SolutionStack";
import SolutionComposition from "./SolutionComposition";
import SolutionFeature from "./SolutionFeature";

interface DescProps {
  scrollRef: React.RefObject<HTMLDivElement[]>;
  setActiveSection: (index: number) => void;
}

const SolutionDesc = ({ scrollRef, setActiveSection }: DescProps) => {
  const setRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      if (el) {
        scrollRef.current[index] = el;
      }
    },
    [scrollRef],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = scrollRef.current.findIndex(
              (el) => el === entry.target,
            );
            setActiveSection(idx);
          }
        });
      },
      {
        threshold: 0.1,
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
  }, [setActiveSection, scrollRef]);

  return (
    <div className="mx-auto max-w-xs md:max-w-xl lg:max-w-3xl py-16 space-y-16">
      <div ref={setRef(0)} className="scroll-mt-44">
        <SolutionConcept />
      </div>
      <div ref={setRef(1)} className="scroll-mt-44">
        <SolutionOverview />
      </div>
      <div ref={setRef(2)} className="scroll-mt-44">
        <SolutionStack />
      </div>
      <div ref={setRef(3)} className="scroll-mt-44">
        <SolutionComposition />
      </div>
      <div ref={setRef(4)} className="scroll-mt-44">
        <SolutionFeature />
      </div>
    </div>
  );
};
export default SolutionDesc;
