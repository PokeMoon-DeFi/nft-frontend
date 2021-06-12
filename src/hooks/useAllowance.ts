import { useState, useEffect } from "react";
import BigNumber from "bignumber.js";
import { getAddress } from "utils/contractHelpers";
import { getAllowance } from "utils/callHelpers";
import useRefresh from "./useRefresh";
import { useAppSelector } from "providers";

export const useBlastOffAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const account = useAppSelector((state) => state.user.address);
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
