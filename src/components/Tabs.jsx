import { useState } from "react";
import Section from "./Section";

function Tabs({ tabs }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleTabClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <Section>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`flex-1 w-full text-center pb-3 border-b-2 ${
              index === currentIndex
                ? " border-[#858584] text-white"
                : "border-transparent text-[#858584]"
            }`}
          >
            <h4 className="text-base xl:text-[22px] font-semibold leading-[140%]">
              {tab.name}
              {tab.extra && (
                <span className="bg-[#858584] text-base text-white font-[Space_Mono] rounded-20 px-2.5 py-1 max-md:hidden ml-4">
                  {tab.extra}
                </span>
              )}
            </h4>
          </button>
        ))}
      </div>
    </Section>
  );
}

export default Tabs;
