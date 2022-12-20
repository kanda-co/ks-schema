import React, { FunctionComponent } from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import usePriceProps from '~/components/Price/usePriceProps';
import SkeletonLoader from '~/components/SkeletonLoader';
import { SKELETONS } from './constants';

export interface PriceProps {
  className?: string;
  /**
   * Price color
   */
  color?: string;
  wrapperClassName?: string;
  poundsClassName?: string;
  centsClassName?: string;
  /**
   * Price amount in cents
   */
  amount?: number;
  isLoading?: boolean;
}

const Price: FunctionComponent<PriceProps> = function ({
  color = 'turquoise-300',
  amount = 0,
  wrapperClassName = 'h-full', // line height of text-style-b
  poundsClassName = 'text-style-d',
  centsClassName = 'text-style-h-em',
  className = '',
  isLoading = false,
}) {
  const { classNames, pounds, suffix, centsLabel } = usePriceProps(
    color,
    amount,
    className,
    wrapperClassName,
  );

  const NumberFormatTag =
    NumberFormat as unknown as FunctionComponent<NumberFormatProps>;

  return (
    <div className={classNames.wrapper}>
      <div className={classNames.container}>
        <div className={poundsClassName}>
          <SkeletonLoader
            isLoading={isLoading}
            {...SKELETONS.pounds}
            afterLoading={
              <NumberFormatTag
                displayType="text"
                value={pounds}
                thousandSeparator
                prefix="£"
                suffix={suffix}
              />
            }
          />
        </div>
        {!suffix && (
          <div className={centsClassName}>
            <SkeletonLoader
              isLoading={isLoading}
              {...SKELETONS.cents}
              afterLoading={centsLabel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Price;
