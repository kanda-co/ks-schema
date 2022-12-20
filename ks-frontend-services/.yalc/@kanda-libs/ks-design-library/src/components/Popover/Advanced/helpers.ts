import { VARIANTS, BASE_ROUNDING, ROUNDING, ROUNDING_RIGHT } from './constants';

export const popoverRounding = (
  showPanel: boolean,
  variant: string,
  right: boolean,
): string => {
  if (!VARIANTS.includes(variant)) return BASE_ROUNDING;
  if (!showPanel) return BASE_ROUNDING;
  if (right) return ROUNDING_RIGHT[variant];
  return ROUNDING[variant];
};

export const emptyPanel = () => null as unknown as JSX.Element;
