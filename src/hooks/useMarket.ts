import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { buyListing, fetchListings } from "providers/state/Market";

export const useFetchMarket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);
};

// export const useBuyListing = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(buyListing({id: 11000002}));
//   })
// }
