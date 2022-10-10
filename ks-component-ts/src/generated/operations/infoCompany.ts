import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as t from "io-ts";
import * as schemas from "../components/schemas";

export type InfoCompanyRequestParameters = {
  company_name?: string;
  company_number?: string;
  directors?: boolean;
};

export const infoCompanyOperation = {
  path: "/api/info/company",
  method: "get",
  responses: {
    "200": { _tag: "JsonResponse", decoder: t.array(schemas.InfoCompany) },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [
    {
      _tag: "FormParameter",
      explode: true,
      in: "query",
      name: "company_name",
    },
    {
      _tag: "FormParameter",
      explode: true,
      in: "query",
      name: "company_number",
    },
    {
      _tag: "FormParameter",
      explode: true,
      in: "query",
      name: "directors",
    },
  ],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type InfoCompanyRequestFunction = RequestFunction<
  { params: InfoCompanyRequestParameters },
  Array<schemas.InfoCompany>
>;
