import React from "react";
import Section from "../Section";
import Button from "../buttons/Button";
import OutlineButton from "../buttons/OutlineButton";
import copy from "../../assets/icons/copy.svg";
import plus from "../../assets/icons/plus.svg";
import discord from "../../assets/icons/discord.svg";
import youtube from "../../assets/icons/youtube.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";

function ArtistDetails() {
  const statistics = [
    { data: "240k+", label: "Volume" },
    { data: "50k+", label: "NFTs Sold" },
    { data: "2400+", label: "Followers" },
  ];

  return (
    <Section classNames="mt-25">
      <div className="flex gap-7 max-xl:flex-col justify-between xl:items-center">
        <h2 className="flex-1 text-[28px] md:text-4xl xl:text-5xl font-semibold leading-[140%] md:leading-[120%] xl:leading-[110%]">
          AnimaKid
        </h2>
        <div className="flex gap-5 max-md:flex-col md:items-center">
          <Button label="0xc0E3...B79C" icon={copy} />
          <OutlineButton label="Follow" icon={plus} />
        </div>
      </div>
      <div className="flex max-md:justify-between md:gap-15 mt-7">
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
      <h5 className="mt-7 text-base xl:text-[22px] leading-[140%] xl:leading-[160%] font-[Space_Mono] text-[#858584]">
        Bio
      </h5>
      <p className="mt-2.5 text-base xl:text-[22px] leading-[140%] xl:leading-[160%] ">
        The internet's friendliest designer kid.
      </p>
      <h5 className="mt-7 text-base xl:text-[22px] leading-[140%] xl:leading-[160%] font-[Space_Mono] text-[#858584]">
        Links
      </h5>
      <div className="mt-2.5 flex gap-2.5">
        <img src={discord} alt="discord" />
        <img src={youtube} alt="youtube" />
        <img src={twitter} alt="x" />
        <img src={instagram} alt="instagram" />
      </div>
    </Section>
  );
}

export default ArtistDetails;
