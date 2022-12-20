import React, { FunctionComponent } from 'react';
import SkeletonLoader from '~/components/SkeletonLoader';
import useIcon from '~/components/Icon/useIcon';
import type { IconProps } from '~/components/Icon/types';

const Icon: FunctionComponent<IconProps> = function ({
  isLoading = false,
  ...props
}) {
  const { Icon, classNames, width, height } = useIcon(props);

  return (
    <SkeletonLoader
      width={width}
      height={height}
      isLoading={isLoading}
      className={classNames.skeleton}
      afterLoading={
        <Icon width={width} height={height} className={classNames.svg} />
      }
    />
  );
};

export default Icon;
