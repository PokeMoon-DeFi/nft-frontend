import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import PackCard from "components/Card/Pack";
import Content from "components/layout/Content";

const nftData = {
  tokenId: "22",
  imageUrl: "005squirderC.png",
  card: {
    number: 5,
    name: "Squirder",
    type: "Fire",
    description: "Favorite start Pokemoon of the nicotine addicted trainer.",
    artist: {
      name: "Armilo Barrios",
    },
  },
  rarity: "Legendary",
  uniqueId: "22000001",
};
const pack = {
  packId: "0",
  imageUrl: "/images/packs/Blastoff.png",
  nfts: [nftData, nftData, nftData, nftData, nftData],
  pokeball: "PB-2114",
  name: "Blastoff",
};
const packs = new Array(13).fill(pack);

const PackCollection: FC = () => {
  return (
    <Content>
      <Grid container spacing={2} justify="center">
        {packs.map((pack, index) => (
          <Grid item key={index.toString()} sm={6} md={3}>
            <PackCard pack={pack} onPackSelected={(id) => {}} />
          </Grid>
        ))}
      </Grid>
    </Content>
  );
};

export default PackCollection;
