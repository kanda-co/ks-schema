import * as t from "io-ts";
import { BankAccount } from "./BankAccount";
import { CustomerDetails } from "./CustomerDetails";
import { EmploymentDetails } from "./EmploymentDetails";
import { FinanceDetails } from "./FinanceDetails";

export const ApplicantDetails = t.type({
  bank_account: BankAccount,
  customer_details: CustomerDetails,
  employment_details: EmploymentDetails,
  finance_details: FinanceDetails,
});

export interface ApplicantDetails {
  bank_account: BankAccount;
  customer_details: CustomerDetails;
  employment_details: EmploymentDetails;
  finance_details: FinanceDetails;
}
