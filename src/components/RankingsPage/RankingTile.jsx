import avatar from "../../assets/images/avatar.png";

function RankingTile({ rank, name, sales }) {
  return (
    <div className="flex gap-3 xl:gap-5 items-center py-3 px-2.5 md:px-5 bg-[#3b3b3b] rounded-20">
      <div className="flex-1 rounded-full bg-[#2b2b2b] w-6 h-6 md:w-8 md:h-8 p-1 text-center text-[#858584] text-xs md:text-base font-[Space_Mono]">
        {rank}
      </div>
      <img
        src={avatar}
        alt="Avatar"
        className="flex-2 max-h-6 max-w-6 xl:max-h-[60px] xl:max-w-[60px] rounded-full"
      />
      <p className="flex-10 text-base md:text-[22px] leading-[140%] font-semibold">
        {name}
      </p>
      <p className="flex-4 text-base leading-[140%] font-[Space_Mono] text-[#00AC4F] text-center max-md:hidden">
        +1.41%
      </p>
      <p className="flex-4 text-base leading-[140%] font-[Space_Mono] text-center max-xl:hidden">
        602
      </p>
      <p className="flex-5 text-xs md:text-base leading-[110%] md:leading-[140%] font-[Space_Mono] text-center">
        {sales} ETH
      </p>
    </div>
  );
}

export default RankingTile;
