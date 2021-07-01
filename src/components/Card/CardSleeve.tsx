import React, { FC, SyntheticEvent, useState } from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { IconButton, Typography } from "@material-ui/core";
import Button from "components/Button";
import { TypeChip, RarityChip } from "components/Chip";
import SearchIcon from "@material-ui/icons/Search";
import { InspectorDialog } from "components/Modal";
import { PokemoonNft } from "config/constants/nfts/types";
import useModal from "hooks/useModal";
import { numberWithCommas } from "utils";
import HelpIcon from "@material-ui/icons/Help";
import Popover from "@material-ui/core/Popover";

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

const PriceTag = styled(Typography)`
  color: gold;
  font-size: 16pt;
  font-weight: bold;
  text-shadow: 4px 4px 4px black;
`;

export const Sleeve: FC<SleeveProps> = ({ nft }) => {
  const { tokenId, rarity, price } = nft;
  const { name, type } = nft ?? { name: "", type: "fire" };
  const [showModal] = useModal(<InspectorDialog nft={nft} />);

  const [showPopper, setShowPopper] = useState(false);
  const [popperAnchor, setPopperAnchor] = useState<HTMLElement | null>(null);

  const handleShowHelp = (e: any) => {
    setPopperAnchor(e.currentTarget);
    setShowPopper(true);
  };
  const handleCloseHelp = () => setShowPopper(false);

  return (
    <>
      <Popover
        anchorEl={popperAnchor}
        open={showPopper}
        onClose={handleCloseHelp}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            display: "flex",
            flexDirection: "column",
            background: "transparent",
          },
        }}
      >
        <TypeChip type={type ?? "fire"} label={type} size="small" />
        <div style={{ height: 10 }} />
        <RarityChip rarity={rarity ?? "common"} label={rarity} size="small" />
      </Popover>
      <StyledBox>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography
            style={{
              fontFamily: `'Press Start 2P', cursive`,
              fontSize: "16px",
              color: "white",
              flex: 1,
              textAlign: "center",
            }}
          >
            #{tokenId ?? 340002341}
          </Typography>
          {price && (
            <HelpIcon onClick={handleShowHelp} style={{ color: "white" }} />
          )}
        </div>
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
        {price ? (
          <PriceTag>{numberWithCommas(price)} KBN</PriceTag>
        ) : (
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
            <RarityChip
              rarity={rarity ?? "common"}
              label={rarity}
              size="small"
            />
          </div>
        )}
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
