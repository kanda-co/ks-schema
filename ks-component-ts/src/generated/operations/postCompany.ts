import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const postCompanyOperation = {
  path: "/api/company",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Company },
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

export type PostCompanyRequestFunction = RequestFunction<
  { body: schemas.Company },
  schemas.Company
>;
