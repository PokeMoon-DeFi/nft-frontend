import { Page, Content, Header } from "components/layout";
import NFT_LIST from "config/constants/nfts/2114";
import { Carousel } from "nft-uikit";

const Gallery = () => {
  return (
    <>
      <Page>
        <Content>
          <Carousel nfts={NFT_LIST}></Carousel>
        </Content>
      </Page>
    </>
  );
};

export default Gallery;
