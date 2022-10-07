import * as t from "io-ts";

export const InfoValidationEmail = t.partial({
  email: t.string,
  verdict: t.union([
    t.literal("valid"),
    t.literal("risky"),
    t.literal("invalid"),
  ]),
  suggestion: t.string,
  source: t.string,
});

export interface InfoValidationEmail {
  email?: string;
  verdict?: "valid" | "risky" | "invalid";
  suggestion?: string;
  source?: string;
}
