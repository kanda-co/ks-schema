import React, { type FunctionComponent } from "react";
import { Icon } from "@kanda-libs/ks-design-library";
import type { Lead, FinanceRate } from "~/generated/components/schemas";

import { CLASS_NAMES } from "./constants";
import CreditLine from "./CreditLine";

export interface CreditLinesProps {
  lead: Lead;
}

const CreditLines: FunctionComponent<CreditLinesProps> = function ({ lead }) {
  const options = lead?.finance_options || [];

  return (
    <>
      <div className={CLASS_NAMES.wrapper}>
        {options.map((financeOption: FinanceRate) => (
          <CreditLine key={financeOption.name} option={financeOption} />
        ))}
      </div>
      <div className={CLASS_NAMES.notice}>
        <Icon icon="info" size={20} className={CLASS_NAMES.icon} />
        Kanda loans are charged at 11.9% APR interest
      </div>
    </>
  );
};

export default CreditLines;
