export const CLASS_NAMES = {
  container: 'flex flex-col flex-1 w-screen min-h-vvp relative',
  sidebarBase: 'flex flex-initial w-1/3 max-w-80 mr-6 lg:mr-8 xl:mr-16',
  backgroundLines: 'absolute  w-screen top-0 left-0 bottom-0 right-0',
  background: 'absolute w-screen h-screen overflow-hidden',
  header: 'my-10 flex w-full h-10 flex-row justify-between items-center mx-3',
  shadow: 'w-full h-80 bg-neutral-50 transform skew-y-slide-up origin-0',
  lines: 'absolute left-0 top-0',
  options: 'flex flex-row',
  wrapper: {
    base: 'flex flex-1 w-full flex-col px-6 lg:px-8 xl:px-16 relative mx-auto',
    '@noHeader': {
      false: 'pb-30',
      true: 'pb-20',
    },
  },
  contentWrapper: {
    base: 'flex flex-1 w-full max-w-5xl desktop:max-w-none desktop:px-36 mx-auto',
    '@noHeader': {
      true: 'mt-20',
    },
  },
  contentBox: {
    base: 'flex flex-1 flex-col shadow-a bg-neutral-000 border border-neutral-300 rounded-lg overflow-hidden relative',
    '@allowYOverflow': {
      true: 'overflow-y-scroll',
    },
  },
  logo: '-ml-3',
};
