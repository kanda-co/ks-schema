import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type CheckCreditRequestParameters = {
  id: string;
};

export const checkCreditOperation = {
  path: "/api/credit/{id}/check",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Credit },
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

export type CheckCreditRequestFunction = RequestFunction<
  { params: CheckCreditRequestParameters },
  schemas.Credit
>;
