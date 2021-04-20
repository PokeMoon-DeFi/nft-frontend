import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTotalMinted } from "utils/callHelpers";
import { NftDataState, ThunkAction } from "./types";

// TODO: ALL
const initialState: NftDataState = {
  packsMinted: 0,
  cardsMinted: 0,
  ballsBurned: 0,
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
        packsMinted: packsMinted,
        cardsMinted: cardsMinted,
        ballsBurned: ballsBurned,
      };
    }
    console.error("Web3 failed to retrieve NFT Data.");
    return {
      packsMinted: 0,
      cardsMinted: 0,
      ballsBurned: 0,
    };
  }
);

export const nftDataState = createSlice({
  name: "nftDataState",
  initialState,
  reducers: {
    setData: (state, action) => {
      const { packsMinted, ballsMinted, ballsBurned } = action.payload;
      state.packsMinted = packsMinted;
      state.cardsMinted = ballsMinted;
      state.ballsBurned = ballsBurned;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncFetchNftData.fulfilled, (state, action) => {
      const { packsMinted, cardsMinted, ballsBurned } = action.payload;
      state.packsMinted = packsMinted;
      state.cardsMinted = cardsMinted;
      state.ballsBurned = ballsBurned;
    });
  },
});

export const { setData } = nftDataState.actions;
export default nftDataState.reducer;
