import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type DeleteCompanyRequestParameters = {
  id: string;
};

export const deleteCompanyOperation = {
  path: "/api/company/{id}",
  method: "delete",
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

export type DeleteCompanyRequestFunction = RequestFunction<
  { params: DeleteCompanyRequestParameters },
  schemas.Company
>;
