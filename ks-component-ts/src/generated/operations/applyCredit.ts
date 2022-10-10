import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type ApplyCreditRequestParameters = {
  id: string;
};

export const applyCreditOperation = {
  path: "/api/credit/{id}/apply",
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

export type ApplyCreditRequestFunction = RequestFunction<
  { params: ApplyCreditRequestParameters },
  schemas.Credit
>;
