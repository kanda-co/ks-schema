import * as t from "io-ts";
import { Metadata } from "./Metadata";
import { Money } from "./Money";

export const Subscription = t.partial({
  id: t.string,
  cid: t.string,
  oid: t.string,
  aid: t.string,
  billing: t.string,
  billing_status: t.string,
  mandate: t.string,
  mandate_status: t.string,
  authorisation_url: t.string,
  interval: t.union([t.literal("monthly"), t.literal("yearly")]),
  day_of_month: t.number,
  amount: Money,
  xid: t.string,
  xref: t.string,
  metadata: Metadata,
});

export interface Subscription {
  id?: string;
  cid?: string;
  oid?: string;
  aid?: string;
  billing?: string;
  billing_status?: string;
  mandate?: string;
  mandate_status?: string;
  authorisation_url?: string;
  interval?: "monthly" | "yearly";
  day_of_month?: number;
  amount?: Money;
  xid?: string;
  xref?: string;
  metadata?: Metadata;
}
