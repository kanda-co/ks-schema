import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type DeletePaymentRequestParameters = {
  id: string;
};

export const deletePaymentOperation = {
  path: "/api/payment/{id}",
  method: "delete",
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

export type DeletePaymentRequestFunction = RequestFunction<
  { params: DeletePaymentRequestParameters },
  schemas.Payment
>;
