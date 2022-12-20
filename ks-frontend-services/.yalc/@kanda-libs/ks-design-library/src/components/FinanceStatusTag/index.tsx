import React, { FunctionComponent } from 'react';
import type { StatusTagProps } from '~/components/StatusTag';
import StatusTag from '~/components/StatusTag';
import { extractColor, formatStatus } from './helpers';

export type FinanceStatusTagProps = Omit<
  StatusTagProps,
  'formatStatus' | 'extractColor'
>;

const FinanceStatusTag: FunctionComponent<FinanceStatusTagProps> = function (
  props,
) {
  return (
    <StatusTag
      formatStatus={formatStatus}
      extractColor={extractColor}
      {...props}
    />
  );
};

export default FinanceStatusTag;
