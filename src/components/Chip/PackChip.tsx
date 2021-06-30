import Chip, { ChipProps } from "@material-ui/core/Chip";
import { FC } from "react";
import styled from "styled-components";
import { BlastOff, AmpedUp, MeanGreens } from "components/Icons/packs";

interface PackChipProps extends ChipProps {
  pack: string;
}

const getPackIcon = (pack: string) => {
  switch (pack) {
    case "blastOff": {
      return <BlastOff />;
    }
    case "ampedUp": {
      return <AmpedUp />;
    }
    case "meanGreens": {
      return <MeanGreens />;
    }
    default: {
      return undefined;
    }
  }
};

const getPackLabel = (pack: string) => {
  switch (pack) {
    case "blastOff": {
      return "Blast-Off!";
    }
    case "ampedUp": {
      return "Amped Up";
    }
    case "meanGreens": {
      return "Mean Greens";
    }
    default: {
      return undefined;
    }
  }
};

const getPackBgColor = (pack: string) => {
  switch (pack) {
    case "blastOff": {
      return "#9657fc";
    }
    case "ampedUp": {
      return "#fd5bfd";
    }
    case "meanGreens": {
      return "#90f773";
    }
    default: {
      return undefined;
    }
  }
};

const getPackFillColor = (pack: string) => {
  switch (pack) {
    case "ampedUp":
    case "blastOff": {
      return "white";
    }
    default: {
      return undefined;
    }
  }
};

const StyledChip = styled(Chip)<PackChipProps>`
  padding: 8px;
  background-color: ${({ pack }) => getPackBgColor(pack)};
  fill: ${({ pack }) => getPackFillColor(pack)};
  color: ${({ pack }) => getPackFillColor(pack)};
  width: 150px;
  max-width: 150px;
`;

const PackChip: FC<PackChipProps> = (props) => {
  const { pack } = props;

  return (
    <StyledChip
      icon={getPackIcon(pack)}
      label={getPackLabel(pack)}
      {...props}
    />
  );
};

export default PackChip;
