import Section from "../Section";
import NftCard from "../cards/NftCard";
import avatar from "../../assets/images/avatar.png";
import nft from "../../assets/images/hero_nft.png";
import dog from "../../assets/images/dog.png";
import robot from "../../assets/images/robot.png";
import mushroom from "../../assets/images/mushroom.png";
import astronaut from "../../assets/images/astronaut.png";

function NftGrid() {
  const nfts = [
    {
      image: robot,
    },
    { image: nft },
    {
      image: dog,
    },
    {
      image: mushroom,
    },
    {
      image: astronaut,
    },
    {
      image: robot,
    },
    { image: nft },
    {
      image: dog,
    },
    {
      image: mushroom,
    },
    {
      image: astronaut,
    },
  ];
  return (
    <Section>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
        {nfts.map((nft, index) => (
          <NftCard key={index} avatar={avatar} nftImage={nft.image} />
        ))}
      </div>
    </Section>
  );
}

export default NftGrid;
