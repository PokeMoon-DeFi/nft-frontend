import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contracts from "constants/contracts";
import { getBep20Contract } from "utils/contractHelper";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";

interface Balance {
  [key: string]: number;
}

interface State {
  balance: Balance;
}

const initialState: State = {
  balance: {
    pb2114: 0,
  },
};

interface ThunkAction {
  symbol: string;
  account?: string;
}

export const asyncFetchBalance = createAsyncThunk(
  "user/asyncFetchBalance",
  async ({ symbol, account }: ThunkAction, thunkAPI) => {
    //TODO: Wrap this with a getAddress utility
    const address = contracts[symbol][56];
    const contract = getBep20Contract(address);

    if (account) {
      const res = await contract.methods.balanceOf(account).call();
      return { symbol: "koban", balance: new BigNumber(res).toNumber() };
    }
    return { symbol: "koban", balance: 0 };
  }
);

export const userState = createSlice({
  name: "user",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      const { symbol, balance } = action.payload;
      state.balance[symbol] = balance;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncFetchBalance.fulfilled, (state, action) => {
      const { symbol, balance } = action.payload;
      state.balance[symbol] = balance;
    });
  },
});

export const { setBalance } = userState.actions;
export default userState.reducer;
