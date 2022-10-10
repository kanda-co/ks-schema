import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const infoGhostOperation = {
  path: "/api/info/ghost",
  method: "put",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.InfoGhost },
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

export type InfoGhostRequestFunction = RequestFunction<
  { body: schemas.InfoGhost },
  schemas.InfoGhost
>;
