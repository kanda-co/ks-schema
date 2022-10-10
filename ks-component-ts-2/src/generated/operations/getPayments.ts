import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as t from "io-ts";
import * as schemas from "../components/schemas";

export const getPaymentsOperation = {
  path: "/api/payment",
  method: "get",
  responses: {
    "200": { _tag: "JsonResponse", decoder: t.array(schemas.Payment) },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type GetPaymentsRequestFunction = RequestFunction<
  undefined,
  Array<schemas.Payment>
>;
