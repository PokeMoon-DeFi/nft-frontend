import ARTISTS from "./artists";
import { PokemoonNft } from "./types";
import { PM_RARITY, PM_TYPES } from ".";

export const MEAN_GREENS_CARDS: { [key: number]: any } = {
  1: {
    number: 1,
    name: "Bulbat",
    type: PM_TYPES.GRASS,
    description: `Who said you couldn't overdose?`,
    artist: ARTISTS.BigSmoke,
  },
  2: {
    number: 2,
    name: "Ivybat",
    type: PM_TYPES.GRASS,
    description: `Ever tried to weed a whole graveyard? Real pain in the neck.`,
    artist: ARTISTS.LilyPonto,
  },
  3: {
    number: 3,
    name: "Venobat",
    type: PM_TYPES.GRASS,
    description: "The blood moon rises once again.",
    artist: ARTISTS.LilyPonto,
  },
  4: {
    number: 4,
    name: "Scybone",
    type: PM_TYPES.DARKNESS,
    description: "Fear the reaper.",
    artist: ARTISTS.NinjaGuy,
  },
  5: {
    number: 5,
    name: "Maroslash",
    type: PM_TYPES.DARKNESS,
    description: "",
    artist: ARTISTS.NinjaGuy,
  },
  6: {
    number: 6,
    name: "Boanana",
    type: PM_TYPES.GRASS,
    description: ``,
    artist: ARTISTS.Hakamoru,
  },
  7: {
    number: 7,
    name: "Bananaconda",
    type: PM_TYPES.GRASS,
    description: "",
    artist: ARTISTS.Hrushi,
  },
  8: {
    number: 8,
    name: "Dreedle",
    type: PM_TYPES.DRAGON,
    description: "",
    artist: ARTISTS.Hrushi,
  },
  9: {
    number: 9,
    name: "Ricky",
    type: PM_TYPES.SUPPORTER,
    description: "",
    artist: ARTISTS.Mawa,
  },
  10: {
    number: 10,
    name: "Stunkey",
    type: PM_TYPES.GRASS,
    description: "",
    artist: ARTISTS.Morlux,
  },
  11: {
    number: 11,
    name: "Chimpact",
    type: PM_TYPES.GRASS,
    description: "",
    artist: ARTISTS.LilyPonto,
  },
  12: {
    number: 12,
    name: "Ambush",
    type: PM_TYPES.ITEM,
    description: "",
    artist: ARTISTS.LilyPonto,
  },
  13: {
    number: 13,
    name: "Clobberilla",
    type: PM_TYPES.GRASS,
    description: "",
    artist: ARTISTS.Morlux,
  },
};

/**
 * Maps nft keys (first 2 numbers from tokenId) to nft info
 */
const MEAN_GREENS_COLLECTION: { [key: number]: any } = {
  12: {
    tokenId: "12",
    imageUrl: "001bulbatC.png",
    card: MEAN_GREENS_CARDS[1],
    rarity: PM_RARITY.C,
  },
  24: {
    tokenId: "24",
    imageUrl: "001bulbatUC.png",
    card: MEAN_GREENS_CARDS[1],
    rarity: PM_RARITY.U,
  },
  17: {
    tokenId: "17",
    imageUrl: "002ivybatUC.png",
    card: MEAN_GREENS_CARDS[2],
    rarity: PM_RARITY.U,
  },
  29: {
    tokenId: "29",
    imageUrl: "002ivybatR.png",
    card: MEAN_GREENS_CARDS[2],
    rarity: PM_RARITY.R,
  },
  36: {
    tokenId: "36",
    imageUrl: "003venobatR.png",
    card: MEAN_GREENS_CARDS[3],
    rarity: PM_RARITY.R,
  },
  40: {
    tokenId: "40",
    imageUrl: "003venobatL.png",
    card: MEAN_GREENS_CARDS[3],
    rarity: PM_RARITY.L,
  },
  11: {
    tokenId: "11",
    imageUrl: "004scyboneC.png",
    card: MEAN_GREENS_CARDS[4],
    rarity: PM_RARITY.C,
  },
  21: {
    tokenId: "21",
    imageUrl: "004scyboneUC.png",
    card: MEAN_GREENS_CARDS[4],
    rarity: PM_RARITY.U,
  },
  33: {
    tokenId: "33",
    imageUrl: "004scyboneR.png",
    card: MEAN_GREENS_CARDS[4],
    rarity: PM_RARITY.R,
  },
  19: {
    tokenId: "19",
    imageUrl: "005maroslashUC.png",
    card: MEAN_GREENS_CARDS[5],
    rarity: PM_RARITY.U,
  },
  27: {
    tokenId: "27",
    imageUrl: "005maroslashR.png",
    card: MEAN_GREENS_CARDS[5],
    rarity: PM_RARITY.R,
  },
  41: {
    tokenId: "41",
    imageUrl: "005maroslashL.png",
    card: MEAN_GREENS_CARDS[5],
    rarity: PM_RARITY.L,
  },
  13: {
    tokenId: "13",
    imageUrl: "006boananaC.png",
    card: MEAN_GREENS_CARDS[6],
    rarity: PM_RARITY.C,
  },
  25: {
    tokenId: "25",
    imageUrl: "006boananaUC.png",
    card: MEAN_GREENS_CARDS[6],
    rarity: PM_RARITY.U,
  },
  34: {
    tokenId: "34",
    imageUrl: "006boananaR.png",
    card: MEAN_GREENS_CARDS[6],
    rarity: PM_RARITY.R,
  },
  23: {
    tokenId: "23",
    imageUrl: "007bananacondaC.png",
    card: MEAN_GREENS_CARDS[7],
    rarity: PM_RARITY.C,
  },
  30: {
    tokenId: "30",
    imageUrl: "007bananacondaR.png",
    card: MEAN_GREENS_CARDS[7],
    rarity: PM_RARITY.R,
  },
  39: {
    tokenId: "39",
    imageUrl: "007bananacondaL.png",
    card: MEAN_GREENS_CARDS[7],
    rarity: PM_RARITY.L,
  },
  14: {
    tokenId: "14",
    imageUrl: "008dreedleC.png",
    card: MEAN_GREENS_CARDS[8],
    rarity: PM_RARITY.C,
  },
  18: {
    tokenId: "18",
    imageUrl: "008dreedleUC.png",
    card: MEAN_GREENS_CARDS[8],
    rarity: PM_RARITY.U,
  },
  20: {
    tokenId: "20",
    imageUrl: "009rickyUC.png",
    card: MEAN_GREENS_CARDS[9],
    rarity: PM_RARITY.U,
  },
  28: {
    tokenId: "28",
    imageUrl: "009rickyR.png",
    card: MEAN_GREENS_CARDS[9],
    rarity: PM_RARITY.R,
  },
  38: {
    tokenId: "38",
    imageUrl: "009rickyL.png",
    card: MEAN_GREENS_CARDS[9],
    rarity: PM_RARITY.L,
  },
  15: {
    tokenId: "15",
    imageUrl: "010stunkeyC.png",
    card: MEAN_GREENS_CARDS[10],
    rarity: PM_RARITY.L,
  },
  22: {
    tokenId: "22",
    imageUrl: "010stunkeyUC.png",
    card: MEAN_GREENS_CARDS[10],
    rarity: PM_RARITY.U,
  },
  26: {
    tokenId: "26",
    imageUrl: "011chimpactUC.png",
    card: MEAN_GREENS_CARDS[11],
    rarity: PM_RARITY.U,
  },
  35: {
    tokenId: "35",
    imageUrl: "011chimpactR.png",
    card: MEAN_GREENS_CARDS[11],
    rarity: PM_RARITY.R,
  },
  16: {
    tokenId: "16",
    imageUrl: "012ambushUC.png",
    card: MEAN_GREENS_CARDS[12],
    rarity: PM_RARITY.U,
  },
  31: {
    tokenId: "31",
    imageUrl: "012ambushR.png",
    card: MEAN_GREENS_CARDS[12],
    rarity: PM_RARITY.R,
  },
  37: {
    tokenId: "37",
    imageUrl: "012ambushL.png",
    card: MEAN_GREENS_CARDS[12],
    rarity: PM_RARITY.L,
  },
  32: {
    tokenId: "32",
    imageUrl: "013clobberillaR.png",
    card: MEAN_GREENS_CARDS[13],
    rarity: PM_RARITY.R,
  },
  42: {
    tokenId: "42",
    imageUrl: "013clobberillaR.png",
    card: MEAN_GREENS_CARDS[13],
    rarity: PM_RARITY.L,
  },
};

export default MEAN_GREENS_COLLECTION;
