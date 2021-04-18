import { Page, Content, Header } from "components/layout";
import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import { Carousel } from "nft-uikit";

const Gallery = () => {
  return (
    <>
      <Page>
        <Content>
          <Carousel nfts={BLAST_OFF_COLLECTION}></Carousel>
        </Content>
      </Page>
    </>
  );
};

export default Gallery;
