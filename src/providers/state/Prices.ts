import { createSlice } from "@reduxjs/toolkit";

// TODO: ALL

interface Prices {
  [key: string]: number;
}

interface State {
  prices: Prices;
}

const initialState: State = {
  prices: {
    mnt: 1,
  },
};

export const priceData = createSlice({
  name: "priceState",
  initialState,
  reducers: {
    setPrices: (state, action) => {
      const { prices } = action.payload;
      state.prices = prices;
    },
  },
});

export const { setPrices } = priceData.actions;
export default priceData.reducer;
