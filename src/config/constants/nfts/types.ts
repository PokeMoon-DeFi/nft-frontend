/**
 * Artist data attached to cards
 */
export interface ArtistInfo {
  name: string;
  instagram?: string;
  address?: string;
}

/**
 * PokeMoon card data that is reused by similar NFTs with different rarities
 */
export interface PokemoonCard {
  number: number;
  name: string;
  type: string;
  description: string;
  artist?: ArtistInfo;
}

/**
 * PokeMoon NFT with unique tokenId and asset for each card number + rarity. PokeMoon card info is shared across multiple tokenIds
 */
export interface PokemoonNft {
  tokenId: string;
  imageUrl: string;
  card?: PokemoonCard;
  set?: string;
  rarity?: string;
}

/**
 * ERC-721 that can be evaluated back to master NFT data
 */
export interface BlastoffPack {
  packId: string;
  cards: PokemoonNft[];
}
