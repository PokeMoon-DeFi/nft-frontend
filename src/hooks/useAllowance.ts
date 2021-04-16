import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { getAddress, getContractFromSymbol } from "utils/contractHelpers";
import useRefresh from "./useRefresh";
import Web3 from "web3";

export const useNftAllowance = (symbol: string) => {
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const { account } = useWeb3React();
  const contract = getContractFromSymbol(symbol);
  const nftAddress = getAddress("pokemoonNft");
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await contract.methods.allowance(account, nftAddress).call();

      console.log(
        res,
        new BigNumber(res),
        new BigNumber(Web3.utils.fromWei(res))
      );
      setAllowance(new BigNumber(res));
    };

    if (account) {
      fetchAllowance();
    }
  }, [account, fastRefresh]);

  return allowance;
};
