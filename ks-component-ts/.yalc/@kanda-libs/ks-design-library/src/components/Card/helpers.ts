/**
 * function to decide whether to show or not the separation dot
 * @param index - index of item
 * @param footer - footer element
 */
export const showDot = (index?: number, footer?: boolean): boolean => {
  if (index === 0 && !footer) {
    return false;
  }

  return true;
};
