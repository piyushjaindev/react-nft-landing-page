import { useState } from "react";
import Section from "../Section";
import NftGrid from "./NftGrid";

function Marketplace() {
  const tabs = [
    { name: "NFTs", count: 302 },
    { name: "Collections", count: 67 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleTabClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Section>
        <h2 className="text-[28px] md:text-4xl xl:text-5xl leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold">
          Browse Marketplace
        </h2>
        <p className="text-base xl:text-[22px] leading-[140%] xl:leading-[160%] mt-2.5 ">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
        <input
          placeholder="Search your favourite NFTs"
          className="bg-transparent border-2 rounded-20 border-[#3b3b3b] h-[60px] w-full px-4 mt-7"
        />
      </Section>
      <Section classNames="my-0">
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
                <span className="bg-[#858584] text-base text-white font-[Space_Mono] rounded-20 px-2.5 py-1 max-md:hidden ml-4">
                  {tab.count}
                </span>
              </h4>
            </button>
          ))}
        </div>
      </Section>
      <NftGrid />
    </>
  );
}

export default Marketplace;
