import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type CheckJobRequestParameters = {
  id: string;
};

export const checkJobOperation = {
  path: "/api/job/{id}/check",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.JobCreditState },
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

export type CheckJobRequestFunction = RequestFunction<
  { params: CheckJobRequestParameters },
  schemas.JobCreditState
>;
