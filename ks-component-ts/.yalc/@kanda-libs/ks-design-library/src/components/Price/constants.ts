export const CLASS_NAMES = {
  baseWrapper: 'flex items-center',
  baseContainer: 'flex flex-row items-start',
  container: 'flex flex-col w-full',
  wrapper: 'flex flex-col',
  headingMobile: 'block md:hidden',
  headingDesktop: 'hidden md:block',
  grid: 'grid grid-cols-2',
  cardContainer: 'flex flex-col',
  title: 'text-neutral-500 mb-1',
  pounds: 'text-green-500',
  cents: 'text-green-400 text-12-18-em md:pt-px',
  priceWrapper: 'md:min-h-6',
  text: 'text-green-500 md:flex-row',
};

export const SKELETONS = {
  pounds: {
    width: 40,
  },
  cents: {
    width: 16,
  },
};

export const VARIANTS = {
  default: {
    wrapper: 'border border-neutral-300 p-4 md:p-8 rounded-lg',
    headingMobile: 'text-12-18-em text-neutral-700 mb-2',
    headingDesktop: 'text-16-20-em text-neutral-700 mb-6',
    grid: 'gap-3 md:gap-6',
    title: 'text-10-17-em-up md:text-12-18-em-up ',
    pounds: 'text-18-22-em md:text-24-28-em',
    text: 'text-18-22-em md:text-24-28-em ',
  },
  noBox: {
    wrapper: 'mt-3',
    headingMobile: 'text-14-22-em text-neutral-700 mb-2',
    headingDesktop: 'text-16-20-em text-neutral-700 mb-6',
    grid: 'gap-5 md:gap-6',
    title: 'text-12-18-em-up',
    pounds: 'text-24-28-em',
    text: 'text-24-28-em ',
  },
};
