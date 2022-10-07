import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type PutDocumentRequestParameters = {
  id: string;
};

export const putDocumentOperation = {
  path: "/api/document/{id}",
  method: "put",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Document },
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

export type PutDocumentRequestFunction = RequestFunction<
  { params: PutDocumentRequestParameters; body: schemas.Document },
  schemas.Document
>;
