import * as toolkit from '@reduxjs/toolkit';
import { type Company } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getCompanies: toolkit.AsyncThunk<Company[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postCompany: toolkit.AsyncThunk<Company, {
    body: Company;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getCompany: toolkit.AsyncThunk<Company, {
    params: import("../../../generated/operations/getCompany").GetCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putCompany: toolkit.AsyncThunk<Company, {
    params: import("../../../generated/operations/putCompany").PutCompanyRequestParameters;
    body: Company;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteCompany: toolkit.AsyncThunk<Company, {
    params: import("../../../generated/operations/deleteCompany").DeleteCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getCompanyDirectorVerification: toolkit.AsyncThunk<import("../../../").InfoCompany, {
    params: import("../../../generated/operations/getCompanyDirectorVerification").GetCompanyDirectorVerificationRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postCompanyDirectorVerification: toolkit.AsyncThunk<import("../../../").InfoCompany, {
    params: import("../../../generated/operations/postCompanyDirectorVerification").PostCompanyDirectorVerificationRequestParameters;
    body: import("../../../").DirectorVerification;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const directorCompany: toolkit.AsyncThunk<Company, {
    params: import("../../../generated/operations/directorCompany").DirectorCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const approveCompany: toolkit.AsyncThunk<Company, {
    params: import("../../../generated/operations/approveCompany").ApproveCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const declineCompany: toolkit.AsyncThunk<Company, {
    params: import("../../../generated/operations/declineCompany").DeclineCompanyRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type CompanyReturn = AsyncThunkReturnType<typeof getCompanies | typeof postCompany | typeof getCompany | typeof putCompany | typeof deleteCompany | typeof getCompanyDirectorVerification | typeof postCompanyDirectorVerification | typeof directorCompany | typeof approveCompany | typeof declineCompany>;
export type CompanyEntity = CompanyReturn[0];
export type CompanyParams = CompanyReturn[1];
export type CompanyConfig = CompanyReturn[2];
export type CompanyAsyncThunkAction = toolkit.AsyncThunkAction<CompanyEntity, CompanyParams, CompanyConfig>;
export type CompanyState = GeneratedState<Company>;
export declare const handleCompanyResponse: (state: CompanyState, action: {
    payload: Company;
    type: string;
}) => CompanyState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<Company>;
    allIds: string[];
};
export declare const companySlice: toolkit.Slice<CompanyState, {}, "company">;
declare const _default: toolkit.Reducer<CompanyState, toolkit.AnyAction>;
export default _default;
