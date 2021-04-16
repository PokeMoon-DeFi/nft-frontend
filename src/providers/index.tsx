import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import User from "./state/UserState";
import PriceData from "./state/Prices";
import PublicNftData from "./state/PublicNftData";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    user: User,
    prices: PriceData,
    nftData: PublicNftData,
  },
  middleware: [logger, thunk] as const,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
