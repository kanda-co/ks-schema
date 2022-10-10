import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as t from "io-ts";
import * as schemas from "../components/schemas";

export const getCompaniesOperation = {
  path: "/api/company",
  method: "get",
  responses: {
    "200": { _tag: "JsonResponse", decoder: t.array(schemas.Company) },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type GetCompaniesRequestFunction = RequestFunction<
  undefined,
  Array<schemas.Company>
>;
