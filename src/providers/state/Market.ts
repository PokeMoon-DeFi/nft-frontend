import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Contract } from "ethers-multicall";
import { Contract as ethersContract } from "ethers";
import { BigNumber, ethers } from "ethers";
import contracts from "config/constants/contracts";
import marketAbi from "config/abi/Marketplace.json";
import { call, getRpcUrl, safeAwait, toNumber } from "utils/callHelpers";
import { getCardData } from "utils/nftHelpers";
import { PokemoonNft } from "config/constants/nfts/types";
import { TransactionReceipt } from "web3-core";
import { getNftAbiByName, getNftAddressByName } from "utils/contractHelpers";
import { RootState } from "providers";

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
  pending?: PendingAction | undefined;
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
    const call = contract.functions.cancelOrder(tokenId.toString());
    const [transaction, error] = await safeAwait(call);

    if (error) {
      return rejectWithValue(error);
    } else {
      const { hash } = transaction;
      return dispatch(executeTransaction(hash));
    }
  }
);

export const giftNft = createAsyncThunk(
  "market/giftNft",
  async (
    { destAddress, tokenId, packName }: any,
    { dispatch, getState, rejectWithValue }
  ) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const account = (getState() as RootState).user.address;
    const nftAbi = getNftAbiByName(packName);
    const nftAddress = getNftAddressByName(packName);
    const contract = new ethersContract(
      nftAddress,
      nftAbi,
      provider.getSigner()
    );
    const call = contract.functions.transferFrom(account, destAddress, tokenId);
    const [tx, error] = await safeAwait(call);

    if (error) {
      return rejectWithValue(error);
    } else {
      return dispatch(executeTransaction(tx.hash));
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

    const call = contract.functions.placeOrder(
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
    const call = contract.takeOrder(tokenId.toString());

    const [transaction, error] = await safeAwait(call);
    console.log(transaction, error);
    if (error) {
      return rejectWithValue(error);
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
    const call = contract.functions.updateOrder(tokenId, price);
    const [transaction, error] = await safeAwait(call);

    if (error) {
      return rejectWithValue(error);
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
      contract.listingLength(),
      contract["x0000000000000001"](),
      contract.getListing(),
    ];
    const response = await call(calls);

    let [listingsCount, burnPercent, listingInfo] = response;

    burnPercent = toNumber(burnPercent) / 10000;

    const listings: any = [];
    // console.log(listingInfo);
    const [ids, prices] = listingInfo;
    // console.log(ids.map((d) => console.log(BigNumber.from(d).toString())));
    // console.log(prices.map((d) => console.log(BigNumber.from(d).toString())));

    for (let info of listingInfo) {
      const { pricing, tokenId } = info;
      const id = toNumber(tokenId);
      const data: PokemoonNft = await getCardData(id.toString(), "blastOff");
      const price = toNumber(pricing);
      data.price = price;
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
  reducers: {
    clearMessage: (state) => {
      state.pending = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchListings.fulfilled, (state, { payload }) => {
      state.burnPercent = payload.burnPercent;
      state.listings = payload.listings;
    });

    //SEND A GIFT
    builder.addCase(giftNft.pending, (state) => {
      state.pending = {
        status: "pending",
        message: "Waiting for Approval",
      };
    });

    builder.addCase(giftNft.rejected, (state) => {
      state.pending = {
        status: "rejected",
        message: "Transfer Rejected",
      };
    });

    builder.addCase(giftNft.fulfilled, (state) => {
      state.pending = {
        status: "fulfilled",
        message: "Transfer Succeeded",
      };
    });

    //POST A LISTING
    builder.addCase(postListing.pending, (state, { payload, meta }) => {
      state.pending = {
        type: "post",
        status: "pending",
        message: "Waiting For Approval",
      };
    });
    builder.addCase(postListing.fulfilled, (state, { payload, meta }) => {
      state.pending = { type: "post", status: "fulfilled", message: "Posted!" };
    });
    builder.addCase(postListing.rejected, (state, { payload }) => {
      console.log("post listing canceled");
      state.pending = {
        type: "post",
        status: "rejected",
        message: "Rejected!",
      };
    });

    //BUY A LISTING
    builder.addCase(buyListing.pending, (state, { payload }) => {
      state.pending = { type: "buy", status: "pending", message: "Buying..." };
    });
    builder.addCase(buyListing.fulfilled, (state, { payload }) => {
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

export const { clearMessage } = marketSlice.actions;

export default marketSlice.reducer;
