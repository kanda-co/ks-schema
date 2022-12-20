import React, { FunctionComponent, useEffect, useState } from 'react';
import clsx from 'clsx';
import { opacitySuffix } from '~/components/Modal/helpers';
import type { OPACITIES } from '~/components/Modal/constants';
import type { BaseFadeProps } from './types';

export interface ContainerChildrenArgs {
  onAnimationEnd: () => void;
  className: string;
}

export interface ContainerProps extends BaseFadeProps {
  children: (args: ContainerChildrenArgs) => JSX.Element;
}

const Container: FunctionComponent<ContainerProps> = function ({
  show,
  className: initialClassName,
  opacity,
  children,
  onEnd,
}) {
  const [shouldRender, setShouldRender] = useState(show);

  const onAnimationEnd = () => {
    if (show) return;
    setShouldRender(false);
    if (onEnd) onEnd();
  };

  useEffect(() => {
    if (show) setShouldRender(true);
  }, [show]);

  if (!shouldRender) return <></>;

  const suffix = opacitySuffix(opacity as typeof OPACITIES[number]);

  const className = clsx(
    '',
    initialClassName,
    show ? `animate-fade-in${suffix}` : `animate-fade-out${suffix}`,
  );

  return children({
    onAnimationEnd,
    className,
  });
};

export default Container;
