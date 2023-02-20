import clsx from 'clsx';

import { NAVIGATON_LINK_CLASS_NAMES } from './constants';

export interface NavigationLinkClassNamesHook {
  content: string;
  titleWrapper: string;
  title: string;
  subtitle: string;
  container: string;
  badge: string;
}

export default function useNavigationLinkClassNames(
  initialClassName: string,
  badgeColor: string,
): NavigationLinkClassNamesHook {
  const { containerBase, badgeBase, ...classNames } =
    NAVIGATON_LINK_CLASS_NAMES;

  const container = clsx(containerBase, initialClassName);
  const badge = badgeColor && clsx(badgeBase, `bg-${badgeColor}`);

  return {
    ...classNames,
    container,
    badge,
  };
}
