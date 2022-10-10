import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type GetCreditRequestParameters = {
  id: string;
};

export const getCreditOperation = {
  path: "/api/credit/{id}",
  method: "get",
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

export type GetCreditRequestFunction = RequestFunction<
  { params: GetCreditRequestParameters },
  schemas.Credit
>;
