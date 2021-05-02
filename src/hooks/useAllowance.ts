import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { getAddress } from "utils/contractHelpers";
import { getAllowance } from "utils/callHelpers";
import useRefresh from "./useRefresh";

export const useNftAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const { account } = useWeb3React();
  const tokenAddress = getAddress("pb2114");
  const nftAddress = getAddress("pokemoonNft");
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await getAllowance(tokenAddress, nftAddress, account);

      setAllowance(new BigNumber(res));
    };

    if (account) {
      fetchAllowance();
    }
  }, [account, fastRefresh, tokenAddress, nftAddress]);

  return allowance;
};
