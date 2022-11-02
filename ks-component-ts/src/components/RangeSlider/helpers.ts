export const normalizeValue = (
  value?: number[] | number
): number[] | number => {
  if (!value) {
    return [0];
  }

  return Array.isArray(value) ? value : [value];
};
