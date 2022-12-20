import { PERIOD_LENGTHS, PERIODS } from '~/components/TimeAgo/constants';
import type { StringIndexedObject } from '~/types';

export const checkAndFormatTimestamp = (
  timestamp: number,
  minYear = 2019,
): Date => {
  // Construct date object
  const date = new Date(timestamp);

  // Timestamp is incorrectly formatted (not in milliseconds) if year in date
  // object from timestamp is less than min year. Need to correct timestamp
  if (date.getFullYear() < minYear) {
    // catch case for timestamp in seconds - will be less than 10^10
    if (date.getTime() < 10 ** 10) {
      return new Date(timestamp * 1000);
    }
    // catch case for timestamp in tenths of seconds - will be less than 10^11
    if (date.getTime() < 10 ** 11) {
      return new Date(timestamp * 100);
    }
    // if neither of above, timestamp in hundreths of seconds - will be less
    // than 10^12
    return new Date(timestamp * 10);
  }

  return date;
};

export const timeAgoInWords = (
  fromDate: Date,
  periods: StringIndexedObject<string> = PERIODS,
  periodLengths: StringIndexedObject<number> = PERIOD_LENGTHS,
): string => {
  const toDate = new Date();

  let difference = Math.abs(toDate.getTime() - fromDate.getTime()) / 1000;
  let lengthKey = 0;

  const periodKeys = Object.keys(periods);
  const periodLengthKeys = Object.keys(periodLengths);

  if (difference < 10) return 'just now';

  if (difference < 60)
    return periods[periodKeys[0]].replace(
      '%d',
      Math.round(difference).toString(),
    );

  for (
    let i = 0;
    difference >= periodLengths[periodLengthKeys[i]] &&
    i < periodLengthKeys.length;
    i++
  ) {
    lengthKey = i;
    difference /= periodLengths[periodLengthKeys[i]];
  }

  difference = Math.round(difference);

  const period = periods[periodKeys[lengthKey + 1]];

  return period.replace('%d', difference.toString());
};
