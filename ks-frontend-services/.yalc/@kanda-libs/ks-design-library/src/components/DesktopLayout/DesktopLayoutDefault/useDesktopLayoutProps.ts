import { ConfigWrapperContext } from '~/components/ConfigWrapper';
import { FunctionComponent, useContext } from 'react';

export interface DesktopLayoutPropsHook {
  Header: FunctionComponent;
  Footer: FunctionComponent;
}

export default function useDesktopLayoutProps(): DesktopLayoutPropsHook {
  const { desktopHeader: Header, desktopFooter: Footer } =
    useContext(ConfigWrapperContext);

  return {
    Header: Header as FunctionComponent,
    Footer: Footer as FunctionComponent,
  };
}
