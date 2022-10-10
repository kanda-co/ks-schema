import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type ApplyJobRequestParameters = {
  id: string;
};

export const applyJobOperation = {
  path: "/api/job/{id}/apply",
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
  requestDefaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: {
    _tag: "JsonBody",
  },
} as const;

export type ApplyJobRequestFunction = RequestFunction<
  { params: ApplyJobRequestParameters; body: schemas.CustomerOptions },
  schemas.Job
>;
