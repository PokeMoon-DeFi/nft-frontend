import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Contract } from "ethers-multicall";
import { Contract as ethersContract } from "ethers";
import { BigNumber, ethers } from "ethers";
import contracts from "config/constants/contracts";
import marketAbi from "config/abi/Marketplace.json";
import { call, getRpcUrl, toNumber } from "utils/callHelpers";
import { getCardData } from "utils/nftHelpers";
import { PokemoonNft } from "config/constants/nfts/types";

const marketplace = contracts.marketplace[56];

interface Listing {
  id: number;
  price: number;
  data: PokemoonNft;
}

interface MarketState {
  listings: Listing[];
  burnPercent: number;
}

const initialState: MarketState = {
  listings: [],
  burnPercent: 0,
};

export const cancelListing = createAsyncThunk(
  "market/cancelListing",
  async (tokenId) => {
    //Not tested
    const contract = new Contract(marketplace, marketAbi);
    const calls = [contract.DischargeTFT(tokenId)];
    const response = await call(calls);
    console.log(response);
  }
);

export const postListing = createAsyncThunk(
  "market/postListing",
  //Only 1 object can passed through, so pack all params you need into 1 object
  async ({ tokenId, price }: any, { getState }) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    const signer = provider.getSigner();
    const contract = new ethersContract(marketplace, marketAbi, signer);
    const transaction = await contract.functions.MakeTFT(tokenId, 900000);

    console.log(transaction);
    const response = await provider.waitForTransaction(transaction.hash);

    //transaction completed
    console.log(response);
  }
);

export const buyListing = createAsyncThunk(
  "market/buyListing",
  async ({ account, tokenId }: any) => {
    //Not tested
    const contract = new Contract(marketplace, marketAbi);
    const response = await contract.TakeTFT(tokenId, { from: account });
    console.log(response);
  }
);

export const updateListing = createAsyncThunk(
  "market/updateListing",
  async ({ account, tokenId, price }: any) => {
    //Not tested
    const contract = new Contract(marketplace, marketAbi);
    const response = await contract.UpdateTFT(tokenId, price, {
      from: account,
    });
    console.log(response);
  }
);

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
      const data = await getCardData(id.toString(), "blastOff");
      const price = toNumber(prices[i]);
      listings.push({
        id,
        price,
        data,
      });
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
