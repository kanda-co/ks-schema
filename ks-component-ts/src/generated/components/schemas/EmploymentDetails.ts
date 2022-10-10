import * as t from "io-ts";
import { EmployedDetails } from "./EmployedDetails";
import { Money } from "./Money";
import { NotEmployedDetails } from "./NotEmployedDetails";
import { SelfEmployedDetails } from "./SelfEmployedDetails";

export const EmploymentDetails = t.intersection([
  t.type({
    employment_status: t.union([
      t.literal("employed"),
      t.literal("self_employed"),
      t.literal("not_employed"),
      t.literal("retired"),
    ]),
    gross_annual_income: Money,
    household_annual_income: Money,
  }),
  t.partial({
    employed_details: EmployedDetails,
    self_employed_details: SelfEmployedDetails,
    not_employed_details: NotEmployedDetails,
  }),
]);

export interface EmploymentDetails {
  employment_status: "employed" | "self_employed" | "not_employed" | "retired";
  employed_details?: EmployedDetails;
  self_employed_details?: SelfEmployedDetails;
  not_employed_details?: NotEmployedDetails;
  gross_annual_income: Money;
  household_annual_income: Money;
}
