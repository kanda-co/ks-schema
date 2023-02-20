import type { PostiveOrNegativeNumber } from '~/types';
import type { PaginationNumberButtonProps } from '~/components/Pagination/PaginationNumberButton';

/**
 * Takes the current page index and the total page count, and determines the
 * button array to generate the pagination buttons
 * @param index - the 0 indexed current page index
 * @param count - the total number of pages
 */
export const generateButtonArray = (
  index: number,
  count: number,
): PostiveOrNegativeNumber[] => {
  // If less than 6, all numbers are shown
  if (count < 6) return Array.from({ length: count }, (_, index) => index + 1);

  // If at the 0 boundary, create array with first 3 buttons, ellipses, then
  // final button numbers
  if (index === 0)
    return [...[...new Array(3).keys()].map((value) => value + 1), -1, count];

  // If at the end boundary, create array with first button, ellipses, then
  // final 3 button numbers
  if (index === count - 1)
    return [
      1,
      -1,
      ...[...new Array(3).keys()].map((value) => value + count - 2),
    ];

  // Construct initial array
  const initialArray: PostiveOrNegativeNumber[] = [-2, -1, 0, 1, 2]
    // map values to value + index + 1 (to account for 0 indexed)
    .map((i) => i + index + 1)
    // reduce final array to remove buttons whose numbers are too low
    .reduce((final, value) => {
      // If less than 2, remove
      if (value < 2) return final;
      // If more than the page count - 1, then remove
      if (value > count - 1) return final;
      // If value is less than then index (2 less than current page), remove
      if (value < index) {
        final.push(-1);
        return final;
      }
      // If value is more than then index + 2 (2 more than current page), remove
      if (value > index + 2) {
        final.push(-1);
        return final;
      }
      // Add value to final array
      final.push(value);
      return final;
    }, [] as PostiveOrNegativeNumber[]);

  // Return final array with first and last numbers as well
  return [1, ...initialArray, count];
};

export const createButtons = (
  index: number,
  count: number,
  callback: (index: number) => void,
): PaginationNumberButtonProps[] => {
  const buttonArray = generateButtonArray(index, count);
  return buttonArray.reduce((buttons, value, currentIndex) => {
    buttons.push({
      id: String(currentIndex),
      text: value === -1 ? '...' : String(value),
      onClick: () => callback(value - 1),
      active: index === value - 1,
      disabled: value === -1 || index === value - 1,
      ellipsis: value === -1,
    });
    return buttons;
  }, [] as PaginationNumberButtonProps[]);
};
