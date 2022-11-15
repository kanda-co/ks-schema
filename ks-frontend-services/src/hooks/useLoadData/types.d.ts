import type { PublicConfiguration } from 'swr/dist/types';

export interface LoadDataHookOptions
  extends Pick<PublicConfiguration, 'revalidateOnMount' | 'refreshInterval'> {
  shouldRetryOnError?: boolean;
  useParamsAsKey?: boolean;
}
