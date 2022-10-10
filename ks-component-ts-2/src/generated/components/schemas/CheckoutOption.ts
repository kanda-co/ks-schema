import * as t from "io-ts";

export const CheckoutOption = t.union([
  t.literal("apply_for_finance"),
  t.literal("decline_job"),
  t.literal("pay_on_completion"),
]);

export type CheckoutOption =
  | "apply_for_finance"
  | "decline_job"
  | "pay_on_completion";
