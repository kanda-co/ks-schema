import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const infoIPOperation = {
  path: "/api/info/ip",
  method: "get",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.InfoIP },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type InfoIPRequestFunction = RequestFunction<undefined, schemas.InfoIP>;
