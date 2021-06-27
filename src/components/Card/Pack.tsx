import { FC, useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "components/Button";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import { PackSleeve } from "./PackSleeve";
import { getRarities } from "utils/nftStats";
import { PokemoonPack } from "config/constants/nfts/types";

export interface PackProps {
  pack: PokemoonPack;
  onPackSelected?: (packId: string) => void;
}

const StyledCard = styled(Card)`
  background: rgb(18 18 34 / 85%);
  border: #a637a9;
  border-radius: 5px;
  border-width: 6px;
  border-style: solid;
`;

const StyledCardContent = styled(CardContent)`
  background: #232340;
  border: #f572fa;
  border-radius: 0px 0px 0px 0px;
  /* border-width: 6px; */
  border-style: solid;
  box-shadow: 0 -4px 15px 1px black;
  text-align: center;
  color: white;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const PackCard: FC<PackProps> = ({ onPackSelected, pack }) => {
  const { packId, imageUrl, nfts } = pack;
  const isLoaded = useState(false);

  //TODO: Render this data
  const rarityCount = getRarities(nfts);

  return (
    <Paper
      elevation={0}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 250,
        background: "transparent",
      }}
    >
      {!isLoaded && (
        <Skeleton variant="rect" height={"100%"} style={{ flex: 1 }} />
      )}
      <img alt="asd" width={250} onLoad={() => null} src={imageUrl} />
      <PackSleeve
        style={{ marginTop: 6 }}
        pack={pack}
        onPackSelected={(id) => (!!onPackSelected ? onPackSelected(id) : null)}
      />
    </Paper>
  );
};

export default PackCard;
