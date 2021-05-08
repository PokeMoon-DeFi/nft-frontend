import BigNumber from "bignumber.js";
import { PokemoonNft } from "config/constants/nfts/types";

const isPack = (tokenId: BigNumber) => {
  let isPack: boolean;
  tokenId.isLessThan(new BigNumber(11000000))
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
  const card: PokemoonNft = {
    tokenId: tokenId,
    isPack: false,
    set: pack,
    imageUrl: getBaseUri(pack)?.concat(tokenId) ?? "",
  };
  return card;
};

export const handleTokenIdResponse = (tokenIds: BigNumber[], pack: string) => {
  const packs: string[] = [];
  const cards: PokemoonNft[] = [];
  tokenIds.forEach((tokenId: BigNumber) => {
    if (isPack(tokenId)) {
      packs.push(tokenId.toString());
    } else {
      const card: PokemoonNft = getCardData(tokenId.toString(), pack);
    }
  });
  return { pack: { packs, cards } };
};
