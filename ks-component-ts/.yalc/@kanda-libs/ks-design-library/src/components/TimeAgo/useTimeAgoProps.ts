import { checkAndFormatTimestamp, timeAgoInWords } from './helpers';
import { useMemo } from 'react';

export interface TimeAgoPropsHook {
  date: Date;
  formattedDate: string;
}

export default function useTimeAgoProps(timestamp: number): TimeAgoPropsHook {
  const date = checkAndFormatTimestamp(timestamp);
  const formattedDate = useMemo(() => timeAgoInWords(date), [date]);

  return {
    date,
    formattedDate,
  };
}
