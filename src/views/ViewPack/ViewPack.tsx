import { Page, Content } from "components/layout";
import { Carousel } from "nft-uikit";
import { useAppSelector } from "providers";
import { useParams } from "react-router-dom";
import { callPackInfo } from "utils/callHelpers";

const Gallery = () => {
  const nfts = useAppSelector((state) => state.user.nfts);
  let { id } = useParams();

  console.log(callPackInfo(id));

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
