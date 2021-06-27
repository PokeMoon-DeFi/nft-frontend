import { FC } from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import Button from "components/Button";
import { TypeChip, RarityChip } from "components/Chip";
import SearchIcon from "@material-ui/icons/Search";
import { InspectorDialog } from "components/Modal";
import { PokemoonNft } from "config/constants/nfts/types";
import useModal from "hooks/useModal";

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
  padding: 10px;
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
        <Button
          style={{ fontSize: 12, textTransform: "none" }}
          onClick={showModal}
          endIcon={<SearchIcon />}
        >
          Inspect
        </Button>
      </StyledBox>
    </>
  );
};
