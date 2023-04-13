import * as toolkit from '@reduxjs/toolkit';
import { type Rate } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoRate: toolkit.AsyncThunk<Rate, import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getRates: toolkit.AsyncThunk<Rate[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postRate: toolkit.AsyncThunk<Rate, {
    body: Rate;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getRate: toolkit.AsyncThunk<Rate, {
    params: import("../../../generated/operations/getRate").GetRateRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putRate: toolkit.AsyncThunk<Rate, {
    params: import("../../../generated/operations/putRate").PutRateRequestParameters;
    body: Rate;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteRate: toolkit.AsyncThunk<Rate, {
    params: import("../../../generated/operations/deleteRate").DeleteRateRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type RateReturn = AsyncThunkReturnType<typeof infoRate | typeof getRates | typeof postRate | typeof getRate | typeof putRate | typeof deleteRate>;
export type RateEntity = RateReturn[0];
export type RateParams = RateReturn[1];
export type RateConfig = RateReturn[2];
export type RateAsyncThunkAction = toolkit.AsyncThunkAction<RateEntity, RateParams, RateConfig>;
export type RateState = GeneratedState<Rate>;
export declare const handleRateResponse: (state: RateState, action: {
    payload: Rate;
    type: string;
}) => RateState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<Rate>;
    allIds: string[];
};
export declare const rateSlice: toolkit.Slice<RateState, {}, "rate">;
declare const _default: toolkit.Reducer<RateState, toolkit.AnyAction>;
export default _default;
