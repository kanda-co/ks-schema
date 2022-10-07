import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type DirectorCompanyRequestParameters = {
  id: string;
};

export const directorCompanyOperation = {
  path: "/api/company/{id}/director",
  method: "post",
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

export type DirectorCompanyRequestFunction = RequestFunction<
  { params: DirectorCompanyRequestParameters },
  schemas.Company
>;
