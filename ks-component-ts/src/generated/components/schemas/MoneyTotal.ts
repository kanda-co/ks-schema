import * as t from "io-ts";
import { Money } from "./Money";

export const MoneyTotal = t.partial({
  amount_vat_inclusive: Money,
  amount_vat_exclusive: Money,
  amount_vat: Money,
});

export interface MoneyTotal {
  amount_vat_inclusive?: Money;
  amount_vat_exclusive?: Money;
  amount_vat?: Money;
}
