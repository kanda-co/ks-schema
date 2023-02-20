import React, { createContext, FunctionComponent } from 'react';

export interface HomeLinkProps {
  href?: string;
  className?: string;
  to?: string;
}

export interface Props {
  children?: JSX.Element | JSX.Element[];
  linkComponent?: string | FunctionComponent<HomeLinkProps>;
  desktopHeader?: FunctionComponent;
  desktopFooter?: FunctionComponent;
  homeLinkProps?: HomeLinkProps;
  sidebar?: FunctionComponent;
}

export const ConfigWrapperContext = createContext<Omit<Props, 'children'>>({
  linkComponent: 'a',
  homeLinkProps: { href: '/' },
});

const ConfigWrapper: FunctionComponent<Props> = function ({
  children,
  linkComponent = 'a',
  desktopHeader,
  desktopFooter,
  homeLinkProps = { href: '/' },
  sidebar,
}) {
  const props = {
    linkComponent,
    desktopHeader,
    desktopFooter,
    homeLinkProps,
    sidebar,
  };

  return (
    <ConfigWrapperContext.Provider value={props}>
      {children}
    </ConfigWrapperContext.Provider>
  );
};

export default ConfigWrapper;
