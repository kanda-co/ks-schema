import React, { FunctionComponent } from 'react';
import useDesktopLayoutBoxedProps from './useDesktopLayoutBoxedProps';
import HeaderBackground from '../../../assets/header/background.svg';
import KandaLogo from '../../../assets/logos/kanda-wordmark.svg';
import BackgroundLines from '../../../assets/images/background-lines.svg';
import HelpButton from '~/components/HelpButton';
import DesktopLayoutBoxedContent from './DesktopLayoutBoxedContent';
import DesktopLayoutBoxedContentHeader from './DesktopLayoutBoxedContentHeader';
import type { HomeLinkProps } from '~/components/ConfigWrapper';
import type { StringIndexedObject } from '~/types';

export interface DesktopLayoutBoxedProps {
  children?: JSX.Element | JSX.Element[];
  /**
   * Right side option for header
   */
  options?: JSX.Element[];
  logoProps?: StringIndexedObject<string>;
  sidebar?: boolean | JSX.Element;
  sidebarWidth?: string;
  backgroundLines?: boolean;
  /**
   * Hide header
   */
  noHeader?: boolean;
  /**
   * Show help
   */
  help?: boolean;
  layoutFooter?: JSX.Element | JSX.Element[];
  /**
   * Allow for the y axis to overflow when there is a lot of content within the card
   */
  allowYOverflow?: boolean;
}

const DesktopLayoutBoxed: FunctionComponent<DesktopLayoutBoxedProps> =
  function ({
    children,
    logoProps,
    sidebar,
    sidebarWidth = 'basis-1/3',
    options = [],
    backgroundLines = false,
    noHeader = false,
    help = false,
    layoutFooter,
    allowYOverflow = false,
  }) {
    const {
      classNames,
      linkComponent: LinkComponent,
      homeLinkProps,
      sidebarView: SidebarView,
    } = useDesktopLayoutBoxedProps({
      sidebar,
      sidebarWidth,
      noHeader,
      allowYOverflow,
    });

    const BackgroundLinesTag =
      BackgroundLines as unknown as FunctionComponent<HomeLinkProps>;
    const HeaderBackgroundTag =
      HeaderBackground as unknown as FunctionComponent<HomeLinkProps>;

    return (
      <div id="layout" className={classNames.container}>
        <div className={classNames.background}>
          {!backgroundLines && <div className={classNames.shadow} />}
          {backgroundLines && (
            <BackgroundLinesTag className={classNames.backgroundLines} />
          )}
          <HeaderBackgroundTag className={classNames.lines} />
        </div>
        <div className={classNames.wrapper}>
          {!noHeader && (
            <div className={classNames.header}>
              <LinkComponent {...homeLinkProps} className={classNames.logo}>
                <>
                  <KandaLogo {...logoProps} />
                </>
              </LinkComponent>
              <div className={classNames.options}>
                {help && <HelpButton />}
                {options.map((option, i) => (
                  <div key={String(i)}>{option}</div>
                ))}
              </div>
            </div>
          )}
          <div className={classNames.contentWrapper}>
            {SidebarView && (
              <div className={classNames.sidebar}>
                <SidebarView />
              </div>
            )}
            <div className={classNames.contentBox}>{children}</div>
          </div>
        </div>
        {layoutFooter}
      </div>
    );
  };

export { DesktopLayoutBoxedContent, DesktopLayoutBoxedContentHeader };

export default DesktopLayoutBoxed;
