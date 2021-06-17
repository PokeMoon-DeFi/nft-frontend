import styled from "styled-components";
import {
  Colorless,
  Dragon,
  Fire,
  Grass,
  Lightning,
  Moon,
  Psychic,
  Water,
  getRarityGradient,
  Button,
} from "nft-uikit";
import { useTheme } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { InspectorDialogProps } from "./InspectorModal";
import { PM_TYPES } from "config/constants/nfts";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 420px;
`;

const PrimaryInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px;
  margin-bottom: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
`;
const NR = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
const Number = styled.span`
  flex: 1;
  color: #111111;
`;
const Rarity = styled.span`
  flex: 3;
  color: #111111;
  font-weight: bold;
  margin-left: 6px;
`;
const Name = styled.span`
  flex: 1;
  color: #ffffff;
  margin-left: 10px;
`;

const SecondaryInfo = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  margin-bottom: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  width: 100%;
`;
const PokemoonType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SetName = styled.span`
  color: #ffffff;
  font-weight: bold;
  margin-left: 12px;
`;

const ArtistInfo = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  padding: 10px;
  margin-bottom: 6px;
  width: 100%;
  font-size: 1.1rem;
`;
const ArtistName = styled.span`
  color: #111111;
  font-weight: bold;
  margin-left: 12px;
`;
const ArtistInsta = styled.span`
  color: #111111;
  font-weight: bold;
  margin-left: 6px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  font-size: 1.1rem;
`;
const DescriptionText = styled.div`
  text-align: center;
  font-style: oblique;
  padding: 12px;
  margin-bottom: 12px;
  white-space: pre-wrap;
`;
const FooterIcon = styled.div`
  text-align: center;
`;
const getIcon = (type: string | undefined) => {
  switch (type) {
    case PM_TYPES.COLORLESS:
      return Colorless;
    case PM_TYPES.FIRE:
      return Fire;
    case PM_TYPES.GRASS:
      return Grass;
    case PM_TYPES.ITEM:
      break;
    case PM_TYPES.LIGHTNING:
      return Lightning;
    case PM_TYPES.PSYCHIC:
      return Psychic;
    case PM_TYPES.SUPPORTER:
      break;
    case PM_TYPES.WATER:
      return Water;
    default:
      return null;
  }
};

const NftInfo = ({ nft, handleClose }: InspectorDialogProps) => {
  const card = nft;
  const theme = useTheme();
  const rarity: string = nft.rarity ? nft.rarity : "0";
  const rarityGradient = getRarityGradient(rarity);
  const type = card?.type ?? "Supporter";
  const typeColor = theme.palette.types[type.toLowerCase()].bgColor;
  const fillColor = theme.palette.types[type.toLowerCase()].textColor;
  const TypeIcon = getIcon(type);

  return (
    <>
      <PrimaryInfo style={{ background: rarityGradient }}>
        <NR>
          <Number>No.{card?.number}</Number>
          <Rarity>{rarity}</Rarity>
        </NR>
        <Name>{card?.name}</Name>
      </PrimaryInfo>
      <SecondaryInfo
        style={{
          background: typeColor,
          fill: fillColor,
          color: fillColor,
          fontSize: "1.1rem",
        }}
      >
        <PokemoonType>
          {TypeIcon ? (
            <TypeIcon
              height={"3.6vh"}
              style={{ marginLeft: "6px", marginRight: "6px" }}
            />
          ) : null}
          {card?.type}
        </PokemoonType>
      </SecondaryInfo>
      <ArtistInfo>
        Artist
        <ArtistName>{card?.artist?.name}</ArtistName>
        {card?.artist?.instagram ? (
          <ArtistInsta>({card?.artist?.instagram})</ArtistInsta>
        ) : (
          <></>
        )}
      </ArtistInfo>
      <Description>
        <DescriptionText>"{card?.description}"</DescriptionText>
        <FooterIcon>
          <Button endIcon={<CloseIcon />} onClick={handleClose}>
            Close
          </Button>
        </FooterIcon>
      </Description>
    </>
  );
};

export default NftInfo;
