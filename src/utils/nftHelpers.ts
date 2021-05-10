import BigNumber from "bignumber.js";
import BLAST_OFF_COLLECTION, {
  BLAST_OFF_CARDS,
} from "config/constants/nfts/2114";
import { PokemoonNft } from "config/constants/nfts/types";
import tokenIdToPack from "config/tokenIdToPack.json";
import blastoffPacks from "config/blastOffPacks.json";
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

const isCached = (tokenId) => {
  return Object.keys(tokenIdToPack).includes(tokenId);
};

const isPackCached = (packId) => {
  return Object.keys(blastoffPacks).includes(packId);
};

const getBaseUri = (pack: string) => {
  switch (pack) {
    case "blastOff":
      return "https://storage.pokemoonapis.com/context/token/fde4/identifier/";
    default:
      break;
  }
};

const getCardData = async (tokenId: string, pack: string) => {
  const cardId = parseInt(tokenId.substr(0, 2));
  const { imageUrl, card, rarity } = BLAST_OFF_COLLECTION[cardId];
  const nft: PokemoonNft = { tokenId, imageUrl, ...card, rarity };
  nft.gifUrl = getBaseUri(pack) + tokenId + ".gif";
  nft.glbUrl = getBaseUri(pack) + tokenId + ".glb";
  nft.set = pack;
  nft.packId = tokenIdToPack[tokenId];

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

  const missingPacks = packs.filter((packId) => !isPackCached(packId));
  await collectMissingPacks(missingPacks);

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

const collectMissingPacks = async (packIds: string[]) => {
  const nftAddresses: { [key: string]: string } = {
    blastOff: contracts.blastOff[process.env.REACT_APP_CHAIN_ID],
    ampedUp: contracts.ampedUp[process.env.REACT_APP_CHAIN_ID],
  };

  const calls = packIds.map((packId) => {
    return {
      address: nftAddresses.blastOff,
      name: "packedInfo",
      params: [packId],
    };
  });

  const multiCallResponse = await multicall(BlastOffAbi, calls);
  let index = 0;
  for (const res of multiCallResponse) {
    const packId = packIds[index];
    const { card1, card2, card3, card4, card5 } = res;
    blastoffPacks[packId] = [card1, card2, card3, card4, card5];
    tokenIdToPack[card1] = packId;
    tokenIdToPack[card2] = packId;
    tokenIdToPack[card3] = packId;
    tokenIdToPack[card4] = packId;
    tokenIdToPack[card5] = packId;
    index += 1;
  }
};
