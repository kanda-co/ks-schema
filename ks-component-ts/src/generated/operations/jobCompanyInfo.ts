import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type JobCompanyInfoRequestParameters = {
  id: string;
};

export const jobCompanyInfoOperation = {
  path: "/api/job/{id}/companyInfo",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.JobCompanyInfo },
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
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type JobCompanyInfoRequestFunction = RequestFunction<
  { params: JobCompanyInfoRequestParameters },
  schemas.JobCompanyInfo
>;
