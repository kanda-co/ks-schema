import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export const infoVerifyOperation = {
  path: "/api/info/verify",
  method: "put",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.InfoAuth },
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

export type InfoVerifyRequestFunction = RequestFunction<
  { body: schemas.InfoAuth },
  schemas.InfoAuth
>;