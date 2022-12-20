import React, { FunctionComponent } from 'react';
import useTimeAgoProps from '~/components/TimeAgo/useTimeAgoProps';

export interface TimeAgoProps {
  className?: string;
  /**
   * Timestamp - any valid date timestamp format, as converted to date using
   * `new Date(timestamp)` for initial checking
   */
  timestamp?: number;
}

const TimeAgo: FunctionComponent<TimeAgoProps> = function ({
  className,
  timestamp,
}) {
  const { formattedDate } = useTimeAgoProps(timestamp as number);

  return <span className={className}>{formattedDate}</span>;
};

export default TimeAgo;
