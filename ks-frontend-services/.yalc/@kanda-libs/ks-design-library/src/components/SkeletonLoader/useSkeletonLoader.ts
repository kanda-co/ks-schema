import { useContext } from 'react';
import { DEFAULT_WRAPPER_CLASS_NAME } from '~/components/SkeletonLoader/constants';
import { Context } from '~/components/LoadingProvider/Context';

export interface Hook {
  loading: boolean;
  classNames: {
    wrapper: string;
  };
}

export default function useSkeletonLoader(
  wrapperClassName = '',
  isLoading = false,
): Hook {
  const wrapper = wrapperClassName || DEFAULT_WRAPPER_CLASS_NAME;

  const contextLoading = useContext(Context);
  /**
   * Allow to force isLoading
   * To be able to set is loading false even if the parent context is loading
   */
  const loading = typeof isLoading !== 'undefined' ? isLoading : contextLoading;

  return {
    loading,
    classNames: {
      wrapper,
    },
  };
}
