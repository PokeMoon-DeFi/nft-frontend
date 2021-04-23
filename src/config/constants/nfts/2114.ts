import ARTISTS from "./artists";
import { PokemoonCard, PokemoonNft } from "./types";
import { PM_RARITY, PM_TYPES } from ".";

export const BLAST_OFF_CARDS: { [key: number]: PokemoonCard } = {
  1: {
    number: 1,
    name: "Meownaut",
    type: PM_TYPES.PSYCHIC,
    description:
      "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
    artist: ARTISTS.Armilo,
  },
  2: {
    number: 2,
    name: "Pikapuff",
    type: PM_TYPES.LIGHTNING,
    description: "That's gonna be a hit.",
    artist: ARTISTS.LilyPonto,
  },
  3: {
    number: 3,
    name: "Pikapuff",
    type: PM_TYPES.LIGHTNING,
    description:
      "I woke up under the table with a splitting headache, smoke coming out of my ears... and an unconquerable urge to buy a ticket to her next show.",
    artist: ARTISTS.LilyPonto,
  },
  4: {
    number: 4,
    name: "Rattish",
    type: PM_TYPES.GRASS,
    description:
      "There are rodents who can cook, and those who teach Kung Fu. But some of them just wish to sit and contemplate the view.",
    artist: ARTISTS.Ilya,
  },
  5: {
    number: 5,
    name: "Squirder",
    type: PM_TYPES.FIRE,
    description: "Favorite start Pokemoon of the nicotine addicted trainer.",
    artist: ARTISTS.Armilo,
  },
  6: {
    number: 6,
    name: "Chartortle",
    type: PM_TYPES.FIRE,
    description:
      "Chartortles are known to reheat banana and anchovy pizza with the flame from their firey tails.",
    artist: ARTISTS.Armilo,
  },
  7: {
    number: 7,
    name: "Blastard",
    type: PM_TYPES.FIRE,
    description: "Need a light?",
    artist: ARTISTS.Armilo,
  },
  8: {
    number: 8,
    name: "Blastard",
    type: PM_TYPES.FIRE,
    description: "All Gas, Some brakes.",
    artist: ARTISTS.LilyPonto,
  },
  9: {
    number: 9,
    name: "Kadalax",
    type: PM_TYPES.PSYCHIC,
    description:
      "Contrary to popular belief, it's not alway pleasant getting big spooned.",
    artist: ARTISTS.Ilya,
  },
  10: {
    number: 10,
    name: "Kadalax Slim",
    type: PM_TYPES.PSYCHIC,
    description:
      "Some Kadalax, having conquered their material vices, are able to sustain themselves off air and thought alone.",
    artist: ARTISTS.Ilya,
  },
  11: {
    number: 11,
    name: "Zapduck",
    type: PM_TYPES.LIGHTNING,
    description: "Strike one, you're out.",
    artist: ARTISTS.Morlux,
  },
  12: {
    number: 12,
    name: "Golden Koban",
    type: PM_TYPES.ITEM,
    description: "The only solution for inflation is production.",
    artist: ARTISTS.LilyPonto,
  },
  13: {
    number: 13,
    name: "Golden Koban",
    type: PM_TYPES.ITEM,
    description: "Lucky you.",
    artist: ARTISTS.LilyPonto,
  },
  14: {
    number: 14,
    name: "Change Teams",
    type: PM_TYPES.SUPPORTER,
    description: "You don’t mind if I borrow this do you?",
    artist: ARTISTS.NinjaGuy,
  },
  15: {
    number: 15,
    name: "Rash Scratchum",
    type: PM_TYPES.SUPPORTER,
    description: "Ambition is an itch that is never truly satisfied.",
    artist: ARTISTS.NinjaGuy,
  },
  16: {
    number: 16,
    name: "Baby Meownaut",
    type: PM_TYPES.PSYCHIC,
    description: "It's too adorable for words.",
    artist: ARTISTS.Mathijs,
  },
};

/**
 * Maps nft keys (first 2 numbers from tokenId) to nft info
 */
const BLAST_OFF_COLLECTION: { [key: number]: PokemoonNft } = {
  11: {
    tokenId: "11",
    imageUrl: "001meownautC.png",
    card: BLAST_OFF_CARDS[1],
    rarity: PM_RARITY.C,
  },
  31: {
    tokenId: "31",
    imageUrl: "001meownautUC.png",
    card: BLAST_OFF_CARDS[1],
    rarity: PM_RARITY.U,
  },
  54: {
    tokenId: "54",
    imageUrl: "001meownautR.png",
    card: BLAST_OFF_CARDS[1],
    rarity: PM_RARITY.R,
  },
  60: {
    tokenId: "60",
    imageUrl: "001meownautL.png",
    card: BLAST_OFF_CARDS[1],
    rarity: PM_RARITY.L,
  },
  21: {
    tokenId: "21",
    imageUrl: "002pikapuffC.png",
    card: BLAST_OFF_CARDS[2],
    rarity: PM_RARITY.C,
  },
  33: {
    tokenId: "33",
    imageUrl: "002pikapuffUC.png",
    card: BLAST_OFF_CARDS[2],
    rarity: PM_RARITY.U,
  },
  53: {
    tokenId: "53",
    imageUrl: "002pikapuffR.png",
    card: BLAST_OFF_CARDS[2],
    rarity: PM_RARITY.R,
  },
  25: {
    tokenId: "25",
    imageUrl: "003pikapuffC.png",
    card: BLAST_OFF_CARDS[3],
    rarity: PM_RARITY.C,
  },
  39: {
    tokenId: "39",
    imageUrl: "003pikapuffUC.png",
    card: BLAST_OFF_CARDS[3],
    rarity: PM_RARITY.U,
  },
  41: {
    tokenId: "41",
    imageUrl: "003pikapuffR.png",
    card: BLAST_OFF_CARDS[3],
    rarity: PM_RARITY.R,
  },
  61: {
    tokenId: "61",
    imageUrl: "003pikapuffL.png",
    card: BLAST_OFF_CARDS[3],
    rarity: PM_RARITY.L,
  },
  16: {
    tokenId: "16",
    imageUrl: "004rattishC.png",
    card: BLAST_OFF_CARDS[4],
    rarity: PM_RARITY.C,
  },
  27: {
    tokenId: "27",
    imageUrl: "004rattishUC.png",
    card: BLAST_OFF_CARDS[4],
    rarity: PM_RARITY.U,
  },
  47: {
    tokenId: "47",
    imageUrl: "004rattishR.png",
    card: BLAST_OFF_CARDS[4],
    rarity: PM_RARITY.R,
  },
  22: {
    tokenId: "22",
    imageUrl: "005squirderC.png",
    card: BLAST_OFF_CARDS[5],
    rarity: PM_RARITY.C,
  },
  38: {
    tokenId: "38",
    imageUrl: "005squirderUC.png",
    card: BLAST_OFF_CARDS[5],
    rarity: PM_RARITY.U,
  },
  46: {
    tokenId: "46",
    imageUrl: "005squirderR.png",
    card: BLAST_OFF_CARDS[5],
    rarity: PM_RARITY.R,
  },
  24: {
    tokenId: "24",
    imageUrl: "006chartortleC.png",
    card: BLAST_OFF_CARDS[6],
    rarity: PM_RARITY.C,
  },
  30: {
    tokenId: "30",
    imageUrl: "006chartortleUC.png",
    card: BLAST_OFF_CARDS[6],
    rarity: PM_RARITY.U,
  },
  51: {
    tokenId: "51",
    imageUrl: "006chartortleR.png",
    card: BLAST_OFF_CARDS[6],
    rarity: PM_RARITY.R,
  },
  14: {
    tokenId: "14",
    imageUrl: "007blastardC.png",
    card: BLAST_OFF_CARDS[7],
    rarity: PM_RARITY.C,
  },
  35: {
    tokenId: "35",
    imageUrl: "007blastardUC.png",
    card: BLAST_OFF_CARDS[7],
    rarity: PM_RARITY.U,
  },
  49: {
    tokenId: "49",
    imageUrl: "007blastardR.png",
    card: BLAST_OFF_CARDS[7],
    rarity: PM_RARITY.R,
  },
  23: {
    tokenId: "23",
    imageUrl: "008blastardC.png",
    card: BLAST_OFF_CARDS[8],
    rarity: PM_RARITY.C,
  },
  40: {
    tokenId: "40",
    imageUrl: "008blastardUC.png",
    card: BLAST_OFF_CARDS[8],
    rarity: PM_RARITY.U,
  },
  55: {
    tokenId: "55",
    imageUrl: "008blastardR.png",
    card: BLAST_OFF_CARDS[8],
    rarity: PM_RARITY.R,
  },
  58: {
    tokenId: "58",
    imageUrl: "008blastardL.png",
    card: BLAST_OFF_CARDS[8],
    rarity: PM_RARITY.L,
  },
  15: {
    tokenId: "15",
    imageUrl: "009kadalaxC.png",
    card: BLAST_OFF_CARDS[9],
    rarity: PM_RARITY.C,
  },
  34: {
    tokenId: "34",
    imageUrl: "009kadalaxUC.png",
    card: BLAST_OFF_CARDS[9],
    rarity: PM_RARITY.U,
  },
  48: {
    tokenId: "48",
    imageUrl: "009kadalaxR.png",
    card: BLAST_OFF_CARDS[9],
    rarity: PM_RARITY.R,
  },
  12: {
    tokenId: "12",
    imageUrl: "010kadalaxslimC.png",
    card: BLAST_OFF_CARDS[10],
    rarity: PM_RARITY.C,
  },
  37: {
    tokenId: "37",
    imageUrl: "010kadalaxslimUC.png",
    card: BLAST_OFF_CARDS[10],
    rarity: PM_RARITY.U,
  },
  45: {
    tokenId: "45",
    imageUrl: "010kadalaxslimR.png",
    card: BLAST_OFF_CARDS[10],
    rarity: PM_RARITY.R,
  },
  18: {
    tokenId: "18",
    imageUrl: "011zapduckC.png",
    card: BLAST_OFF_CARDS[11],
    rarity: PM_RARITY.C,
  },
  28: {
    tokenId: "28",
    imageUrl: "011zapduckUC.png",
    card: BLAST_OFF_CARDS[11],
    rarity: PM_RARITY.U,
  },
  44: {
    tokenId: "44",
    imageUrl: "011zapduckR.png",
    card: BLAST_OFF_CARDS[11],
    rarity: PM_RARITY.R,
  },
  57: {
    tokenId: "57",
    imageUrl: "011zapduckL.png",
    card: BLAST_OFF_CARDS[11],
    rarity: PM_RARITY.L,
  },
  17: {
    tokenId: "17",
    imageUrl: "012goldenkobanC.png",
    card: BLAST_OFF_CARDS[12],
    rarity: PM_RARITY.C,
  },
  36: {
    tokenId: "36",
    imageUrl: "012goldenkobanUC.png",
    card: BLAST_OFF_CARDS[12],
    rarity: PM_RARITY.U,
  },
  50: {
    tokenId: "50",
    imageUrl: "012goldenkobanR.png",
    card: BLAST_OFF_CARDS[12],
    rarity: PM_RARITY.R,
  },
  20: {
    tokenId: "20",
    imageUrl: "013goldenkobanC.png",
    card: BLAST_OFF_CARDS[13],
    rarity: PM_RARITY.C,
  },
  32: {
    tokenId: "32",
    imageUrl: "013goldenkobanUC.png",
    card: BLAST_OFF_CARDS[13],
    rarity: PM_RARITY.U,
  },
  42: {
    tokenId: "42",
    imageUrl: "013goldenkobanR.png",
    card: BLAST_OFF_CARDS[13],
    rarity: PM_RARITY.R,
  },
  19: {
    tokenId: "19",
    imageUrl: "014changeteamsC.png",
    card: BLAST_OFF_CARDS[14],
    rarity: PM_RARITY.C,
  },
  29: {
    tokenId: "29",
    imageUrl: "014changeteamsUC.png",
    card: BLAST_OFF_CARDS[14],
    rarity: PM_RARITY.C,
  },
  52: {
    tokenId: "52",
    imageUrl: "014changeteamsR.png",
    card: BLAST_OFF_CARDS[14],
    rarity: PM_RARITY.R,
  },
  59: {
    tokenId: "59",
    imageUrl: "014changeteamsL.png",
    card: BLAST_OFF_CARDS[14],
    rarity: PM_RARITY.L,
  },
  13: {
    tokenId: "13",
    imageUrl: "015rashscratchumC.png",
    card: BLAST_OFF_CARDS[15],
    rarity: PM_RARITY.C,
  },
  26: {
    tokenId: "26",
    imageUrl: "015rashscratchumUC.png",
    card: BLAST_OFF_CARDS[15],
    rarity: PM_RARITY.U,
  },
  43: {
    tokenId: "43",
    imageUrl: "015rashscratchumR.png",
    card: BLAST_OFF_CARDS[15],
    rarity: PM_RARITY.R,
  },
  56: {
    tokenId: "56",
    imageUrl: "015rashscratchumL.png",
    card: BLAST_OFF_CARDS[15],
    rarity: PM_RARITY.L,
  },
  62: {
    tokenId: "62",
    imageUrl: "016babymeownautML.png",
    card: BLAST_OFF_CARDS[16],
    rarity: PM_RARITY.M,
  },
};

export default BLAST_OFF_COLLECTION;
