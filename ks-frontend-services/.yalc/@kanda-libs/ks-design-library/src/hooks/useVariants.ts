import { useContext } from 'react';
import type { Variants } from '~/types';
import { Context } from '~/components/LoadingProvider/Context';
import useIsDesktop from '~/hooks/useIsDesktop';

export interface Hook extends Variants {
  media: 'desktop' | 'mobile';
  loading: boolean;
}

export default function useVariants(variants: Variants): Hook {
  const isDesktop = useIsDesktop();
  const loading = useContext(Context);

  const media = isDesktop ? 'desktop' : 'mobile';

  return {
    media,
    loading,
    ...variants,
  };
}
