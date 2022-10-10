import * as t from "io-ts";
import { CheckoutOption } from "./CheckoutOption";
import { Customer } from "./Customer";
import { CustomerOptions } from "./CustomerOptions";
import { Document } from "./Document";
import { FinanceStatus } from "./FinanceStatus";
import { JobItem } from "./JobItem";
import { Metadata } from "./Metadata";
import { Money } from "./Money";
import { MoneyTotal } from "./MoneyTotal";
import { Payment } from "./Payment";
import { SatNote } from "./SatNote";
import { SatNoteTimeline } from "./SatNoteTimeline";

export const Job = t.intersection([
  t.type({
    title: t.string,
    deposit_type: t.union([
      t.literal("no_deposit"),
      t.literal("partial_deposit"),
      t.literal("fixed_deposit"),
    ]),
    deposit_value: Money,
    job_items: t.array(JobItem),
  }),
  t.partial({
    id: t.string,
    cid: t.string,
    oid: t.string,
    aid: t.string,
    description: t.string,
    customer: Customer,
    total: MoneyTotal,
    notes: t.array(t.string),
    archived: t.union([t.literal("yes"), t.literal("no")]),
    status: t.union([
      t.literal("draft"),
      t.literal("sent"),
      t.literal("accepted"),
      t.literal("declined"),
      t.literal("finished"),
    ]),
    finance_status: FinanceStatus,
    checkout_options: t.array(CheckoutOption),
    finance_options: t.array(t.string),
    customer_options: CustomerOptions,
    payments: t.array(Payment),
    sat_note_timeline: SatNoteTimeline,
    sat_note: SatNote,
    job_type: t.union([t.literal("standard"), t.literal("solar")]),
    job_documents: t.array(Document),
    metadata: Metadata,
  }),
]);

export interface Job {
  id?: string;
  cid?: string;
  oid?: string;
  aid?: string;
  title: string;
  description?: string;
  deposit_type: "no_deposit" | "partial_deposit" | "fixed_deposit";
  deposit_value: Money;
  customer?: Customer;
  job_items: Array<JobItem>;
  total?: MoneyTotal;
  notes?: Array<string>;
  archived?: "yes" | "no";
  status?: "draft" | "sent" | "accepted" | "declined" | "finished";
  finance_status?: FinanceStatus;
  checkout_options?: Array<CheckoutOption>;
  finance_options?: Array<string>;
  customer_options?: CustomerOptions;
  payments?: Array<Payment>;
  sat_note_timeline?: SatNoteTimeline;
  sat_note?: SatNote;
  job_type?: "standard" | "solar";
  job_documents?: Array<Document>;
  metadata?: Metadata;
}
