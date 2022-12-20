export const getStrokeClassName = (size = 24): string => {
  if (size <= 24) return 'icon-stroke-sm';

  if (size <= 32) return 'icon-stroke-md';

  return 'icon-stroke-lg';
};
