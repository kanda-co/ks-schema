import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type PostCompanyIdentityRequestParameters = {
  id: string;
  email: string;
};

export const postCompanyIdentityOperation = {
  path: "/api/company/{id}/identity",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.InfoCompany },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [
    {
      _tag: "FormParameter",
      explode: false,
      in: "path",
      name: "id",
    },
    {
      _tag: "FormParameter",
      explode: true,
      in: "query",
      name: "email",
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

export type PostCompanyIdentityRequestFunction = RequestFunction<
  { params: PostCompanyIdentityRequestParameters; body: schemas.Identity },
  schemas.InfoCompany
>;
