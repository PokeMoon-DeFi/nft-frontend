import { Gallery } from "nft-uikit";
import { useAppSelector } from "providers";

const GalleryView = () => {
  const nfts = useAppSelector((state) => state.user.nfts);
  return <Gallery nfts={nfts.cards} handleSubMenuCommand={() => null} />;
};

export default GalleryView;
