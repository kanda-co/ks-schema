import { useLocation, Link } from 'react-router-dom';

import { URLS } from '../../config';

export default function useNav() {
  const location = useLocation();

  const links = Object.keys(URLS).map((url) => {
    const isActive = location.pathname === URLS[url];
    const name = url
      .split('_')
      .map((part: string) => part.charAt(0) + part.toLowerCase().slice(1))
      .join(' ');
    return {
      name,
      Component: isActive ? 'div' : Link,
      linkProps: {
        className: isActive
          ? 'text-green-300 underline mr-3'
          : 'text-neutral-100 mr-3',
        ...(!isActive && { to: URLS[url] }),
      },
    };
  });

  return links;
}
