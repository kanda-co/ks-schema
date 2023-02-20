import React, { FunctionComponent } from 'react';
import Icon from '../Icon';
import Text from '../Text';
import useExpandableContentProps from './useExpandableContentProps';

export interface ExpandableContentProps {
  showLabel: string;
  hideLabel: string;
  compact?: boolean;
  children: JSX.Element | JSX.Element[];
}

const ExpandableContent: FunctionComponent<ExpandableContentProps> = function ({
  showLabel,
  hideLabel,
  compact = false,
  children,
}) {
  const { showContent, onClick, classNames, icon } =
    useExpandableContentProps(compact);

  return (
    <div className={classNames.outerContainer}>
      <button type="button" onClick={onClick} className={classNames.button}>
        <Text
          text={showContent ? hideLabel : showLabel}
          className={classNames.label}
        />
        <Icon
          icon={icon}
          className={classNames.icon}
          size={20}
          stroke="neutral-600"
        />
      </button>
      {showContent && <div className={classNames.container}>{children}</div>}
    </div>
  );
};

export default ExpandableContent;
