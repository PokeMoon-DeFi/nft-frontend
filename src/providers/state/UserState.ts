import { createSlice, createAsyncThunk, Action } from "@reduxjs/toolkit";
import { getBep20Contract, getNftContract } from "utils/contractHelpers";
import BigNumber from "bignumber.js";
import { getAddressFromSymbol } from "utils/contractHelpers";
import Web3 from "web3";
import contracts, { test_address } from "config/constants/contracts";

interface Balance {
  [key: string]: BigNumber;
}

interface State {
  balance: Balance;
  // this might be wrong or we can actually sanitize the returns to pokemoonNft objects because we need to get the card data from the tokenUri.
  nfts: string[];
}

const initialState: State = {
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
    const contracts = {
      mnt: getBep20Contract(getAddressFromSymbol("mnt")),
      kbn: getBep20Contract(getAddressFromSymbol("kbn")),
      pb2114: getBep20Contract(getAddressFromSymbol("pb2114")),
    };

    // TODO: Convert to multicall
    if (account) {
      const mntRes = await contracts.mnt.methods.balanceOf(account).call();
      const kbnRes = await contracts.kbn.methods.balanceOf(account).call();
      const pb2114Res = await contracts.pb2114.methods
        .balanceOf(account)
        .call();
      return {
        balance: {
          mnt: new BigNumber(Web3.utils.fromWei(mntRes)),
          kbn: new BigNumber(Web3.utils.fromWei(kbnRes)),
          pb2114: new BigNumber(Web3.utils.fromWei(pb2114Res)),
        },
      };
    }
    console.error("Web3 account fail. Using initialState.")
    return {
      balance: initialState.balance
    };
  }
);

// TODO: Sanitize response by getting nested tokenUri calls for each tokenId
// Also, data tying tokenId->tokenUri data should only be called cached in the future since it will not change. (Not necessary for now)
export const asyncFetchNfts = createAsyncThunk(
  "user/asyncFetchNfts",
  async ({ account }: ThunkAction, thunkAPI) => {
    const contract = getNftContract();
    // Test address (Deployer)
    const address = test_address;
    // TODO: Convert to multicall
    if (account) {
      const res = await contract.methods.tokensOwned(account).call();
      console.log(`PokeMoonCollectibles:TokensOwned(${account})`, res)
      return {
        nfts: res
      };
    }
    return {
      nfts: []
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
    }
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
