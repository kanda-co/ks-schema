import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { Icon } from '@kanda-libs/ks-design-library';
import { BUTTON_CLASS_NAMES, ICON_PROPS } from './constants';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = function ({ label, ...props }) {
  return (
    <button className={BUTTON_CLASS_NAMES} {...props}>
      {label}
      <Icon {...ICON_PROPS} />
    </button>
  );
};

export default Button;
