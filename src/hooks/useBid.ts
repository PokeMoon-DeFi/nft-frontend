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
interface BidState {
  bids: Bid[];
  tokenOwner: string | null;
  tokenId: string | null;
  packName: string | null;
  setTokenId: (string, set) => void;
  offerBid: (offering) => void;
  updateBid: (offering) => void;
  cancelBid: (tokenId, packName) => void;
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
    console.log({ offering });
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
  cancelBid: async (tokenId, packName) => {
    const provider = getProvider();

    const contract = getEthersContract(packName)?.connect(provider.getSigner());

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
  const [activeBidInfo, setActiveBidInfo] = useState<BidInfo[]>([]);
  const [inactiveBidInfo, setInactiveBidInfo] = useState<BidInfo[]>([]);
  const bidStore = useBid();

  useEffect(() => {
    //TODO: Loop through packs and collate all user bid infos
    const packName = "blastOff";
    async function getBidInfo() {
      const contract = getEthersContract(packName);
      if (!contract || !account) return;

      const activeInfo = await contract.getUserBidInfo(account);
      console.log({ activeInfo });
      const inactiveInfo = await contract.getUserBidInactiveInfo(account);
      console.log({ inactiveInfo });
      setActiveBidInfo(
        activeInfo.map((i) => ({
          offering: toNumber(i.offering),
          state: toNumber(i.state),
          tokenId: toNumber(i.tokenId),
          packName,
        }))
      );

      setInactiveBidInfo(
        inactiveInfo.map((i) => ({
          offering: toNumber(i.offering),
          state: toNumber(i.state),
          tokenId: toNumber(i.tokenId),
          packName,
        }))
      );
    }
    getBidInfo();
  }, [account, fastRefresh, setActiveBidInfo, bidStore]);

  return { activeBidInfo, inactiveBidInfo };
};

export default useBid;
