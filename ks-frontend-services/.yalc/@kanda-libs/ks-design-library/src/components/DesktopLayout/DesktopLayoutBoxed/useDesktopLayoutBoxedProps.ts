import { FunctionComponent, useContext } from 'react';
import {
  ConfigWrapperContext,
  HomeLinkProps,
} from '~/components/ConfigWrapper';
import type { DesktopLayoutBoxedProps } from '~/components/DesktopLayout/DesktopLayoutBoxed/index';
import { useClasses } from '~/hooks';
import type { StringIndexedObject } from '~/types';
import type { NavigationLinkProps } from '~/components/NavigationLink';
import { CLASS_NAMES } from './constants';

export type DesktopLayoutBoxedArgs = Omit<
  DesktopLayoutBoxedProps,
  | 'children'
  | 'options'
  | 'logoProps'
  | 'backgroundLines'
  | 'help'
  | 'layoutFooter'
>;

export interface DesktopLayoutBoxedPropsHook {
  linkComponent: FunctionComponent<NavigationLinkProps>;
  homeLinkProps: HomeLinkProps;
  sidebarView: FunctionComponent;
  classNames: StringIndexedObject;
}

export default function useDesktopLayoutBoxedProps({
  sidebar,
  sidebarWidth,
  noHeader,
  allowYOverflow,
}: DesktopLayoutBoxedArgs): DesktopLayoutBoxedPropsHook {
  const {
    linkComponent,
    homeLinkProps,
    sidebar: defaultSidebar,
  } = useContext(ConfigWrapperContext);

  const sidebarView = (
    sidebar === true ? defaultSidebar : sidebar
  ) as FunctionComponent;

  const classNames = useClasses(CLASS_NAMES, {
    contentBox: ['.contentBox', sidebar ? 'basis-2/3' : 'w-full'],
    variants: {
      noHeader,
      allowYOverflow,
    },
    sidebar: ['.sidebarBase', sidebarWidth],
  });

  return {
    linkComponent: linkComponent as FunctionComponent<HomeLinkProps>,
    homeLinkProps: homeLinkProps as HomeLinkProps,
    sidebarView,
    classNames,
  };
}
