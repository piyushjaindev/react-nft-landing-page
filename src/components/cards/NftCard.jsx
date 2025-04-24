import { Link } from "react-router-dom";

function NftCard({ nftImage, avatar, id }) {
  return (
    <Link to={`/nft/${id}`} className="bg-[#3b3b3b] rounded-20 overflow-hidden">
      <img src={nftImage} alt="Hero Nft" className="max-h-[267px] w-full" />
      <div className="py-5 px-7">
        <h5 className="text-[22px] font-semibold text-white font-display leading-[140%]">
          Distant Galaxy
        </h5>
        <div className="flex gap-3 mt-1">
          <img src={avatar} alt="Avatar" height={24} width={24} />
          <p className="text-base text-white font-[Space_Mono]">Animakid</p>
        </div>
        <div className="mt-6 flex justify-between">
          <div>
            <p className="text-[#858584] text-xs leading-[110%] font-[Space_Mono]">
              Price
            </p>
            <p className="mt-2 text-white text-xs md:text-base font-[Space_Mono] leading-[110%] md:leading-[140%]">
              1.63 ETH
            </p>
          </div>
          <div>
            <p className="text-[#858584] text-xs leading-[110%] font-[Space_Mono]">
              Highest Bid
            </p>
            <p className="mt-2 text-white text-xs md:text-base font-[Space_Mono] leading-[110%] md:leading-[140%]">
              0.63 ETH
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NftCard;
