import React, { FunctionComponent, useEffect, useState } from 'react';
import clsx from 'clsx';
import type { BaseSlideLeftProps } from './types';
import { BASE_CLASSNAME } from './constants';

export interface ContainerChildrenArgs {
  onAnimationEnd: () => void;
  className: string;
}

export interface ContainerProps extends BaseSlideLeftProps {
  children: (args: ContainerChildrenArgs) => JSX.Element;
}

const Container: FunctionComponent<ContainerProps> = function ({
  show,
  className: initialClassName,
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

  const className = clsx(
    BASE_CLASSNAME,
    initialClassName,
    show ? `animate-slide-left-in` : `animate-slide-left-out`,
  );

  return children({
    onAnimationEnd,
    className,
  });
};

export default Container;
