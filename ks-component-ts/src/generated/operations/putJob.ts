import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type PutJobRequestParameters = {
  id: string;
};

export const putJobOperation = {
  path: "/api/job/{id}",
  method: "put",
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

export type PutJobRequestFunction = RequestFunction<
  { params: PutJobRequestParameters; body: schemas.Job },
  schemas.Job
>;
