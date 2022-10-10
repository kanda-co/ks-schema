import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const postSubscriptionOperation = {
  path: "/api/subscription",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Subscription },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [],
  requestDefaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: {
    _tag: "JsonBody",
  },
} as const;

export type PostSubscriptionRequestFunction = RequestFunction<
  { body: schemas.Subscription },
  schemas.Subscription
>;
