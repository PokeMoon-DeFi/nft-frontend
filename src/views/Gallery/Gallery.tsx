import { Carousel } from "nft-uikit";
import { useAppSelector } from "providers";

const Gallery = () => {
  const nfts = useAppSelector((state) => state.user.nfts);
  return (
    <>
      <Carousel
        nfts={nfts.cards.slice(0, 8)}
        handleSubMenuCommand={() => null}
      />
    </>
  );
};

export default Gallery;
