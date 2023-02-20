import { useContext } from 'react';
import { useClasses } from '~/hooks';
import { ConfigWrapperContext } from '~/components/ConfigWrapper';
import { CLASS_NAMES } from './constants';
import type { StringIndexedObject } from '~/types';
import type { NavigationLinkProps } from '~/components/NavigationLink';

export interface PopoverMenuHook {
  linkComponent: string | React.FunctionComponent<NavigationLinkProps>;
  classNames: StringIndexedObject<string>;
}

export default function usePopoverMenu(className: string): PopoverMenuHook {
  const { linkComponent } = useContext(ConfigWrapperContext);

  const classNames = useClasses(CLASS_NAMES, {
    container: ['.baseContainer', className],
  });

  return {
    linkComponent: linkComponent as string,
    classNames,
  };
}
