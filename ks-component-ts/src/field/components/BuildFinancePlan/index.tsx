import React, { type FunctionComponent } from "react";
import useBuildFinancePlanProps from "./useBuildFinancePlanProps";
import {
  DEPOSIT_PROPS,
  SELECT_PRICE_PROPS,
  SET_PRICE_PROPS,
  RATE_PROPS,
  TERM_PROPS,
} from "./constants";
import RadioSelect from "../RadioSelect";
import { Price } from "@kanda-libs/ks-design-library";

export interface BuildFinancePlanProps {
  /**
   * Job price
   */
  price?: number;
  /**
   * Field name
   */
  name?: string;
  availableRates?: string[];
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  className?: string;
  /**
   * Amount takes as deposit
   */
  depositTaken?: number;
}

const BuildFinancePlan: FunctionComponent<BuildFinancePlanProps> = function ({
  price = 0,
  name = "plan",
  availableRates = [],
  isLoading = false,
  className = "",
  depositTaken,
}) {
  const { classNames, fields, depositValue, showDeposit, aprs, terms } =
    useBuildFinancePlanProps({
      price,
      name,
      availableRates,
      isLoading,
      className,
      depositTaken,
    });

  return (
    <div className={classNames.container}>
      <div className={classNames.depositRow}>
        {showDeposit ? (
          <React.Fragment>
            <div className={classNames.depositFlex}>
              <RadioSelect
                name={fields.depositPercentage}
                isLoading={isLoading}
                {...DEPOSIT_PROPS}
              />
            </div>
            {(depositValue || isLoading) && (
              <div className={classNames.price}>
                <Price
                  amount={depositValue as number}
                  isLoading={isLoading}
                  {...SELECT_PRICE_PROPS}
                />
              </div>
            )}
          </React.Fragment>
        ) : (
          <div className="flex flex-col">
            <span className="w-full text-style-h-em text-neutral-600 mb-2">
              Deposit amount
            </span>
            <Price
              amount={depositValue as number}
              isLoading={isLoading}
              {...SET_PRICE_PROPS}
            />
          </div>
        )}
      </div>
      <RadioSelect
        name={fields.rate}
        options={aprs}
        isLoading={isLoading}
        {...RATE_PROPS}
      />

      <RadioSelect
        name={fields.term}
        options={terms}
        isLoading={isLoading}
        {...TERM_PROPS}
      />
    </div>
  );
};

export default BuildFinancePlan;
