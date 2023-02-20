import type { FunctionComponent } from 'react';
import type { PropsHook } from '~/hooks/useProps';
import usePass, { type Options } from '~/hooks/usePass';
import type { Variant } from '~/types';

export interface PassConstantsProps {
  children: (args: PropsHook) => JSX.Element;
  constants: Options;
  className: string;
  variant: Variant;
  left: boolean;
  iconSpacing: Variant;
  loading: boolean;
  size: Variant;
}

const PassConstants: FunctionComponent<PassConstantsProps> = function ({
  children,
  constants,
  ...variants
}) {
  const { helpers, props, classNames } = constants;

  const passProps = usePass({
    classNames,
    variants,
    helpers,
    props,
  });

  return children(passProps);
};

export default PassConstants;
