import type { RequestFunction } from "@openapi-io-ts/runtime";
import * as schemas from "../components/schemas";

export type RunnerRequestParameters = {
  event: "reminder" | "housekeeping";
  task:
    | "dbv3_ho_application_customer_action_reminder"
    | "dbv3_ho_application_sat_note_sent_reminder"
    | "dbv3_ho_application_sign_docs_reminder"
    | "dbv3_ho_initial_follow_up"
    | "dbv3_tp_initial_follow_up"
    | "dbv3_user_company_setup_reminder"
    | "dbv3_user_verify_director_reminder"
    | "housekeeping_check_referral_expiry";
};

export const runnerOperation = {
  path: "/api/runner",
  method: "get",
  responses: {
    "200": { _tag: "EmptyResponse" },
    default: { _tag: "JsonResponse", decoder: schemas.Error },
  },
  parameters: [
    {
      _tag: "FormParameter",
      explode: true,
      in: "query",
      name: "event",
    },
    {
      _tag: "FormParameter",
      explode: true,
      in: "query",
      name: "task",
    },
  ],
  requestDefaultHeaders: {},
} as const;

export type RunnerRequestFunction = RequestFunction<
  { params: RunnerRequestParameters },
  void
>;
