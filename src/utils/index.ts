import { PM_RARITY } from "config/constants/nfts";
import { MaterialTheme } from "components/theme";

export const getRarityGradient = (rarity: string) => {
  let startColor: any;
  let endColor: any;
  switch (rarity) {
    case PM_RARITY.C:
      startColor = MaterialTheme.palette.rarity.common.bgColor;
      endColor = MaterialTheme.palette.rarity.common.bgColor;
      break;
    case PM_RARITY.U:
      startColor = MaterialTheme.palette.rarity.uncommon.bgColor;
      endColor = MaterialTheme.palette.rarity.uncommon.bgColor;
      break;
    case PM_RARITY.R:
      startColor = MaterialTheme.palette.rarity.rare.bgColor;
      endColor = MaterialTheme.palette.rarity.rare.bgColor;
      break;
    case PM_RARITY.L:
      startColor = MaterialTheme.palette.rarity.legendary.bgColor;
      endColor = MaterialTheme.palette.rarity.legendary.bgColor;
      break;
    case PM_RARITY.M:
      startColor = MaterialTheme.palette.rarity.moonlike.bgColor;
      endColor = MaterialTheme.palette.rarity.moonlike.bgColor;
      break;
    default:
      startColor = "black";
      endColor = "white";
      break;
  }
  const gradientString = `linear-gradient(120deg, ${startColor} 0%, ${endColor} 47%, #111111 47.3%, #111111 100%)`;
  return gradientString;
};

export * from "./nftStats";
export * from "./nftHelpers";
