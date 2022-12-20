export const CLASS_NAMES = {
  container: {
    base: 'flex flex-row flex-1 items-center py-2.5 px-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-neutral-100',
    '@selected': {
      true: 'bg-neutral-100',
    },
  },
  name: {
    base: 'text-neutral-600 flex flex-1',
    '@size': {
      xs: 'text-style-h ml-2.5',
      small: 'text-style-g ml-3',
      big: 'text-style-f ml-4',
    },
  },
};

export const VARIANTS = {
  xs: {
    iconProps: {
      stroke: 'neutral-500',
      size: 16,
    },
    arrowIconProps: {
      stroke: 'neutral-500',
      icon: 'chevron-right',
      size: 16,
    },
  },
  small: {
    iconProps: {
      stroke: 'neutral-500',
      size: 20,
    },
    arrowIconProps: {
      stroke: 'neutral-500',
      icon: 'chevron-right',
      size: 16,
    },
  },
  big: {
    iconProps: {
      stroke: 'neutral-500',
      size: 24,
    },
    arrowIconProps: {
      stroke: 'neutral-500',
      icon: 'chevron-right',
      size: 20,
    },
  },
};
