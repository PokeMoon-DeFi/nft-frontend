import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import CarouselReducer from "./state/CarouselState";

const store = configureStore({
  reducer: {
    carousel: CarouselReducer,
  },
  middleware: [logger, thunk] as const,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
