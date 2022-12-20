import type { StringIndexedObject } from '~/types';

export const CLASS_NAMES = {
  buttonBase: 'relative transition-all duration-100 ease-in',
  buttonLoading: 'pointer-events-none',
  buttonNotLoading: 'border-b solid',
  content: 'flex flex-1 items-center justify-items-center justify-center',
};

export const BUTTON_VARIANTS: StringIndexedObject<StringIndexedObject<string>> =
  {
    custom: {},
    grey: {
      className:
        'text-style-h-em text-neutral-600 hover:text-neutral-700 border-neutral-300',
    },
    turquoise: {
      className:
        'text-style-h-em text-turquoise-300 hover:text-turquoise-500 border-turquoise-200',
    },
    lavender: {
      className:
        'text-style-h-em text-lavender-200 hover:text-lavender-300 border-lavender-100',
    },
  };
