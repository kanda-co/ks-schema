import type { FunctionComponent } from 'react';
import type { OPACITIES } from '~/components/Modal/constants';
import clsx from 'clsx';
import {
  BACKDROP_CLASS_NAME,
  BASE_CLASS_NAME,
} from '~/components/Modal/ModalLayout/ModalLayoutCenter/constants';
import { OPACITY_CLASS_NAMES } from '~/components/Modal/constants';

export interface ContainerChildrenArgs {
  className: string;
  backdropClassName: string;
}

export interface ContainerProps {
  children: (args: ContainerChildrenArgs) => JSX.Element;
  initialClassName?: string;
  opacity?: typeof OPACITIES[number];
}

const Container: FunctionComponent<ContainerProps> = function ({
  children,
  initialClassName,
  opacity,
}) {
  const className = clsx(BASE_CLASS_NAME, initialClassName);

  const backdropClassName = clsx(
    BACKDROP_CLASS_NAME,
    OPACITY_CLASS_NAMES[opacity as unknown as number],
  );

  return children({
    className,
    backdropClassName,
  });
};

export default Container;
