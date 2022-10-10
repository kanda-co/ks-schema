import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type SignCreditRequestParameters = {
  id: string;
};

export const signCreditOperation = {
  path: "/api/credit/{id}/sign",
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
  requestDefaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: {
    _tag: "JsonBody",
  },
} as const;

export type SignCreditRequestFunction = RequestFunction<
  { params: SignCreditRequestParameters; body: schemas.SignDocument },
  schemas.Credit
>;
