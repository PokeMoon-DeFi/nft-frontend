import create from "zustand";
import { BigNumber, Contract as ethersContract } from "ethers";
import { Contract as MultiContract } from "ethers-multicall";
import { getMarketAbi } from "utils/abiHelper";
import { getMarketAddress } from "utils";
import { call, safeAwait, toNumber } from "utils/callHelpers";
import { ethers } from "ethers";
import { gridColumnLookupSelector } from "@material-ui/data-grid";

interface Bid {
  bidder: string;
  offering: number;
}

interface BidState {
  bids: Bid[];
  tokenOwner: string | null;
  tokenId: string | null;
  packName: string | null;
  setTokenId: (string, set) => void;
  offerBid: (offering) => void;
  updateBid: (offering) => void;
  cancelBid: (offering) => void;
}

const getContract = (packName): MultiContract | null => {
  const address = getMarketAddress(packName);
  const abi = getMarketAbi(packName);
  if (!address || !abi) return null;
  const contract = new MultiContract(address, abi);
  return contract;
};
const getEthersContract = (packName): ethersContract | null => {
  const address = getMarketAddress(packName);
  const abi = getMarketAbi(packName);

  if (!address || !abi) return null;
  const contract = new ethersContract(address, abi);
  return contract;
};

const getProvider = () => {
  //@ts-ignore
  return new ethers.providers.Web3Provider(window.ethereum, "any");
};

export default create<BidState>((set, get) => ({
  tokenId: null,
  tokenOwner: null,
  packName: null,
  bids: [],
  setTokenId: async (tokenId, packName) => {
    const contract = getContract(packName);
    if (!contract) return;
    const calls = [
      contract.getTokenOwner(tokenId),
      contract.getBidInfo(tokenId),
    ];
    let [tokenOwner, bids] = await call(calls);
    bids = bids.map(({ bidder, offering }) => ({
      bidder,
      offering: toNumber(offering),
    }));

    set({ tokenId, packName, tokenOwner, bids });
  },
  offerBid: async (offering) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const state = get();
    const contract = getEthersContract(state.packName)?.connect(
      provider.getSigner()
    );
    if (!contract) return;
    const [result, error] = await safeAwait(
      contract.bidBuyOrder(state.tokenId, offering)
    );
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  },
  updateBid: async (offering) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const state = get();
    const contract = getEthersContract(state.packName)?.connect(
      provider.getSigner()
    );
    if (!contract) return;

    const [result, error] = await safeAwait(
      contract.updateBidOrder(state.tokenId, offering)
    );

    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  },
  cancelBid: async (tokenId) => {
    const provider = getProvider();
    const state = get();
    const contract = getEthersContract(state.packName)?.connect(
      provider.getSigner()
    );
    if (!contract) return;

    const [result, error] = await safeAwait(contract.cancelBid(tokenId));
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  },
}));
