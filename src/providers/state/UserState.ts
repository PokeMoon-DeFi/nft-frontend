import { createSlice, createAsyncThunk, Action } from "@reduxjs/toolkit";
import BigNumber from "bignumber.js";
import { getAddressFromSymbol } from "utils/contractHelpers";
import Web3 from "web3";
import { getBep20Balance, getNftsOwned } from "utils/callHelpers";
import { test_pb } from "config/constants/contracts";
import { UserState } from "./types";
import { PokemoonNft } from "config/constants/nfts/types";
import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";

const initialState: UserState = {
  balance: {
    pb2114: new BigNumber(0),
    kbn: new BigNumber(0),
    mnt: new BigNumber(0),
  },
  nfts: [],
};

interface ThunkAction {
  account: string;
}

export const asyncFetchBalance = createAsyncThunk(
  "user/asyncFetchBalance",
  async ({ account }: ThunkAction, thunkAPI) => {
    const tokens = {
      mnt: getAddressFromSymbol("mnt"),
      kbn: getAddressFromSymbol("kbn"),
      // TODO: pb2114: getAddressFromSymbol("pb2114"),
      pb2114: test_pb,
    };

    // TODO: Convert to multicall
    if (account) {
      const mntRes = await getBep20Balance(tokens.mnt, account);
      const kbnRes = await getBep20Balance(tokens.kbn, account);
      const pb2114Res = await getBep20Balance(tokens.pb2114, account);

      return {
        balance: {
          mnt: new BigNumber(Web3.utils.fromWei(mntRes)),
          kbn: new BigNumber(Web3.utils.fromWei(kbnRes)),
          pb2114: new BigNumber(Web3.utils.fromWei(pb2114Res)),
        },
      };
    }
    console.error("Web3 failed to retrieve balance.");
    return {
      balance: initialState.balance,
    };
  }
);

export const asyncFetchNfts = createAsyncThunk(
  "user/asyncFetchNfts",
  async ({ account }: ThunkAction, thunkAPI) => {
    if (account) {
      const nfts: PokemoonNft[] = [];
      const res = await getNftsOwned(account);
      res.forEach((tokenId: string) => {
        if (tokenId.length === 8) {
          nfts.push(BLAST_OFF_COLLECTION[tokenId.substr(0, 2)]);
        }
      });
      return {
        nfts: nfts,
      };
    }
    console.error("Web3 failed to retrieve nfts.");
    return {
      nfts: [],
    };
  }
);

export const userState = createSlice({
  name: "user",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      const { balance } = action.payload;
      state.balance = balance;
    },
    setNfts: (state, action) => {
      const { nfts } = action.payload;
      state.nfts = nfts;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncFetchBalance.fulfilled, (state, action) => {
      const { balance }: any = action.payload;
      state.balance = balance;
    });
    builder.addCase(asyncFetchNfts.fulfilled, (state, action) => {
      const { nfts }: any = action.payload;
      state.nfts = nfts;
    });
  },
});

export const { setBalance, setNfts } = userState.actions;
export default userState.reducer;
