import artists from "./artists";
import BLAST_OFF_SET from "./2114";
import { PokemoonNft } from "./types";

export const PM_TYPES = {
  ITEM: "Item",
  SUPPORTER: "Supporter",
  GRASS: "Grass",
  FIRE: "Fire",
  WATER: "Water",
  LIGHTNING: "Lightning",
  PSYCHIC: "Psychic",
  FIGHTING: "Fighting",
  DARKNESS: "Darkness",
  METAL: "Metal",
  DRAGON: "Dragon",
  FAIRY: "Fairy",
  COLORLESS: "Colorless",
};

export const PM_RARITY = {
  C: "Common",
  U: "Uncommon",
  R: "Rare",
  L: "Legendary",
  M: "Moonlike",
};

export const ARTISTS = artists;

interface CardSet {
  name: string;
  cards: PokemoonNft[];
}

export const CARD_SETS: { 2114: CardSet } = {
  2114: {
    name: "Blast Off",
    cards: BLAST_OFF_SET,
  },
};

export const COMPLETE_NFT_LIST = CARD_SETS[2114].cards;
