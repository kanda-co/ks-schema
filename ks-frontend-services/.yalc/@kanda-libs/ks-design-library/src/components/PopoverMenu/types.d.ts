import { PopoverMenuItemProps } from '~/components/PopoverMenu/PopoverMenuItem';
import type { FunctionComponent } from 'react';

export type PopoverMenuItemSize = 'xs' | 'small' | 'big';

export interface PopoverMenuProps {
  className?: string;
  /**
   * On close function
   */
  onClose?: () => void;
  items: PopoverMenuItemProps[];
  size?: PopoverMenuItemSize;
  header?: JSX.Element | JSX.Element[] | null;
  content?: JSX.Element | JSX.Element[] | null;
  /**
   * Notice banner to show
   */
  notice?: FunctionComponent;
}
