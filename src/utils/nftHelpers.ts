import BigNumber from "bignumber.js";
import BLAST_OFF_COLLECTION, {
  BLAST_OFF_CARDS,
} from "config/constants/nfts/2114";
import { PokemoonNft } from "config/constants/nfts/types";
import blastOffTokenCache from "config/constants/cache/blastOff/tokenIdToPack.json";
import blastOffPackCache from "config/constants/cache/blastOff/blastOffPacks.json";
import contracts from "config/constants/contracts";
import multicall from "utils/multicall";
import BlastOffAbi from "config/abi/BlastOff.json";

const isPack = (tokenId: string) => {
  let isPack: boolean;
  new BigNumber(tokenId).isLessThan(new BigNumber(11000000))
    ? (isPack = true)
    : (isPack = false);
  return isPack;
};

const getPackCache = (pack: string) => {
  switch (pack) {
    default:
    case "blastOff": {
      return blastOffPackCache;
    }
  }
};

const getTokenCache = (pack: string) => {
  switch (pack) {
    default:
    case "blastOff": {
      return blastOffTokenCache;
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

export const getCardData = async (tokenId: string, set: string) => {
  const cardId = parseInt(tokenId.substr(0, 2));
  const { imageUrl, card, rarity } = BLAST_OFF_COLLECTION[cardId];
  const nft: PokemoonNft = { tokenId, imageUrl, ...card, rarity };

  nft.glbUrl = `/models/${set}/${imageUrl.replace(".png", ".glb")}`;
  nft.imageUrl = `/images/cards/${set}/${imageUrl}`;
  nft.set = set;
  nft.packId = getTokenCache(set)[tokenId];

  return nft;
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
  await collectMissingPacks(missingPacks, pack);

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

  const multiCallResponse = await multicall(BlastOffAbi, calls);
  let index = 0;
  for (const res of multiCallResponse) {
    const packId = packIds[index];
    const { card1, card2, card3, card4, card5 } = res;
    const cache = getPackCache(pack);

    cache[packId] = [card1, card2, card3, card4, card5];
    cache["card1"] = packId;
    cache["card2"] = packId;
    cache["card3"] = packId;
    cache["card4"] = packId;
    cache["card5"] = packId;
    index += 1;
  }
};
