import React, { FunctionComponent } from 'react';
import useDesktopLayoutProps from '~/components/DesktopLayout/DesktopLayoutDefault/useDesktopLayoutProps';
import type { HomeLinkProps } from '~/components/ConfigWrapper';
import { default as HeaderBackground } from '../../../assets/header/background.svg';
import { CLASS_NAMES } from './constants';

export interface DesktopLayoutDefaultProps {
  children?: JSX.Element | JSX.Element[];
}

const DesktopLayoutDefault: FunctionComponent<DesktopLayoutDefaultProps> =
  function ({ children }) {
    const { Header, Footer } = useDesktopLayoutProps();

    const HeaderBackgroundTag =
      HeaderBackground as unknown as FunctionComponent<HomeLinkProps>;

    return (
      <div id="layout" className={CLASS_NAMES.container}>
        <div className={CLASS_NAMES.background}>
          <HeaderBackgroundTag className={CLASS_NAMES.lines} />
        </div>
        <div className={CLASS_NAMES.headerWrapper}>{Header && <Header />}</div>
        {children}
        {Footer && <Footer />}
      </div>
    );
  };

export { default as DesktopLayoutDefaultContent } from './DesktopLayoutDefaultContent';
export { default as DesktopLayoutDefaultContentHeader } from './DesktopLayoutDefaultContentHeader';

export default DesktopLayoutDefault;
