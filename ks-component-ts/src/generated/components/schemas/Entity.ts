import * as t from "io-ts";
import { Company } from "./Company";
import { Credit } from "./Credit";
import { Document } from "./Document";
import { Job } from "./Job";
import { Payment } from "./Payment";
import { Subscription } from "./Subscription";

export const Entity = t.partial({
  company: Company,
  credit: Credit,
  document: Document,
  job: Job,
  payment: Payment,
  subscription: Subscription,
});

export interface Entity {
  company?: Company;
  credit?: Credit;
  document?: Document;
  job?: Job;
  payment?: Payment;
  subscription?: Subscription;
}
