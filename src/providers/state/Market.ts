import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Contract } from "ethers-multicall";
import { Contract as ethersContract } from "ethers";
import { BigNumber, ethers } from "ethers";
import contracts from "config/constants/contracts";
import marketAbi from "config/abi/Marketplace.json";
import { call, getRpcUrl, safeAwait, toNumber } from "utils/callHelpers";
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

export const executeTransaction = createAsyncThunk(
  "market/pendingTransaction",
  async (hash: string) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const result = await provider.waitForTransaction(hash);
    return result;
  }
);

export const cancelListing = createAsyncThunk(
  "market/cancelListing",
  async (tokenId: any, { dispatch }) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    const contract = new ethersContract(
      marketplace,
      marketAbi,
      provider.getSigner()
    );
    const transaction = await contract.functions.DischargeTFT(
      tokenId.toString()
    );

    await dispatch(executeTransaction(transaction.hash));
    return transaction;
  }
);

export const postListing = createAsyncThunk(
  "market/postListing",
  //Only 1 object can passed through, so pack all params you need into 1 object
  async ({ tokenId, price }: any, { getState, dispatch }) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const contract = new ethersContract(
      marketplace,
      marketAbi,
      provider.getSigner()
    );

    const call = contract.functions.MakeTFT(tokenId.toString(), price);
    const [transaction, error] = await safeAwait(call);
    if (error) {
      throw error;
    } else {
      dispatch(executeTransaction(transaction));
    }

    return transaction;
  }
);

export const buyListing = createAsyncThunk(
  "market/buyListing",
  async ({ tokenId }: any, { dispatch }) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const contract = new ethersContract(
      marketplace,
      marketAbi,
      provider.getSigner()
    );
    const transaction = await contract.TakeTFT(tokenId);
    dispatch(executeTransaction(transaction.hash));
  }
);

export const updateListing = createAsyncThunk(
  "market/updateListing",
  async ({ account, tokenId, price }: any, { dispatch }) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const contract = new ethersContract(
      marketplace,
      marketAbi,
      provider.getSigner()
    );
    const transaction = await contract.functions.UpdateTFT(tokenId, price);
    dispatch(executeTransaction(transaction.hash));
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
    builder.addCase(postListing.pending, (state, { payload }) => {
      console.log("post listing pending" + payload);
    });
    builder.addCase(postListing.fulfilled, (state, { payload }) => {
      console.log("post listing completed " + payload);
    });
    builder.addCase(buyListing.pending, (state, { payload }) => {
      console.log("buy listing pending" + payload);
    });
    builder.addCase(buyListing.fulfilled, (state, { payload }) => {
      console.log("buy listing fulfilled" + payload);
    });
    builder.addCase(cancelListing.pending, (state, { payload }) => {
      console.log("cancel listing pending" + payload);
    });
    builder.addCase(cancelListing.fulfilled, (state, { payload }) => {
      console.log("cancel listing fulfilled" + payload);
    });
  },
});

export default marketSlice.reducer;
