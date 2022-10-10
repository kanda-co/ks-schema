import * as t from "io-ts";

export const JobCreditState = t.intersection([
  t.type({
    id: t.string,
  }),
  t.partial({
    has_finance_application: t.boolean,
    current_status: t.union([
      t.literal("not_submitted"),
      t.literal("accepted_sign_document"),
      t.literal("accepted_deposit_required"),
      t.literal("accepted"),
      t.literal("declined"),
      t.literal("referred"),
      t.literal("action_lender"),
      t.literal("action_customer"),
      t.literal("pending"),
      t.literal("finished"),
      t.literal("paid_out"),
      t.literal("cancelled"),
    ]),
  }),
]);

export interface JobCreditState {
  id: string;
  has_finance_application?: boolean;
  current_status?:
    | "not_submitted"
    | "accepted_sign_document"
    | "accepted_deposit_required"
    | "accepted"
    | "declined"
    | "referred"
    | "action_lender"
    | "action_customer"
    | "pending"
    | "finished"
    | "paid_out"
    | "cancelled";
}
