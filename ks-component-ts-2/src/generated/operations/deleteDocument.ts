import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type DeleteDocumentRequestParameters = {
  id: string;
};

export const deleteDocumentOperation = {
  path: "/api/document/{id}",
  method: "delete",
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

export type DeleteDocumentRequestFunction = RequestFunction<
  { params: DeleteDocumentRequestParameters },
  schemas.Document
>;
