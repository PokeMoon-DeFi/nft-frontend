import Chip, { ChipProps } from "@material-ui/core/Chip";
import styled from "styled-components";

interface RarityChipProps extends ChipProps {
  rarity: string;
}

export const RarityChip = styled(Chip)<RarityChipProps>`
  background-color: ${({ theme, rarity }) =>
    theme.palette.rarity[rarity.toLowerCase()].bgColor};
  .MuiChip-label {
    color: ${({ theme, rarity }) =>
      theme.palette.rarity[rarity.toLowerCase()].textColor};
  }
  border-radius: 5px;
`;
