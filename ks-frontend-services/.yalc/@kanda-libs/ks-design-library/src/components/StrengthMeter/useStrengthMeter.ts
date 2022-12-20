import { useClasses } from '~/hooks';

import {
  CLASS_NAMES,
  SCORE_COLORS,
  SCORE_TO_BACKGROUND_CLASS,
} from './constants';
import type { StringIndexedObject } from '~/types';

export interface StrengthMeterHook {
  items: string[];
  classNames: StringIndexedObject<string>;
}

export default function useStrengthMeter(
  score: number,
  totalItems: number,
): StrengthMeterHook {
  const color = SCORE_COLORS[score];

  const classNames = useClasses(CLASS_NAMES, {
    activeItem: ['.baseItem', SCORE_TO_BACKGROUND_CLASS[color]],
  });

  const itemsArray = Array.from(Array(totalItems));

  const items = itemsArray.map((_, index) =>
    index < score ? classNames.activeItem : classNames.inactiveItem,
  );

  return {
    items,
    classNames,
  };
}
