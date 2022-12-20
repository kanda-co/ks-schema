import clsx from 'clsx';
import { CLASS_NAMES } from './constants';

/**
 * Items class name
 */
export const itemClassName = (active: boolean): string =>
  clsx(
    CLASS_NAMES.itemBase,
    active ? CLASS_NAMES.itemActive : CLASS_NAMES.itemInactive,
  );
