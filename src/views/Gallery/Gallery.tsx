import { Page, Content } from "components/layout";
import { Carousel } from "nft-uikit";
import { useAppSelector } from "providers";

const Gallery = () => {
  const nfts = useAppSelector((state) => state.user.nfts);
  console.log(nfts);
  return (
    <>
      <Page>
        <Content style={{ pointerEvents: "auto" }}>
          {nfts.cards.length > 0 ? (
            <Carousel nfts={nfts.cards} handleSubMenuCommand={() => null} />
          ) : (
            <></>
          )}
        </Content>
      </Page>
    </>
  );
};

export default Gallery;
