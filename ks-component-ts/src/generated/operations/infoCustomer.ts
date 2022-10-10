import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as t from "io-ts";
import * as schemas from "../components/schemas";

export type InfoCustomerRequestParameters = {
  q?: string;
};

export const infoCustomerOperation = {
  path: "/api/info/customer",
  method: "get",
  responses: {
    "200": { _tag: "JsonResponse", decoder: t.array(schemas.Customer) },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [
    {
      _tag: "FormParameter",
      explode: true,
      in: "query",
      name: "q",
    },
  ],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type InfoCustomerRequestFunction = RequestFunction<
  { params: InfoCustomerRequestParameters },
  Array<schemas.Customer>
>;
