import React, { type FunctionComponent } from "react";
import { Price, SkeletonLoader, Text } from "@kanda-libs/ks-design-library";
import type { GroupedFinanceRate } from "./types";
import { CLASS_NAMES, SKELETON_PROPS, TERMS_PRICE_PROPS } from "./constants";
import { FieldHandle } from "..";

export interface CreditLineProps {
  name?: string;
  title?: string;
  financeOptionGroup?: GroupedFinanceRate;
  isLoading?: boolean;
  muted?: boolean;
  selected?: boolean;
  selectable?: boolean;
  onSelect?: (name: string) => void;
}

const CreditLine: FunctionComponent<CreditLineProps> = function ({
  name,
  title,
  financeOptionGroup,
  isLoading = false,
  muted = false,
  selected = false,
  selectable = false,
  onSelect = () => {},
}) {
  const classKey = muted ? "muted" : "base";

  return (
    <div
      role="button"
      tabIndex={0}
      className={CLASS_NAMES.wrapper[classKey]}
      onClick={() => {
        onSelect(name as string);
      }}
      onKeyUp={() => {
        onSelect(name as string);
      }}
    >
      {title && <Text className={CLASS_NAMES.title} text={title} />}
      <div className={CLASS_NAMES.innerWrapper}>
        {isLoading && (
          <div className={CLASS_NAMES.credit}>
            <SkeletonLoader {...SKELETON_PROPS} />
            <SkeletonLoader {...SKELETON_PROPS} />
          </div>
        )}
        {!isLoading && (
          <div className={CLASS_NAMES.credit}>
            <Text text="Max credit line" className={CLASS_NAMES.termsLabel} />
            <div>
              <Price
                amount={financeOptionGroup?.creditLine}
                isLoading={isLoading}
                poundsClassName={CLASS_NAMES.price[classKey]}
                centsClassName={CLASS_NAMES.price[classKey]}
              />
            </div>
          </div>
        )}
        {isLoading && (
          <div className={CLASS_NAMES.termsLoading}>
            <SkeletonLoader {...SKELETON_PROPS} />
            <SkeletonLoader {...SKELETON_PROPS} />
          </div>
        )}
        {!isLoading && (
          <div className={CLASS_NAMES.terms}>
            <div className={CLASS_NAMES.termsInnerWrapper}>
              <div className={CLASS_NAMES.termsItem}>
                <Text text="Term" className={CLASS_NAMES.termsLabel} />
                <Text
                  text={`${[
                    financeOptionGroup?.minDuration,
                    financeOptionGroup?.maxDuration,
                  ].join(" - ")} months`}
                  className={CLASS_NAMES.termsValue}
                />
              </div>
              <div className={CLASS_NAMES.termsItem}>
                <Text
                  text="Monthly payment"
                  className={CLASS_NAMES.termsLabel}
                />
                <div className={CLASS_NAMES.termsValues}>
                  <Price
                    amount={financeOptionGroup?.minMonthlyPayment}
                    {...TERMS_PRICE_PROPS}
                  />
                  <Text text=" - " className={CLASS_NAMES.termsLabel} />
                  <Price
                    amount={financeOptionGroup?.maxMonthlyPayment}
                    {...TERMS_PRICE_PROPS}
                  />
                </div>
              </div>
              <div className={CLASS_NAMES.termsItem}>
                <Text text="Interest rate" className={CLASS_NAMES.termsLabel} />
                <Text
                  text={`${(financeOptionGroup?.apr || 0) / 100}% APR`}
                  className={CLASS_NAMES.termsValue}
                />
              </div>
              <div className={CLASS_NAMES.termsItem}>
                <Text
                  text="Total interest fee"
                  className={CLASS_NAMES.termsLabel}
                />
                <div className={CLASS_NAMES.termsValues}>
                  <Price
                    amount={financeOptionGroup?.minInterest}
                    {...TERMS_PRICE_PROPS}
                  />
                  {financeOptionGroup?.minInterest !==
                    financeOptionGroup?.maxInterest && (
                    <>
                      <Text text=" - " className={CLASS_NAMES.termsLabel} />
                      <Price
                        amount={financeOptionGroup?.maxInterest}
                        {...TERMS_PRICE_PROPS}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            {!muted && selectable && (
              <div className={CLASS_NAMES.checkbox}>
                <FieldHandle.RadioCheck name={name} checked={selected} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreditLine;
