import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import {
  buyListing,
  cancelListing,
  fetchListings,
  giftNft,
  postListing,
  updateListing,
} from "providers/state/Market";
import { MAX_KOBAN_PRICE } from "config";
import create from "zustand";

export const useFetchListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);
};

export const usePostListing = () => {
  const dispatch = useDispatch();
  const callback = useCallback(
    (tokenId, price) => {
      dispatch(postListing({ tokenId, price }));
    },
    [dispatch]
  );
  return callback;
};

export const useCancelListing = () => {
  const dispatch = useDispatch();
  const callback = useCallback(
    (tokenId) => {
      dispatch(cancelListing(tokenId));
    },
    [dispatch]
  );
  return callback;
};

export const useUpdateListing = () => {
  const dispatch = useDispatch();
  const callback = useCallback(
    (tokenId, price) => {
      dispatch(updateListing({ tokenId, price }));
    },
    [dispatch]
  );
  return callback;
};

export const useGiftNft = () => {
  const dispatch = useDispatch();
  const callback = useCallback(
    (destAddress, tokenId, packName) => {
      dispatch(giftNft({ destAddress, tokenId, packName }));
    },
    [dispatch]
  );
  return callback;
};

export const useBuyListing = () => {
  const dispatch = useDispatch();
  const callback = useCallback(
    (id) => {
      dispatch(buyListing(id));
    },
    [dispatch]
  );
  return callback;
};

interface MarketState {
  isBuying: boolean;
  setIsBuying: (isBuying: boolean) => void;
  priceRange: number[];
  setPriceRange: (priceRange: number[]) => void;
}

export default create<MarketState>((set) => ({
  isBuying: true,
  setIsBuying: (isBuying) => set((state) => ({ ...state, isBuying })),
  priceRange: [0, MAX_KOBAN_PRICE],
  setPriceRange: (priceRange) => set((state) => ({ ...state, priceRange })),
}));
