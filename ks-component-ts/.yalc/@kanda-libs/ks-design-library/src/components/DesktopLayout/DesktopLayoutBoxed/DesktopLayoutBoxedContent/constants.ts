export const CLASS_NAMES = {
  wrapper: {
    base: 'flex flex-col',
    '@top': {
      false: 'my-auto',
    },
    '@flex': {
      true: 'flex-1 items-center',
    },
  },
  container: {
    base: 'flex flex-row w-full justify-center px-16 lg:px-38 pt-18',
    '@flex': {
      true: 'flex-1',
    },
  },
  content: {
    base: 'flex flex-col',
    '@left': {
      false: 'items-center text-center',
    },
    '@flex': {
      true: 'flex-1',
    },
  },
};
