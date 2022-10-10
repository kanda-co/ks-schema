import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type DeleteJobRequestParameters = {
  id: string;
};

export const deleteJobOperation = {
  path: "/api/job/{id}",
  method: "delete",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Job },
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

export type DeleteJobRequestFunction = RequestFunction<
  { params: DeleteJobRequestParameters },
  schemas.Job
>;
