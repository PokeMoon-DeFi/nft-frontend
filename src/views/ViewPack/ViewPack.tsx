import { Page, Content } from "components/layout";
import { Carousel } from "nft-uikit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPackInfo } from "utils/callHelpers";
import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import { PokemoonNft } from "config/constants/nfts/types";

const Gallery = () => {
  let { id } = useParams();
  const [nfts, setNfts] = useState<PokemoonNft[]>();

  console.log(getPackInfo(id));
  useEffect(() => {
    const fetch = async () => {
      const res = await getPackInfo(id);
      console.log(res);
      const raw: PokemoonNft[] = [];
      for (let i = 0; i < 5; i++) {
        const tokenId = res[i];
        if (tokenId.length === 8) {
          raw.push(BLAST_OFF_COLLECTION[tokenId.substr(0, 2)]);
        }
      }
      setNfts(raw);
    };
    fetch();
  }, [id]);

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
