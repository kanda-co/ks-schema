import type { OPACITIES } from './constants';

/*
 * Produces the opacity suffix for the modal backdrop
 *
 */
export const opacitySuffix = (opacity: typeof OPACITIES[number]): string => {
  try {
    // Type check on opacity, ensure it is an int
    const intOpacity = parseInt(opacity as unknown as string, 10);
    // Use modulo 100 to get correct fade increment -
    if ((100 + intOpacity) % 100) return `-${(100 + intOpacity) % 100}`;
    // If intOpacity is 100, we just returned an empty string as `fade-in` goes
    // from 0 to 100
    return '';
  } catch {
    return '';
  }
};
