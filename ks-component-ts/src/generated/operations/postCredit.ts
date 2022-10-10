import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const postCreditOperation = {
  path: "/api/credit",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Credit },
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

export type PostCreditRequestFunction = RequestFunction<
  { body: schemas.Credit },
  schemas.Credit
>;
