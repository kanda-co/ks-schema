import type { StringIndexedObject } from '~/types';

export const CLASS_NAMES: StringIndexedObject<string> = {
  buttonBase:
    'flex flex-row items-center justify-center transition-all duration-100 ease-in group',
  skeletonBase: 'leading-unset',
  wrapper: 'relative',
  indicatorBase:
    'w-2 h-2 -m-0.5 rounded-full ring-2 ring-inset absolute top-0 right-0 transition-all duration-100 ease-in',
};

export const BUTTON_ICON_VARIANTS: StringIndexedObject<
  StringIndexedObject<string | boolean>
> = {
  'ghost-grey': {
    className: 'text-neutral-600 active:bg-neutral-100 group',
    indicator: 'ring-neutral-000 group-active:ring-neutral-100',
    circle: true,
  },
  turquoise: {
    className: 'bg-turquoise-300 text-neutral-000 active:bg-turquoise-400',
    indicator: 'ring-turquoise-300 group-active:ring-turquoise-400',
    circle: true,
  },
  'light-turquoise': {
    className:
      'bg-turquoise-100 text-turquoise-400 active:bg-turquoise-200 active:text-red-500',
    indicator: 'ring-turquoise-100 group-active:ring-turquoise-200',
    circle: true,
  },
  'solid-grey': {
    className:
      'bg-neutral-200 text-neutral-600 active:bg-neutral-300 active:text-neutral-700',
    indicator: 'ring-neutral-200 group-active:ring-neutral-300',
    circle: true,
  },
  custom: {},
};

export const BUTTON_ICON_SIZE_VARIANTS: StringIndexedObject<
  StringIndexedObject<number | StringIndexedObject<number>>
> = {
  '48-20': {
    iconProps: {
      size: 20,
    },
    size: 48,
  },
  '40-20': {
    iconProps: {
      size: 20,
    },
    size: 40,
  },
  '32-20': {
    iconProps: {
      size: 20,
    },
    size: 32,
  },
  '16-16': {
    iconProps: {
      size: 16,
    },
    size: 16,
  },
  '32-16': {
    iconProps: {
      size: 16,
    },
    size: 32,
  },
  '28-16': {
    iconProps: {
      size: 16,
    },
    size: 28,
  },
};
