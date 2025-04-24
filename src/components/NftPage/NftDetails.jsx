import Section from "../Section";
import Button from "../buttons/Button";
import avatar from "../../assets/images/avatar.png";

function NftDetails() {
  const tags = ["Animation", "Illustration", "Moon", "Loon"];

  return (
    <>
      <div className="w-full h-[320px] md:h-[420px] xl:h-[560px] bg-[url(/images/mushroom.png)]  bg-cover bg-center bg-no-repeat"></div>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-y-4 gap-x-7 xl:gap-x-20">
          <div className="xl:col-span-2">
            <h2 className="text-[28px] md:text-4xl xl:text-5xl leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold">
              The Orbitians
            </h2>
            <p className="mt-2.5 text-base xl:text-[22px] leading-[140%] xl:leading-[160%] text-[#858584]">
              Minted on Sep 30, 2022
            </p>
          </div>
          <div className="bg-[#3b3b3b] rounded-20 p-7 col-span-1 row-span-2 h-min w-max">
            <p className="text-xs font-[Space_Mono] leading-[110%]">
              Auction ends in:
            </p>
            <p className="mt-2.5 text-4xl font-bold font-[Space_Mono] leading-[120%]">
              08 : 59 : 43
            </p>
            <Button label="Place Bid" classes="mt-7 w-full" />
          </div>
          <div className="xl:col-span-2">
            <h5 className="mt-7 text-base xl:text-[22px] leading-[140%] xl:leading-[160%] font-[Space_Mono] text-[#858584]">
              Created By
            </h5>
            <div className="flex items-center gap-3 mt-2.5">
              <img src={avatar} alt="Avatar" height={24} width={24} />
              <p className="text-base xl:text-[22px] leading-[140%] xl:leading-[160%] font-semibold">
                Animakid
              </p>
            </div>
            <h5 className="mt-7 text-base xl:text-[22px] leading-[140%] xl:leading-[160%] font-[Space_Mono] text-[#858584]">
              Description
            </h5>
            <p className="text-base xl:text-[22px] leading-[140%] xl:leading-[160%] mt-2.5">
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain,
              <br />
              <br />
              There are all sorts of beings in the NFT Universe. The most
              advanced and friendly of the bunch are Orbitians. <br />
              <br />
              They live in a metal space machines, high up in the sky and only
              have one foot on Earth. These Orbitians are a peaceful race, but
              they have been at war with a group of invaders for many
              generations. The invaders are called Upside-Downs, because of
              their inverted bodies that live on the ground, yet do not know any
              other way to be. Upside-Downs believe that they will be able to
              win this war if they could only get an eye into Orbitian
              territory, so they've taken to make human beings their target.
            </p>
            <h5 className="mt-7 text-base xl:text-[22px] leading-[140%] xl:leading-[160%] font-[Space_Mono] text-[#858584]">
              Tags
            </h5>
            <ul className="mt-2.5 flex flex-wrap gap-5">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="text-base leading-[140%] font-semibold bg-[#3b3b3b] rounded-20 py-3 px-7 uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

export default NftDetails;
