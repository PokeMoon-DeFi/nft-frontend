export interface ArtistInfo {
    name: string;
    instagram?: string;
    address?: string;
}
/**
 * PokeMoon Card: number, name, type, set, description/blurb, and artist info
 */
export interface PokemoonCard {
    number: number;
    name: string;
    type: string;
    set: string;
    description: string;
    artist?: ArtistInfo;
}
/**
 * PokeMoon NFT with unique pair tokenId and rarity. PokeMoon card info is
 * shared across multiple tokenIds
 */
export interface PokemoonNft {
    tokenId: string;
    imageUrl: string;
    card?: PokemoonCard;
    rarity?: string;
}
