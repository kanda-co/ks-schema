import type { StringIndexedObject } from '~/types';

export const PERIODS: StringIndexedObject<string> = {
  second: '%ds ago',
  minute: '%dm ago',
  hour: '%dh ago',
  day: '%dd ago',
  week: '%dw ago',
  month: '%dmo ago',
  year: '%dy ago',
};

export const PERIOD_LENGTHS: StringIndexedObject<number> = {
  second: 60,
  minute: 60,
  hour: 24,
  day: 7,
  week: 4.33,
  month: 12,
};
