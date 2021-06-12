import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchListings } from "providers/state/Market";

export const useFetchMarket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);
};
