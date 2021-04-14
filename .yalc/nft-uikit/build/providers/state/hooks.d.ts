import { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../index";
export declare const useAppDispatch: () => import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
