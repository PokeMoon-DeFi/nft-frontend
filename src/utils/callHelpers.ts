import { ethers } from "ethers";

export const approve = async (tokenContract, targetContract, account) => {
  return tokenContract.methods
    .approve(targetContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account });
};
