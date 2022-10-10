import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type DeleteSubscriptionRequestParameters = {
  id: string;
};

export const deleteSubscriptionOperation = {
  path: "/api/subscription/{id}",
  method: "delete",
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

export type DeleteSubscriptionRequestFunction = RequestFunction<
  { params: DeleteSubscriptionRequestParameters },
  schemas.Subscription
>;
