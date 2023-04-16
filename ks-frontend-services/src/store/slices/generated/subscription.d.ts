import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type Subscription } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getSubscriptions: import("@reduxjs/toolkit").AsyncThunk<Subscription[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postSubscription: import("@reduxjs/toolkit").AsyncThunk<Subscription, {
    body: Subscription;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getSubscription: import("@reduxjs/toolkit").AsyncThunk<Subscription, {
    params: import("../../../generated/operations/getSubscription").GetSubscriptionRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putSubscription: import("@reduxjs/toolkit").AsyncThunk<Subscription, {
    params: import("../../../generated/operations/putSubscription").PutSubscriptionRequestParameters;
    body: Subscription;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteSubscription: import("@reduxjs/toolkit").AsyncThunk<Subscription, {
    params: import("../../../generated/operations/deleteSubscription").DeleteSubscriptionRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const pendingSubscription: import("@reduxjs/toolkit").AsyncThunk<Subscription, {
    params: import("../../../generated/operations/pendingSubscription").PendingSubscriptionRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type SubscriptionReturn = AsyncThunkReturnType<typeof getSubscriptions | typeof postSubscription | typeof getSubscription | typeof putSubscription | typeof deleteSubscription | typeof pendingSubscription>;
export type SubscriptionEntity = SubscriptionReturn[0];
export type SubscriptionParams = SubscriptionReturn[1];
export type SubscriptionConfig = SubscriptionReturn[2];
export type SubscriptionAsyncThunkAction = AsyncThunkAction<SubscriptionEntity, SubscriptionParams, SubscriptionConfig>;
export type SubscriptionState = GeneratedState<Subscription>;
export declare const handleSubscriptionResponse: (state: SubscriptionState, action: {
    payload: Subscription | Subscription[];
    type: string;
}) => SubscriptionState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: Subscription[];
    allIds: string[];
};
export declare const subscriptionSlice: import("@reduxjs/toolkit").Slice<SubscriptionState, {
    fetched: (state: SubscriptionState, action: PayloadAction<Subscription[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: Subscription[];
        allIds: string[];
    };
}, "subscription">;
declare const _default: import("redux").Reducer<SubscriptionState, import("redux").AnyAction>;
export default _default;
