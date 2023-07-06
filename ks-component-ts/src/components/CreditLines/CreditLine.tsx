import React, { type FunctionComponent } from "react";
import { Price, Text } from "@kanda-libs/ks-design-library";
import type { FinanceRate } from "~/generated/components/schemas";
import { CLASS_NAMES } from "./constants";
import { formatValue, getMonthlyPayment, getTotalInterestFee } from "./helpers";

export interface CreditLinesProps {
  option: FinanceRate;
}

const CreditLine: FunctionComponent<CreditLinesProps> = function ({ option }) {
  const monthlyPayment = getMonthlyPayment(option);
  const loan = formatValue(option.credit_line);
  const duration = option.duration?.toString();
  const interestFee = getTotalInterestFee(monthlyPayment, option);

  return (
    <>
      <div className={CLASS_NAMES.row} key={`credit-line-${option.name}`}>
        <div className={CLASS_NAMES.creditLine}>
          <Text text="Loan Amount" className={CLASS_NAMES.label} />
          <Text text={loan} className={CLASS_NAMES.price} />
        </div>
        <div className={CLASS_NAMES.values}>
          <div className={CLASS_NAMES.value}>
            <Text text="Monthly" className={CLASS_NAMES.label} />
            <Price
              amount={monthlyPayment}
              poundsClassName={CLASS_NAMES.price}
              centsClassName={CLASS_NAMES.cents}
            />
          </div>
          <div className={CLASS_NAMES.value}>
            <Text text="Months" className={CLASS_NAMES.label} />
            <Text text={duration} className={CLASS_NAMES.price} />
          </div>
          <div className={CLASS_NAMES.value}>
            <Text text="Total fee" className={CLASS_NAMES.label} />
            <Price
              amount={interestFee}
              poundsClassName={CLASS_NAMES.price}
              centsClassName={CLASS_NAMES.cents}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditLine;
