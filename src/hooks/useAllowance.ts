import { useState, useEffect, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import {
  getAddress,
  getBep20Contract,
  useContractFromSymbol,
} from "utils/contractHelpers";
import { getAllowance, sendApproveBep20 } from "utils/callHelpers";
import useRefresh from "./useRefresh";
import { useAppSelector } from "providers";
import { getMarketAddress } from "utils";

export const useBlastOffAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const { account } = useWeb3React();
  const tokenAddress = getAddress("pb2116");
  const ampedUpAddress = getAddress("ampedUp");
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await getAllowance(tokenAddress, ampedUpAddress, account);

      setAllowance(new BigNumber(res));
    };

    if (account) {
      fetchAllowance();
    }
  }, [account, fastRefresh, tokenAddress, ampedUpAddress]);

  return allowance;
};

export const useAPBAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const { account } = useWeb3React();
  const tokenAddress = getAddress("apb");
  const meanGreensAddress = getAddress("meanGreens");
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await getAllowance(tokenAddress, meanGreensAddress, account);
      setAllowance(new BigNumber(res));
    };

    if (account) {
      fetchAllowance();
    }
  }, [account, fastRefresh, tokenAddress, meanGreensAddress]);

  return allowance;
};

export const useGetKobanAllowance = (contractAddress: string) => {
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const { account } = useWeb3React();
  const kobanAddress = getAddress("koban");
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    if (!contractAddress) {
      setAllowance(new BigNumber(0));
      return;
    }
    const fetchAllowance = async () => {
      const res = await getAllowance(kobanAddress, contractAddress, account);
      setAllowance(new BigNumber(res));
    };

    if (account) {
      fetchAllowance();
    }
  }, [account, fastRefresh, allowance, kobanAddress, contractAddress]);

  return allowance;
};

export const useApproveMarket = (name: string) => {
  const { account } = useWeb3React();
  const contract = useContractFromSymbol("koban");
  const callback = useCallback(async () => {
    const market = getMarketAddress(name);
    if (!market) return;

    await sendApproveBep20(contract, market, account);
  }, [name, account, contract]);
  return callback;
};
