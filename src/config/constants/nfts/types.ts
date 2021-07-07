/**
 * Artist data attached to cards
 */
export interface ArtistInfo {
  name: string;
  instagram?: string;
  address?: string;
}

/**
 * PokeMoon NFT with unique tokenId and asset for each card number + rarity. PokeMoon card info is shared across multiple tokenIds
 */
export interface PokemoonNft {
  tokenId: string;
  isPack?: boolean;
  set: string;
  imageUrl: string;
  rarity?: string;
  number?: number;
  name?: string;
  type?: string;
  description?: string;
  gifUrl?: string;
  glbUrl?: string;
  tokenUriResponse?: any;
  artist?: ArtistInfo;
  packId?: string;
  price?: number;
}

/**
 * ERC-721 that can be evaluated back to master NFT data
 */
export interface PokemoonPack {
  name?: string;
  pokeball?: string;
  nfts?: PokemoonNft[];
  packId: string;
  imageUrl?: string;
}

export interface TokenUriResponse {
  attributes: Attribute[];
  description: string;
  external_url: string;
  image: string;
  animation_url: string;
  name: string;
}

export interface Attribute {
  trait_type: string;
  value: number | string;
  display_type?: string;
  max_value?: number;
}
