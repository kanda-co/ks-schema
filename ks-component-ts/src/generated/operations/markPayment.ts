import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type MarkPaymentRequestParameters = {
  id: string;
  status: "unpaid" | "paid" | "pay_on_completion";
};

export const markPaymentOperation = {
  path: "/api/payment/{id}/{status}",
  method: "post",
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
    {
      _tag: "FormParameter",
      explode: false,
      in: "path",
      name: "status",
    },
  ],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type MarkPaymentRequestFunction = RequestFunction<
  { params: MarkPaymentRequestParameters },
  schemas.Payment
>;
