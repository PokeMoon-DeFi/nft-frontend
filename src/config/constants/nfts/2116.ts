import ARTISTS from "./artists";
import { PokemoonNft } from "./types";
import { PM_RARITY, PM_TYPES } from ".";

export const AMPED_UP_CARDS: { [key: number]: any } = {
  1: {
    number: 1,
    name: "Raituff",
    type: PM_TYPES.LIGHTNING,
    description: "Thunderbolt and lightning, very very frightening.",
    artist: ARTISTS.LilyPonto,
  },
  2: {
    number: 2,
    name: "Diamond Balls",
    type: PM_TYPES.ITEM,
    description:
      "There was him; too brazen to back down, and me; too mesmerized to look away.",
    artist: ARTISTS.Armilo,
  },
  3: {
    number: 3,
    name: "Graffing",
    type: PM_TYPES.DARKNESS,
    description: "The whole world's a canvas.",
    artist: ARTISTS.NinjaGuy,
  },
  4: {
    number: 4,
    name: "Astro Helm",
    type: PM_TYPES.ITEM,
    description: "Wanna get high?",
    artist: ARTISTS.Cosmeownaut,
  },
  5: {
    number: 5,
    name: "Professor Coke",
    type: PM_TYPES.SUPPORTER,
    description: "It's a hell of a drug.",
    artist: ARTISTS.NinjaGuy,
  },
  6: {
    number: 6,
    name: "Degen Meownaut",
    type: PM_TYPES.DARKNESS,
    description: `Wait he can talk?"\n\n "Yes, but I wouldn’t believe a single word he says.`,
    artist: ARTISTS.NinjaGuy,
  },
  7: {
    number: 7,
    name: "Farmer",
    type: PM_TYPES.GRASS,
    description: "...and stay off my property you no-good Kobandits!",
    artist: ARTISTS.Mathijs,
  },
  8: {
    number: 8,
    name: "Ekrow",
    type: PM_TYPES.COLORLESS,
    description: "50 points from Slytherclaw!",
    artist: ARTISTS.Mawa,
  },
  9: {
    number: 9,
    name: "Artducko",
    type: PM_TYPES.WATER,
    description: "Drake number one of the Great White North.",
    artist: ARTISTS.Morlux,
  },
  10: {
    number: 10,
    name: "Mynx",
    type: PM_TYPES.PSYCHIC,
    description:
      "Men are from Mars, and women are from Venus.  We’re still not sure about this one.",
    artist: ARTISTS.Hrushi,
  },
  11: {
    number: 11,
    name: "Magikazam",
    type: PM_TYPES.WATER,
    description:
      "I don’t think they’re supposed to listen through the pointy end.",
    artist: ARTISTS.Mathijs,
  },
  12: {
    number: 12,
    name: "Toxique",
    type: PM_TYPES.SUPPORTER,
    description: "With a taste of her lips you're on a ride.",
    artist: ARTISTS.LilyPonto,
  },
};

/**
 * Maps nft keys (first 2 numbers from tokenId) to nft info
 */
const AMPED_UP_COLLECTION: { [key: number]: any } = {
  11: {
    tokenId: "11",
    imageUrl: "001raituffUC.png",
    card: AMPED_UP_CARDS[1],
    rarity: PM_RARITY.U,
  },
  12: {
    tokenId: "12",
    imageUrl: "001raituffR.png",
    card: AMPED_UP_CARDS[1],
    rarity: PM_RARITY.R,
  },
  13: {
    tokenId: "13",
    imageUrl: "001raituffL.png",
    card: AMPED_UP_CARDS[1],
    rarity: PM_RARITY.L,
  },
  14: {
    tokenId: "14",
    imageUrl: "002dballsC.png",
    card: AMPED_UP_CARDS[2],
    rarity: PM_RARITY.C,
  },
  15: {
    tokenId: "15",
    imageUrl: "002dballsUC.png",
    card: AMPED_UP_CARDS[2],
    rarity: PM_RARITY.U,
  },
  16: {
    tokenId: "16",
    imageUrl: "003graffingUC.png",
    card: AMPED_UP_CARDS[3],
    rarity: PM_RARITY.U,
  },
  17: {
    tokenId: "17",
    imageUrl: "003graffingR.png",
    card: AMPED_UP_CARDS[3],
    rarity: PM_RARITY.R,
  },
  18: {
    tokenId: "18",
    imageUrl: "003graffingL.png",
    card: AMPED_UP_CARDS[3],
    rarity: PM_RARITY.L,
  },
  19: {
    tokenId: "19",
    imageUrl: "004astrohelmUC.png",
    card: AMPED_UP_CARDS[4],
    rarity: PM_RARITY.U,
  },
  20: {
    tokenId: "20",
    imageUrl: "004astrohelmR.png",
    card: AMPED_UP_CARDS[4],
    rarity: PM_RARITY.R,
  },
  21: {
    tokenId: "21",
    imageUrl: "005profcokeUC.png",
    card: AMPED_UP_CARDS[5],
    rarity: PM_RARITY.U,
  },
  22: {
    tokenId: "22",
    imageUrl: "005profcokeR.png",
    card: AMPED_UP_CARDS[5],
    rarity: PM_RARITY.R,
  },
  23: {
    tokenId: "23",
    imageUrl: "005profcokeL.png",
    card: AMPED_UP_CARDS[5],
    rarity: PM_RARITY.L,
  },
  24: {
    tokenId: "24",
    imageUrl: "006degenmntR.png",
    card: AMPED_UP_CARDS[6],
    rarity: PM_RARITY.R,
  },
  25: {
    tokenId: "25",
    imageUrl: "006degenmntL.png",
    card: AMPED_UP_CARDS[6],
    rarity: PM_RARITY.L,
  },
  26: {
    tokenId: "26",
    imageUrl: "007farmerC.png",
    card: AMPED_UP_CARDS[7],
    rarity: PM_RARITY.C,
  },
  27: {
    tokenId: "27",
    imageUrl: "007farmerUC.png",
    card: AMPED_UP_CARDS[7],
    rarity: PM_RARITY.U,
  },
  28: {
    tokenId: "28",
    imageUrl: "008ekrowC.png",
    card: AMPED_UP_CARDS[8],
    rarity: PM_RARITY.C,
  },
  29: {
    tokenId: "29",
    imageUrl: "008ekrowUC.png",
    card: AMPED_UP_CARDS[8],
    rarity: PM_RARITY.U,
  },
  30: {
    tokenId: "30",
    imageUrl: "008ekrowR.png",
    card: AMPED_UP_CARDS[8],
    rarity: PM_RARITY.R,
  },
  31: {
    tokenId: "31",
    imageUrl: "009artduckoUC.png",
    card: AMPED_UP_CARDS[9],
    rarity: PM_RARITY.U,
  },
  32: {
    tokenId: "32",
    imageUrl: "009artduckoR.png",
    card: AMPED_UP_CARDS[9],
    rarity: PM_RARITY.R,
  },
  33: {
    tokenId: "33",
    imageUrl: "009artduckoL.png",
    card: AMPED_UP_CARDS[9],
    rarity: PM_RARITY.L,
  },
  34: {
    tokenId: "34",
    imageUrl: "010mynxUC.png",
    card: AMPED_UP_CARDS[10],
    rarity: PM_RARITY.U,
  },
  35: {
    tokenId: "35",
    imageUrl: "010mynxR.png",
    card: AMPED_UP_CARDS[10],
    rarity: PM_RARITY.R,
  },
  36: {
    tokenId: "36",
    imageUrl: "011magikazamC.png",
    card: AMPED_UP_CARDS[11],
    rarity: PM_RARITY.C,
  },
  37: {
    tokenId: "37",
    imageUrl: "011magikazamUC.png",
    card: AMPED_UP_CARDS[11],
    rarity: PM_RARITY.U,
  },
  38: {
    tokenId: "38",
    imageUrl: "011magikazamR.png",
    card: AMPED_UP_CARDS[11],
    rarity: PM_RARITY.R,
  },
  39: {
    tokenId: "39",
    imageUrl: "012toxiqueML.png",
    card: AMPED_UP_CARDS[12],
    rarity: PM_RARITY.M,
  },
};

export default AMPED_UP_COLLECTION;
