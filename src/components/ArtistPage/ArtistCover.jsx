import avatar from "../../assets/images/avatar.png";

function ArtistCover() {
  return (
    <div className="w-full bg-[url(/images/mushroom.png)] h-[330px] bg-cover bg-center bg-no-repeat">
      <div className="bg-linear-to-b from-[rgba(162,89,255, 0)] to-[#A259FF] w-full h-full relative">
        <div className={`mx-[30px] md:mx-[72px] xl:mx-28 `}>
          <div className="mx-auto max-w-[315px] md:max-w-3xl xl:max-w-6xl ">
            <div className="absolute bottom-0 max-md:left-0 max-md:right-0 flex max-md:justify-center">
              <img
                src={avatar}
                alt="Avatar"
                className="rounded-full h-[120px] w-[120px] border-2 border-[#2b2b2b] translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCover;
