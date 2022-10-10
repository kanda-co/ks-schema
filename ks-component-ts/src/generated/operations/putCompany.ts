import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type PutCompanyRequestParameters = {
  id: string;
};

export const putCompanyOperation = {
  path: "/api/company/{id}",
  method: "put",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Company },
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

export type PutCompanyRequestFunction = RequestFunction<
  { params: PutCompanyRequestParameters; body: schemas.Company },
  schemas.Company
>;
