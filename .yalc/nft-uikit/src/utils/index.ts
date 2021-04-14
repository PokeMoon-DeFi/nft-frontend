import { POKEMOON_RARITY, POKEMOON_TYPES } from "../constants/nftData";
import Theme from "../theme";

export const getRarityGradient = (rarity: string) => {
  let startColor: string;
  let endColor: string;
  switch (rarity) {
    case POKEMOON_RARITY.COMMON:
      startColor = Theme.rarity.common;
      endColor = Theme.rarity.common;
      break;
    case POKEMOON_RARITY.UNCOMMON:
      startColor = Theme.rarity.uncommon;
      endColor = Theme.rarity.uncommon;
      break;
    case POKEMOON_RARITY.RARE:
      startColor = Theme.rarity.rare;
      endColor = Theme.rarity.rare;
      break;
    case POKEMOON_RARITY.LEGENDARY:
      startColor = Theme.rarity.legendary.light;
      endColor = Theme.rarity.legendary.dark;
      break;
    case POKEMOON_RARITY.MOONLIKE:
      startColor = Theme.rarity.moonlike.light;
      endColor = Theme.rarity.moonlike.dark;
      break;
    default:
      throw new Error("Invalid Rarity");
  }
  const gradientString = `linear-gradient(120deg, ${startColor} 0%, ${endColor} 47%, #111111 47.3%, #111111 100%)`;
  return gradientString;
};

export const getTypeColor = (type: string) => {
  let color: string;
  switch (type) {
    case POKEMOON_TYPES.ITEM:
      color = Theme.types.item;
      break;
    case POKEMOON_TYPES.SUPPORTER:
      color = Theme.types.supporter;
      break;
    case POKEMOON_TYPES.PSYCHIC:
      color = Theme.types.psychic;
      break;
    case POKEMOON_TYPES.LIGHTNING:
      color = Theme.types.lightning;
      break;
    case POKEMOON_TYPES.FIRE:
      color = Theme.types.fire;
      break;
    case POKEMOON_TYPES.GRASS:
      color = Theme.types.grass;
      break;
    case POKEMOON_TYPES.WATER:
      color = Theme.types.water;
      break;
    default:
      color = "#ffffff";
      break;
  }
  return color;
};
