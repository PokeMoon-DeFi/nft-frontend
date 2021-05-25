import BigNumber from "bignumber.js";
import { PokemoonNft } from "config/constants/nfts/types";

export interface UserState {
  balance: {
    meownaut: string;
    koban: string;
    pb2114: string;
    pb2116: string;
  };
  nftBalance: {
    blastOff: {
      cards: PokemoonNft[];
      packs: string[];
    };
    ampedUp: {
      cards: PokemoonNft[];
      packs: string[];
    };
  };
}

/**
 * Prices vs USD
 */
export interface PriceState {
  bnb: number;
  meownaut: number;
  koban: number;
  pb2114: number;
  pb2116: number;
}
