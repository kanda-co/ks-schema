import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const infoHealthOperation = {
  path: "/api/info/health",
  method: "get",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Error },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type InfoHealthRequestFunction = RequestFunction<
  undefined,
  schemas.Error
>;
