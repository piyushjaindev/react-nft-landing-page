import Section from "../Section";
import Tabs from "../Tabs";
import RankingTile from "./RankingTile";

function Rankings() {
  const tabs = [
    { name: "Today" },
    { name: "This Week" },
    { name: "This Month" },
    { name: "All Time" },
  ];
  return (
    <>
      <Section>
        <h2 className="text-[28px] md:text-4xl xl:text-5xl leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold">
          Top Creators
        </h2>
        <p className="text-base xl:text-[22px] leading-[140%] xl:leading-[160%] mt-2.5 ">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
      </Section>
      <Tabs tabs={tabs} />
      <Section>
        <div className="flex gap-3 xl:gap-5 items-center py-3 px-2.5 md:px-5 border-[#3b3b3b] border-2 rounded-20 text-base leading-[140%] font-[Space_Mono] text-[#858584] text-center">
          <div className="flex-1 ">#</div>
          <p className="flex-12 pl-4 text-left">Artist</p>
          <p className="flex-4 max-md:hidden">Change</p>
          <p className="flex-4 max-xl:hidden">NFTs Sold</p>
          <p className="flex-5">Volume</p>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <RankingTile
              key={i}
              rank={i + 1}
              name={`Creator ${i + 1}`}
              sales={(Math.random() * 100).toFixed(2)}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

export default Rankings;
