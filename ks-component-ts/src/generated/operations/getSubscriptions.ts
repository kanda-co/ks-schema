import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as t from "io-ts";
import * as schemas from "../components/schemas";

export const getSubscriptionsOperation = {
  path: "/api/subscription",
  method: "get",
  responses: {
    "200": { _tag: "JsonResponse", decoder: t.array(schemas.Subscription) },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type GetSubscriptionsRequestFunction = RequestFunction<
  undefined,
  Array<schemas.Subscription>
>;
