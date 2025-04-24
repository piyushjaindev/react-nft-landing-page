import Button from "./buttons/Button";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import discord from "../assets/icons/discord.svg";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

function Footer() {
  return (
    <footer className="bg-[#3b3b3b] px-[30px] md:px-[72px] xl:px-28 py-10">
      <div className="mx-auto max-w-sm md:max-w-3xl xl:max-w-6xl">
        <div className="flex max-xl:flex-col gap-7 xl:gap-32 px-5 justify-between">
          <div className="w-full xl:w-lg">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <p className="text-[#CCCCCC] text-base leading-[140%] mt-5 xl:mt-7">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className="text-[#CCCCCC] text-base leading-[140%] mt-5">
              Join our community
            </p>
            <div className="mt-3.5 flex gap-2.5">
              <img src={discord} alt="discord" />
              <img src={youtube} alt="youtube" />
              <img src={twitter} alt="x" />
              <img src={instagram} alt="instagram" />
            </div>
          </div>
          <div className="w-full xl:w-80">
            <h5 className="text-white text-[22px] font-bold font-[Space_Mono] leading-[160%]">
              Explore
            </h5>
            <ul className="mt-7">
              <li className="text-base text-[#CCCCCC] leading-[140%]">
                Marketplace
              </li>
              <li className="text-base text-[#CCCCCC] leading-[140%] mt-5">
                Rankings
              </li>
              <li className="text-base text-[#CCCCCC] leading-[140%] mt-5">
                <Link to="/connect-wallet">Connect a wallet</Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className="text-[22px] text-white leading-[160%] font-semibold font-[Space_Mono]">
              Join our weekly digest
            </h3>
            <p className="mt-5 xl:mt-6 text-white text-base leading-[140%]">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="flex bg-white rounded-20 mt-5 max-w-[420px] text-black">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 my-2 mx-4 max-md:h-[46px] outline-none "
              />
              <Button label="Subscribe" classes="max-md:hidden" />
            </div>
            <Button
              label="Subscribe"
              classes="md:hidden mt-4 w-full max-w-[420px]"
            />
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#858584] my-5" />
        <p className="text-[#CCCCCC] text-xs leading-[110%]">Ⓒ NFT Market.</p>
      </div>
    </footer>
  );
}

export default Footer;
