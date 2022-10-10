import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type SendJobRequestParameters = {
  id: string;
};

export const sendJobOperation = {
  path: "/api/job/{id}/send",
  method: "post",
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

export type SendJobRequestFunction = RequestFunction<
  { params: SendJobRequestParameters },
  schemas.Job
>;
