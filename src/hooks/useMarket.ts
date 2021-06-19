import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { buyListing, fetchListings, postListing } from "providers/state/Market";

export const useFetchMarket = () => {
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

// export const useBuyListing = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(buyListing({id: 11000002}));
//   })
// }
