import Web3 from "web3";
import { AbiItem } from "web3-utils";
import web3NoAccount from "./web3";
import bep20Abi from "config/abi/Bep20.json";
import AmpedUpAbi from "config/abi/AmpedUp.json";
import BlastOffAbi from "config/abi/BlastOff.json";
import contracts from "config/constants/contracts";
import useWeb3 from "hooks/useWeb3";

const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount;
  return new _web3.eth.Contract(abi as AbiItem, address);
};

export const getAddress = (name: string) => {
  return contracts[name][process.env.REACT_APP_CHAIN_ID];
};

export const useBlastOffContract = () => {
  const web3 = useWeb3();
  return getContract(BlastOffAbi, getAddress("blastOff"), web3);
};
export const useAmpedUpContract = () => {
  const web3 = useWeb3();
  return getContract(AmpedUpAbi, getAddress("ampedUp"), web3);
};

export const getBlastOffContract = (web3?: Web3) => {
  return getContract(BlastOffAbi, getAddress("blastOff"), web3);
};
export const getAmpedUpContract = (web3?: Web3) => {
  return getContract(AmpedUpAbi, getAddress("ampedUp"), web3);
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
  switch (symbol) {
    case "wbnb":
      return contracts.wbnb[process.env.REACT_APP_CHAIN_ID];
    case "kbn":
      return contracts.koban[process.env.REACT_APP_CHAIN_ID];
    case "mnt":
      return contracts.meownaut[process.env.REACT_APP_CHAIN_ID];
    case "pb2114":
      return contracts.pb2114[process.env.REACT_APP_CHAIN_ID];
    case "pb2116":
      return contracts.pb2116[process.env.REACT_APP_CHAIN_ID];
    default:
      throw console.error("invalid symbol");
  }
};

export const getNftContractByName = (name: string) => {
  switch (name) {
    default:
    case "ampedUp": {
      return getAmpedUpContract();
    }
    case "blastOff": {
      return getBlastOffContract();
    }
  }
};
