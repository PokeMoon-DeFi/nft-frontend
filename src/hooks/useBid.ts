import create from "zustand";
import { BigNumber, Contract as ethersContract } from "ethers";
import { Contract as MultiContract } from "ethers-multicall";
import { getMarketAbi } from "utils/abiHelper";
import { getMarketAddress } from "utils";
import { call, getRpcUrl, safeAwait, toNumber } from "utils/callHelpers";
import { ethers } from "ethers";
import useRefresh from "hooks/useRefresh";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

interface Bid {
  bidder: string;
  offering: number;
}

interface BidInfo {
  offering: number;
  state: number;
  tokenId: number;
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
  takeBid: (tokenId, bidder) => void;
}

const getProvider = () => {
  //@ts-ignore
  return new ethers.providers.Web3Provider(window.ethereum, "any");
};

function getReadProvider() {
  return new ethers.providers.JsonRpcProvider(getRpcUrl(), 56);
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
  const contract = new ethersContract(address, abi, getReadProvider());
  return contract;
};

const getSignedContract = (contract: ethersContract) => {
  const provider = getProvider();
  return contract.connect(provider.getSigner());
};

const useBid = create<BidState>((set, get) => ({
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
  takeBid: async (tokenId, bidder) => {
    const provider = getProvider();
    const state = get();
    const contract = getEthersContract(state.packName)?.connect(
      provider.getSigner()
    );
    if (!contract) return;
    const [result, error] = await safeAwait(
      contract.executeSellBid(tokenId, bidder)
    );
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
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

export const useGetUserBidInfo = () => {
  const { fastRefresh } = useRefresh();
  const { account } = useWeb3React();
  const [bidInfo, setBidInfo] = useState<BidInfo[]>([]);
  const bidStore = useBid();

  useEffect(() => {
    //TODO: Loop through packs and collate all user bid infos
    async function getBidInfo() {
      const contract = getEthersContract("blastOff");
      if (!contract || !account) return;

      const info = await contract.getUserBidInfo(account);
      setBidInfo(
        info.map((i) => ({
          offering: toNumber(i.offering),
          state: toNumber(i.state),
          tokenId: toNumber(i.tokenId),
        }))
      );
    }
    getBidInfo();
  }, [account, fastRefresh, setBidInfo, bidStore]);

  return bidInfo;
};

export default useBid;
