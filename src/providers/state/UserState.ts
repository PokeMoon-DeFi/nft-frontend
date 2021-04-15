import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const asyncFetchBalance = createAsyncThunk(
  "user/asyncFetchBalance",
  async () => {
    return { symbol: "kbn", balance: 10 };
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
