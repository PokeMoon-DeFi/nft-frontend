import BigNumber from "bignumber.js";
import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import AMPED_UP_COLLECTION from "config/constants/nfts/2116";
import MEAN_GREENS_COLLECTION from "config/constants/nfts/APB";
import { PokemoonNft } from "config/constants/nfts/types";
import blastOffTokenCache from "config/constants/cache/blastOff/tokenIdToPack.json";
import blastOffPackCache from "config/constants/cache/blastOff/blastOffPacks.json";
import contracts from "config/constants/contracts";
import multicall from "utils/multicall";
import BlastOffAbi from "config/abi/BlastOff.json";
import AmpedUpAbi from "config/abi/AmpedUp.json";
import MeanGreensAbi from "config/abi/MeanGreens.json";
import ampedUpTokens from "config/constants/cache/ampedUp/ampedUpTokens.json";
import ampedUpPacks from "config/constants/cache/ampedUp/ampedUpPacks.json";

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
    case "meanGreens": {
      return MEAN_GREENS_COLLECTION;
    }
  }
};

export const getFlatCollection = (packs: string[]) => {
  const result: any[] = [];
  let lastPackAmount = 0;

  for (const pack of packs.reverse()) {
    const vals = Object.values(getCollection(pack));
    const nfts: any[] = [];

    for (const val of vals) {
      const { card, ...nft } = val;
      const glbUrl = `/models/${pack}/` + nft.imageUrl.replace(".png", ".glb");
      const imageUrl = `/images/cards/${pack}/${nft.imageUrl}`;
      const number = lastPackAmount + card.number;
      const flattened = {
        ...nft,
        ...card,
        glbUrl,
        imageUrl,
        set: pack,
        number,
      };
      nfts.push(flattened);
    }
    lastPackAmount = nfts.length;
    result.push(...nfts.sort((a, b) => a.number - b.number));
  }

  return result;
};

const getPackCache = (pack: string) => {
  switch (pack) {
    case "blastOff": {
      return blastOffPackCache;
    }
    case "ampedUp": {
      return ampedUpPacks;
    }
    // case "meanGreens": {
    //   return meanGreensPacks;
    // }
    default:
      return {};
  }
};

const getTokenCache = (pack: string) => {
  switch (pack) {
    case "blastOff": {
      return blastOffTokenCache;
    }
    case "ampedUp": {
      return ampedUpTokens;
    }
    default:
      return {};
  }
};

const getAbi = (pack: string) => {
  switch (pack) {
    case "blastOff": {
      return BlastOffAbi;
    }
    case "ampedUp": {
      return AmpedUpAbi;
    }
    case "meanGreens": {
      return MeanGreensAbi;
    }
    default: {
      return MeanGreensAbi;
    }
  }
};

const isTokenCached = (tokenId, pack) => {
  return Object.keys(getTokenCache(pack)).includes(tokenId);
};

const isPackCached = (packId, pack) => {
  return Object.keys(getPackCache(pack)).includes(packId);
};

export const getCardData = async (tokenId: string, set: string, cache = {}) => {
  const cardId = parseInt(tokenId.substr(0, 2));
  const collection = getCollection(set);
  const { imageUrl, card, rarity } = collection[cardId];
  const nft: PokemoonNft = { tokenId, imageUrl, ...card, rarity };

  nft.glbUrl = `/models/${set}/${imageUrl.replace(".png", ".glb")}`;
  nft.imageUrl = `/images/cards/${set}/${imageUrl}`;
  nft.set = set;
  let usedCache = cache ?? getTokenCache(set);
  nft.packId = usedCache[tokenId];

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

  const tokenCache = await collectMissingPacks(missingPacks, pack);
  if (pack === "meanGreens") {
    console.log(tokenCache);
  }
  for (const tokenId of tokenIds) {
    if (tokenId.toNumber() < 11000000) {
    } else {
      cards.push(
        await getCardData(tokenId.toString(), pack, tokenCache ?? undefined)
      );
    }
  }

  // 1 we have the map jsons for blastoff ampedup
  // 1.5 both done can always rely on json to be updated on local storage init
  // 2 get finite() call compare to json length
  // 3 multicall for the difference of finite (total pack ids) and local storage length
  // 4 update localstorage variables

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
    meanGreens: contracts.meanGreens[process.env.REACT_APP_CHAIN_ID],
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
