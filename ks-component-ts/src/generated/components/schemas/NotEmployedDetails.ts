import * as t from "io-ts";

export const NotEmployedDetails = t.type({
  source_of_income: t.union([
    t.literal("partner"),
    t.literal("benefits"),
    t.literal("maintenance"),
    t.literal("disabled"),
    t.literal("full-time carer"),
    t.literal("homemaker"),
    t.literal("permanent dla"),
    t.literal("other"),
  ]),
});

export interface NotEmployedDetails {
  source_of_income:
    | "partner"
    | "benefits"
    | "maintenance"
    | "disabled"
    | "full-time carer"
    | "homemaker"
    | "permanent dla"
    | "other";
}
