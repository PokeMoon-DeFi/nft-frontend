import { FC } from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import {
  TypeChip,
  RarityChip,
  Button,
  InspectorDialog,
  useModal,
} from "nft-uikit";
import SearchIcon from "@material-ui/icons/Search";
import { PokemoonNft } from "config/constants/nfts/types";

interface SleeveProps {
  nft: PokemoonNft;
}

const StyledBox = styled(Box)`
  flex: 1;
  width: 100%;
  height: 47%;
  background: linear-gradient(
    0deg,
    rgba(34, 15, 46, 1) 0%,
    rgba(100, 60, 163, 1) 100%
  );
  border-color: #da52de;
  border-style: outset;
  border-width: 8px;
  box-shadow: 0px -3px 8px 0 #303030;
  position: absolute;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  /* padding: 10px; */
`;

export const Sleeve: FC<SleeveProps> = ({ nft }) => {
  const { tokenId, rarity } = nft;
  const { name, type } = nft ?? { name: "", type: "fire" };
  const [showModal] = useModal(<InspectorDialog nft={nft} />);

  return (
    <>
      <StyledBox>
        <Typography
          style={{
            fontFamily: `'Press Start 2P', cursive`,
            fontSize: "16px",
            color: "white",
          }}
        >
          #{tokenId ?? 340002341}
        </Typography>

        <Typography
          style={{
            fontFamily: `'Press Start 2P', cursive`,
            fontSize: "16px",
            color: "rgb(246 210 255)",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%",
          }}
          component={"span"}
          align="center"
        >
          {name}
        </Typography>
        <div
          style={{
            flex: 1,
            alignItems: "center",
            display: "flex",
            justifyContent: "space-around",
            width: "90%",
          }}
        >
          <TypeChip type={type ?? "fire"} label={type} size="small" />
          <RarityChip rarity={rarity ?? "common"} label={rarity} size="small" />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
          }}
        >
          {nft.price && (
            <Typography
              style={{ color: "gold", alignSelf: "center", fontSize: "1.2rem" }}
            >
              {`${nft.price}`} KBN
            </Typography>
          )}
          <Button
            style={{ fontSize: 12, textTransform: "none", height: 40 }}
            onClick={() => {
              window.location.href = `/token/${nft.set}/${nft.tokenId}`;
            }}
            endIcon={<SearchIcon />}
          >
            Inspect
          </Button>
        </div>
      </StyledBox>
    </>
  );
};
