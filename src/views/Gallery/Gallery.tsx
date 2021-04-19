import { Page, Content } from "components/layout";
import { Carousel } from "nft-uikit";
import { useAppSelector } from "providers";

const Gallery = () => {
  const nfts = useAppSelector((state) => state.user.nfts);
  return (
    <>
      <Page>
        <Content style={{ pointerEvents: "auto" }}>
          <Carousel nfts={nfts}></Carousel>
        </Content>
      </Page>
    </>
  );
};

export default Gallery;
