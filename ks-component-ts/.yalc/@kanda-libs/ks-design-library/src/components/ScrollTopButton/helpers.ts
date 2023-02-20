import { MIN_SCROLL_HEIGHT } from './constants';

/**
 * Function to scroll to top of body
 */
export const determineScrollHeight = (): boolean => {
  const element =
    document.documentElement || document.body.parentNode || document.body;

  // If ref doesn't exist, return
  if (!element) return false;
  // Extract scrollTop
  const { scrollTop } = element;

  // If scrollTop is less than 120px, return false
  if (scrollTop < MIN_SCROLL_HEIGHT) return false;
  // Else retur true
  return true;
};
