import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type InfoValidateEmailRequestParameters = {
  email: string;
};

export const infoValidateEmailOperation = {
  path: "/api/info/validate-email",
  method: "get",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.InfoValidationEmail },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [
    {
      _tag: "FormParameter",
      explode: true,
      in: "query",
      name: "email",
    },
  ],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type InfoValidateEmailRequestFunction = RequestFunction<
  { params: InfoValidateEmailRequestParameters },
  schemas.InfoValidationEmail
>;
