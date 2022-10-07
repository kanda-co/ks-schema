import * as t from "io-ts";

export const Signature = t.type({
  signed: t.union([t.literal("yes"), t.literal("no")]),
  fingerprint: t.string,
});

export interface Signature {
  signed: "yes" | "no";
  fingerprint: string;
}
