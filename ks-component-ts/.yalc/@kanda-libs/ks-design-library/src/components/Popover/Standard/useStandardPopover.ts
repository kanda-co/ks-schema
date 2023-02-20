import {
  useState,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  FunctionComponentElement,
} from 'react';

import { CLASS_NAMES } from './constants';
import useOuterClick, { type OuterClickHook } from '~/hooks/useOuterClick';
import useEscClick from '~/hooks/useEscClick';
import { useClasses } from '~/hooks';

import type { StandardProps } from './index';
import type { StringIndexedObject } from '~/types';

export type StandardPopoverArgs = Omit<StandardProps, 'children'>;

export interface StandardPopoverHook {
  handleClose: () => void;
  classNames: StringIndexedObject;
  showPopover: boolean;
  onClick: (e: MouseEvent) => void;
  button: FunctionComponentElement<any> | null | undefined;
  ref: OuterClickHook;
}

export default function useStandardPopover({
  button,
  above,
  right,
  visible,
  className,
  xMargin,
  yMargin,
}: StandardPopoverArgs): StandardPopoverHook {
  const [showPopover, setShowPopover] = useState(visible);

  const onClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPopover(!showPopover);
  };

  const hidePopover = () => setShowPopover(false);

  /**
   * Handles close logic
   */
  const handleClose = useCallback(() => setShowPopover(false), []);

  /*
   * Uses hook to call close when the click is outside of modal
   */
  const ref = useOuterClick(hidePopover);
  /*
   * Uses hook to call close when the click is outside of modal
   */
  useEscClick(hidePopover);

  const newButton =
    button && cloneElement(button, { onClick: (e: MouseEvent) => onClick(e) });

  const y = useMemo(() => {
    if (yMargin) return yMargin;
    return above ? 'mb-1.5' : 'mt-1.5';
  }, [above, yMargin]);

  const classNames = useClasses(CLASS_NAMES, {
    container: ['relative', className],
    wrapper: [
      '.baseWrapper',
      above ? 'bottom-full' : 'top-full',
      y,
      right ? 'right-0' : 'left-0',
      xMargin || '',
    ],
  });

  /**
   * Update state when prop changes
   */
  useEffect(() => {
    setShowPopover(visible);
  }, [visible]);

  return {
    handleClose,
    classNames,
    showPopover: showPopover as boolean,
    onClick,
    button: newButton,
    ref,
  };
}
