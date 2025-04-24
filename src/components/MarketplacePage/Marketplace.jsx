import Section from "../Section";
import Tabs from "../Tabs";
import NftGrid from "./NftGrid";

function Marketplace() {
  const tabs = [
    { name: "NFTs", extra: 302 },
    { name: "Collections", extra: 67 },
  ];

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
      <Tabs tabs={tabs} />
      <NftGrid />
    </>
  );
}

export default Marketplace;
