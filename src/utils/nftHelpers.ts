import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import { PokemoonNft } from "nft-uikit";

const ERROR_NFT: PokemoonNft = {
  tokenId: "69420",
  imageUrl: "errorNft.png",
};

/**
 * Returns a PokemoonNft equivalent to the one represented in the tokenUri response.
 * @param uriRes response from a tokenUri(address) call
 * @returns PokemoonNft object equivalent of nft
 */
export const getNftFromUriRes = (uriRes: any) => {
  // TODO:
  let nft: PokemoonNft = {
    tokenId: "",
    imageUrl: "",
  };
  return nft;
};

/**
 * Returns the PokemoonNft represented by a given tokenId
 * @param tokenId
 * @returns PokemoonNft
 */
export const getNftFromMasterTokenId = (tokenId: string) => {
  // slice off the first 2 characters from tokenId
  if (BLAST_OFF_COLLECTION.findIndex((card) => card.tokenId === tokenId)) {
    return BLAST_OFF_COLLECTION.filter((tokenId) => tokenId)[0];
  } else {
    console.error("Not a master tokenId");
    return ERROR_NFT;
  }
};
