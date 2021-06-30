import BigNumber from "bignumber.js";
import { PokemoonNft } from "config/constants/nfts/types";

interface Balance {
  cards: PokemoonNft[];
  packs: string[];
}
export interface UserState {
  address: string;

  balance: {
    meownaut: string;
    koban: string;
    pb2114: string;
    pb2116: string;
    apb: string;
  };
  nftBalance: {
    blastOff: Balance;
    ampedUp: Balance;
    meanGreens: Balance;
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
  apb: number;
}
