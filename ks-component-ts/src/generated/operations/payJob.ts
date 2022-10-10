import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type PayJobRequestParameters = {
  id: string;
};

export const payJobOperation = {
  path: "/api/job/{id}/pay",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Job },
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
  requestDefaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: {
    _tag: "JsonBody",
  },
} as const;

export type PayJobRequestFunction = RequestFunction<
  { params: PayJobRequestParameters; body: schemas.PaymentOption },
  schemas.Job
>;
