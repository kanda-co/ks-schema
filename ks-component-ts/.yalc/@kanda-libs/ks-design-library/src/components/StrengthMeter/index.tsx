import React, { FunctionComponent } from 'react';
import { DEFAULT_TOTAL_ITEMS } from './constants';
import SkeletonLoader from '~/components/SkeletonLoader';
import useStrengthMeter from './useStrengthMeter';

export interface StrengthMeterProps {
  score: number;
  isLoading?: boolean;
  totalItems?: number;
}

const StrengthMeter: FunctionComponent<StrengthMeterProps> = function ({
  score,
  isLoading = false,
  totalItems = DEFAULT_TOTAL_ITEMS,
}) {
  const { items, classNames } = useStrengthMeter(score, totalItems);

  return (
    <SkeletonLoader
      wrapperClassName={classNames.skeletonWrapper}
      isLoading={isLoading}
      afterLoading={
        <div className={classNames.container}>
          {items.map((itemClassName, key) => (
            <div key={String(key)} className={itemClassName} />
          ))}
        </div>
      }
    />
  );
};

export default StrengthMeter;
