import * as t from "io-ts";

export const BankAccount = t.intersection([
  t.type({
    account_name: t.string,
    account_number: t.string,
    sort_code: t.string,
  }),
  t.partial({
    months_held: t.number,
  }),
]);

export interface BankAccount {
  account_name: string;
  account_number: string;
  sort_code: string;
  months_held?: number;
}
