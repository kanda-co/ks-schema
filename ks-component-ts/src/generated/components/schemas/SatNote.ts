import * as t from "io-ts";
import { Document } from "./Document";
import { Signature } from "./Signature";

export const SatNote = t.intersection([
  t.type({
    q_pressure: t.union([
      t.literal("no"),
      t.literal("somewhat"),
      t.literal("yes"),
    ]),
    q_easiness: t.union([
      t.literal("no"),
      t.literal("somewhat"),
      t.literal("yes"),
    ]),
    q_availability: t.union([
      t.literal("The installer told me when quoting me"),
      t.literal("I saw it advertised by the installer"),
      t.literal("I found out when the installer sent me a link via Kanda"),
    ]),
    q_application: t.union([
      t.literal("I completed the application myself"),
      t.literal("Someone completed the appliation on my behalf"),
    ]),
    q_advice: t.union([
      t.literal("They just sent me a link to apply"),
      t.literal("They told me what rates where available"),
      t.literal("They helped me work out my potential repayments"),
      t.literal("They completed the application for me"),
    ]),
    signature: Signature,
    certificate: Document,
  }),
  t.partial({
    q_saving: t.union([
      t.literal("Yes I understand"),
      t.literal("No I don't understand"),
    ]),
  }),
]);

export interface SatNote {
  q_pressure: "no" | "somewhat" | "yes";
  q_easiness: "no" | "somewhat" | "yes";
  q_availability:
    | "The installer told me when quoting me"
    | "I saw it advertised by the installer"
    | "I found out when the installer sent me a link via Kanda";
  q_application:
    | "I completed the application myself"
    | "Someone completed the appliation on my behalf";
  q_advice:
    | "They just sent me a link to apply"
    | "They told me what rates where available"
    | "They helped me work out my potential repayments"
    | "They completed the application for me";
  q_saving?: "Yes I understand" | "No I don't understand";
  signature: Signature;
  certificate: Document;
}
