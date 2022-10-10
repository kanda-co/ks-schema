import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type GetPaymentRequestParameters = {
  id: string;
};

export const getPaymentOperation = {
  path: "/api/payment/{id}",
  method: "get",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Payment },
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

export type GetPaymentRequestFunction = RequestFunction<
  { params: GetPaymentRequestParameters },
  schemas.Payment
>;
