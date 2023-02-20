import React, { FunctionComponent } from 'react';
import Tag from '~/components/Tag';
import type { StatusTagStatus } from '~/components/StatusTag/types';
import type { TagColor, TagProps } from '~/components/Tag/types';
import useStatusTagProps from '~/components/StatusTag/useStatusTagProps';
import { defaultExtractColor } from '~/components/StatusTag/helpers';
import TimeAgo from '~/components/TimeAgo';

export interface StatusTagProps extends TagProps {
  status: StatusTagStatus;
  timestamp?: number;
  formatStatus?: (status: string) => string;
  extractColor?: (status: string) => TagColor;
}

const StatusTag: FunctionComponent<StatusTagProps> = function ({
  status,
  timestamp,
  formatStatus = (status) => status,
  extractColor = defaultExtractColor,
  ...tagProps
}) {
  const { color } = useStatusTagProps(status, extractColor);

  if (!color) {
    return <></>;
  }

  return (
    <Tag label={formatStatus(status)} color={color as TagColor} {...tagProps}>
      <>{timestamp && <TimeAgo timestamp={timestamp} className="ml-1" />}</>
    </Tag>
  );
};

export default StatusTag;
