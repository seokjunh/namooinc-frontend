"use client";

import { useRef, useState } from "react";
import SolutionTab from "./SolutionTab";
import SolutionDesc from "./SolutionDesc";

const SolutionContent = () => {
  const [activeSection, setActiveSection] = useState(0);
  const scrollRef = useRef<HTMLDivElement[]>([]);
  return (
    <div>
      <SolutionTab scrollRef={scrollRef} activeSection={activeSection} />
      <SolutionDesc scrollRef={scrollRef} setActiveSection={setActiveSection} />
    </div>
  );
};
export default SolutionContent;
