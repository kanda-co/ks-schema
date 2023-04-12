// Imports
import { AsyncThunkAction, createSlice } from '@reduxjs/toolkit';
import { type Webhook, services } from '../../';
import { GENERATED_INITIAL_STATE } from '../constants';
import { createAsyncThunkAction, createResponseHandler } from '../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../types';

// Service methods
export const providerCheckWebhook = createAsyncThunkAction(
  services.webhook.providerCheckWebhook,
);
export const providerWebhook = createAsyncThunkAction(
  services.webhook.providerWebhook,
);

export type WebhookReturn = AsyncThunkReturnType<
  typeof providerCheckWebhook | typeof providerWebhook
>;
export type WebhookEntity = WebhookReturn[0];
export type WebhookParams = WebhookReturn[1];
export type WebhookConfig = WebhookReturn[2];

export type WebhookAsyncThunkAction = AsyncThunkAction<
  WebhookEntity,
  WebhookParams,
  WebhookConfig
>;

// Reducer
export type WebhookState = GeneratedState<Webhook>;
const initialState: WebhookState = GENERATED_INITIAL_STATE;

export const handleWebhookResponse = createResponseHandler<
  WebhookState,
  Webhook
>();

export const webhookSlice = createSlice({
  name: 'webhook',
  initialState,
  reducers: {},
  extraReducers: {
    [providerCheckWebhook.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [providerCheckWebhook.fulfilled.type]: handleWebhookResponse,
    [providerCheckWebhook.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [providerWebhook.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [providerWebhook.fulfilled.type]: handleWebhookResponse,
    [providerWebhook.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default webhookSlice.reducer;
