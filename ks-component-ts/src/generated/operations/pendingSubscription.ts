import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type PendingSubscriptionRequestParameters = {
  id: string;
};

export const pendingSubscriptionOperation = {
  path: "/api/subscription/{id}/pending",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Subscription },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [
    {
      _tag: "FormParameter",
      explode: false,
      in: "path",
      name: "id",
    },
  ],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type PendingSubscriptionRequestFunction = RequestFunction<
  { params: PendingSubscriptionRequestParameters },
  schemas.Subscription
>;
