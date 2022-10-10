import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type GetDocumentRequestParameters = {
  id: string;
};

export const getDocumentOperation = {
  path: "/api/document/{id}",
  method: "get",
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
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type GetDocumentRequestFunction = RequestFunction<
  { params: GetDocumentRequestParameters },
  schemas.Document
>;
