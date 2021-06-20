import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Contract } from "ethers-multicall";
import { Contract as ethersContract } from "ethers";
import { BigNumber, ethers } from "ethers";
import contracts from "config/constants/contracts";
import marketAbi from "config/abi/Marketplace.json";
import { call, getRpcUrl, safeAwait, toNumber } from "utils/callHelpers";
import { getCardData } from "utils/nftHelpers";
import { PokemoonNft } from "config/constants/nfts/types";
import { Metamask } from "nft-uikit";
import { TransactionReceipt } from "web3-core";
import { reject } from "lodash";

const marketplace = contracts.marketplace[56];

interface Listing {
  id: number;
  price: number;
  data: PokemoonNft;
}

interface PendingAction {
  type?: string;
  status: string;
  message?: string;
}

interface MarketState {
  listings: Listing[];
  burnPercent: number;
  pending?: PendingAction;
}

interface ExecutionRequest {
  hash: string;
  type: string;
}

interface ExecutionResult extends ExecutionRequest {
  receipt?: TransactionReceipt;
  error?: any;
}

const initialState: MarketState = {
  listings: [],
  burnPercent: 0,
};

export const executeTransaction = createAsyncThunk(
  "market/pendingTransaction",
  async (hash: string, { rejectWithValue }) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const [receipt, error] = await safeAwait(provider.waitForTransaction(hash));
    if (error) {
      return rejectWithValue(error);
    }
    return receipt;
  }
);

export const cancelListing = createAsyncThunk(
  "market/cancelListing",
  async (tokenId: any, { dispatch, rejectWithValue }) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    const contract = new ethersContract(
      marketplace,
      marketAbi,
      provider.getSigner()
    );
    const call = contract.functions.DischargeTFT(tokenId.toString());
    const [transaction, error] = await safeAwait(call);

    if (error) {
      return rejectWithValue(error);
    } else {
      const { hash } = transaction;
      return dispatch(executeTransaction(hash));
    }
  }
);

export const postListing = createAsyncThunk(
  "market/postListing",
  //Only 1 object can passed through, so pack all params you need into 1 object
  async ({ tokenId, price }: any, { dispatch, rejectWithValue }) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const contract = new ethersContract(
      marketplace,
      marketAbi,
      provider.getSigner()
    );

    const call = contract.functions.MakeTFT(
      tokenId.toString(),
      price.toString()
    );
    const [transaction, error] = await safeAwait(call);

    if (error) {
      return rejectWithValue(error);
    } else {
      const { hash } = transaction;
      return dispatch(executeTransaction(hash));
    }
  }
);

export const buyListing = createAsyncThunk(
  "market/buyListing",
  async (tokenId: any, { dispatch, rejectWithValue }) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const contract = new ethersContract(
      marketplace,
      marketAbi,
      provider.getSigner()
    );
    const call = contract.TakeTFT(tokenId);
    const [transaction, error] = await safeAwait(call);
    if (error) {
      rejectWithValue(error);
    } else {
      return dispatch(executeTransaction(transaction.hash));
    }
  }
);

export const updateListing = createAsyncThunk(
  "market/updateListing",
  async ({ tokenId, price }: any, { dispatch, rejectWithValue }) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const contract = new ethersContract(
      marketplace,
      marketAbi,
      provider.getSigner()
    );
    const call = contract.functions.UpdateTFT(tokenId, price);
    const [transaction, error] = await safeAwait(call);

    if (error) {
      rejectWithValue(error);
    } else {
      return dispatch(executeTransaction(transaction.hash));
    }
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

    //POST A LISTING
    builder.addCase(postListing.pending, (state, { payload, meta }) => {
      state.pending = {
        type: "post",
        status: "pending",
        message: "Waiting For Approval",
      };
      console.log("post listing pending");
    });
    builder.addCase(postListing.fulfilled, (state, { payload, meta }) => {
      state.pending = { type: "post", status: "fulfilled", message: "Posted!" };
      console.log("post listing completed ", payload);
    });
    builder.addCase(postListing.rejected, (state, { payload }) => {
      state.pending = {
        type: "post",
        status: "rejected",
        message: "Rejected!",
      };
    });

    //BUY A LISTING
    builder.addCase(buyListing.pending, (state, { payload }) => {
      console.log("buy listing pending", payload);
      state.pending = { type: "buy", status: "pending", message: "Buying..." };
    });
    builder.addCase(buyListing.fulfilled, (state, { payload }) => {
      console.log("buy listing fulfilled", payload);
      state.pending = { type: "buy", status: "fulfilled", message: "Bought!" };
    });
    builder.addCase(buyListing.rejected, (state) => {
      state.pending = { type: "buy", status: "rejected" };
    });

    //CANCEL A LISTING
    builder.addCase(cancelListing.pending, (state, { payload }) => {
      state.pending = {
        type: "cancel",
        status: "pending",
        message: "Waiting for Approval",
      };
    });
    builder.addCase(cancelListing.fulfilled, (state, { payload }) => {
      console.log("cancel listing fulfilled", payload);
      state.pending = {
        type: "cancel",
        status: "fulfilled",
        message: "Success!",
      };
    });
    builder.addCase(cancelListing.rejected, (state, { payload }) => {
      console.log("cancel listing rejected", payload);
      state.pending = {
        type: "cancel",
        status: "rejected",
        message: "Rejected!",
      };
    });

    //UPDATE LISTING
    builder.addCase(updateListing.pending, (state) => {
      state.pending = {
        status: "pending",
        message: "Waiting for Approval",
      };
    });
    builder.addCase(updateListing.fulfilled, (state, { payload }) => {
      state.pending = {
        status: "fulfilled",
        message: "Updated!",
      };
    });
    builder.addCase(updateListing.rejected, (state) => {
      state.pending = {
        status: "rejected",
        message: "Something went wrong",
      };
    });

    //GENERIC HANDLER
    builder.addCase(executeTransaction.pending, (state, { payload }: any) => {
      state.pending = {
        type: "default",
        status: "pending",
        message: "Executing..",
      };
    });
    builder.addCase(executeTransaction.rejected, (state, { payload }: any) => {
      state.pending = {
        type: "default",
        status: "rejected",
        message: "Something went wrong",
      };
    });
    // builder.addCase(executeTransaction.fulfilled, (state, { payload }) => {
    //   state.pending = {
    //     type: "default",
    //     status: "fulfilled",
    //     message: "Completed!",
    //   };
    //   console.log("fulfilled transaction", payload);
    // });
  },
});

export default marketSlice.reducer;
