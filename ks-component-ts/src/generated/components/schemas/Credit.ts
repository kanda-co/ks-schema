import * as t from "io-ts";
import { ApplicantDetails } from "./ApplicantDetails";
import { BankAccount } from "./BankAccount";
import { CustomerDetails } from "./CustomerDetails";
import { Document } from "./Document";
import { EmploymentDetails } from "./EmploymentDetails";
import { FinanceDetails } from "./FinanceDetails";
import { Metadata } from "./Metadata";
import { Money } from "./Money";
import { Signature } from "./Signature";

export const Credit = t.intersection([
  t.type({
    finance_option: t.string,
    bank_account: BankAccount,
    customer_details: CustomerDetails,
    employment_details: EmploymentDetails,
  }),
  t.partial({
    id: t.string,
    cid: t.string,
    oid: t.string,
    aid: t.string,
    kid: t.string,
    kind: t.union([t.literal("job"), t.literal("charge")]),
    provider: t.union([t.literal("omni"), t.literal("propensio")]),
    xid: t.string,
    xref: t.string,
    state: t.union([
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
    amount: Money,
    deposit_value: Money,
    finance_details: FinanceDetails,
    extra_applicants: t.array(ApplicantDetails),
    credit_documents: t.array(Document),
    signature: Signature,
    metadata: Metadata,
  }),
]);

export interface Credit {
  id?: string;
  cid?: string;
  oid?: string;
  aid?: string;
  kid?: string;
  kind?: "job" | "charge";
  provider?: "omni" | "propensio";
  xid?: string;
  xref?: string;
  state?:
    | "accepted"
    | "declined"
    | "referred"
    | "action_lender"
    | "action_customer"
    | "pending"
    | "finished"
    | "paid_out"
    | "cancelled";
  amount?: Money;
  deposit_value?: Money;
  finance_option: string;
  bank_account: BankAccount;
  customer_details: CustomerDetails;
  employment_details: EmploymentDetails;
  finance_details?: FinanceDetails;
  extra_applicants?: Array<ApplicantDetails>;
  credit_documents?: Array<Document>;
  signature?: Signature;
  metadata?: Metadata;
}
