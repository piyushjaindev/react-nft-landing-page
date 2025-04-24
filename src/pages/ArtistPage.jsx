import ArtistCover from "../components/ArtistPage/ArtistCover";
import ArtistDetails from "../components/ArtistPage/ArtistDetails";
import Tabs from "../components/Tabs";
import NftGrid from "../components/MarketplacePage/NftGrid";

function ArtistPage() {
  const tabs = [
    { name: "Created", extra: 302 },
    { name: "Owned", extra: 67 },
    { name: "Collecion", extra: 4 },
  ];
  return (
    <>
      <ArtistCover />
      <ArtistDetails />
      <Tabs tabs={tabs} />
      <NftGrid />
    </>
  );
}

export default ArtistPage;
