import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTotalMinted } from "utils/callHelpers";
import { NftDataState, ThunkAction } from "./types";

// TODO: ALL
const initialState: NftDataState = {
  data: {
    packsMinted: 0,
    cardsMinted: 0,
    ballsBurned: 0,
  },
};

export const asyncFetchNftData = createAsyncThunk(
  "user/asyncFetchNftData",
  async ({ account }: ThunkAction, thunkAPI) => {
    if (account) {
      let packsMinted,
        cardsMinted,
        ballsBurned = 0;

      const tmRes = await getTotalMinted();

      return {
        data: {
          packsMinted: packsMinted,
          cardsMinted: cardsMinted,
          ballsBurned: ballsBurned,
        },
      };
    }
    console.error("Web3 failed to retrieve NFT Data.");
    return {
      data: initialState.data,
    };
  }
);

export const nftDataState = createSlice({
  name: "nftDataState",
  initialState,
  reducers: {
    setData: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncFetchNftData.fulfilled, (state, action) => {
      const { data }: any = action.payload;
      state.data = data;
    });
  },
});

export const { setData } = nftDataState.actions;
export default nftDataState.reducer;
