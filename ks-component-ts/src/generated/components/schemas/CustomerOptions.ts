import * as t from "io-ts";
import { CheckoutOption } from "./CheckoutOption";
import { Money } from "./Money";

export const CustomerOptions = t.intersection([
  t.type({
    checkout_option: CheckoutOption,
    finance_option: t.string,
  }),
  t.partial({
    deposit_value: Money,
  }),
]);

export interface CustomerOptions {
  checkout_option: CheckoutOption;
  finance_option: string;
  deposit_value?: Money;
}
