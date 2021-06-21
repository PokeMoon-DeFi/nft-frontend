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

// export const useBuyListing = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(buyListing({id: 11000002}));
//   })
// }
