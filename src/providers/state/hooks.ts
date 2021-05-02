import { useAppSelector } from "providers";
import { UserNftState } from "./types";

export const useNfts = (): UserNftState => {
  const nfts = useAppSelector((state) => state.user.nfts);
  return nfts;
};
