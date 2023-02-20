import type { StringIndexedObject } from '~/types';

export const CLASS_NAMES = {
  buttonBase: 'relative transition-all duration-100 ease-in',
  contentBase: 'flex flex-1 items-center justify-items-center justify-center',
};

export const BUTTON_VARIANTS: StringIndexedObject<StringIndexedObject<string>> =
  {
    custom: {},
    turquoise: {
      className: 'text-turquoise-300 hover:text-turquoise-500',
    },
    grey: {
      className: 'text-neutral-600 hover:text-neutral-700',
    },
    'light-grey': {
      className: 'text-neutral-500 hover:text-neutral-600',
    },
  };

export const BUTTON_SIZES_VARIANTS: Record<
  string | number,
  StringIndexedObject<string | StringIndexedObject<number>>
> = {
  custom: {},
  16: {
    className: 'text-style-f-em',
    iconSpacing: '2',
    iconProps: {
      size: 16,
    },
  },
  14: {
    className: 'text-style-g-em',
    iconSpacing: '2',
    iconProps: {
      size: 16,
    },
  },
  12: {
    className: 'text-style-h-em',
    iconSpacing: '1.5',
    iconProps: {
      size: 12,
    },
  },
};
