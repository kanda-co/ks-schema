import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type GetSubscriptionRequestParameters = {
  id: string;
};

export const getSubscriptionOperation = {
  path: "/api/subscription/{id}",
  method: "get",
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

export type GetSubscriptionRequestFunction = RequestFunction<
  { params: GetSubscriptionRequestParameters },
  schemas.Subscription
>;
