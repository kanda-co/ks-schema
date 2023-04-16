import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type Company } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getCompanies: import("@reduxjs/toolkit").AsyncThunk<Company[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postCompany: import("@reduxjs/toolkit").AsyncThunk<Company, {
    body: Company;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getCompany: import("@reduxjs/toolkit").AsyncThunk<Company, {
    params: import("../../../generated/operations/getCompany").GetCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putCompany: import("@reduxjs/toolkit").AsyncThunk<Company, {
    params: import("../../../generated/operations/putCompany").PutCompanyRequestParameters;
    body: Company;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteCompany: import("@reduxjs/toolkit").AsyncThunk<Company, {
    params: import("../../../generated/operations/deleteCompany").DeleteCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getCompanyDirectorVerification: import("@reduxjs/toolkit").AsyncThunk<import("../../../").InfoCompany, {
    params: import("../../../generated/operations/getCompanyDirectorVerification").GetCompanyDirectorVerificationRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postCompanyDirectorVerification: import("@reduxjs/toolkit").AsyncThunk<import("../../../").InfoCompany, {
    params: import("../../../generated/operations/postCompanyDirectorVerification").PostCompanyDirectorVerificationRequestParameters;
    body: import("../../../").DirectorVerification;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const directorCompany: import("@reduxjs/toolkit").AsyncThunk<Company, {
    params: import("../../../generated/operations/directorCompany").DirectorCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const approveCompany: import("@reduxjs/toolkit").AsyncThunk<Company, {
    params: import("../../../generated/operations/approveCompany").ApproveCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const declineCompany: import("@reduxjs/toolkit").AsyncThunk<Company, {
    params: import("../../../generated/operations/declineCompany").DeclineCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type CompanyReturn = AsyncThunkReturnType<typeof getCompanies | typeof postCompany | typeof getCompany | typeof putCompany | typeof deleteCompany | typeof getCompanyDirectorVerification | typeof postCompanyDirectorVerification | typeof directorCompany | typeof approveCompany | typeof declineCompany>;
export type CompanyEntity = CompanyReturn[0];
export type CompanyParams = CompanyReturn[1];
export type CompanyConfig = CompanyReturn[2];
export type CompanyAsyncThunkAction = AsyncThunkAction<CompanyEntity, CompanyParams, CompanyConfig>;
export type CompanyState = GeneratedState<Company>;
export declare const handleCompanyResponse: (state: CompanyState, action: {
    payload: Company | Company[];
    type: string;
}) => CompanyState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: Company[];
    allIds: string[];
};
export declare const companySlice: import("@reduxjs/toolkit").Slice<CompanyState, {
    fetched: (state: CompanyState, action: PayloadAction<Company[]>) => {
        fetchedList: boolean;
        id?: string;
        isLoading: boolean;
        isSubmitting: boolean;
        data: Company[];
        allIds: string[];
    };
}, "company">;
declare const _default: import("redux").Reducer<CompanyState, import("redux").AnyAction>;
export default _default;
