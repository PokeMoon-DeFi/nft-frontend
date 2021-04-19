import BigNumber from "bignumber.js";
import { PokemoonNft } from "config/constants/nfts/types";

export interface Balance {
  [key: string]: BigNumber;
}

export interface UserState {
  balance: Balance;
  nfts: PokemoonNft[];
}
