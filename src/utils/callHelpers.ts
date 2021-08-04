import { BigNumber, ethers } from "ethers";
import { Provider } from "ethers-multicall";

import {
  getBep20Contract,
  getBlastOffContract,
  getAmpedUpContract,
  getMeanGreensContract,
  getNftContractByName,
} from "./contractHelpers";

const BSC_RPC_ENDPOINTS = [
  "https://bsc-dataseed.binance.org/",
  "https://bsc-dataseed1.defibit.io/",
  "https://bsc-dataseed1.ninicoin.io/",
];

const BSC_RPC_BACKUPS = [
  "https://bsc-dataseed2.defibit.io/",
  "https://bsc-dataseed3.defibit.io/",
  "https://bsc-dataseed4.defibit.io/",
  "https://bsc-dataseed2.ninicoin.io/",
  "https://bsc-dataseed3.ninicoin.io/",
  "https://bsc-dataseed4.ninicoin.io/",
  "https://bsc-dataseed1.binance.org/",
  "https://bsc-dataseed2.binance.org/",
  "https://bsc-dataseed3.binance.org/",
  "https://bsc-dataseed4.binance.org/",
];

export const safeAwait = async (promise: Promise<any>) => {
  try {
    const data = await promise;
    return [data, false];
  } catch (error) {
    return [null, error];
  }
};
/**
 * @returns a random BSC RPC endpoint
 */
export function getRpcUrl(useBackups: boolean = false) {
  if (useBackups) return BSC_RPC_BACKUPS[Math.floor(Math.random() * 10)];
  return BSC_RPC_ENDPOINTS[Math.floor(Math.random() * 3)];
}

export const toNumber = (num: BigNumber) => {
  return BigNumber.from(num).toNumber();
};

/**
 * @returns an ethers provider for BSC Mainnet
 */
export function getProvider() {
  return new ethers.providers.JsonRpcProvider(getRpcUrl(), 56);
}
/**
 * @param calls array of unfullfilled "ethers-multicall".Contract.method() promises
 * @returns array of contract method responses
 */
export async function call(calls: any[]) {
  if (calls.length === 0) throw new Error("Calls array empty");
  // An ethers-multicall provider from an ethers provider
  const callProvider = new Provider(getProvider(), 56);
  const res = await callProvider.all(calls);
  if (calls.length === 1) return res[0];
  return res;
}

/**
 * Approve spending of token on contract from account.
 * @param tokenAddress
 * @param contractAddress
 * @param account
 * @returns contract response
 */
export const sendApproveBep20 = async (
  tokenContract,
  contractAddress,
  account
) => {
  return tokenContract.methods
    .approve(contractAddress, ethers.constants.MaxUint256)
    .send({ from: account });
};

/**
 * NFT contract call to "Buy" card pack
 * @param account
 * @returns contract response
 */
export const sendBuyPack = async (contract, account) => {
  const BUY_GAS_ESTIMATE = 1200000;

  //TL;DR: web3.eth.estimateGas() incorrect which would make tx fail
  //BUG: MetaMask won't throw if gas is manually set, even there's an error.
  // const contract = getNftContract();
  return contract.methods
    .ElevationPacked()
    .send({ from: account, gas: BUY_GAS_ESTIMATE });
};

export const sendBuyMultiple = async (contract, account, amount) => {
  const BUY_GAS_ESTIMATE = 1000000;

  return contract.methods
    .multiElevation(amount)
    .send({ from: account, gas: BUY_GAS_ESTIMATE * amount });
};

export const sendGiftPack = async (contract, from, to) => {
  const BUY_GAS_ESTIMATE = 1200000;

  //TL;DR: web3.eth.estimateGas() incorrect which would make tx fail
  //BUG: MetaMask won't throw if gas is manually set, even there's an error.
  // const contract = getNftContract();
  return contract.methods
    .delegateElevation(to)
    .send({ from, gas: BUY_GAS_ESTIMATE });
};

export const sendTransferPack = async (contract, from, to, packId) => {
  return contract.methods.transferPackedFrom(from, to, packId).send({ from });
};

/**
 * Get Pokemoon Collectible packs owned by given account.
 * Note: this does not guarantee that they currently own all tokenIds associated with the pack.
 * @param account
 * @returns contract response
 */
export const getPackedOwned = async (account, pack) => {
  const contract = getNftContractByName(pack);
  return contract.methods.packedOwned(account).call();
};

/**
 * Calls packInfo(packId) abi method.
 * @param packId
 * @returns array of tokenIds
 */
export const getPackInfo = async (packId, name) => {
  const contract = getNftContractByName(name);
  return contract.methods.packedInfo(packId).call();
};

/**
 * Get Pokemoon Collectibles owned by given account.
 * @param account
 * @returns contract response
 */
export const getNftsOwned = async (account) => {
  const contract = getBlastOffContract();
  return contract.methods.tokensOwned(account).call();
};

/**
 * Get BEP-20 token balance for given account.
 * @param tokenAddress
 * @param account
 * @returns contract response
 */
export const getBep20Balance = async (tokenAddress, account) => {
  const contract = getBep20Contract(tokenAddress);
  return contract.methods.balanceOf(account).call();
};

/**
 * Get spend allownace for a contract with a given token for given account.
 * @param tokenAddress
 * @param targetAddress
 * @param account
 * @returns
 */
export const getAllowance = async (tokenAddress, targetAddress, account) => {
  const contract = getBep20Contract(tokenAddress);
  const res = await contract.methods.allowance(account, targetAddress).call();
  return res;
};

export const getPacksMinted = async () => {
  // Warn: When we add new nft contract we will need to make sure to extend this function to both contracts or try using getBep20Contract.
  const contract = getBlastOffContract();
  return contract.methods.finite().call();
};

export const getPackContract = (name) => {
  switch (name) {
    case "blastOff":
    default:
      return getBlastOffContract();
    case "ampedUp":
      return getAmpedUpContract();
    case "meanGreens":
      return getMeanGreensContract();
  }
};

export const getOwnerOf = async (packName, tokenId) => {
  const contract = getPackContract(packName);
  return contract.methods.ownerOf(tokenId).call();
};
