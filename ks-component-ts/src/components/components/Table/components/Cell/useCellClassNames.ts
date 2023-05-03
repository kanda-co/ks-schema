import clsx from 'clsx';
import { CLASS_NAMES } from './constants';

export type CellClassNamesHook = {
  cell: string;
  container: string;
  render: string;
  mobileLabel: string;
};

export default function useCellClassNames(
  index: number,
  compact: boolean,
  isLoading: boolean,
): CellClassNamesHook {
  return {
    cell: clsx(
      compact ? CLASS_NAMES.cell.compact : CLASS_NAMES.cell.base,
      index === 0 ? '' : CLASS_NAMES.cell.padding,
    ),
    container: CLASS_NAMES.container,
    render: isLoading ? CLASS_NAMES.renderLoading : CLASS_NAMES.render,
    mobileLabel: CLASS_NAMES.mobileLabel,
  };
}
