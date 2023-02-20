import React, { FunctionComponent, HTMLAttributes } from 'react';
import HelpButton from '~/components/HelpButton';
import useHeaderBaseClassNames from './useHeaderBaseClassNames';
import { default as HeaderBackground } from '../../../assets/header/background.svg';

export interface HeaderBaseProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: JSX.Element | JSX.Element[];
  /**
   * Right side options for header
   */
  options?: JSX.Element[];
  /**
   * Show the help item
   */
  help?: boolean;
  /**
   * Top lines
   */
  lines?: boolean;
}

const HeaderBase: FunctionComponent<HeaderBaseProps> = function ({
  className = '',
  children = null,
  options = [],
  help = false,
  lines = false,
  ...restProps
}) {
  const classNames = useHeaderBaseClassNames(className);

  const HeaderBackgroundTag = HeaderBackground as unknown as FunctionComponent<
    HTMLAttributes<SVGElement>
  >;

  return (
    <div className={classNames.container} {...restProps}>
      <div className={classNames.content}>{children}</div>
      {lines ? (
        <HeaderBackgroundTag className="absolute left-0 top-0" />
      ) : (
        <></>
      )}
      <div className={classNames.options}>
        {help && <HelpButton variant="button" />}
        {options.map((option, i) => (
          <div key={String(i)}>{option}</div>
        ))}
      </div>
    </div>
  );
};

export default HeaderBase;
