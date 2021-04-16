import { useWeb3React } from "@web3-react/core";
import contracts from "config/constants/contracts";
import { useCallback, useEffect } from "react";
import { getAddress, getContractFromSymbol } from "utils/contractHelpers";

const useAllowance = async () => {
  const { account } = useWeb3React();
  const pBallContract = getContractFromSymbol("pb2114");
  const nftAddress = getAddress("pokemoonNft");
};
export default useAllowance;
