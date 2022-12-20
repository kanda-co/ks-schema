import React, { FunctionComponent } from 'react';
import useLayoutClassNames from './useLayoutClassNames';
import {
  Header as HeaderTeleporter,
  Footer as FooterTeleporter,
} from './teleporters';
import ScrollTopButton from '~/components/ScrollTopButton';

export interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
  stickyHeader?: boolean;
  stickyFooter?: boolean;
  /**
   * header background color
   */
  headerBg?: string;
  /**
   * background color
   */
  bg?: string;
  /**
   * Removes Border
   */
  noBorder?: boolean;
  header?: JSX.Element;
  footer?: JSX.Element;
  /**
   * Boolean flag for whether to show scroll top button
   */
  scrollTop?: boolean;
  /**
   * Removes content padding
   */
  noPadding?: boolean;
}

const Layout: FunctionComponent<LayoutProps> = function ({
  children,
  header,
  footer,
  ...restProps
}) {
  const { classNames, scrollTop } = useLayoutClassNames(restProps);

  return (
    <div id="layout" className={classNames.container}>
      <div className={classNames.wrapper}>
        <div className={classNames.header}>
          <div className={classNames.headerWidthLimiter}>
            <HeaderTeleporter.Target />
          </div>
        </div>
        <div className={classNames.contentWidthLimiter}>
          <div className={classNames.content}>
            <HeaderTeleporter.Source>{header}</HeaderTeleporter.Source>
            <FooterTeleporter.Source>{footer}</FooterTeleporter.Source>
            {children}
          </div>
        </div>
      </div>
      <div className={classNames.footer}>
        <FooterTeleporter.Target />
      </div>

      {scrollTop && <ScrollTopButton />}
    </div>
  );
};

const LayoutFooter = FooterTeleporter.Source;
const LayoutHeader = HeaderTeleporter.Source;

export { LayoutFooter, LayoutHeader };

export default Layout;
