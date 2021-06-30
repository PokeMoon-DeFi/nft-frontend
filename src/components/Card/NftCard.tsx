import { FC, useState } from "react";
import styled from "styled-components";
import CardContent from "@material-ui/core/CardContent";
import useModal from "hooks/useModal";
import { InspectorDialog } from "components/Modal";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import { Sleeve } from "./CardSleeve";
import { PokemoonNft } from "config/constants/nfts/types";

interface CardWrapper {
  imageUrl?: string;
  active?: boolean;
  nft: PokemoonNft;
}

interface CardContentProps {
  type?: string;
}

const StyledCardContent = styled(CardContent)<CardContentProps>`
  background: #232340;
  border: #a637a9;
  border-radius: 0px 0px 0px 0px;
  border-width: 6px;
  border-style: solid;
  box-shadow: 0 -4px 15px 1px black;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  display: flex;
  color: white;
  ${({ type }) => {
    switch (type) {
      default:
        return "";
    }
  }}
`;

export const NftCard: FC<CardWrapper> = ({ nft }) => {
  const { imageUrl } = nft;
  const [isLoaded, setLoaded] = useState(false);
  const [showModal, hideModal] = useModal(<InspectorDialog nft={nft} />);
  return (
    <Paper
      elevation={6}
      style={{
        display: "flex",
        position: "relative",
        maxWidth: 250,
        height: 347,
        width: 250,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        background: "transparent",
        borderRadius: 18,
      }}
    >
      {!isLoaded && (
        <Skeleton variant="rect" height={"100%"} style={{ flex: 1 }} />
      )}
      <img
        alt="asd"
        onLoad={() => setLoaded(true)}
        src={imageUrl}
        style={{ width: "100%" }}
      />
      {!!isLoaded && <Sleeve nft={nft} />}
    </Paper>
  );
};
