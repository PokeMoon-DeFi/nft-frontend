import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import { PokemoonNft } from "config/constants/nfts/types";
import { FC } from "react";
import { Gallery, Content } from "nft-uikit";
import { useParams } from "react-router-dom";

const PublicGallery: FC = () => {
  const { set } = useParams();
  const nfts: PokemoonNft[] = Object.entries(BLAST_OFF_COLLECTION)
    .map(([key, value]) => {
      const { card } = value;
      return { ...value, ...card };
    })
    ?.sort((a, b) => parseInt(b.tokenId) - parseInt(a.tokenId));

  nfts?.forEach((nft) => {
    nft.glbUrl = `/models/${set}/` + nft.imageUrl.replace(".png", ".glb");
    nft.imageUrl = `/images/cards/${set}/${nft.imageUrl}`;
  });

  return (
    <Content
      maxWidth="lg"
      style={{
        justifyContent: "flex-start",
        height: "100%",
        paddingBottom: 40,
        paddingTop: 20,
      }}
    >
      <Gallery pageSize={8} nfts={nfts} />
    </Content>
  );
};

export default PublicGallery;
