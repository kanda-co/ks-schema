import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type SignJobSateNoteRequestParameters = {
  id: string;
};

export const signJobSateNoteOperation = {
  path: "/api/job/{id}/signSatNote",
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

export type SignJobSateNoteRequestFunction = RequestFunction<
  { params: SignJobSateNoteRequestParameters; body: schemas.SatNote },
  schemas.Job
>;
