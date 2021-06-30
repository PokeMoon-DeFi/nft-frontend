import { FC } from "react";
import Box, { BoxProps } from "@material-ui/core/Box";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import Button from "components/Button";
import SearchIcon from "@material-ui/icons/Search";
import { InspectorDialog } from "components/Modal";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useTheme } from "styled-components";
import { PokemoonPack } from "config/constants/nfts/types";

interface PackSleeveProps extends BoxProps {
  pack: PokemoonPack;
  onPackSelected: (id: string) => void;
}

const StyledBox = styled(Box)`
  flex: 1;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(34, 15, 46, 1) 0%,
    rgba(100, 60, 163, 1) 100%
  );
  border-color: #da52de;
  border-style: outset;
  border-width: 8px;
  box-shadow: 0px -3px 8px 0 #303030;

  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const PackSleeve: FC<PackSleeveProps> = ({
  pack,
  onPackSelected,
  ...props
}) => {
  const { packId, nfts } = pack;
  const theme = useTheme();

  return (
    <StyledBox {...props}>
      <Typography
        style={{
          fontFamily: `'Press Start 2P', cursive`,
          fontSize: "16px",
          color: "white",
        }}
      >
        #{pack.packId}
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
        {pack.name}
      </Typography>

      <div style={{ flex: 1, display: "flex", margin: 10, marginBottom: 6 }}>
        {nfts?.map((nft, index) => {
          const rarity = nft?.rarity?.toLowerCase() ?? "common";
          return (
            <StarRateIcon
              style={{ color: theme.palette.rarity[rarity].bgColor }}
              key={index}
            />
          );
        })}
      </div>

      <Button
        style={{ fontSize: 12, textTransform: "none", margin: 6 }}
        onClick={() => (!!onPackSelected ? onPackSelected(packId) : null)}
        endIcon={<SearchIcon />}
      >
        View Pack
      </Button>
    </StyledBox>
  );
};
