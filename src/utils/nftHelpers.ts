import BigNumber from "bignumber.js";
import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import { PokemoonNft } from "config/constants/nfts/types";
import tokenIdToPack from "config/tokenIdToPack.json";

const isPack = (tokenId: string) => {
  let isPack: boolean;
  new BigNumber(tokenId).isLessThan(new BigNumber(11000000))
    ? (isPack = true)
    : (isPack = false);
  return isPack;
};

const getBaseUri = (pack: string) => {
  switch (pack) {
    case "Blast Off":
      return "https://storage.pokemoonapis.com/context/token/fde4/identifier/";
    default:
      break;
  }
};

const getCardData = (tokenId: string, pack: string) => {
  if (
    !isPack(tokenId) &&
    Object.keys(BLAST_OFF_COLLECTION).includes(tokenId.substr(0, 2))
  ) {
    switch (pack) {
      case "Blast Off":
        return BLAST_OFF_COLLECTION[parseInt(tokenId.substr(0, 2))];
    }
  }
};

export const handleTokenIdResponse = (tokenIds: BigNumber[], pack: string) => {
  const packs: string[] = [];
  const cards: PokemoonNft[] = [];
  tokenIds.forEach((tokenId: BigNumber) => {
    const card = getCardData(tokenId.toString(), pack);
  });
  return { pack: { packs, cards } };
};
