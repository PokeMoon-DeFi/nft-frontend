import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import { PokemoonNft } from "config/constants/nfts/types";
import { FC } from "react";
import { Gallery, Content } from "nft-uikit";

const PublicGallery: FC = () => {
  const nfts: PokemoonNft[] = Object.entries(BLAST_OFF_COLLECTION)
    .map(([key, value]) => {
      const { card } = value;
      return { ...value, ...card };
    })
    ?.sort((a, b) => parseInt(b.tokenId) - parseInt(a.tokenId));

  nfts?.forEach((nft) => {
    nft.glbUrl = "/models/" + nft.imageUrl.replace(".png", ".glb");
  });

  return (
    <Content maxWidth="lg" style={{ justifyContent: "flex-start" }}>
      <Gallery nfts={nfts} />
    </Content>
  );
};

export default PublicGallery;
