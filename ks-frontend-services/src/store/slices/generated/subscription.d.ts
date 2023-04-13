import * as toolkit from '@reduxjs/toolkit';
import { type Subscription } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getSubscriptions: toolkit.AsyncThunk<Subscription[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postSubscription: toolkit.AsyncThunk<Subscription, {
    body: Subscription;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getSubscription: toolkit.AsyncThunk<Subscription, {
    params: import("../../../generated/operations/getSubscription").GetSubscriptionRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putSubscription: toolkit.AsyncThunk<Subscription, {
    params: import("../../../generated/operations/putSubscription").PutSubscriptionRequestParameters;
    body: Subscription;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteSubscription: toolkit.AsyncThunk<Subscription, {
    params: import("../../../generated/operations/deleteSubscription").DeleteSubscriptionRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const pendingSubscription: toolkit.AsyncThunk<Subscription, {
    params: import("../../../generated/operations/pendingSubscription").PendingSubscriptionRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type SubscriptionReturn = AsyncThunkReturnType<typeof getSubscriptions | typeof postSubscription | typeof getSubscription | typeof putSubscription | typeof deleteSubscription | typeof pendingSubscription>;
export type SubscriptionEntity = SubscriptionReturn[0];
export type SubscriptionParams = SubscriptionReturn[1];
export type SubscriptionConfig = SubscriptionReturn[2];
export type SubscriptionAsyncThunkAction = toolkit.AsyncThunkAction<SubscriptionEntity, SubscriptionParams, SubscriptionConfig>;
export type SubscriptionState = GeneratedState<Subscription>;
export declare const handleSubscriptionResponse: (state: SubscriptionState, action: {
    payload: Subscription;
    type: string;
}) => SubscriptionState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<Subscription>;
    allIds: string[];
};
export declare const subscriptionSlice: toolkit.Slice<SubscriptionState, {}, "subscription">;
declare const _default: toolkit.Reducer<SubscriptionState, toolkit.AnyAction>;
export default _default;
