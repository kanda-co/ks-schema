import { type FunctionComponent } from 'react';

import useNav from './useNav';

const Nav: FunctionComponent = function () {
  const { links } = useNav();

  return (
    <div className="flex flex-row mb-4">
      {links.map(({ name, Component, linkProps }) => (
        <Component {...linkProps}>{name}</Component>
      ))}
    </div>
  );
};

export default Nav;
