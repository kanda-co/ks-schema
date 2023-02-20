import type { StringIndexedObject } from '~/types';

export const TAG_BASE_CLASSES =
  'border border-solid rounded-full inline-flex items-center';

export const TAG_VARIANTS: StringIndexedObject = {
  outline: 'bg-opacity-0',
  solid: 'bg-opacity-100',
};

export const TAG_SIZES: Record<number, string> = {
  31: 'px-3 h-7.75 text-style-i-em-up',
  28: 'px-3 h-7 text-style-i-em-up',
  24: 'px-2 h-6 text-style-i-em-up',
  21: 'px-1.5 h-5.25 text-style-j-em-up',
};

export const TAG_COLOURS: StringIndexedObject = {
  grey: 'border-neutral-200 bg-neutral-200 text-neutral-600',
  violet: 'border-violet-100 bg-violet-100 text-violet-200',
  lavender: 'border-lavender-100 bg-lavender-100 text-lavender-200',
  green: 'border-turquoise-100 bg-turquoise-100 text-turquoise-500',
  blue: 'border-blue-100 bg-blue-100 text-blue-200',
};
