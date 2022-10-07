import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type ResendJobRequestParameters = {
  id: string;
};

export const resendJobOperation = {
  path: "/api/job/{id}/resend",
  method: "post",
  responses: { default: { _tag: "JsonResponse", decoder: schemas.Error } },
  parameters: [
    {
      _tag: "FormParameter",
      explode: false,
      in: "path",
      name: "id",
    },
  ],
  requestDefaultHeaders: {},
} as const;

export type ResendJobRequestFunction = RequestFunction<
  { params: ResendJobRequestParameters },
  void
>;
