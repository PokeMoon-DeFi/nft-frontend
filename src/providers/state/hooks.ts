import { PokemoonNft } from "config/constants/nfts/types";
import { useAppSelector } from "providers";

export const useNfts = (): PokemoonNft[] => {
  const nfts = useAppSelector((state) => state.user.nfts);
  return nfts;
};
