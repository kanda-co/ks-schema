import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type QuoteCreditRequestParameters = {
  id: string;
};

export const quoteCreditOperation = {
  path: "/api/credit/{id}/quote",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Credit },
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

export type QuoteCreditRequestFunction = RequestFunction<
  { params: QuoteCreditRequestParameters },
  schemas.Credit
>;
