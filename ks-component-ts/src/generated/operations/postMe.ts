import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const postMeOperation = {
  path: "/api/me",
  method: "post",
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

export type PostMeRequestFunction = RequestFunction<
  { body: schemas.InfoMe },
  schemas.AuthUser
>;
