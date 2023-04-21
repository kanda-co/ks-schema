import { pipe } from 'fp-ts/lib/function';
import type { FinanceRate } from '../../generated/components/schemas';
import { pluralise } from '../string';
import { BUY_NOW_PAY_LATER_APR_TYPE } from './constants';

const rateIsBuyNowPayLater = (rate: FinanceRate) =>
  rate.apr_type === BUY_NOW_PAY_LATER_APR_TYPE;

interface FinanceOptionDetails {
  interest: number;
  duration: number;
}

const getFinanceOptionDetails = (
  financeOption: FinanceRate,
): FinanceOptionDetails => {
  const { name } = financeOption;
  const splitName = name?.split('_');
  if (name.toLowerCase().includes('free'))
    return {
      interest: 0,
      duration: parseInt(splitName.slice(-1)[0], 10),
    };
  const [durationString, interestString] = splitName.slice(-2);
  return {
    interest: parseInt(interestString, 10) / 100,
    duration: parseInt(durationString, 10),
  };
};

const getBuyNowPayLaterRateLabel = (
  rate: FinanceRate,
  hasPrefix = false,
): string =>
  [
    hasPrefix ? 'BNPL' : 'BNPL',
    [rate.deferred_duration, rate.duration].join(' + '),
    'months',
  ]
    .filter(Boolean)
    .join(' ');

const getLabelValue = (min: number, max: number): string =>
  min === max ? min.toString() : [min, max].filter(Boolean).join('-');

const eitherUnitShouldUseMonths = (min: number, max: number | null) =>
  min < 12 || (max !== null && max < 12);

const eitherUnitYearIsNotWholeNumber = (min: number, max: number | null) =>
  min % 12 !== 0 || (max !== null && max % 12 !== 0);

const getLabelUnit = (
  minMonths: number,
  maxMonths: number | null,
): 'month' | 'year' => {
  if (eitherUnitShouldUseMonths(minMonths, maxMonths)) return 'month';
  if (eitherUnitYearIsNotWholeNumber(minMonths, maxMonths)) return 'month';
  return 'year';
};

const getFormattedUnit = (value: number, unit: 'month' | 'year'): number =>
  unit === 'month' ? value : value / 12;

const getLabel = ([min, max]: [number, number | null]): string =>
  pipe(
    [min, max] as [number, number | null],
    ([currentMin, currentMax]) =>
      [currentMin, currentMax, getLabelUnit(currentMin, currentMax)] as [
        number,
        number,
        'month' | 'year',
      ],
    ([currentMin, currentMax, unit]) =>
      [
        getFormattedUnit(currentMin, unit),
        getFormattedUnit(currentMax, unit),
        unit,
      ] as [number, number, 'month' | 'year'],
    ([currentMin, currentMax, unit]) => [
      getLabelValue(currentMin, currentMax),
      pluralise(currentMin, unit, `${unit}s`),
    ],
    (value) => value.join(' '),
  );

export const getFinanceRateLabel = (rate: FinanceRate): string =>
  pipe(
    rate,
    (currentRate) =>
      [currentRate, rateIsBuyNowPayLater(rate)] as [FinanceRate, boolean],
    ([currentRate, isBuyNowPayLater]) => {
      if (isBuyNowPayLater) {
        return getBuyNowPayLaterRateLabel(currentRate);
      }

      const { duration } = getFinanceOptionDetails(currentRate);

      return getLabel([duration, null]);
    },
  );
