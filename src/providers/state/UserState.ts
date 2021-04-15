import { createSlice, createAsyncThunk, Action } from "@reduxjs/toolkit";
import { getBep20Contract } from "utils/contractHelpers";
import BigNumber from "bignumber.js";
import { getAddressFromSymbol } from "utils/contractHelpers";
import Web3 from "web3";

interface Balance {
  [key: string]: BigNumber;
}

interface State {
  balance: Balance;
}

const initialState: State = {
  balance: {
    pb2114: new BigNumber(0),
    kbn: new BigNumber(0),
    mnt: new BigNumber(0),
  },
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
    return {
      balance: {
        kbn: new BigNumber(0),
        mnt: new BigNumber(0),
        pb2114: new BigNumber(0),
      },
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
  },
  extraReducers: (builder) => {
    builder.addCase(asyncFetchBalance.fulfilled, (state, action) => {
      const { balance }: any = action.payload;
      state.balance = balance;
    });
  },
});

export const { setBalance } = userState.actions;
export default userState.reducer;
