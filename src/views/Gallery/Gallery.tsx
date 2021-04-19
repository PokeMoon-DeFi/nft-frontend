import { useWeb3React } from "@web3-react/core";
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
          <Carousel nfts={nfts}></Carousel>
        </Content>
      </Page>
    </>
  );
};

export default Gallery;
