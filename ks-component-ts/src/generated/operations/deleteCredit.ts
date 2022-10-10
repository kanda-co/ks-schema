import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type DeleteCreditRequestParameters = {
  id: string;
};

export const deleteCreditOperation = {
  path: "/api/credit/{id}",
  method: "delete",
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

export type DeleteCreditRequestFunction = RequestFunction<
  { params: DeleteCreditRequestParameters },
  schemas.Credit
>;
