import BigNumber from "bignumber.js";
import { PokemoonNft } from "config/constants/nfts/types";

export interface ThunkAction {
  account: string;
}

export interface Balance {
  [key: string]: BigNumber;
}

export interface UserNftState {
  cards: PokemoonNft[];
  packs: string[];
}

export interface UserState {
  balance: Balance;
  nfts: UserNftState;
}

export interface NftDataState {
  packsMinted: number;
  cardsMinted: number;
  ballsBurned: number;
}

/**
 * Price vs USD
 */
export interface PriceState {
  [key: string]: number;
}
