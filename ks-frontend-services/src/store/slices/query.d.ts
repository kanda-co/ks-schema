import { PayloadAction } from '@reduxjs/toolkit';
export type QueryType = 'home' | 'jobs' | 'payments' | 'loans';
export type QueryTerms = {
    [key in QueryType]?: string;
};
export interface QueryFlags {
    home: {
        completedSetup: boolean;
    };
    jobs: {
        pendingPayout: boolean;
        satNoteSigned: boolean;
        solar: boolean;
    };
    loans: {
        solar: boolean;
    };
}
export interface QueryState {
    queryTerms: QueryTerms;
    flags: QueryFlags;
    isLoading: boolean;
}
export declare const querySlice: import("@reduxjs/toolkit").Slice<QueryState, {
    setFlags: (state: import("immer/dist/internal").WritableDraft<QueryState>, action: PayloadAction<[QueryType, QueryFlags[keyof QueryFlags]]>) => {
        flags: {
            home: import("immer/dist/internal").WritableDraft<{
                completedSetup: boolean;
            }>;
            jobs: import("immer/dist/internal").WritableDraft<{
                pendingPayout: boolean;
                satNoteSigned: boolean;
                solar: boolean;
            }>;
            loans: import("immer/dist/internal").WritableDraft<{
                solar: boolean;
            }>;
        };
        queryTerms: import("immer/dist/internal").WritableDraft<QueryTerms>;
        isLoading: boolean;
    };
    setQuery: (state: import("immer/dist/internal").WritableDraft<QueryState>, action: PayloadAction<[QueryType, string]>) => {
        queryTerms: {
            payments?: string;
            home?: string;
            jobs?: string;
            loans?: string;
        };
        flags: import("immer/dist/internal").WritableDraft<QueryFlags>;
        isLoading: boolean;
    };
}, "query">;
export declare const setFlags: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<[QueryType, {} | {
    completedSetup: boolean;
} | {
    pendingPayout: boolean;
    satNoteSigned: boolean;
    solar: boolean;
} | {
    solar: boolean;
}], "query/setFlags">, setQuery: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<[QueryType, string], "query/setQuery">;
declare const _default: import("redux").Reducer<QueryState, import("redux").AnyAction>;
export default _default;
