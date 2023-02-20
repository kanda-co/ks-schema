import {
  useState,
  cloneElement,
  useCallback,
  useMemo,
  type MouseEvent,
  MutableRefObject,
} from 'react';
import clsx from 'clsx';
import { useDebounce } from 'use-debounce';
import {
  VARIANTS,
  PANEL_STYLE,
  BASE_CLASS_NAMES,
  VARIANT_CLASS_NAMES,
  ACTIONS,
} from './constants';
import { emptyPanel, popoverRounding } from './helpers';
import { useOuterClick, useEscClick } from '~/hooks';

import type {
  AdvancedItem,
  AdvancedProps,
} from '~/components/Popover/Advanced/types';
import type { StringIndexedObject } from '~/types';

export type AdvancedPropsHookArgs = Omit<
  AdvancedProps,
  'wrapper' | 'className' | 'size' | 'searchInput' | 'searchPlaceholder'
>;

interface AdvancedPropsEvent {
  target: {
    value: string;
  };
}

export interface AdvancedPanelArgs {
  handleClose: () => void;
}

export interface AdvancedPropsHook {
  classNames: StringIndexedObject;
  showPopover: boolean;
  button: JSX.Element | JSX.Element[];
  panel: (args: AdvancedPanelArgs) => JSX.Element;
  ref: MutableRefObject<any>;
  handleClose: () => void;
  panelStyle: StringIndexedObject;
  items: AdvancedItem[];
  debouncedSearch: string;
  onSearch: (event: AdvancedPropsEvent) => void;
  clearSearch: () => void;
  showPanel: boolean;
  value: string;
}

export default function useAdvancedProps({
  button,
  above,
  right,
  items: originalItems,
  onAction,
  searchDebounceInterval = 100,
}: AdvancedPropsHookArgs): AdvancedPropsHook {
  const variant = 'panel-full';
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, searchDebounceInterval);

  const [showPopover, setShowPopover] = useState(false);
  const [panel, setPanel] = useState<() => JSX.Element>(() => emptyPanel);
  const [selected, setSelected] = useState(-1);

  const onClick = useCallback(
    () => setShowPopover(!showPopover),
    [showPopover],
  );

  /**
   * Handles close logic
   */
  const handleClose = useCallback(() => {
    if (!showPopover) return;
    setShowPopover(false);
    setPanel(() => emptyPanel);
  }, [showPopover]);

  /**
   * Handles chained esc key logic
   */
  const handleEsc = useCallback(() => {
    if (debouncedSearch) {
      setSearch('');
      return;
    }
    if (!showPopover) return;
    if (!!panel) {
      setPanel(() => emptyPanel);
      return;
    }
    setShowPopover(false);
  }, [debouncedSearch, showPopover, panel]);

  /*
   * Uses hook to call close when the click is outside of modal
   */
  const ref = useOuterClick(handleClose);

  /*
   * Uses hook to call close when the click is outside of modal
   */
  useEscClick(handleEsc);

  const newButton = useMemo(
    () =>
      cloneElement(button as JSX.Element, {
        onClick: () => onClick(),
      }),
    [button, onClick],
  );

  const containerClassName = clsx(
    BASE_CLASS_NAMES.container,
    above
      ? VARIANT_CLASS_NAMES.above.container
      : VARIANT_CLASS_NAMES.below.container,
    right
      ? VARIANT_CLASS_NAMES.right.container
      : VARIANT_CLASS_NAMES.left.container,
  );

  const popoverClassName = clsx(
    BASE_CLASS_NAMES.popover,
    popoverRounding(!!panel, variant, !!right),
  );

  const panelClassName = clsx(
    BASE_CLASS_NAMES.panel,
    above ? VARIANT_CLASS_NAMES.above.panel : VARIANT_CLASS_NAMES.below.panel,
    right ? VARIANT_CLASS_NAMES.right.panel : VARIANT_CLASS_NAMES.left.panel,
  );

  const panelStyle = VARIANTS.includes(variant) ? PANEL_STYLE[variant] : {};

  const classNames = {
    ...BASE_CLASS_NAMES,
    container: containerClassName,
    popover: popoverClassName,
    panel: panelClassName,
  };

  /**
   * Enhances items

   */
  const items = useMemo(
    () =>
      (originalItems as AdvancedItem[]).map((itemProps, i) => {
        const action = itemProps.action || {};

        /**
         * Handles action click
         * @param {Event} event
         */
        const handleClick = (event: MouseEvent) => {
          if (action.type === ACTIONS.OPEN_PANEL || itemProps.stopPropagation) {
            event.stopPropagation();
          }

          if (action.type === ACTIONS.OPEN_PANEL) {
            setSelected(i);

            if (!!panel && selected === i) {
              setPanel(() => emptyPanel);
              setSelected(-1);

              return;
            }

            setPanel(() => action.panel);
          }

          if (onAction) {
            onAction(action, event);
          }
        };

        const props = {
          ...itemProps,
          onClick: handleClick,
          selected: i === selected,
        };

        if (action.type !== ACTIONS.OPEN_PANEL) return props;

        return { ...props, arrow: true };
      }),
    [originalItems, selected, onAction, panel],
  );

  /**
   * Handles search
   */
  const onSearch = (event: AdvancedPropsEvent) => setSearch(event.target.value);

  const value = search;

  const clearSearch = () => setSearch('');

  const showPanel = panel !== emptyPanel;

  return {
    classNames,
    showPopover,
    button: newButton,
    panel,
    ref,
    handleClose,
    panelStyle,
    items,
    debouncedSearch,
    onSearch,
    clearSearch,
    showPanel,
    value,
  };
}
