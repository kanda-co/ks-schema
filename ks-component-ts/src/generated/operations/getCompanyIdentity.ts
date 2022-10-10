import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type GetCompanyIdentityRequestParameters = {
  id: string;
  email?: string;
};

export const getCompanyIdentityOperation = {
  path: "/api/company/{id}/identity",
  method: "get",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.InfoCompany },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [
    {
      _tag: "FormParameter",
      explode: false,
      in: "path",
      name: "id",
    },
    {
      _tag: "FormParameter",
      explode: true,
      in: "query",
      name: "email",
    },
  ],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type GetCompanyIdentityRequestFunction = RequestFunction<
  { params: GetCompanyIdentityRequestParameters },
  schemas.InfoCompany
>;
