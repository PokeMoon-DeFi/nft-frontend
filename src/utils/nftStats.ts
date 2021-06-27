import { RARITIES } from "config/constants/nfts";
import { PokemoonNft } from "config/constants/nfts/types";
export interface Rarities {
  [key: string]: number;
  [RARITIES.COMMON]: number;
  [RARITIES.UNCOMMON]: number;
  [RARITIES.RARE]: number;
  [RARITIES.LEGENDARY]: number;
  [RARITIES.MOONLIKE]: number;
}

//@ts-ignore
export const getRarities = (nfts: PokemoonNft[] | undefined) => {
  const rarityCount = nfts?.reduce(
    (acc, curr) => {
      const rarity = curr.rarity;
      if (!!rarity && rarity in acc) {
        //@ts-ignore
        acc[rarity] = acc[rarity] + 1;
      }
      return acc;
    },
    {
      [RARITIES.COMMON]: 0,
      [RARITIES.UNCOMMON]: 0,
      [RARITIES.RARE]: 0,
      [RARITIES.LEGENDARY]: 0,
      [RARITIES.MOONLIKE]: 0,
    }
  );
  return rarityCount;
};
