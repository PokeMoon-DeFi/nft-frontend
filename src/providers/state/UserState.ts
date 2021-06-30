import { createSlice, createAsyncThunk, Action } from "@reduxjs/toolkit";
import BigNumber from "bignumber.js";
import { getAddressFromSymbol } from "utils/contractHelpers";
import Web3 from "web3";
import { getBep20Balance, getNftsOwned } from "utils/callHelpers";
import { UserState } from "./types";
import multicall from "utils/multicall";
import contracts from "config/constants/contracts";
import BlastOffAbi from "config/abi/BlastOff.json";
import AmpedUpAbi from "config/abi/AmpedUp.json";
import MeanGreensAbi from "config/abi/MeanGreens.json";
import { handleTokenIdResponse } from "utils/nftHelpers";

const initialState: UserState = {
  address: "",
  balance: {
    meownaut: "0",
    koban: "0",
    pb2114: "0",
    pb2116: "0",
    apb: "0",
  },
  nftBalance: {
    blastOff: { cards: [], packs: [] },
    ampedUp: { cards: [], packs: [] },
    meanGreens: { cards: [], packs: [] },
  },
};

export const asyncFetchBalance = createAsyncThunk(
  "user/asyncFetchBalance",
  async ({ account }: { account: string }) => {
    const tokens = {
      mnt: getAddressFromSymbol("mnt"),
      kbn: getAddressFromSymbol("kbn"),
      pb2114: getAddressFromSymbol("pb2114"),
      pb2116: getAddressFromSymbol("pb2116"),
      apb: getAddressFromSymbol("apb"),
    };

    // TODO: Convert to multicall
    if (account) {
      const mntRes = await getBep20Balance(tokens.mnt, account);
      const kbnRes = await getBep20Balance(tokens.kbn, account);
      const pb2114Res = await getBep20Balance(tokens.pb2114, account);
      const pb2116Res = await getBep20Balance(tokens.pb2116, account);
      const apbRes = await getBep20Balance(tokens.apb, account);

      return {
        balance: {
          meownaut: Web3.utils.fromWei(mntRes),
          koban: Web3.utils.fromWei(kbnRes),
          pb2114: Web3.utils.fromWei(pb2114Res),
          pb2116: Web3.utils.fromWei(pb2116Res),
          apb: Web3.utils.fromWei(apbRes),
        },
      };
    }
    console.error("Web3 failed to retrieve balance.");
    return {
      balance: initialState.balance,
    };
  }
);

export const asyncFetchNftBalance = createAsyncThunk(
  "user/asyncFetchNftBalance",
  async ({ account }: { account: string }) => {
    const nftAddresses: { [key: string]: string } = {
      blastOff: contracts.blastOff[process.env.REACT_APP_CHAIN_ID],
      ampedUp: contracts.ampedUp[process.env.REACT_APP_CHAIN_ID],
      meanGreens: contracts.meanGreens[process.env.REACT_APP_CHAIN_ID],
    };
    const blastOffCalls = [
      {
        address: nftAddresses.blastOff,
        name: "tokensOwned",
        params: [account],
      },
    ];
    const ampedUpCalls = [
      { address: nftAddresses.ampedUp, name: "tokensOwned", params: [account] },
    ];
    const meanGreenCalls = [
      {
        address: nftAddresses.meanGreens,
        name: "tokensOwned",
        params: [account],
      },
    ];

    const blastOffRes = await multicall(BlastOffAbi, blastOffCalls);
    const blastOffTokenIds: BigNumber[] = blastOffRes[0][0];
    const blastoffBalance = await handleTokenIdResponse(
      blastOffTokenIds,
      "blastOff"
    );

    const ampedUpRes = await multicall(AmpedUpAbi, ampedUpCalls);
    const ampedUpTokenIds: BigNumber[] = ampedUpRes[0][0];
    const ampedUpBalance = await handleTokenIdResponse(
      ampedUpTokenIds,
      "ampedUp"
    );

    const meanGreenRes = await multicall(MeanGreensAbi, meanGreenCalls);
    const meanGreensIds: BigNumber[] = meanGreenRes[0][0];
    const meanGreensBalance = await handleTokenIdResponse(
      meanGreensIds,
      "meanGreens"
    );

    // console.error("Web3 failed to retrieve nftBalance.");
    return {
      nftBalance: {
        ...blastoffBalance,
        ...ampedUpBalance,
        ...meanGreensBalance,
      },
    };
  }
);
export const connectWallet = createAsyncThunk(
  "user/connectWallet",
  async () => {
    //@ts-ignore
    if (window.ethereum) {
      try {
        //@ts-ignore
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        //save to local storage
        window.localStorage.setItem("isConnected", "true");
        return accounts;
      } catch (error) {
        if (error.code === 4001) {
          // User rejected request
        }
        // setError(error);
      }
    }
  }
);

export const disconnectWallet = createAsyncThunk(
  "user/disconnectWallet",
  async () => {
    window.localStorage.removeItem("isConnected");
    return [];
  }
);

export const userState = createSlice({
  name: "user",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      const { balance } = action.payload;
      state.balance = balance;
    },
    setNftBalance: (state, action) => {
      const { nftBalance } = action.payload;
      state.nftBalance = nftBalance;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(connectWallet.fulfilled, (state, { payload }) => {
      if (payload && payload.length > 0) {
        const addresss = payload[0];
        state.address = addresss;
      }
    });
    builder.addCase(disconnectWallet.fulfilled, (state, { payload }) => {
      state.address = "";
      state.nftBalance = initialState.nftBalance;
    });
    builder.addCase(asyncFetchBalance.fulfilled, (state, action) => {
      const { balance }: any = action.payload;
      state.balance = balance;
    });
    builder.addCase(asyncFetchNftBalance.fulfilled, (state, action) => {
      const { nftBalance }: any = action.payload;
      state.nftBalance = nftBalance;
    });
  },
});

export const { setBalance, setNftBalance } = userState.actions;
export default userState.reducer;
