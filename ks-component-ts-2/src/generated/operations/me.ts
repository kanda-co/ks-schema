import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const meOperation = {
  path: "/api/me",
  method: "get",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.AuthUser },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type MeRequestFunction = RequestFunction<undefined, schemas.AuthUser>;
