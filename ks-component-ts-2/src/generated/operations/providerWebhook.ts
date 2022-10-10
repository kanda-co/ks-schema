import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type ProviderWebhookRequestParameters = {
  provider: "gocardless" | "omni" | "stripe" | "veriff";
};

export const providerWebhookOperation = {
  path: "/api/webhook/{provider}",
  method: "post",
  responses: {
    "200": { _tag: "EmptyResponse" },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [
    {
      _tag: "FormParameter",
      explode: false,
      in: "path",
      name: "provider",
    },
  ],
  requestDefaultHeaders: {},
} as const;

export type ProviderWebhookRequestFunction = RequestFunction<
  { params: ProviderWebhookRequestParameters },
  void
>;
