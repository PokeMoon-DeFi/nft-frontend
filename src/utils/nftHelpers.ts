import BigNumber from "bignumber.js";
import BLAST_OFF_COLLECTION, {
  BLAST_OFF_CARDS,
} from "config/constants/nfts/2114";
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
  const cardId = parseInt(tokenId.substr(0, 2));
  const { tokenId: id, imageUrl, card, rarity } = BLAST_OFF_COLLECTION[cardId];
  const nft: PokemoonNft = { id, imageUrl, ...card, rarity };
  nft.gifUrl = getBaseUri(pack) + tokenId + ".gif";
  nft.glbUrl = getBaseUri(pack) + tokenId + ".glb";
  return nft;
};

export const handleTokenIdResponse = (tokenIds: BigNumber[], pack: string) => {
  const packs: string[] = [];
  const cards: PokemoonNft[] = [];

  tokenIds.forEach((tokenId: BigNumber) => {
    if (tokenId.toNumber() < 11000000) {
      packs.push(tokenId.toString());
    } else {
      cards.push(getCardData(tokenId.toString(), pack));
    }
  });

  return { [pack]: { packs, cards } };
};
