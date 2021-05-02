import Web3 from "web3";
import { AbiItem } from "web3-utils";
import web3NoAccount from "./web3";
import bep20Abi from "config/constants/abi/bep20.json";
import pokemoonNft from "config/constants/abi/pokemoonnft.json";
import contracts, { test_pb } from "config/constants/contracts";
import useWeb3 from "hooks/useWeb3";

const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount;
  return new _web3.eth.Contract((abi as unknown) as AbiItem, address);
};

export const getAddress = (name: string) => {
  return contracts[name][process.env.REACT_APP_CHAIN_ID];
};

export const useNftContract = () => {
  const web3 = useWeb3();
  return getContract(pokemoonNft, getAddress("pokemoonNft"), web3);
};

export const getNftContract = (web3?: Web3) => {
  return getContract(pokemoonNft, getAddress("pokemoonNft"), web3);
};

export const getBep20Contract = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3);
};

export const useContractFromSymbol = (symbol: string) => {
  const address = getAddressFromSymbol(symbol);
  const web3 = useWeb3();
  return getBep20Contract(address, web3);
};

export const getAddressFromSymbol = (symbol: string) => {
  // TODO: Remove testPb
  // if (symbol === "testPb") return test_pb;
  switch (symbol) {
    case "kbn":
      return contracts.koban[process.env.REACT_APP_CHAIN_ID];
    case "mnt":
      return contracts.meownaut[process.env.REACT_APP_CHAIN_ID];
    case "pb2114":
      return contracts.pb2114[process.env.REACT_APP_CHAIN_ID];
    // case "pb2116":
    //   return contracts.pb2116[process.env.REACT_APP_CHAIN_ID];
    default:
      throw console.error("invalid symbol");
  }
};
