import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type ArchiveJobRequestParameters = {
  id: string;
};

export const archiveJobOperation = {
  path: "/api/job/{id}/archive",
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

export type ArchiveJobRequestFunction = RequestFunction<
  { params: ArchiveJobRequestParameters },
  schemas.Job
>;
