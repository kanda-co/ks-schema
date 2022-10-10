import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const postPaymentOperation = {
  path: "/api/payment",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Payment },
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

export type PostPaymentRequestFunction = RequestFunction<
  { body: schemas.Payment },
  schemas.Payment
>;
