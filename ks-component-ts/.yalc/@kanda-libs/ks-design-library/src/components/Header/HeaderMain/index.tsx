import React, { FunctionComponent, HTMLAttributes } from 'react';
import type { StringIndexedObject } from '~/types';
import Logo from '~/components/Logo';
import useHeaderMainProps from './useHeaderMainProps';
import HeaderBase from '~/components/Header/HeaderBase';
import type { HomeLinkProps } from '~/components/ConfigWrapper';

export interface HeaderMainProps {
  /**
   * ClassName for main header
   */
  logoProps?: StringIndexedObject;
  /**
   * Show help
   */
  help?: boolean;
  /**
   * ClassName for main header
   */
  className?: string;
  /**
   * Displays skip button
   */
  skip?: boolean;
  /**
   * On Skip function callback
   */
  onSkip?: () => void;
  /**
   * linkComponent
   */
  linkComponent?: FunctionComponent<HomeLinkProps> | 'a';
}

const HeaderMain: FunctionComponent<HeaderMainProps> = function ({
  className,
  skip = false,
  onSkip,
  linkComponent: LinkComponent = 'a',
  help = true,
  logoProps = {},
}) {
  const { options, homeLinkProps } = useHeaderMainProps(skip, onSkip);

  const LogoTag = Logo as unknown as FunctionComponent<
    HTMLAttributes<HTMLOrSVGElement>
  >;

  return (
    <HeaderBase help={help} className={className} options={options} lines>
      <LinkComponent {...homeLinkProps}>
        <LogoTag {...logoProps} />
      </LinkComponent>
    </HeaderBase>
  );
};

export default HeaderMain;
