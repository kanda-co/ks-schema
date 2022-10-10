import * as t from "io-ts";

export const FinanceStatus = t.union([
  t.literal("not_applied"),
  t.literal("under_review"),
  t.literal("applied_for_finance"),
  t.literal("finance_not_approved"),
  t.literal("financed"),
  t.literal("sat_note_sent"),
  t.literal("sat_note_viewed"),
  t.literal("sat_note_signed"),
  t.literal("payout_pending"),
  t.literal("paid"),
  t.literal("finance_cancelled"),
]);

export type FinanceStatus =
  | "not_applied"
  | "under_review"
  | "applied_for_finance"
  | "finance_not_approved"
  | "financed"
  | "sat_note_sent"
  | "sat_note_viewed"
  | "sat_note_signed"
  | "payout_pending"
  | "paid"
  | "finance_cancelled";
