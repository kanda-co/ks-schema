import * as t from "io-ts";
import { Metadata } from "./Metadata";
import { PaymentOption } from "./PaymentOption";

export const Payment = t.intersection([
  t.type({
    payment_option: PaymentOption,
  }),
  t.partial({
    id: t.string,
    cid: t.string,
    oid: t.string,
    aid: t.string,
    kid: t.string,
    kind: t.union([t.literal("job"), t.literal("charge")]),
    xid: t.string,
    xref: t.string,
    status: t.union([
      t.literal("unpaid"),
      t.literal("pending"),
      t.literal("paid"),
      t.literal("disputed"),
      t.literal("cancelled"),
      t.literal("refunded"),
    ]),
    metadata: Metadata,
  }),
]);

export interface Payment {
  id?: string;
  cid?: string;
  oid?: string;
  aid?: string;
  kid?: string;
  kind?: "job" | "charge";
  xid?: string;
  xref?: string;
  payment_option: PaymentOption;
  status?:
    | "unpaid"
    | "pending"
    | "paid"
    | "disputed"
    | "cancelled"
    | "refunded";
  metadata?: Metadata;
}
