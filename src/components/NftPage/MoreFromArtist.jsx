import { Link } from "react-router-dom";
import Section from "../Section";
import NftGrid from "../MarketplacePage/NftGrid";
import OutlineButton from "../buttons/OutlineButton";

function MoreFromArtist() {
  return (
    <>
      <Section>
        <div className="flex justify-between items-center">
          <h3 className="text-white text-4xl max-xl:text-[28px] leading-[120%] max-xl:leading-[140%] font-semibold case">
            More From This Artist
          </h3>
          <Link to="/artist/1">
            <OutlineButton label="Go To Artist Page" classes="max-md:hidden" />
          </Link>
        </div>
      </Section>
      <NftGrid />
      <Section>
        <Link to="/artist/1">
          <OutlineButton label="Go To Artist Page" classes="md:hidden w-full" />
        </Link>
      </Section>
    </>
  );
}

export default MoreFromArtist;
