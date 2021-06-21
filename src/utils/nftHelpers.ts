import BigNumber from "bignumber.js";
import BLAST_OFF_COLLECTION, {
  BLAST_OFF_CARDS,
} from "config/constants/nfts/2114";
import { Contract } from "ethers-multicall";
import AMPED_UP_COLLECTION from "config/constants/nfts/2116";
import { PokemoonNft, TokenUriResponse } from "config/constants/nfts/types";
import blastOffTokenCache from "config/constants/cache/blastOff/tokenIdToPack.json";
import blastOffPackCache from "config/constants/cache/blastOff/blastOffPacks.json";
import contracts from "config/constants/contracts";
import multicall from "utils/multicall";
import BlastOffAbi from "config/abi/BlastOff.json";
import AmpedUpAbi from "config/abi/AmpedUp.json";
import { BigNumber as BN } from "ethers";
import ampedUpTokens from "config/constants/cache/ampedUp/ampedUpTokens.json";
import ampedUpPacks from "config/constants/cache/ampedUp/ampedUpPacks.json";
import {
  getNftAbiByName,
  getNftAddressByName,
  getNftContractByName,
} from "./contractHelpers";
import { call } from "./callHelpers";

const isPack = (tokenId: string) => {
  let isPack: boolean;
  new BigNumber(tokenId).isLessThan(new BigNumber(11000000))
    ? (isPack = true)
    : (isPack = false);
  return isPack;
};

export const getCollection = (pack: string) => {
  switch (pack) {
    default:
    case "blasOff": {
      return BLAST_OFF_COLLECTION;
    }
    case "ampedUp": {
      return AMPED_UP_COLLECTION;
    }
  }
};

export const getFlatCollection = () => {
  const result = [];
  const packs = ["blastOff", "ampedUp"];
  for (const pack of packs.reverse()) {
    const nfts: PokemoonNft[] = Object.entries(getCollection(pack))
      .map(([key, value]) => {
        const { card, ...nft } = value;
        const glbUrl =
          `/models/${pack}/` + nft.imageUrl.replace(".png", ".glb");
        const imageUrl = `/images/cards/${pack}/${nft.imageUrl}`;
        return { ...nft, ...card, glbUrl, imageUrl };
      })
      ?.sort((a, b) => b.number - a.number);
    //@ts-ignore
    result.push(...nfts);
  }

  return result;
};

const getPackCache = (pack: string) => {
  switch (pack) {
    default:
    case "blastOff": {
      return blastOffPackCache;
    }
    case "ampedUp": {
      return ampedUpPacks;
    }
  }
};

const getTokenCache = (pack: string) => {
  switch (pack) {
    default:
    case "blastOff": {
      return blastOffTokenCache;
    }
    case "ampedUp": {
      return ampedUpTokens;
    }
  }
};

const getAbi = (pack: string) => {
  switch (pack) {
    default:
    case "blastOff": {
      return BlastOffAbi;
    }
    case "ampedUp": {
      return AmpedUpAbi;
    }
  }
};

const isTokenCached = (tokenId, pack) => {
  return Object.keys(getTokenCache(pack)).includes(tokenId);
};

const isPackCached = (packId, pack) => {
  return Object.keys(getPackCache(pack)).includes(packId);
};

const getBaseUri = (pack: string) => {
  switch (pack) {
    case "blastOff":
      return "https://storage.pokemoonapis.com/context/token/fde4/";
    default:
      break;
  }
};

export const getCardData = async (tokenId: string, set: string, cache = {}) => {
  const cardId = parseInt(tokenId.substr(0, 2));
  let collection: any;
  set === "blastOff"
    ? (collection = BLAST_OFF_COLLECTION)
    : (collection = AMPED_UP_COLLECTION);
  const { imageUrl, card, rarity } = collection[cardId];
  const nft: PokemoonNft = { tokenId, imageUrl, ...card, rarity };

  nft.glbUrl = `/models/${set}/${imageUrl.replace(".png", ".glb")}`;
  nft.imageUrl = `/images/cards/${set}/${imageUrl}`;
  nft.set = set;

  nft.packId = getTokenCache(set)[tokenId];

  return nft;
};

export const getNftOwner = async (nft: PokemoonNft) => {
  const contract = new Contract(getNftAddressByName(nft.set), getAbi(nft.set));
  const ownerCall = contract.ownerOf(nft.tokenId);
  const result = await call([ownerCall]);

  return result;
};

export const getTokenUriResponse = async (
  nft: PokemoonNft
): Promise<TokenUriResponse> => {
  const contract = new Contract(getNftAddressByName(nft.set), getAbi(nft.set));
  const uriCall = contract.tokenURI(nft.tokenId);
  const href = await call([uriCall]);

  const response = await fetch(href + ".json");
  const data = await response.json();

  return data;
};

export const handleTokenIdResponse = async (
  tokenIds: BigNumber[],
  pack: string
) => {
  const packs: string[] = [];
  const cards: PokemoonNft[] = [];

  for (const tokenId of tokenIds) {
    if (tokenId.toNumber() < 11000000) {
      packs.push(tokenId.toString());
    }
  }

  const missingPacks = packs.filter((packId) => !isPackCached(packId, pack));
  const tokenCache = await collectMissingPacks(missingPacks, pack);

  for (const tokenId of tokenIds) {
    if (tokenId.toNumber() < 11000000) {
    } else {
      cards.push(await getCardData(tokenId.toString(), pack));
    }
  }

  // iterate through tokenIds
  // only get the packs
  // check if pack is cached
  // if the pack is not cached
  // add to getPackedInfo multicall
  // get array of cards data

  return { [pack]: { packs, cards } };
};

//This updates the static cache
const collectMissingPacks = async (packIds: string[], pack: string) => {
  const nftAddresses: { [key: string]: string } = {
    blastOff: contracts.blastOff[process.env.REACT_APP_CHAIN_ID],
    ampedUp: contracts.ampedUp[process.env.REACT_APP_CHAIN_ID],
  };

  const calls = packIds.map((packId) => {
    return {
      address: nftAddresses[pack],
      name: "packedInfo",
      params: [packId],
    };
  });

  const multiCallResponse = await multicall(getAbi(pack), calls);
  let index = 0;
  const packCache = getPackCache(pack);
  const tokenCache = getTokenCache(pack);

  for (const res of multiCallResponse) {
    const packId = packIds[index];
    const { card1, card2, card3, card4, card5 } = res;

    tokenCache[card1] = packId;
    tokenCache[card2] = packId;
    tokenCache[card3] = packId;
    tokenCache[card4] = packId;
    tokenCache[card5] = packId;

    packCache[packId] = {
      card1,
      card2,
      card3,
      card4,
      card5,
    };

    index += 1;
  }
  return tokenCache;
};
