import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type PutSubscriptionRequestParameters = {
  id: string;
};

export const putSubscriptionOperation = {
  path: "/api/subscription/{id}",
  method: "put",
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
  requestDefaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: {
    _tag: "JsonBody",
  },
} as const;

export type PutSubscriptionRequestFunction = RequestFunction<
  { params: PutSubscriptionRequestParameters; body: schemas.Subscription },
  schemas.Subscription
>;
