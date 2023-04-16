import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type InfoEntity } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getInfoEntity: import("@reduxjs/toolkit").AsyncThunk<InfoEntity, {
    params: import("../../../generated/operations/getInfoEntity").GetInfoEntityRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type InfoEntityReturn = AsyncThunkReturnType<typeof getInfoEntity>;
export type InfoEntityEntity = InfoEntityReturn[0];
export type InfoEntityParams = InfoEntityReturn[1];
export type InfoEntityConfig = InfoEntityReturn[2];
export type InfoEntityAsyncThunkAction = AsyncThunkAction<InfoEntityEntity, InfoEntityParams, InfoEntityConfig>;
export type InfoEntityState = GeneratedState<InfoEntity>;
export declare const handleInfoEntityResponse: (state: InfoEntityState, action: {
    payload: InfoEntity | InfoEntity[];
    type: string;
}) => InfoEntityState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: InfoEntity[];
    allIds: string[];
};
export declare const infoEntitySlice: import("@reduxjs/toolkit").Slice<InfoEntityState, {
    fetched: (state: InfoEntityState, action: PayloadAction<InfoEntity[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: InfoEntity[];
        allIds: string[];
    };
}, "infoEntity">;
declare const _default: import("redux").Reducer<InfoEntityState, import("redux").AnyAction>;
export default _default;
