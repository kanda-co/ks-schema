import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const putMeOperation = {
  path: "/api/me",
  method: "put",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.AuthUser },
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

export type PutMeRequestFunction = RequestFunction<
  { body: schemas.InfoMe },
  schemas.AuthUser
>;
