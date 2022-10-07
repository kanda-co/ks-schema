import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const postDocumentOperation = {
  path: "/api/document",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Document },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [],
  requestDefaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: {
    _tag: "JsonBody",
  },
} as const;

export type PostDocumentRequestFunction = RequestFunction<
  { body: schemas.Document },
  schemas.Document
>;
