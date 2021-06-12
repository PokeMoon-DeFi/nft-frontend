import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Contract } from "ethers-multicall";
import { BigNumber } from "ethers";
import contracts from "config/constants/contracts";
import marketAbi from "config/abi/Marketplace.json";
import { call, toNumber } from "utils/callHelpers";

const marketplace = contracts.marketplace[56];

const initialState = {};

export const fetchListings = createAsyncThunk(
  "market/fetchListings",
  async () => {
    const contract = new Contract(marketplace, marketAbi);
    const calls = [contract.TFTLength(), contract.getTFT()];
    const response = await call(calls);
    const [listingsCount, listingInfo] = response;
    const [ids, prices] = listingInfo;

    for (let i = 0; i < listingsCount; i++) {
      const id = toNumber(ids[i]);
      const price = toNumber(prices[i]);
      console.log({ id, price });
    }
  }
);

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListings.fulfilled, (state, { payload }) => {});
  },
});

export default marketSlice.reducer;
