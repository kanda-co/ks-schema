import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { type InfoCompany } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoCompany: import("@reduxjs/toolkit").AsyncThunk<InfoCompany[], {
    params: import("../../../generated/operations/infoCompany").InfoCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type InfoCompanyReturn = AsyncThunkReturnType<typeof infoCompany>;
export type InfoCompanyEntity = InfoCompanyReturn[0];
export type InfoCompanyParams = InfoCompanyReturn[1];
export type InfoCompanyConfig = InfoCompanyReturn[2];
export type InfoCompanyAsyncThunkAction = AsyncThunkAction<InfoCompanyEntity, InfoCompanyParams, InfoCompanyConfig>;
export type InfoCompanyState = GeneratedState<InfoCompany>;
export declare const handleInfoCompanyResponse: (state: InfoCompanyState, action: {
    payload: InfoCompany;
    type: string;
}) => InfoCompanyState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<InfoCompany>;
    allIds: string[];
};
export declare const infoCompanySlice: import("@reduxjs/toolkit").Slice<InfoCompanyState, {}, "infoCompany">;
declare const _default: import("redux").Reducer<InfoCompanyState, import("redux").AnyAction>;
export default _default;