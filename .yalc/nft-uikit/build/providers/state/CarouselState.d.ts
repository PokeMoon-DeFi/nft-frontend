import { PokemoonNft } from "../../constants/types";
interface State {
    nfts?: Array<PokemoonNft>;
}
export declare const asyncFetchIds: import("@reduxjs/toolkit").AsyncThunk<{
    tokenId: string;
    imageUrl: string;
}, number, {}>;
export declare const carouselSlice: import("@reduxjs/toolkit").Slice<State, {
    setIds: (state: import("immer/dist/internal").WritableDraft<State>, action: {
        payload: any;
        type: string;
    }) => void;
}, "carousel">;
export declare const setIds: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
declare const _default: import("redux").Reducer<State, import("redux").AnyAction>;
export default _default;
