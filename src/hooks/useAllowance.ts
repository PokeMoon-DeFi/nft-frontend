import { useState, useEffect, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { getAddress, useContractFromSymbol } from "utils/contractHelpers";
import useRefresh from "./useRefresh";

export const useNftAllowance = (symbol: string) => {
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const { account } = useWeb3React();
  const contract = useContractFromSymbol(symbol);
  const nftAddress = getAddress("pokemoonNft");
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await contract.methods.allowance(account, nftAddress).call();

      setAllowance(new BigNumber(res));
    };

    if (account) {
      fetchAllowance();
    }
  }, [account, fastRefresh, contract, nftAddress]);

  return allowance;
};
