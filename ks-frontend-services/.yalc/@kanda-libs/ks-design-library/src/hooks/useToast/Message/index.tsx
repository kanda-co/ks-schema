import React, { FunctionComponent, HTMLProps } from 'react';
import useMessage from './useMessage';
import Icon from '~/components/Icon';
import type { IconProps } from '~/components/Icon/types';

export interface MessageProps {
  message: string;
  showIcon?: boolean;
  icon?: IconProps;
  container?: HTMLProps<HTMLDivElement>;
  span?: HTMLProps<HTMLDivElement>;
}

const Message: FunctionComponent<MessageProps> = function ({
  message,
  showIcon = false,
  icon,
  container,
  span,
}) {
  const { iconProps, containerProps, spanProps } = useMessage(
    icon,
    container,
    span,
  );

  return (
    <div {...containerProps}>
      {showIcon && <Icon {...iconProps} />}
      <span {...spanProps}>{message}</span>
    </div>
  );
};

export default Message;
