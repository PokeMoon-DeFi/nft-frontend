import Web3 from "web3";
import { AbiItem } from "web3-utils";
import web3NoAccount from "./web3";
import bep20Abi from "config/constants/abi/bep20.json";
import contracts from "config/constants/contracts";

const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount;
  return new _web3.eth.Contract((abi as unknown) as AbiItem, address);
};

export const getBep20Contract = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3);
};

export const getAddressFromSymbol = (symbol: string) => {
  switch (symbol) {
    case "kbn":
      return contracts.koban[56];
    case "mnt":
      return contracts.meownaut[56];
    case "pb2114":
      return contracts.pb2114[56];
    default:
      throw console.error("invalid symbol");
  }
};
