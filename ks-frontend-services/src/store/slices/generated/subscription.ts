// Imports
import * as toolkit from '@reduxjs/toolkit';
import { type Subscription, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, createResponseHandler } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const getSubscriptions = createAsyncThunkAction(
  services.subscription.getSubscriptions,
);
export const postSubscription = createAsyncThunkAction(
  services.subscription.postSubscription,
);
export const getSubscription = createAsyncThunkAction(
  services.subscription.getSubscription,
);
export const putSubscription = createAsyncThunkAction(
  services.subscription.putSubscription,
);
export const deleteSubscription = createAsyncThunkAction(
  services.subscription.deleteSubscription,
);
export const pendingSubscription = createAsyncThunkAction(
  services.subscription.pendingSubscription,
);

export type SubscriptionReturn = AsyncThunkReturnType<
  | typeof getSubscriptions
  | typeof postSubscription
  | typeof getSubscription
  | typeof putSubscription
  | typeof deleteSubscription
  | typeof pendingSubscription
>;
export type SubscriptionEntity = SubscriptionReturn[0];
export type SubscriptionParams = SubscriptionReturn[1];
export type SubscriptionConfig = SubscriptionReturn[2];

export type SubscriptionAsyncThunkAction = toolkit.AsyncThunkAction<
  SubscriptionEntity,
  SubscriptionParams,
  SubscriptionConfig
>;

// Reducer
export type SubscriptionState = GeneratedState<Subscription>;
const initialState: SubscriptionState = GENERATED_INITIAL_STATE;

export const handleSubscriptionResponse = createResponseHandler<
  SubscriptionState,
  Subscription
>();

export const subscriptionSlice = toolkit.createSlice({
  name: 'subscription',
  initialState,
  reducers: {},
  extraReducers: {
    [getSubscriptions.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getSubscriptions.fulfilled.type]: handleSubscriptionResponse,
    [getSubscriptions.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [postSubscription.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postSubscription.fulfilled.type]: handleSubscriptionResponse,
    [postSubscription.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [getSubscription.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getSubscription.fulfilled.type]: handleSubscriptionResponse,
    [getSubscription.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [putSubscription.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [putSubscription.fulfilled.type]: handleSubscriptionResponse,
    [putSubscription.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [deleteSubscription.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [deleteSubscription.fulfilled.type]: handleSubscriptionResponse,
    [deleteSubscription.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [pendingSubscription.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [pendingSubscription.fulfilled.type]: handleSubscriptionResponse,
    [pendingSubscription.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default subscriptionSlice.reducer;
