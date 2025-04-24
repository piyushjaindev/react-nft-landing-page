import Section from "../Section";
import eye from "../../assets/icons/eye.svg";
import nft from "../../assets/images/hero_nft.png";
import dog from "../../assets/images/dog.png";
import robot from "../../assets/images/robot.png";
import avatar from "../../assets/images/avatar.png";
import NftCard from "../cards/NftCard";

function Discover() {
  const nfts = [
    {
      image: robot,
    },
    { image: nft },
    {
      image: dog,
    },
  ];
  return (
    <Section>
      <div className="flex">
        <div className="flex-1">
          <h3 className="text-white text-4xl max-xl:text-[28px] leading-[120%] max-xl:leading-[140%] font-semibold">
            Discover More NFTs
          </h3>
          <p className="text-white text-[22px] max-xl:text-base leading-[160%] max-md:leading-[140%]">
            Explore new trending NFTs
          </p>
        </div>
        <button
          className={`bg-transparent py-5 px-12 rounded-20 flex gap-3 text-white text-base font-semibold border-[#a259ff] border-2 items-center max-md:hidden`}
        >
          <img
            src={eye}
            alt="eye"
            height={20}
            width={20}
            className="fill-[#a259ff]"
          />
          <p className="text-white text-base font-semibold leading-[140%]">
            See All
          </p>
        </button>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
        {nfts.map((nft, index) => (
          <NftCard
            key={index}
            avatar={avatar}
            nftImage={nft.image}
            id={index}
          />
        ))}
      </div>
    </Section>
  );
}

export default Discover;
