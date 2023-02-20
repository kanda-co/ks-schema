export const OPACITIES = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
] as const;

// This isn't great but we cannot do this dynamically as tailwind fails to pick
// up the needed classes due to JIT compilation.
export const OPACITY_CLASS_NAMES: Record<number, string> = {
  5: 'opacity-5',
  10: 'opacity-10',
  15: 'opacity-15',
  20: 'opacity-20',
  25: 'opacity-25',
  30: 'opacity-30',
  35: 'opacity-35',
  40: 'opacity-40',
  45: 'opacity-45',
  50: 'opacity-50',
  55: 'opacity-55',
  60: 'opacity-60',
  65: 'opacity-65',
  70: 'opacity-70',
  75: 'opacity-75',
  80: 'opacity-80',
  85: 'opacity-85',
  90: 'opacity-90',
  95: 'opacity-95',
  100: 'opacity-100',
};

export const BACKDROP_CLASS_NAME = 'fixed bg-neutral-900 w-full h-full';

export const ESC_KEY = 27;
