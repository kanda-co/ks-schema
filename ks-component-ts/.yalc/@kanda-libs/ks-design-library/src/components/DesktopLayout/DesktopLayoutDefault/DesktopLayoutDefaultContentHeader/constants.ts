import { WRAPPER_CLASS_NAME, CONTAINER_CLASS_NAME } from '../constants';

export const CLASS_NAMES = {
  container: CONTAINER_CLASS_NAME,
  wrapper: WRAPPER_CLASS_NAME,
  content: 'flex w-full flex-col h-52 mx-10 xl:mx-0 relative justify-center',
  option: 'absolute left-0 transform -translate-x-full pr-3 -mt-1',
  shadow:
    'w-full h-80 absolute bg-neutral-50 transform skew-y-slide-up origin-0',
};
