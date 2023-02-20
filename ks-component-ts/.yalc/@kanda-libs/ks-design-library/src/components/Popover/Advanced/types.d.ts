import type { FunctionComponent, MouseEvent } from 'react';
import type { StringIndexedObject } from '~/types';
import { PopoverMenuItemSize } from '~/components/PopoverMenu/types';

export interface AdvancedItem {
  action: StringIndexedObject;
  name: string;
  icon?: string;
  stopPropagation?: boolean;
}

export interface AdvancedWrapperArgs {
  children: JSX.Element;
}

export interface AdvancedProps {
  button: JSX.Element | JSX.Element[];
  /**
   * Position above button rather than below
   */
  above?: boolean;
  /**
   * Position popover to right-align rather than left-align
   */
  right?: boolean;
  /**
   * Button wrapper
   */
  wrapper?: (args: AdvancedWrapperArgs) => JSX.Element;
  items?: AdvancedItem[];
  /**
   * On action callback
   */
  className?: string;
  onAction?: (action: StringIndexedObject, e: MouseEvent) => void;
  /**
   * Size
   */
  size?: PopoverMenuItemSize;
  search?: FunctionComponent;
  searchInput?: FunctionComponent;
  searchPlaceholder?: string;
  searchDebounceInterval?: number;
}
