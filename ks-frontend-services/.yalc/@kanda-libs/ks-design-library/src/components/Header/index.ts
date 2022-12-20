import Base, { HeaderBaseProps } from './HeaderBase';
import Main, { HeaderMainProps } from './HeaderMain';
import type { FunctionComponent } from 'react';

interface HeaderItems {
  Base: FunctionComponent<HeaderBaseProps>;
  Main: FunctionComponent<HeaderMainProps>;
}

const Header: HeaderItems = {
  Base,
  Main,
};

export default Header;
