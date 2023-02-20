import type { StringIndexedObject } from '~/types';

export const CLASS_NAMES = {
  container: 'flex flex-row flex-1 w-full',
  baseItem:
    'flex flex-1 w-full h-1.5 rounded-full mr-1 transition-all duration-300 ease-in-out',
  inactiveItem: '.baseItem bg-neutral-200',
  skeletonWrapper: 'w-full mr-4',
};

export const DEFAULT_TOTAL_ITEMS = 5;

export const SCORE_COLORS = [
  'neutral-200',
  'red-200',
  'orange-200',
  'turquoise-300',
  'turquoise-400',
];

/**
 * Whilst we could just do `bg-${score}`, this wouldn't be picked up by tailwind's
 * JIT build. So we need to explicitly define the colors.
 */
export const SCORE_TO_BACKGROUND_CLASS: StringIndexedObject<string> = {
  'neutral-200': 'bg-neutral-200',
  'red-200': 'bg-red-200',
  'orange-200': 'bg-orange-200',
  'turquoise-300': 'bg-turquoise-300',
  'turquoise-400': 'bg-turquoise-400',
};
