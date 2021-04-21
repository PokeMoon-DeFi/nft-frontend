import { Carousel } from "nft-uikit";
import { useAppSelector } from "providers";

const Gallery = () => {
  const nfts = useAppSelector((state) => state.user.nfts);
  console.log(nfts);
  return (
    <>
      <div style={{ pointerEvents: "auto" }}>
        {nfts.cards.length > 0 ? (
          <Carousel nfts={nfts.cards} handleSubMenuCommand={() => null} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Gallery;
