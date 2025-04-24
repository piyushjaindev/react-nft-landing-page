import Button from "../buttons/Button";
import Section from "../Section";
import rocket from "../../assets/icons/rocket.svg";
import nft from "../../assets/images/hero_nft.png";
import avatar from "../../assets/images/avatar.png";

function Hero() {
  const statistics = [
    { data: "240k+", label: "Total Sale" },
    { data: "100k+", label: "Auctions" },
    { data: "240k+", label: "Artists" },
  ];

  return (
    <Section>
      <div className="flex max-md:flex-col gap-7 items-start justify-between">
        <div className="max-w-[510px] max-md:w-full max-xl:max-w-[330px]">
          <h1 className="text-[67px] max-md:text-[28px] max-xl:text-[38px] font-semibold text-white font-display leading-[110%] max-md:leading-[140%] max-xl:leading-[120%]">
            Discover digital art & Collect NFTs
          </h1>
          <p className="text-[22px] max-xl:text-base text-white leading-[160%] max-xl:leading-[140%] mt-5">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <Button
            icon={rocket}
            label="Get Started"
            classes="max-md:my-10 max-xl:my-5 my-7 md:px-12 max-md:w-full max-md:hidden"
          />
          <div className="flex justify-between max-md:hidden">
            {statistics.map(({ data, label }) => (
              <div key={label}>
                <h4 className="text-3xl max-xl:text-[22px] text-white leading-[140%] max-xl:leading-[160%] font-bold font-[Space_Mono]">
                  {data}
                </h4>
                <p className="text-2xl max-xl:text-base leading-[160%] max-xl:leading-[140%] text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#3b3b3b] rounded-20 overflow-hidden">
          <img
            src={nft}
            alt="Hero Nft"
            className="max-w-[510px] max-md:w-full max-xl:max-w-[330px]"
          />
          <div className="p-5">
            <h5 className="text-[22px] font-semibold text-white font-display">
              Space Walking
            </h5>
            <div className="flex gap-3 mt-2.5">
              <img src={avatar} alt="Avatar" height={24} width={24} />
              <p className="text-base text-white font-display">Animakid</p>
            </div>
          </div>
        </div>
        <div className="md:hidden w-full">
          <Button
            icon={rocket}
            label="Get Started"
            classes="max-md:my-10 max-xl:my-5 my-7 md:px-12 max-md:w-full"
          />
          <div className="flex justify-between">
            {statistics.map(({ data: top, label: bottom }) => (
              <div key={bottom}>
                <h4 className="text-3xl max-xl:text-[22px] text-white leading-[140%] max-xl:leading-[160%] font-bold font-[Space_Mono]">
                  {top}
                </h4>
                <p className="text-2xl max-xl:text-base leading-[160%] max-xl:leading-[140%] text-white">
                  {bottom}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
