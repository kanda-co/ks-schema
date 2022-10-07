import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type PutCreditRequestParameters = {
  id: string;
};

export const putCreditOperation = {
  path: "/api/credit/{id}",
  method: "put",
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
  requestDefaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: {
    _tag: "JsonBody",
  },
} as const;

export type PutCreditRequestFunction = RequestFunction<
  { params: PutCreditRequestParameters; body: schemas.Credit },
  schemas.Credit
>;
