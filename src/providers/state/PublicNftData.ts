import { createSlice } from "@reduxjs/toolkit";
import BigNumber from "bignumber.js";

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

export const publicNftState = createSlice({
  name: "publicNftState",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      const { balance } = action.payload;
      state.balance = balance;
    },
  },
});

export const { setBalance } = publicNftState.actions;
export default publicNftState.reducer;
