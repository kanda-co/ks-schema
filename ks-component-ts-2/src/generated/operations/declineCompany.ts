import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type DeclineCompanyRequestParameters = {
  id: string;
  reason:
    | "rejected_outdated_insurance_document"
    | "rejected_invalid_insurnace_document"
    | "rejected_not_on_trade_body_website"
    | "rejected_contact_us_on_application_error"
    | "declined_ccj_against_business_or_director"
    | "declined_ccj_against_previous_association"
    | "declined_listed_trade_type_not_covered"
    | "declined_several_negatives_against_company"
    | "declined_unable_to_complete_id_checks";
};

export const declineCompanyOperation = {
  path: "/api/company/{id}/decline",
  method: "post",
  responses: {
    "200": { _tag: "JsonResponse", decoder: schemas.Company },
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
      name: "reason",
    },
  ],
  requestDefaultHeaders: { Accept: "application/json" },
} as const;

export type DeclineCompanyRequestFunction = RequestFunction<
  { params: DeclineCompanyRequestParameters },
  schemas.Company
>;
