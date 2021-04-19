import { ethers } from "ethers";
import { getBep20Contract, getNftContract } from "./contractHelpers";

/**
 * Approve spending of token on contract from account.
 * @param tokenAddress
 * @param contractAddress
 * @param account
 * @returns contract response
 */
export const sendApproveBep20 = async (
  tokenAddress,
  contractAddress,
  account
) => {
  const tokenContract = getBep20Contract(tokenAddress);
  return tokenContract.methods
    .approve(contractAddress, ethers.constants.MaxUint256)
    .send({ from: account });
};

/**
 * NFT contract call to "Buy" card pack
 * @param account
 * @returns contract response
 */
export const sendBuyPack = async (account) => {
  const BUY_GAS_ESTIMATE = 700000;
  //TL;DR: web3.eth.estimateGas() incorrect which would make tx fail
  //BUG: MetaMask won't throw if gas is manually set, even there's an error.
  const contract = getNftContract();
  return contract.methods
    .ElevationPacked()
    .send({ from: account, gas: BUY_GAS_ESTIMATE });
};

/**
 * Get Pokemoon Collectible packs owned by given account.
 * Note: this does not guarantee that they currently own all tokenIds associated with the pack.
 * @param account
 * @returns contract response
 */
export const callPackedOwned = async (account) => {
  const contract = getNftContract();
  return contract.methods.packedOwned(account).call();
};

/**
 * Calls packInfo(packId) abi method.
 * @param packId
 * @returns contract response
 */
export const callPackInfo = async (packId) => {
  const contract = getNftContract();
  return contract.methods.packedInfo(packId).call();
};

/**
 * Get Pokemoon Collectibles owned by given account.
 * @param account
 * @returns contract response
 */
export const callNftsOwned = async (account) => {
  const contract = getNftContract();
  return contract.methods.tokensOwned(account).call();
};

/**
 * Get BEP-20 token balance for given account.
 * @param tokenAddress
 * @param account
 * @returns contract response
 */
export const callBep20Balance = async (tokenAddress, account) => {
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
export const callAllowance = async (tokenAddress, targetAddress, account) => {
  const contract = getBep20Contract(tokenAddress);
  return contract.methods.allowance(account, targetAddress).call();
};
