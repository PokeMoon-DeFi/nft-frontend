import { Page, Content, Header } from "components/layout";
import { Carousel, Blastoff } from "nft-uikit";

const Gallery = () => {
  return (
    <>
      <Page>
        <Content>
          <Carousel nfts={Blastoff.default}></Carousel>
        </Content>
      </Page>
    </>
  );
};

export default Gallery;
