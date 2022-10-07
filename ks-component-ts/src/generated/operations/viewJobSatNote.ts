import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type ViewJobSatNoteRequestParameters = {
  id: string;
};

export const viewJobSatNoteOperation = {
  path: "/api/job/{id}/viewSatNote",
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

export type ViewJobSatNoteRequestFunction = RequestFunction<
  { params: ViewJobSatNoteRequestParameters },
  schemas.Job
>;
