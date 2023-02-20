import type { TagColor } from '~/components/Tag/types';

export const defaultExtractColor = (status: string): TagColor => {
  if (status === 'draft') return 'grey';
  if (status === 'sent') return 'green';
  if (status === 'accepted') return 'green';
  if (status === 'declined') return 'violet';
  return 'grey';
};

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
