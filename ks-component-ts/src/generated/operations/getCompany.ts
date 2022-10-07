import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type GetCompanyRequestParameters = {
  id: string;
};

export const getCompanyOperation = {
  path: "/api/company/{id}",
  method: "get",
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
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type GetCompanyRequestFunction = RequestFunction<
  { params: GetCompanyRequestParameters },
  schemas.Company
>;
