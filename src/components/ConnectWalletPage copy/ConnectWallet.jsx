import OutlineButton from "../buttons/OutlineButton";
import SpaceRover from "../../assets/images/space_rover.png";
import metamask from "../../assets/icons/metamask.svg";
import walletConnect from "../../assets/icons/wallet_connect.svg";
import coinbase from "../../assets/icons/coinbase.svg";

function ConnectWallet() {
  return (
    <div className="flex max-md:flex-col items-center max-md:justify-center w-full gap-[30px] md:gap-10 xl:gap-[60px]">
      <div className="w-full md:max-w-2/5 h-60 md:h-[530px] xl:h-[642px] bg-[url(/images/space_rover.png)] bg-cover bg-center bg-no-repeat" />
      <div className="grid grid-cols-1 items-center max-md:mx-auto w-full max-w-80 xl:max-w-md">
        <h2 className="text-4xl xl:text-5xl leading-[120%] xl:leading-[110%] font-semibold">
          Connect Wallet
        </h2>
        <p className="text-base xl:text-[22px] leading-[140%] xl:leading-[160%] mt-5 ">
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>
        <OutlineButton
          label="Metamask"
          icon={metamask}
          classes="mt-7 md:mt-10"
        />
        <OutlineButton
          label="Wallet Connect"
          icon={walletConnect}
          classes="mt-5"
        />
        <OutlineButton label="Coinbase" icon={coinbase} classes="mt-5" />
        <div className="md:hidden h-10" />
      </div>
    </div>
  );
}

export default ConnectWallet;
