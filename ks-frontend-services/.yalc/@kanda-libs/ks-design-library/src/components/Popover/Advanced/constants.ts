import type { StringIndexedObject } from '~/types';

export const VARIANTS = ['default', 'panel-short', 'panel-full'];

export const BASE_ROUNDING = 'rounded-lg';

export const ROUNDING: StringIndexedObject<string> = {
  'panel-short': 'rounded-l-lg rounded-br-lg',
  'panel-full': 'rounded-l-lg',
};

export const ROUNDING_RIGHT: StringIndexedObject<string> = {
  'panel-short': 'rounded-r-lg rounded-bl-lg',
  'panel-full': 'rounded-r-lg',
};

export const PANEL_STYLE = {
  default: {},
  'panel-short': {
    maxHeight: 'calc(100% - 8px)',
  },
  'panel-full': {
    maxHeight: '100%',
  },
};

export const BASE_CLASS_NAMES = {
  wrapper: 'relative max-w-full',
  panelWrapper: 'relative w-full h-full',
  container: 'absolute mt-1.5 z-10',
  popover: 'border border-neutral-200 bg-neutral-000 shadow-popover',
  panel:
    'absolute border border-neutral-200 bg-neutral-000 shadow-popover z-10 overflow-auto',
};

export const VARIANT_CLASS_NAMES = {
  above: {
    container: 'bottom-full',
    panel: 'bottom-0',
  },
  below: {
    container: 'top-full',
    panel: 'top-0',
  },
  right: {
    container: 'right-0',
    panel: 'right-full border-r-0 rounded-l-lg',
  },
  left: {
    container: 'left-0',
    panel: 'left-full border-l-0 rounded-r-lg',
  },
};

export const ACTIONS = {
  OPEN_PANEL: 'open_panel',
};
