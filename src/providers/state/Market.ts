import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Contract } from "ethers-multicall";
import { BigNumber } from "ethers";
import contracts from "config/constants/contracts";
import marketAbi from "config/abi/Marketplace.json";
import { call, toNumber } from "utils/callHelpers";

const marketplace = contracts.marketplace[56];

interface Listing {
  id: number;
  price: number;
}

interface MarketState {
  listings: Listing[];
  burnPercent: number;
}

const initialState: MarketState = {
  listings: [],
  burnPercent: 0,
};

export const fetchListings = createAsyncThunk(
  "market/fetchListings",
  async () => {
    const contract = new Contract(marketplace, marketAbi);
    const calls = [
      contract.TFTLength(),
      contract["dbe431f9"](),
      contract.getTFT(),
    ];
    const response = await call(calls);
    let [listingsCount, burnPercent, listingInfo] = response;

    burnPercent = toNumber(burnPercent) / 10000;

    const listings: any = [];
    const [ids, prices] = listingInfo;

    for (let i = 0; i < listingsCount; i++) {
      const id = toNumber(ids[i]);
      const price = toNumber(prices[i]);
      listings.push({
        id,
        price,
      });
      console.log({ id, price });
    }
    return { listings, burnPercent };
  }
);

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListings.fulfilled, (state, { payload }) => {
      state.burnPercent = payload.burnPercent;
      state.listings = payload.listings;
    });
  },
});

export default marketSlice.reducer;
