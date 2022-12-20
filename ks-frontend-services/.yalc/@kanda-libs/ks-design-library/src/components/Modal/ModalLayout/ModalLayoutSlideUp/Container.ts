import type { FunctionComponent } from 'react';

import clsx from 'clsx';
import { CLASS_NAMES, VARIANTS } from './constants';

export interface ContainerChildrenArgs {
  classNames: {
    container: string;
    wrapper: string;
    header: string;
    space: string;
    bg: string;
  };
  linesVisible: boolean;
}

export interface ContainerProps {
  variant: 'DEFAULT' | 'MARKETING';
  children: (args: ContainerChildrenArgs) => JSX.Element;
}

const Container: FunctionComponent<ContainerProps> = function ({
  variant = 'DEFAULT',
  children,
}) {
  const { bgBase, ...classNames } = CLASS_NAMES;

  const bg = clsx(bgBase, variant !== VARIANTS.MARKETING && 'shadow-c');

  const linesVisible = variant === VARIANTS.MARKETING;

  return children({
    classNames: {
      ...classNames,
      bg,
    },
    linesVisible,
  });
};

export default Container;
