import * as toolkit from '@reduxjs/toolkit';
import { type InfoCompany } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoCompany: toolkit.AsyncThunk<InfoCompany[], {
    params: import("../../../generated/operations/infoCompany").InfoCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type InfoCompanyReturn = AsyncThunkReturnType<typeof infoCompany>;
export type InfoCompanyEntity = InfoCompanyReturn[0];
export type InfoCompanyParams = InfoCompanyReturn[1];
export type InfoCompanyConfig = InfoCompanyReturn[2];
export type InfoCompanyAsyncThunkAction = toolkit.AsyncThunkAction<InfoCompanyEntity, InfoCompanyParams, InfoCompanyConfig>;
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
export declare const infoCompanySlice: toolkit.Slice<InfoCompanyState, {}, "infoCompany">;
declare const _default: toolkit.Reducer<InfoCompanyState, toolkit.AnyAction>;
export default _default;
